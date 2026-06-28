const { createServer } = require("node:http");
const { readFile } = require("node:fs/promises");
const { existsSync } = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 3000);
const PUBLIC_FILES = new Set([
  "/",
  "/index.html",
  "/contact-license.html",
  "/styles.css",
  "/script.js",
  "/legal.css",
]);

loadDotEnv(path.join(ROOT, ".env"));
process.env.LICENSE_DEBUG_LOG_PATH = resolveLocalDebugPath();
process.env.LICENSE_DEBUG_TOKEN = process.env.LICENSE_DEBUG_TOKEN || "local-debug";

const licenseRequestHandler = require("./api/license-request.js");
const licenseDebugHandler = require("./api/license-debug.js");

const server = createServer(async (request, response) => {
  try {
    if (request.url.startsWith("/api/license-request")) {
      request.body = await readBody(request);
      return licenseRequestHandler(request, createResponseAdapter(response));
    }

    if (request.url.startsWith("/api/license-debug")) {
      return licenseDebugHandler(request, createResponseAdapter(response));
    }

    return serveStaticFile(request, response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`JACKLESS local site: http://localhost:${PORT}/contact-license.html`);
  console.log(`Local debug file: ${process.env.LICENSE_DEBUG_LOG_PATH}`);
});

async function serveStaticFile(request, response) {
  const pathname = decodeURIComponent(new URL(request.url, `http://localhost:${PORT}`).pathname);
  const filePath = getPublicFilePath(pathname);

  if (!filePath) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const contents = await readFile(filePath);
  response.writeHead(200, { "Content-Type": getContentType(filePath) });
  response.end(contents);
}

function getPublicFilePath(pathname) {
  if (PUBLIC_FILES.has(pathname)) {
    return pathname === "/" ? path.join(ROOT, "index.html") : path.join(ROOT, pathname);
  }

  if (
    pathname.startsWith("/images/") ||
    pathname.startsWith("/imprint/") ||
    pathname.startsWith("/privacy-policy/") ||
    pathname.startsWith("/terms-and-conditions/")
  ) {
    const filePath = path.normalize(path.join(ROOT, pathname));
    return filePath.startsWith(ROOT) && existsSync(filePath) ? filePath : "";
  }

  return "";
}

async function readBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString("utf8");
  const contentType = request.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    return body ? JSON.parse(body) : {};
  }

  return Object.fromEntries(new URLSearchParams(body));
}

function createResponseAdapter(response) {
  return {
    setHeader(name, value) {
      response.setHeader(name, value);
    },
    status(statusCode) {
      response.statusCode = statusCode;
      return this;
    },
    json(payload) {
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(JSON.stringify(payload));
    },
    send(payload) {
      response.end(payload);
    },
  };
}

function loadDotEnv(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const contents = require("node:fs").readFileSync(filePath, "utf8");
  contents.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#") || !trimmedLine.includes("=")) {
      return;
    }

    const [key, ...valueParts] = trimmedLine.split("=");
    const value = valueParts.join("=").replace(/^['"]|['"]$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
}

function resolveLocalDebugPath() {
  if (process.env.LOCAL_LICENSE_DEBUG_LOG_PATH) {
    return path.resolve(ROOT, process.env.LOCAL_LICENSE_DEBUG_LOG_PATH);
  }

  if (
    !process.env.LICENSE_DEBUG_LOG_PATH ||
    process.env.LICENSE_DEBUG_LOG_PATH.startsWith("/tmp/")
  ) {
    return path.join(ROOT, "error.txt");
  }

  return path.resolve(ROOT, process.env.LICENSE_DEBUG_LOG_PATH);
}

function getContentType(filePath) {
  const extension = path.extname(filePath);
  const contentTypes = {
    ".css": "text/css; charset=utf-8",
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript; charset=utf-8",
    ".png": "image/png",
    ".webp": "image/webp",
  };

  return contentTypes[extension] || "application/octet-stream";
}
