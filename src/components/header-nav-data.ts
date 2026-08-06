import { siteRoutes } from "@/lib/site"

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export type DesktopMenuId = "products" | "resources" | "developers"

export const desktopMenuButtons = [
  {
    id: "products",
    label: "Products",
    matchHrefs: [
      siteRoutes.borrow,
      siteRoutes.lend,
      siteRoutes.multiply,
    ],
  },
  {
    id: "resources",
    label: "Resources",
    matchHrefs: [
      siteRoutes.about,
      siteRoutes.newsroom,
      siteRoutes.brand,
    ],
  },
  {
    id: "developers",
    label: "Developers",
    matchHrefs: [
      siteRoutes.developers,
      "/developers/architecture",
      "/developers/liquidation",
      "/developers/integrations/appkit",
    ],
  },
] as const

export const desktopUtilityLinks: readonly NavLink[] = [
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
]
