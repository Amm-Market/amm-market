import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";

const PORT = Number(process.env.LIGHTHOUSE_PORT ?? 3001);
const HOSTNAME = process.env.LIGHTHOUSE_HOSTNAME ?? "127.0.0.1";
const BASE_URL = process.env.LIGHTHOUSE_BASE_URL ?? `http://${HOSTNAME}:${PORT}`;
const OUTPUT_DIR = path.join(process.cwd(), ".lighthouse");
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];
const APP_PATH_ROUTES_MANIFEST = path.join(process.cwd(), ".next", "app-path-routes-manifest.json");
const ROUTES_MANIFEST = path.join(process.cwd(), ".next", "routes-manifest.json");
const EXCLUDED_ROUTES = new Set(["/_global-error", "/_not-found", "/favicon.ico", "/robots.txt", "/sitemap.xml", "/og"]);

function routeSlug(route) {
  return route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "--");
}

function isAuditableRoute(route, redirectSources) {
  if (typeof route !== "string" || !route.startsWith("/")) {
    return false;
  }

  if (route.startsWith("/_") || EXCLUDED_ROUTES.has(route)) {
    return false;
  }

  if (route.endsWith(".txt") || route.endsWith(".xml") || route.endsWith(".ico")) {
    return false;
  }

  return !redirectSources.has(route);
}

async function getRoutesToAudit() {
  const [appPathRoutesManifestRaw, routesManifestRaw] = await Promise.all([
    readFile(APP_PATH_ROUTES_MANIFEST, "utf8"),
    readFile(ROUTES_MANIFEST, "utf8"),
  ]);

  const appPathRoutesManifest = JSON.parse(appPathRoutesManifestRaw);
  const routesManifest = JSON.parse(routesManifestRaw);
  const redirectSources = new Set((routesManifest.redirects ?? []).map((redirect) => redirect.source));

  return [...new Set(Object.values(appPathRoutesManifest))]
    .filter((route) => isAuditableRoute(route, redirectSources))
    .sort((a, b) => a.localeCompare(b));
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit",
      ...options,
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

async function waitForServer(url, timeoutMs = 90_000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.ok || response.status === 307 || response.status === 308) {
        return;
      }
    } catch {
      // Server is still booting.
    }

    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function stopServer(serverProcess) {
  if (serverProcess.exitCode !== null) {
    return;
  }

  serverProcess.kill("SIGTERM");
  const closeResult = await Promise.race([
    once(serverProcess, "close"),
    new Promise((resolve) => setTimeout(resolve, 10_000)),
  ]);

  if (!closeResult && serverProcess.exitCode === null) {
    serverProcess.kill("SIGKILL");
    await once(serverProcess, "close");
  }
}

async function main() {
  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });
  await runCommand("npm", ["run", "build"]);
  const routes = await getRoutesToAudit();

  const serverProcess = spawn("npm", ["run", "start", "--", "--port", String(PORT), "--hostname", HOSTNAME], {
    cwd: process.cwd(),
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  });

  serverProcess.stdout.on("data", (chunk) => process.stdout.write(chunk));
  serverProcess.stderr.on("data", (chunk) => process.stderr.write(chunk));

  try {
    await waitForServer(BASE_URL);

    const chrome = await launch({
      chromeFlags: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
    });

    try {
      const summary = [];
      console.log(`Auditing ${routes.length} routes...`);

      for (const [index, route] of routes.entries()) {
        console.log(`[${index + 1}/${routes.length}] Auditing ${route}`);
        const url = `${BASE_URL}${route}`;
        const outputBase = path.join(OUTPUT_DIR, routeSlug(route));
        const runnerResult = await lighthouse(
          url,
          {
            port: chrome.port,
            output: ["html", "json"],
            onlyCategories: CATEGORIES,
            logLevel: "error",
          },
        );

        if (!runnerResult) {
          throw new Error(`Lighthouse did not return a result for ${url}`);
        }

        const reports = Array.isArray(runnerResult.report) ? runnerResult.report : [runnerResult.report];

        for (const report of reports) {
          const extension = report.trimStart().startsWith("{") ? "json" : "html";
          await writeFile(`${outputBase}.report.${extension}`, report, "utf8");
        }

        const routeSummary = {
          route,
          performance: Math.round((runnerResult.lhr.categories.performance?.score ?? 0) * 100),
          accessibility: Math.round((runnerResult.lhr.categories.accessibility?.score ?? 0) * 100),
          bestPractices: Math.round((runnerResult.lhr.categories["best-practices"]?.score ?? 0) * 100),
          seo: Math.round((runnerResult.lhr.categories.seo?.score ?? 0) * 100),
        };

        summary.push(routeSummary);
        console.log(
          `[${index + 1}/${routes.length}] Done ${route} ` +
            `(P ${routeSummary.performance}, A ${routeSummary.accessibility}, BP ${routeSummary.bestPractices}, SEO ${routeSummary.seo})`,
        );
      }

      console.table(summary);
      console.log(`Saved Lighthouse reports to ${OUTPUT_DIR}`);
    } finally {
      await chrome.kill();
    }
  } finally {
    await stopServer(serverProcess);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
