import { describe, expect, it } from "vitest"
import { generateMetadata } from "@/app/layout"
import { buildOgImagePath, SITE_NAME, SITE_URL } from "@/lib/site"

describe("root layout metadata", () => {
  it("uses shared site constants for default branding", () => {
    const metadata = generateMetadata()

    expect(metadata.applicationName).toBe(SITE_NAME)
    expect(metadata.creator).toBe(SITE_NAME)
    expect(metadata.publisher).toBe(SITE_NAME)
    expect(metadata.metadataBase?.toString()).toBe(`${SITE_URL}/`)
  })

  it("builds the default og image from the shared helper", () => {
    const metadata = generateMetadata()
    const ogImage = metadata.openGraph?.images && !Array.isArray(metadata.openGraph.images)
      ? metadata.openGraph.images
      : metadata.openGraph?.images?.[0]

    expect(ogImage).toMatchObject({
      url: buildOgImagePath(),
      alt: `${SITE_NAME} - DeFi Liquidity Protocol`,
    })
  })
})
