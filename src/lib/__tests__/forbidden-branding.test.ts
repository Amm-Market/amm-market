import { readdirSync, readFileSync, statSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(currentDir, "../../..")
const allowedCryptoComPaths = new Set([
  "next.config.ts",
  "src/app/layout.tsx",
  "src/components/webapp-hero.tsx",
  "src/components/EarlyAccessCtaBox.tsx",
  "src/components/hero-section.tsx",
])

const allowedKrakenPaths = new Set([
  "next.config.ts",
])

const forbiddenPatterns = [
  { label: "legacy AMM brand phrase", regex: /A[Mm]{2}\sMarket\b/g },
  { label: "legacy title-case AMM brand phrase", regex: /Amm\sMarket\b/g },
  { label: "legacy plural AMM brand phrase", regex: /Amm\smarkets\b/g },
  { label: "Kraken", regex: /Kraken/g },
  { label: "kraken", regex: /kraken/g },
]

function collectFiles(entryPath: string): string[] {
  const stats = statSync(entryPath)

  if (stats.isFile()) {
    return [entryPath]
  }

  return readdirSync(entryPath, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".next" || entry.name === "node_modules" || entry.name === "coverage" || entry.name === "__tests__") {
      return []
    }

    return collectFiles(path.join(entryPath, entry.name))
  })
}

describe("forbidden branding guard", () => {
  it("blocks legacy and third-party brand strings outside explicit exceptions", () => {
    const scanTargets = [
      path.join(repoRoot, "src"),
      path.join(repoRoot, "public"),
      path.join(repoRoot, "next.config.ts"),
      path.join(repoRoot, "README.md"),
    ]

    const violations: string[] = []

    for (const filePath of scanTargets.flatMap((entryPath) => collectFiles(entryPath))) {
      const relativePath = path.relative(repoRoot, filePath).replaceAll(path.sep, "/")
      const source = readFileSync(filePath, "utf8")

      for (const pattern of forbiddenPatterns) {
        if (
          (pattern.label === "Kraken" || pattern.label === "kraken") &&
          allowedKrakenPaths.has(relativePath)
        ) {
          continue
        }

        if (pattern.regex.test(source)) {
          violations.push(`${relativePath}: contains ${pattern.label}`)
        }
      }

      const cryptoMatches = source.match(/crypto\.com/gi) ?? []
      if (cryptoMatches.length > 0 && !allowedCryptoComPaths.has(relativePath)) {
        violations.push(`${relativePath}: contains crypto.com`)
      }
    }

    expect(violations).toEqual([])
  })
})
