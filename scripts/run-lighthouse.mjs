import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";

const ROUTES = [
  "/",
  "/blog",
  "/developers",
  "/lightpaper",
  "/faq",
  "/brand",
  "/about",
  "/early-access",
  "/privacy",
  "/terms",
  "/borrow",
  "/invest",
  "/earn",
  "/platform",
];

const PORT = Number(process.env.LIGHTHOUSE_PORT ?? 3001);
const BASE_URL = process.env.LIGHTHOUSE_BASE_URL ?? `http://127.0.0.1:${PORT}`;
const OUTPUT_DIR = path.join(process.cwd(), ".lighthouse");
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

function routeSlug(route) {
  return route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "--");
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
  await mkdir(OUTPUT_DIR, { recursive: true });
  await runCommand("npm", ["run", "build"]);

  const serverProcess = spawn("npm", ["run", "start", "--", "--port", String(PORT)], {
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

      for (const route of ROUTES) {
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

        summary.push({
          route,
          performance: Math.round((runnerResult.lhr.categories.performance?.score ?? 0) * 100),
          accessibility: Math.round((runnerResult.lhr.categories.accessibility?.score ?? 0) * 100),
          bestPractices: Math.round((runnerResult.lhr.categories["best-practices"]?.score ?? 0) * 100),
          seo: Math.round((runnerResult.lhr.categories.seo?.score ?? 0) * 100),
        });
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
