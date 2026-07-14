import type { Metadata } from "next"
import type { ReactNode } from "react"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Download Avana brand assets, review the official logo set, and use the approved colors and typography across partner surfaces.",
  keywords: [
    "Avana brand",
    "logo assets",
    "brand kit",
    "cyan logo",
    "identity guidelines",
  ],
  alternates: {
    canonical: siteRoutes.brand,
  },
  openGraph: {
    title: "Brand",
    description:
      "Download Avana brand assets, review the official logo set, and use the approved colors and typography across partner surfaces.",
    url: siteRoutes.brand,
    images: [
      {
        url: buildOgImagePath({
          title: SITE_NAME,
          subtitle: "Official brand assets and guidelines",
        }),
        alt: "Avana Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      buildOgImagePath({
        title: SITE_NAME,
        subtitle: "Official brand assets and guidelines",
      }),
    ],
  },
}

export default function BrandLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
