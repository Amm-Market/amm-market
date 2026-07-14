import { readFile } from "node:fs/promises";
import path from "node:path";

const OUTPUT_DIR = path.join(process.cwd(), ".lighthouse");
const ROUTES = ["/", "/about", "/borrow", "/lend", "/multiply", "/blog/aave-v4-avana-spoke"];
const BUDGETS = {
  performance: 75,
  lcp: 6_000,
  tbt: 300,
  cls: 0.1,
};

function routeSlug(route) {
  return route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "--");
}

function metric(report, auditId) {
  return report.audits[auditId]?.numericValue ?? 0;
}

const failures = [];

for (const route of ROUTES) {
  const reportPath = path.join(OUTPUT_DIR, `${routeSlug(route)}.report.json`);
  const report = JSON.parse(await readFile(reportPath, "utf8"));
  const performance = Math.round((report.categories.performance?.score ?? 0) * 100);
  const lcp = metric(report, "largest-contentful-paint");
  const tbt = metric(report, "total-blocking-time");
  const cls = metric(report, "cumulative-layout-shift");

  const violations = [
    performance < BUDGETS.performance && `performance ${performance} < ${BUDGETS.performance}`,
    lcp > BUDGETS.lcp && `LCP ${Math.round(lcp)}ms > ${BUDGETS.lcp}ms`,
    tbt > BUDGETS.tbt && `TBT ${Math.round(tbt)}ms > ${BUDGETS.tbt}ms`,
    cls > BUDGETS.cls && `CLS ${cls.toFixed(3)} > ${BUDGETS.cls}`,
  ].filter(Boolean);

  if (violations.length > 0) {
    failures.push(`${route}: ${violations.join(", ")}`);
  }
}

if (failures.length > 0) {
  console.error("Lighthouse budget failures:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Lighthouse budgets passed.");
