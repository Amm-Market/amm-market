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

  it("keeps the lower homepage sections free of divider rails", () => {
    const faqIslandSource = readFileSync(faqIslandPath, "utf8")
    const heroSectionSource = readFileSync(heroSectionPath, "utf8")

    expect(faqIslandSource).not.toContain("border-t border-gray-100")
    expect(heroSectionSource).not.toContain("border-t border-gray-100")
    expect(heroSectionSource).toContain('marketing-secondary-shell pb-0')
  })

  it("uses the shared content shell for non-hero homepage sections", () => {
    const pageSource = readFileSync(pagePath, "utf8")
    const heroSectionSource = readFileSync(heroSectionPath, "utf8")
    const buildTomorrowSource = readFileSync(buildTomorrowPath, "utf8")

    expect(pageSource).toContain('className="site-content-shell"')
    expect(heroSectionSource).toContain('className="site-content-shell space-y-32 pt-16 md:space-y-40 md:pt-20"')
    expect(buildTomorrowSource).toContain('className="site-content-shell"')
  })
})
