import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const pagePath = path.resolve(currentDir, "../page.tsx")
const heroSectionPath = path.resolve(currentDir, "../../components/hero-section.tsx")
const testimonialIslandPath = path.resolve(currentDir, "../../components/homepage/HomepageTestimonialSection.tsx")
const faqIslandPath = path.resolve(currentDir, "../../components/homepage/HomepageFaqSection.tsx")

function firstMeaningfulLine(source: string) {
  return source
    .split("\n")
    .map((line) => line.trim())
    .find(Boolean)
}

describe("homepage architecture", () => {
  it("keeps the app page and hero shell server-rendered", () => {
    expect(firstMeaningfulLine(readFileSync(pagePath, "utf8"))).not.toBe('"use client"')
    expect(firstMeaningfulLine(readFileSync(heroSectionPath, "utf8"))).not.toBe('"use client"')
  })

  it("keeps interactive homepage islands client-only", () => {
    expect(firstMeaningfulLine(readFileSync(testimonialIslandPath, "utf8"))).toBe('"use client"')
    expect(firstMeaningfulLine(readFileSync(faqIslandPath, "utf8"))).toBe('"use client"')
  })
})
