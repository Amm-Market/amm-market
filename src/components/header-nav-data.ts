import { siteRoutes } from "@/lib/site"

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export type DesktopMenuId = "products" | "resources" | "developers" | "about"

export const desktopMenuButtons = [
  {
    id: "products",
    label: "Products",
    matchHrefs: [
      siteRoutes.borrow,
      siteRoutes.invest,
      siteRoutes.trade,
      siteRoutes.creditLines,
    ],
  },
  {
    id: "resources",
    label: "Resources",
    matchHrefs: [siteRoutes.lightpaper, siteRoutes.blog, siteRoutes.faq, siteRoutes.brand],
  },
  {
    id: "developers",
    label: "Developers",
    matchHrefs: [
      siteRoutes.developers,
      "/developers/architecture",
      "/developers/liquidation",
      siteRoutes.appkit,
      siteRoutes.liquidators,
    ],
  },
  {
    id: "about",
    label: "Labs",
    matchHrefs: [siteRoutes.about, siteRoutes.careers],
  },
] as const

export const desktopUtilityLinks: readonly NavLink[] = [
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
]
