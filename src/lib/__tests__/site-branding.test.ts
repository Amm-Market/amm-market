import { describe, expect, it } from "vitest"
import { buildOgImagePath, DEFAULT_OG_SUBTITLE, SITE_NAME, SITE_URL, siteRoutes } from "@/lib/site"

describe("site constants", () => {
  it("keeps Avana as the single product brand", () => {
    expect(SITE_NAME).toBe("Avana")
    expect(SITE_URL).toBe("https://ammmarket.xyz")
    expect(siteRoutes.launchApp).toBe("/")
  })

  it("builds the default og path from shared defaults", () => {
    expect(buildOgImagePath()).toBe(
      "/og?title=Avana&subtitle=Borrow+Against+LP+Positions+on+Aave+v4"
    )
  })

  it("supports typed og variants", () => {
    expect(buildOgImagePath({ title: "Developers", subtitle: "Docs", type: "developers" })).toBe(
      `/og?title=Developers&subtitle=Docs&type=developers`
    )
  })
})
