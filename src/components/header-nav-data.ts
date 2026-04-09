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
    matchHrefs: [siteRoutes.borrow, siteRoutes.invest, siteRoutes.leverage, siteRoutes.platform],
  },
  {
    id: "resources",
    label: "Resources",
    matchHrefs: [siteRoutes.about, siteRoutes.blog, siteRoutes.faq, siteRoutes.brand],
  },
  {
    id: "developers",
    label: "Developers",
    matchHrefs: [
      siteRoutes.developers,
      "/developers/introduction",
      "/developers/introduction/key-concepts",
      "/developers/architecture",
      "/developers/liquidation",
    ],
  },
] as const

export const desktopUtilityLinks: readonly NavLink[] = [
  { href: siteRoutes.lightpaper, label: "Lightpaper" },
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
]
