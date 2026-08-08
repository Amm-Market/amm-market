import { siteRoutes } from "@/lib/site"

export interface NavLink {
  href: string
  labelKey?: string
  label?: string
  external?: boolean
}

export type DesktopMenuId = "products" | "resources" | "developers"

export const desktopMenuButtons = [
  {
    id: "products" as const,
    labelKey: "nav.products",
    matchHrefs: [siteRoutes.borrow, siteRoutes.lend, siteRoutes.multiply],
  },
  {
    id: "resources" as const,
    labelKey: "nav.resources",
    matchHrefs: [siteRoutes.about, siteRoutes.newsroom, siteRoutes.brand],
  },
  {
    id: "developers" as const,
    labelKey: "nav.developers",
    matchHrefs: [
      siteRoutes.developers,
      "/developers/architecture",
      "/developers/liquidation",
      "/developers/integrations/appkit",
    ],
  },
] as const

export const desktopUtilityLinks: readonly NavLink[] = [
  { href: "https://app.avana.cc", labelKey: "cta.sandboxLong", external: true },
]
