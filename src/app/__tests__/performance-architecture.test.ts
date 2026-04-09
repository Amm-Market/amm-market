import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const appPagePath = path.resolve(currentDir, "../page.tsx")
const heroSectionPath = path.resolve(currentDir, "../../components/hero-section.tsx")
const blogLayoutPath = path.resolve(currentDir, "../../components/blog-post-layout.tsx")
const developerHeaderPath = path.resolve(currentDir, "../../components/developer-doc-page-header.tsx")
const developerWrapperPath = path.resolve(currentDir, "../../components/developer-content-wrapper.tsx")
const siteHeaderPath = path.resolve(currentDir, "../../components/header.tsx")
const siteFontsPath = path.resolve(currentDir, "../site-fonts.ts")
const globalsPath = path.resolve(currentDir, "../globals.css")
const faqClientPath = path.resolve(currentDir, "../faq/FaqClient.tsx")
const developersPagePath = path.resolve(currentDir, "../developers/page.tsx")
const blogFactoryPath = path.resolve(currentDir, "../../lib/blog-page-factory.tsx")

function firstMeaningfulLine(source: string) {
  return source
    .split("\n")
    .map((line) => line.trim())
    .find(Boolean)
}

describe("performance architecture", () => {
  it("keeps shared content shells server-rendered", () => {
    expect(firstMeaningfulLine(readFileSync(blogLayoutPath, "utf8"))).not.toBe('"use client"')
    expect(firstMeaningfulLine(readFileSync(developerHeaderPath, "utf8"))).not.toBe('"use client"')
    expect(firstMeaningfulLine(readFileSync(developerWrapperPath, "utf8"))).not.toBe('"use client"')
  })

  it("defers lower homepage work behind lazy boundaries", () => {
    const appPageSource = readFileSync(appPagePath, "utf8")
    const heroSectionSource = readFileSync(heroSectionPath, "utf8")
    const headerSource = readFileSync(siteHeaderPath, "utf8")

    expect(appPageSource).toContain('const DeferredBuildTomorrowSection = dynamic(() => import("@/components/BuildTomorrowSection"))')
    expect(appPageSource).toContain("BuildTomorrowSectionFallback")
    expect(heroSectionSource).toContain('const DeferredHomepageFaqSection = dynamic(() => import("@/components/homepage/HomepageFaqSection")')
    expect(heroSectionSource).toContain('<LazySection minHeight="660px"')
    expect(heroSectionSource).toContain("<HomepageNewsroomSection eyebrowTone=\"rose\" />")
    expect(heroSectionSource).toContain("<DeferredHomepageFaqSection />")
    expect(headerSource).toContain('const DeferredHeaderDesktopMenuPanel = dynamic(')
    expect(headerSource).toContain('{ ssr: false }')
    expect(headerSource).toContain('const DeferredHeaderMobileMenu = dynamic(')
    expect(headerSource).toContain('requestIdleCallback')
    expect(headerSource).toContain('onTouchStart={warmMobileMenu}')
  })

  it("limits global font preloading to the primary normal face", () => {
    const siteFontsSource = readFileSync(siteFontsPath, "utf8")

    expect(siteFontsSource).toContain("ABCDiatypeVariable-Trial.woff2")
    expect(siteFontsSource).toContain("preload: false")
    expect(siteFontsSource).not.toContain("ABCDiatype-MediumItalic-Trial.woff2")
    expect(siteFontsSource).not.toContain("ABCDiatype-BoldItalic-Trial.woff2")
  })

  it("uses deferred viewport rendering for long-form sections", () => {
    const globalsSource = readFileSync(globalsPath, "utf8")
    const faqClientSource = readFileSync(faqClientPath, "utf8")
    const developersPageSource = readFileSync(developersPagePath, "utf8")
    const blogFactorySource = readFileSync(blogFactoryPath, "utf8")

    expect(globalsSource).toContain(".deferred-viewport")
    expect(faqClientSource).toContain('index > 3 ? "deferred-viewport" : ""')
    expect(developersPageSource).toContain('className="deferred-viewport mt-12 scroll-mt-32"')
    expect(blogFactorySource).toContain('index > 0 ? "deferred-viewport" : ""')
  })

  it("keeps motion CSS scoped to the small set of transitions in use", () => {
    const globalsSource = readFileSync(globalsPath, "utf8")

    expect(globalsSource).not.toContain('@import "tw-animate-css";')
    expect(globalsSource).toContain("@keyframes accordion-down")
    expect(globalsSource).toContain(".tooltip-content[data-state=\"instant-open\"]")
  })
})
