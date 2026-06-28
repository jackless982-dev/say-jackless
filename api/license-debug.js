const { readFile } = require("node:fs/promises");

const DEBUG_LOG_PATH =
  process.env.LICENSE_DEBUG_LOG_PATH || "/tmp/jackless-license-request-debug.log";

module.exports = async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.LICENSE_DEBUG_TOKEN) {
    return response.status(404).json({ error: "Debug log is not enabled." });
  }

  const providedToken =
    request.headers["x-license-debug-token"] || getQueryToken(request.url);

  if (providedToken !== process.env.LICENSE_DEBUG_TOKEN) {
    return response.status(401).json({ error: "Unauthorized." });
  }

  try {
    const logContents = await readFile(DEBUG_LOG_PATH, "utf8");
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    return response.status(200).send(logContents || "No debug entries yet.\n");
  } catch (error) {
    if (error.code === "ENOENT") {
      return response.status(404).json({ error: "No debug entries yet." });
    }

    return response.status(500).json({
      error: "Could not read debug log.",
      detail: error.message,
    });
  }
};

function getQueryToken(url = "") {
  try {
    const parsedUrl = new URL(url, "https://jackless.com");
    return parsedUrl.searchParams.get("token") || "";
  } catch (error) {
    return "";
  }
}
