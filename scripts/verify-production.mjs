import { spawn, spawnSync } from "node:child_process";

const host = "127.0.0.1";
const port = Number(process.env.PORT ?? 3000);
const baseUrl = `http://${host}:${port}`;
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

const routes = [
  { path: "/", expectedText: "Nikhil Pathak" },
  { path: "/projects", expectedText: "Engineering work with real product thinking." },
  { path: "/projects/vaksetu", expectedText: "VakSetu" },
  { path: "/robots.txt", expectedText: "Sitemap:" },
  { path: "/sitemap.xml", expectedText: "/projects/vaksetu" },
];

const assetRoutes = [
  { path: "/manifest.webmanifest", expectedContentType: "application/manifest+json" },
  { path: "/opengraph-image", expectedContentType: "image/png" },
  { path: "/favicon/favicon.svg", expectedContentType: "image/svg+xml" },
];

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        return;
      }
    } catch {
      await wait(1000);
    }
  }

  throw new Error(`Production server did not respond at ${baseUrl}`);
}

async function verifyRoute({ path, expectedText }) {
  const response = await fetch(`${baseUrl}${path}`);
  const body = await response.text();

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  if (!body.includes(expectedText)) {
    throw new Error(`${path} did not contain expected text: ${expectedText}`);
  }
}

async function verifyAssetRoute({ path, expectedContentType }) {
  const response = await fetch(`${baseUrl}${path}`);
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  if (!contentType.includes(expectedContentType)) {
    throw new Error(`${path} returned unexpected content type: ${contentType}`);
  }
}

const startCommand = [npmCommand, "run", "start", "--", "--hostname", host, "--port", String(port)];
const server =
  process.platform === "win32"
    ? spawn("cmd.exe", ["/d", "/s", "/c", startCommand.join(" ")], {
        stdio: "ignore",
        env: {
          ...process.env,
          PORT: String(port),
        },
      })
    : spawn(startCommand[0], startCommand.slice(1), {
        stdio: "ignore",
        env: {
          ...process.env,
          PORT: String(port),
        },
      });

try {
  await waitForServer();

  for (const route of routes) {
    await verifyRoute(route);
  }

  for (const route of assetRoutes) {
    await verifyAssetRoute(route);
  }

  console.log(`Verified production routes at ${baseUrl}`);
} finally {
  if (server.pid && process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/t", "/f"], { stdio: "ignore" });
  } else {
    server.kill();
  }
}
