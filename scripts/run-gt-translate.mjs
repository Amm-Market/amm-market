import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

for (const envFile of [".env.local", ".env"]) {
  if (existsSync(envFile) && typeof process.loadEnvFile === "function") {
    process.loadEnvFile(envFile);
  }
}

const projectId = process.env.GT_PROJECT_ID;
const apiKey = process.env.GT_API_KEY || process.env.GT_DEV_API_KEY;

if (!projectId) {
  console.error("General Translation is not configured: missing GT_PROJECT_ID.");
  console.error("Create .env.local from .env.example and add your GT project credentials.");
  process.exit(1);
}

if (!apiKey) {
  console.error("General Translation is not configured: missing GT_API_KEY.");
  console.error("For local development you may also provide GT_DEV_API_KEY; this script will use it as a fallback.");
  process.exit(1);
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
