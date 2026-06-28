export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const formData = request.body || {};
  const requiredFields = ["fullName", "email", "region", "country", "licenseType"];
  const missingField = requiredFields.find((field) => !String(formData[field] || "").trim());

  if (missingField) {
    return response.status(400).json({ error: `${missingField} is required` });
  }

  const subject = `New JACKLESS License Request - ${[formData.country, formData.region]
    .filter(Boolean)
    .join(" / ")}`;

  // Connect an email provider here.
  // From: licensing@jackless.com or another verified JACKLESS domain sender.
  // To: the private brand owner email stored as an environment variable.
  // Reply-To: formData.email.
  // Do not send a visitor confirmation email.
  await Promise.resolve({
    subject,
    replyTo: formData.email,
    text: [
      "New license request received from the JACKLESS website.",
      "",
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || ""}`,
      `Company: ${formData.company || ""}`,
      `Region: ${formData.region}`,
      `Country: ${formData.country}`,
      `License Type: ${formData.licenseType}`,
      `Message: ${formData.message || ""}`,
    ].join("\n"),
  });

  return response.status(501).json({
    error: "Email provider is not connected yet.",
  });
}
