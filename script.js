const LANGUAGE_STORAGE_KEY = "jackless-language";
const SUPPORTED_LANGUAGES = ["de", "en"];

const translations = {
  de: {
    "meta.home.description":
      "Lizenzieren Sie das Say Jackless Kampagnenlayout für klimabewusste Menswear.",
    "meta.license.description":
      "Fordern Sie eine JACKLESS Lizenz für ein Land, eine Region, Distribution, Retail, Franchise oder Markenpartnerschaft an.",
    "meta.imprint.description": "Impressum der Website jackless.com.",
    "meta.privacy.description": "Datenschutzerklärung der Website jackless.com.",
    "meta.terms.description": "Nutzungsbedingungen der Website jackless.com.",
    "title.home": "License Say Jackless",
    "title.license": "JACKLESS Interaktive Lizenzanfrage",
    "title.imprint": "Impressum | JACKLESS",
    "title.privacy": "Datenschutzerklärung | JACKLESS",
    "title.terms": "Nutzungsbedingungen | JACKLESS",
    "brand.aria": "License Say Jackless Startseite",
    "nav.primary": "Hauptnavigation",
    "nav.campaign": "Kampagne",
    "nav.license": "Lizenzanfrage",
    "nav.contact": "Kontakt",
    "nav.legal": "Rechtliche Seiten",
    "nav.imprint": "Impressum",
    "nav.privacy": "Datenschutz",
    "nav.terms": "Nutzungsbedingungen",
    "language.label": "Sprache wechseln",
    "language.de": "DE",
    "language.en": "EN",
    "home.board.aria": "License Say Jackless Kampagnenboard",
    "home.mosaic.aria": "Marke und Lookbook",
    "home.map.aria": "JACKLESS Lizenzanfrageformular öffnen",
    "home.map.alt": "License Say Jackless Weltkartenmotiv",
    "home.map.message":
      "Klicken Sie auf die Karte, um eine JACKLESS Lizenz für Ihr Land oder Ihre Region anzufragen.",
    "home.lookbook.alt": "Vier Say Jackless Lookbook-Portraits in einem Raster",
    "home.runway.alt": "Zwei Models auf dem Say Jackless Laufsteg",
    "home.climate.aria": "Nachhaltigkeits- und Klimavorteile",
    "home.sustainability.alt":
      "Rückansicht eines Say Jackless Shirts mit Erdmotiv",
    "home.sustainability.copy.kicker": "Nachhaltigkeit",
    "home.sustainability.copy.stat": "25% weniger Stoff!",
    "home.climate.alt":
      "Rückansicht eines Say Jackless Shirts mit leuchtendem Sonnenmotiv",
    "home.climate.copy.kicker": "Klimaoptimiert",
    "home.climate.copy.stat": "gegen Hitze",
    "home.slogan": "Lizenz für a better clima.",
    "footer.brand": "License Say Jackless",
    "footer.campaign": "Klimabewusste Menswear-Kampagne.",
    "footer.rights": "© 2026 Alle Rechte vorbehalten.",
    "license.kicker": "JACKLESS Lizenzierung",
    "license.heading": "JACKLESS Interaktive Lizenzanfrage",
    "license.intro":
      "Wählen Sie Ihre gewünschte Region, Ihr Land und die Lizenzart. Unser Team prüft Ihre Anfrage und meldet sich direkt bei Ihnen.",
    "license.form.aria": "Lizenzanfrageformular",
    "license.form.label": "Private Markenanfrage",
    "license.form.heading": "Sagen Sie uns, wohin JACKLESS als Nächstes gehen soll.",
    "license.form.copy":
      "Anfragen werden nur an das JACKLESS Team gesendet. Besucher erhalten keine automatische Bestätigungs-E-Mail.",
    "form.fullName": "Vollständiger Name",
    "form.email": "Kontakt-E-Mail",
    "form.phone": "Telefonnummer",
    "form.company": "Unternehmen",
    "form.region": "Region",
    "form.country": "Land",
    "form.licenseType": "Lizenzart",
    "form.message": "Nachricht",
    "form.email.placeholder": "sie@beispiel.de",
    "form.region.placeholder": "Region auswählen",
    "form.country.placeholder": "Land auswählen",
    "form.country.none": "Kein bestimmtes Land",
    "form.license.placeholder": "Lizenzart auswählen",
    "form.region.europe": "Europa",
    "form.region.northAmerica": "Nordamerika",
    "form.region.southAmerica": "Südamerika",
    "form.region.asia": "Asien",
    "form.region.africa": "Afrika",
    "form.region.middleEast": "Naher Osten",
    "form.region.oceania": "Ozeanien",
    "form.region.worldwide": "Weltweit / mehrere Regionen",
    "form.license.country": "Landeslizenz",
    "form.license.regional": "Regionale Lizenz",
    "form.license.distribution": "Distributionslizenz",
    "form.license.retail": "Retail-Partnerschaft",
    "form.license.franchise": "Franchise / Markenpartnerschaft",
    "form.license.other": "Andere",
    "form.submit": "Lizenzanfrage senden",
    "form.sending": "Anfrage wird gesendet",
    "form.emailNote": "Oder schreiben Sie uns direkt an",
    "form.required.full-name": "Bitte geben Sie Ihren vollständigen Namen ein.",
    "form.required.email": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    "form.required.country": "Bitte wählen Sie ein Land oder eine Region aus.",
    "form.required.license-type": "Bitte wählen Sie eine Lizenzart aus.",
    "form.success":
      "Vielen Dank. Ihre Lizenzanfrage ist eingegangen. Das JACKLESS Team wird sich direkt bei Ihnen melden.",
    "form.error.prefix": "Etwas ist schiefgelaufen.",
    "form.error.fallback":
      "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
    "form.endpointError": "Der Endpunkt für Lizenzanfragen ist fehlgeschlagen.",
    "form.reference": "Referenz:",
    "form.subject": "Neue JACKLESS Lizenzanfrage",
    "form.subject.location": "Neuer Standort",
    "legal.imprint.kicker": "Rechtliches",
    "legal.imprint.heading": "Impressum",
    "legal.imprint.intro":
      "Anbieterkennzeichnung und Pflichtangaben für die Website www.jackless.com.",
    "legal.privacy.kicker": "Datenschutz",
    "legal.privacy.heading": "Datenschutzerklärung",
    "legal.privacy.intro":
      "Informationen zur Verarbeitung personenbezogener Daten beim Besuch von www.jackless.com.",
    "legal.terms.kicker": "Website-Bedingungen",
    "legal.terms.heading": "Nutzungsbedingungen",
    "legal.terms.intro": "Bedingungen für die Nutzung der Website www.jackless.com.",
  },
  en: {
    "meta.home.description":
      "License the Say Jackless campaign layout for climate-minded menswear.",
    "meta.license.description":
      "Request a JACKLESS license for a country, region, distribution, retail, franchise, or brand partnership.",
    "meta.imprint.description": "Legal notice for the website jackless.com.",
    "meta.privacy.description": "Privacy policy for the website jackless.com.",
    "meta.terms.description": "Terms of use for the website jackless.com.",
    "title.home": "License Say Jackless",
    "title.license": "JACKLESS Interactive License Request",
    "title.imprint": "Legal Notice | JACKLESS",
    "title.privacy": "Privacy Policy | JACKLESS",
    "title.terms": "Terms of Use | JACKLESS",
    "brand.aria": "License Say Jackless home",
    "nav.primary": "Primary navigation",
    "nav.campaign": "Campaign",
    "nav.license": "License Request",
    "nav.contact": "Contact",
    "nav.legal": "Legal pages",
    "nav.imprint": "Legal Notice",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Terms & Conditions",
    "language.label": "Switch language",
    "language.de": "DE",
    "language.en": "EN",
    "home.board.aria": "License Say Jackless campaign board",
    "home.mosaic.aria": "Brand and lookbook",
    "home.map.aria": "Open JACKLESS license request form",
    "home.map.alt": "License Say Jackless world map artwork",
    "home.map.message":
      "Click the map to request a JACKLESS license for your country or region.",
    "home.lookbook.alt": "Four Say Jackless lookbook portraits in a grid",
    "home.runway.alt": "Two models walking the Say Jackless runway",
    "home.climate.aria": "Sustainability and climate benefits",
    "home.sustainability.alt":
      "Back view of Say Jackless shirt with earth artwork",
    "home.sustainability.copy.kicker": "Sustainability",
    "home.sustainability.copy.stat": "25% less fabric!",
    "home.climate.alt":
      "Back view of Say Jackless shirt with glowing sun artwork",
    "home.climate.copy.kicker": "Climate-optimized",
    "home.climate.copy.stat": "against heat",
    "home.slogan": "License for a better clima.",
    "footer.brand": "License Say Jackless",
    "footer.campaign": "Climate-minded menswear campaign.",
    "footer.rights": "© 2026 All Rights Reserved.",
    "license.kicker": "JACKLESS licensing",
    "license.heading": "JACKLESS Interactive License Request",
    "license.intro":
      "Select your preferred region, country, and license type. Our team will review your request and contact you directly.",
    "license.form.aria": "License request form",
    "license.form.label": "Private brand inquiry",
    "license.form.heading": "Tell us where JACKLESS should move next.",
    "license.form.copy":
      "Requests are sent to the JACKLESS team only. No automatic confirmation email will be sent to the visitor.",
    "form.fullName": "Full Name",
    "form.email": "Contact Email",
    "form.phone": "Phone Number",
    "form.company": "Company Name",
    "form.region": "Region",
    "form.country": "Country",
    "form.licenseType": "License Type",
    "form.message": "Message",
    "form.email.placeholder": "you@example.com",
    "form.region.placeholder": "Select a region",
    "form.country.placeholder": "Select a country",
    "form.country.none": "No specific country",
    "form.license.placeholder": "Select a license type",
    "form.region.europe": "Europe",
    "form.region.northAmerica": "North America",
    "form.region.southAmerica": "South America",
    "form.region.asia": "Asia",
    "form.region.africa": "Africa",
    "form.region.middleEast": "Middle East",
    "form.region.oceania": "Oceania",
    "form.region.worldwide": "Worldwide / Multiple Regions",
    "form.license.country": "Country License",
    "form.license.regional": "Regional License",
    "form.license.distribution": "Distribution License",
    "form.license.retail": "Retail Partnership",
    "form.license.franchise": "Franchise / Brand Partnership",
    "form.license.other": "Other",
    "form.submit": "Submit License Request",
    "form.sending": "Sending Request",
    "form.emailNote": "Or email us directly at",
    "form.required.full-name": "Please enter your full name.",
    "form.required.email": "Please enter a valid email address.",
    "form.required.country": "Please choose a country or select a region.",
    "form.required.license-type": "Please choose a license type.",
    "form.success":
      "Thank you. Your license request has been received. The JACKLESS team will contact you directly.",
    "form.error.prefix": "Something went wrong.",
    "form.error.fallback": "Please try again or contact us directly.",
    "form.endpointError": "License request endpoint failed.",
    "form.reference": "Reference:",
    "form.subject": "New JACKLESS License Request",
    "form.subject.location": "New Location",
    "legal.imprint.kicker": "Legal",
    "legal.imprint.heading": "Legal Notice",
    "legal.imprint.intro":
      "Provider identification and mandatory information for the website www.jackless.com.",
    "legal.privacy.kicker": "Privacy",
    "legal.privacy.heading": "Privacy Policy",
    "legal.privacy.intro":
      "Information about the processing of personal data when visiting www.jackless.com.",
    "legal.terms.kicker": "Website Terms",
    "legal.terms.heading": "Terms of Use",
    "legal.terms.intro": "Terms for using the website www.jackless.com.",
  },
};

let activeLanguage = getInitialLanguage();

const licenseForm = document.querySelector("#license-request-form");

if (licenseForm) {
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
    .filter((country, index, countries) => countries.indexOf(country) === index)
    .sort((a, b) => a.localeCompare(b));
  const params = new URLSearchParams(window.location.search);
  const regionField = licenseForm.querySelector("#region");
  const countryField = licenseForm.querySelector("#country");
  const countryRequiredMark = licenseForm.querySelector("#country-required-mark");
  const subjectField = licenseForm.querySelector("#email-subject");
  const statusMessage = licenseForm.querySelector("#form-status");
  const submitButton = licenseForm.querySelector(".license-submit");
  populateCountries();
  prefillFromQuery();
  syncCountryRequirement();
  updateEmailSubject();

  licenseForm.addEventListener("input", (event) => {
    if (event.target.matches("input, select, textarea")) {
      clearFieldError(event.target);
      updateEmailSubject();
    }
  });

  regionField.addEventListener("change", () => {
    populateCountries(countryField.value);
    syncCountryRequirement();
    clearFieldError(countryField);
    updateEmailSubject();
  });

  countryField.addEventListener("change", updateEmailSubject);
  document.addEventListener("jackless:languagechange", () => {
    populateCountries(countryField.value);
    syncCountryRequirement();
    updateEmailSubject();
    submitButton.textContent = t("form.submit");
  });

  licenseForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusMessage.textContent = "";

    if (!validateForm()) {
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = t("form.sending");

    try {
      const response = await fetch(licenseForm.dataset.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(new FormData(licenseForm)),
      });

      const result = await readJsonResponse(response);

      if (!response.ok) {
        const debugReference = result?.debugId
          ? ` ${t("form.reference")} ${result.debugId}`
          : "";
        throw new Error(
          `${result?.error || t("form.endpointError")}${debugReference}`,
        );
      }

      licenseForm.reset();
      populateCountries();
      syncCountryRequirement();
      updateEmailSubject();
      statusMessage.className = "form-status form-status-success";
      statusMessage.textContent = t("form.success");
    } catch (error) {
      statusMessage.className = "form-status form-status-error";
      statusMessage.textContent =
        `${t("form.error.prefix")} ${error.message || t("form.error.fallback")}`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = t("form.submit");
    }
  });

  function prefillFromQuery() {
    const region = params.get("region");
    const country = params.get("country");

    if (region) {
      const matchingOption = [...regionField.options].find(
        (option) => option.value.toLowerCase() === region.toLowerCase(),
      );

      if (matchingOption) {
        regionField.value = matchingOption.value;
        populateCountries();
      }
    }

    if (country) {
      const matchingOption = [...countryField.options].find(
        (option) => option.value.toLowerCase() === country.toLowerCase(),
      );

      if (matchingOption) {
        countryField.value = matchingOption.value;
      }
    }
  }

  function validateForm() {
    const requiredFields = [
      licenseForm.querySelector("#full-name"),
      licenseForm.querySelector("#email"),
      licenseForm.querySelector("#license-type"),
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      clearFieldError(field);

      if (!field.value.trim() || (field.type === "email" && !field.checkValidity())) {
        setFieldError(field, t(`form.required.${field.id}`));
        isValid = false;
      }
    });

    clearFieldError(countryField);

    if (!regionField.value.trim() && !countryField.value.trim()) {
      setFieldError(countryField, t("form.required.country"));
      isValid = false;
    }

    if (!isValid) {
      licenseForm.querySelector('[aria-invalid="true"]')?.focus();
    }

    return isValid;
  }

  function populateCountries(selectedCountry = "") {
    const region = regionField.value.trim();
    const countries =
      region && countriesByRegion[region] ? countriesByRegion[region] : allCountries;
    const placeholder = region
      ? t("form.country.none")
      : t("form.country.placeholder");

    countryField.replaceChildren(new Option(placeholder, ""));
    countries.forEach((country) => {
      countryField.add(new Option(country, country));
    });

    if ([...countryField.options].some((option) => option.value === selectedCountry)) {
      countryField.value = selectedCountry;
    }
  }

  function syncCountryRequirement() {
    const countryIsRequired = !regionField.value.trim();
    countryField.required = countryIsRequired;
    countryRequiredMark.hidden = !countryIsRequired;
  }

  function setFieldError(field, message) {
    const error = licenseForm.querySelector(`#${field.id}-error`);
    field.setAttribute("aria-invalid", "true");
    field.setAttribute("aria-describedby", error.id);
    error.textContent = message;
  }

  function clearFieldError(field) {
    const error = licenseForm.querySelector(`#${field.id}-error`);

    if (!error) {
      return;
    }

    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
    error.textContent = "";
  }

  function updateEmailSubject() {
    const country = countryField.value.trim();
    const region = regionField.value.trim();
    const location = [country, region].filter(Boolean).join(" / ") || t("form.subject.location");
    subjectField.value = `${t("form.subject")} - ${location}`;
  }

  async function readJsonResponse(response) {
    try {
      return await response.json();
    } catch (error) {
      return {};
    }
  }
}

initLanguageControls();
applyLanguage(activeLanguage);
document.dispatchEvent(new CustomEvent("jackless:languagechange"));

function initLanguageControls() {
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.languageOption);
      document.dispatchEvent(new CustomEvent("jackless:languagechange"));
    });
  });
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (SUPPORTED_LANGUAGES.includes(requestedLanguage)) {
    return requestedLanguage;
  }

  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }

  return "de";
}

function applyLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return;
  }

  activeLanguage = language;
  document.documentElement.lang = language;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.hidden = element.dataset.lang !== language;
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const titleKey = document.body.dataset.i18nTitle;
  const descriptionKey = document.body.dataset.i18nDescription;
  const description = document.querySelector('meta[name="description"]');

  if (titleKey) {
    document.title = t(titleKey);
  }

  if (descriptionKey && description) {
    description.setAttribute("content", t(descriptionKey));
  }

}

function t(key) {
  return translations[activeLanguage]?.[key] || translations.de[key] || key;
}
