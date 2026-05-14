import { siteRoutes } from "@/lib/site"

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export type DesktopMenuId = "individuals" | "businesses" | "resources" | "developers" | "about"

export const desktopMenuButtons = [
  {
    id: "individuals",
    label: "Personal",
    matchHrefs: [
      siteRoutes.borrow,
      siteRoutes.invest,
      siteRoutes.trade,
    ],
  },
  {
    id: "businesses",
    label: "Business",
    matchHrefs: [
      siteRoutes.businesses,
      siteRoutes.creditLines,
      siteRoutes.liquidators,
      siteRoutes.appkit,
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
      "/developers/introduction",
      "/developers/introduction/key-concepts",
      "/developers/architecture",
      "/developers/liquidation",
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
