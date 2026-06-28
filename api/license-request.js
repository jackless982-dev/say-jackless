const { appendFile } = require("node:fs/promises");

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEBUG_LOG_PATH =
  process.env.LICENSE_DEBUG_LOG_PATH || "/tmp/jackless-license-request-debug.log";
const DEFAULT_FROM_EMAIL = "info@jackless.com";
const DEFAULT_TO_EMAIL = "info@jackless.com";

const countriesByRegion = {
  Europe: [
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ],
  "North America": [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Canada",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "United States",
  ],
  "South America": [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
  ],
  Asia: [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Georgia",
    "India",
    "Indonesia",
    "Japan",
    "Kazakhstan",
    "Kyrgyzstan",
    "Laos",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Pakistan",
    "Philippines",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkmenistan",
    "Uzbekistan",
    "Vietnam",
  ],
  Africa: [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Cote d'Ivoire",
    "Democratic Republic of the Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ],
  "Middle East": [
    "Bahrain",
    "Iran",
    "Iraq",
    "Israel",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "Oman",
    "Palestine",
    "Qatar",
    "Saudi Arabia",
    "Syria",
    "Turkiye",
    "United Arab Emirates",
    "Yemen",
  ],
  Oceania: [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ],
};

const allCountries = Object.values(countriesByRegion)
  .flat()
  .filter((country, index, countries) => countries.indexOf(country) === index);

async function handler(request, response) {
  const debugId = createDebugId();

  try {
    if (request.method !== "POST") {
      response.setHeader("Allow", "POST");
      await writeDebugLog("method_not_allowed", {
        debugId,
        method: request.method,
      });
      return response.status(405).json({ error: "Method not allowed", debugId });
    }

    const formData = parseBody(request);

    if (String(formData.website || "").trim()) {
      await writeDebugLog("honeypot_submission_blocked", {
        debugId,
        form: summarizeFormData(formData),
      });
      return response.status(200).json({ ok: true });
    }

    const validationError = validateFormData(formData);

    if (validationError) {
      await writeDebugLog("validation_failed", {
        debugId,
        error: validationError,
        form: summarizeFormData(formData),
      });
      return response.status(400).json({ error: validationError, debugId });
    }

    if (!process.env.RESEND_API_KEY) {
      await writeDebugLog("email_service_not_configured", {
        debugId,
        error: "Missing RESEND_API_KEY environment variable.",
      });
      return response.status(500).json({
        error: "Email service is not configured.",
        debugId,
      });
    }

    const from = process.env.LICENSE_EMAIL_FROM || DEFAULT_FROM_EMAIL;
    const to = process.env.LICENSE_EMAIL_TO || DEFAULT_TO_EMAIL;
    const location = [formData.country, formData.region].filter(Boolean).join(" / ");
    const subject = `New JACKLESS License Request - ${location}`;
    const text = buildTextEmail(formData);
    const html = buildHtmlEmail(formData);

    let resendResponse;

    try {
      resendResponse = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: formData.email,
          subject,
          text,
          html,
        }),
      });
    } catch (error) {
      await writeDebugLog("resend_request_failed", {
        debugId,
        error: serializeError(error),
        email: { from, to, subject },
        form: summarizeFormData(formData),
      });
      return response.status(502).json({
        error: "Email service could not be reached.",
        debugId,
      });
    }

    if (!resendResponse.ok) {
      await writeDebugLog("resend_rejected_email", {
        debugId,
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        body: await safeReadResponseText(resendResponse),
        email: { from, to, subject },
        form: summarizeFormData(formData),
      });
      return response.status(502).json({
        error: "Email service rejected the request.",
        debugId,
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    await writeDebugLog("unexpected_error", {
      debugId,
      error: serializeError(error),
    });
    return response.status(500).json({
      error: "Unexpected server error.",
      debugId,
    });
  }
}

module.exports = handler;

function parseBody(request) {
  if (!request.body) {
    return {};
  }

  if (typeof request.body === "object") {
    return request.body;
  }

  const contentType = request.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(request.body);
    } catch (error) {
      return {};
    }
  }

  return Object.fromEntries(new URLSearchParams(request.body));
}

function validateFormData(formData) {
  const fullName = clean(formData.fullName);
  const email = clean(formData.email);
  const region = clean(formData.region);
  const country = clean(formData.country);
  const licenseType = clean(formData.licenseType);

  if (!fullName) {
    return "Full name is required.";
  }

  if (!isValidEmail(email)) {
    return "A valid email address is required.";
  }

  if (!region && !country) {
    return "Choose a country or select a region.";
  }

  if (region && region !== "Worldwide / Multiple Regions" && !countriesByRegion[region]) {
    return "Selected region is not supported.";
  }

  if (country && !allCountries.includes(country)) {
    return "Selected country is not supported.";
  }

  if (region && countriesByRegion[region] && country && !countriesByRegion[region].includes(country)) {
    return "Selected country does not belong to the selected region.";
  }

  if (!licenseType) {
    return "License type is required.";
  }

  return "";
}

function buildTextEmail(formData) {
  return [
    "New license request received from the JACKLESS website.",
    "",
    `Full Name: ${clean(formData.fullName)}`,
    `Contact Email: ${clean(formData.email)}`,
    `Phone: ${clean(formData.phone) || "Not provided"}`,
    `Company: ${clean(formData.company) || "Not provided"}`,
    `Region: ${clean(formData.region) || "Not specified"}`,
    `Country: ${clean(formData.country) || "Not specified"}`,
    `License Type: ${clean(formData.licenseType)}`,
    "",
    "Message:",
    clean(formData.message) || "Not provided",
  ].join("\n");
}

function buildHtmlEmail(formData) {
  const rows = [
    ["Full Name", formData.fullName],
    ["Contact Email", formData.email],
    ["Phone", formData.phone || "Not provided"],
    ["Company", formData.company || "Not provided"],
    ["Region", formData.region || "Not specified"],
    ["Country", formData.country || "Not specified"],
    ["License Type", formData.licenseType],
    ["Message", formData.message || "Not provided"],
  ];

  return `
    <h1>New JACKLESS license request</h1>
    <table cellpadding="8" cellspacing="0" border="0">
      ${rows
        .map(
          ([label, value]) => `
            <tr>
              <th align="left" valign="top">${escapeHtml(label)}</th>
              <td>${escapeHtml(clean(value)).replace(/\n/g, "<br>")}</td>
            </tr>
          `,
        )
        .join("")}
    </table>
  `;
}

function clean(value) {
  return String(value || "").trim().slice(0, 3000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createDebugId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function safeReadResponseText(response) {
  try {
    return (await response.text()).slice(0, 3000);
  } catch (error) {
    return `Unable to read response body: ${error.message}`;
  }
}

async function writeDebugLog(event, details) {
  const logEntry = {
    time: new Date().toISOString(),
    event,
    ...details,
  };

  try {
    await appendFile(DEBUG_LOG_PATH, `${JSON.stringify(logEntry)}\n`, "utf8");
  } catch (error) {
    console.error("Unable to write JACKLESS license debug log", error);
  }
}

function summarizeFormData(formData) {
  return {
    hasFullName: Boolean(clean(formData.fullName)),
    contactEmail: maskEmail(formData.email),
    hasPhone: Boolean(clean(formData.phone)),
    hasCompany: Boolean(clean(formData.company)),
    region: clean(formData.region) || "Not specified",
    country: clean(formData.country) || "Not specified",
    licenseType: clean(formData.licenseType) || "Not specified",
    hasMessage: Boolean(clean(formData.message)),
  };
}

function maskEmail(email) {
  const cleanedEmail = clean(email);
  const [localPart, domain] = cleanedEmail.split("@");

  if (!localPart || !domain) {
    return cleanedEmail ? "Invalid email provided" : "Not provided";
  }

  return `${localPart.slice(0, 2)}***@${domain}`;
}

function serializeError(error) {
  return {
    name: error?.name || "Error",
    message: error?.message || String(error),
    stack: error?.stack || "",
  };
}
