export const SITE_NAME = "Avana"
export const LEGAL_PRODUCT_NAME = SITE_NAME
export const SITE_URL = "https://ammmarket.xyz"
export const LOGO_PATH = "/avana-logo.svg"
export const WORDMARK_PATH = "/avana-wordmark.svg"
export const SOCIAL_HANDLE = "@dexmini"
export const DEFAULT_OG_SUBTITLE = "Borrow Against LP Positions on Aave v4"
export const DEFAULT_SITE_DESCRIPTION =
  "Unlock liquidity from your LP tokens. Borrow up to 80% against Uniswap, Curve, and Balancer positions while continuing to earn trading fees on Aave v4."
export const DEFAULT_OG_DESCRIPTION =
  "Unlock liquidity from your LP tokens while continuing to earn trading fees."

export const siteRoutes = {
  home: "/",
  about: "/about",
  borrow: "/borrow",
  invest: "/invest",
  earn: "/earn",
  platform: "/platform",
  developers: "/developers",
  developersIntro: "/developers/introduction",
  blog: "/blog",
  lightpaper: "/lightpaper",
  faq: "/faq",
  brand: "/brand",
  earlyAccess: "/early-access",
  privacy: "/privacy",
  terms: "/terms",
  launchApp: "/",
} as const

export const blogRoutes = {
  aaveV4AvanaSpoke: "/blog/aave-v4-avana-spoke",
  avanaLpCollateral: "/blog/avana-lp-collateral",
} as const

export const legacyBlogRedirects = [
  {
    source: "/blog/aave-v4-amm-spoke",
    destination: blogRoutes.aaveV4AvanaSpoke,
  },
  {
    source: "/blog/amm-markets-lp-collateral",
    destination: blogRoutes.avanaLpCollateral,
  },
] as const

export function buildOgImagePath({
  title = SITE_NAME,
  subtitle = DEFAULT_OG_SUBTITLE,
  type,
}: {
  title?: string
  subtitle?: string
  type?: "default" | "blog" | "developers" | "faq"
} = {}) {
  const searchParams = new URLSearchParams({ title, subtitle })

  if (type) {
    searchParams.set("type", type)
  }

  return `/og?${searchParams.toString()}`
}
