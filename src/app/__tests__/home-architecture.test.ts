import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const pagePath = path.resolve(currentDir, "../page.tsx")
const heroSectionPath = path.resolve(currentDir, "../../components/hero-section.tsx")
const buildTomorrowPath = path.resolve(currentDir, "../../components/BuildTomorrowSection.tsx")
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

  it("removes the automate promo block from the live homepage shell", () => {
    const heroSectionSource = readFileSync(heroSectionPath, "utf8")

    expect(heroSectionSource).not.toContain("Automate your LP strategy")
    expect(heroSectionSource).not.toContain("Set it and forget it with auto-compound, rebalancing, and alerts")
  })

  it("uses tighter FAQ spacing at the bottom of the homepage", () => {
    const faqIslandSource = readFileSync(faqIslandPath, "utf8")
    const heroSectionSource = readFileSync(heroSectionPath, "utf8")

    expect(faqIslandSource).toContain("pt-16 pb-4")
    expect(faqIslandSource).toContain("md:pt-10 md:pb-0")
    expect(heroSectionSource).toContain('marketing-secondary-shell pb-0')
  })

  it("uses the shared content shell for non-hero homepage sections", () => {
    const pageSource = readFileSync(pagePath, "utf8")
    const heroSectionSource = readFileSync(heroSectionPath, "utf8")
    const buildTomorrowSource = readFileSync(buildTomorrowPath, "utf8")

    expect(pageSource).toContain('className="site-content-shell"')
    expect(heroSectionSource).toContain('className="site-content-shell py-16 md:py-24"')
    expect(buildTomorrowSource).toContain('className="site-content-shell pt-2 sm:pt-4"')
  })
})
