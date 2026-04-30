import { describe, expect, it } from "vitest"
import { buildOgImagePath, SITE_NAME, SITE_URL, siteRoutes } from "@/lib/site"

describe("site constants", () => {
  it("keeps Avana as the single product brand", () => {
    expect(SITE_NAME).toBe("Avana")
    expect(SITE_URL).toBe("https://avana.cc")
    expect(siteRoutes.about).toBe("/about")
    expect(siteRoutes.businesses).toBe("/businesses")
    expect(siteRoutes.borrow).toBe("/borrow")
    expect(siteRoutes.lend).toBe("/lend")
    expect(siteRoutes.trade).toBe("/trade")
    expect(siteRoutes.invest).toBe("/invest")
    expect(siteRoutes.leverage).toBe("/leverage")
    expect(siteRoutes.liquidators).toBe("/businesses/liquidators")
    expect(siteRoutes.appkit).toBe("/businesses/appkit")
    expect(siteRoutes.creditLines).toBe("/credit-lines")
    expect(siteRoutes.platform).toBe("/platform")
    expect(siteRoutes.careers).toBe("/careers")
    expect(siteRoutes.earlyAdopters).toBe("/early-adopters")
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
