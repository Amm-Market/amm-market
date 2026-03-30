import { describe, expect, it } from "vitest"
import nextConfig from "../../../next.config"
import { blogRoutes } from "@/lib/site"

describe("legacy blog redirects", () => {
  it("keeps the old branded blog paths redirecting to Avana slugs", async () => {
    const redirects = await nextConfig.redirects?.()

    expect(redirects).toEqual(expect.arrayContaining([
      {
        source: "/blog/aave-v4-amm-spoke",
        destination: blogRoutes.aaveV4AvanaSpoke,
        permanent: true,
      },
      {
        source: "/blog/amm-markets-lp-collateral",
        destination: blogRoutes.avanaLpCollateral,
        permanent: true,
      },
    ]))
  })
})
