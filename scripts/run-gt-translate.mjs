import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

for (const envFile of [".env.local", ".env"]) {
  if (existsSync(envFile) && typeof process.loadEnvFile === "function") {
    process.loadEnvFile(envFile);
  }
}

const projectId = process.env.GT_PROJECT_ID;
const apiKey = process.env.GT_API_KEY || process.env.GT_DEV_API_KEY;
const isDevelopmentKey = typeof apiKey === "string" && apiKey.startsWith("gtx-dev-");

function skip(message) {
  console.warn(`Skipping General Translation CLI: ${message}`);
  process.exit(0);
}

if (!projectId) {
  skip("missing GT_PROJECT_ID.");
}

if (!apiKey) {
  skip("missing GT_API_KEY.");
}

if (isDevelopmentKey) {
  skip("development keys cannot be used by gtx-cli during build. Provide a production GT_API_KEY to pretranslate content.");
}

const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["gtx-cli", "translate"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      GT_PROJECT_ID: projectId,
      GT_API_KEY: apiKey,
    },
  },
);

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 0);
