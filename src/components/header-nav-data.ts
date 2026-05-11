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
    label: "Individuals",
    matchHrefs: [
      siteRoutes.borrow,
      siteRoutes.invest,
      siteRoutes.trade,
    ],
  },
  {
    id: "businesses",
    label: "Businesses",
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
  { href: siteRoutes.earlyAdopters, label: "Early Adopters" },
  { href: "https://app.avana.cc", label: "Try Demo", external: true },
]
