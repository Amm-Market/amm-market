import type { Metadata } from "next"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

/**
 * Newsroom section layout with SEO metadata
 */
export const metadata: Metadata = {
  title: "Newsroom",
  description: `Latest posts from the ${SITE_NAME} team on LP collateral, AMM markets, Aave v4, borrow against LP positions, yield strategy, and protocol development.`,
  alternates: {
    canonical: siteRoutes.newsroom,
  },
  openGraph: {
    title: "Newsroom",
    url: siteRoutes.newsroom,
    description: `DeFi insights, LP collateral research, AMM strategy, and protocol updates from the ${SITE_NAME} team.`,
    images: [buildOgImagePath({
      title: "Newsroom",
      subtitle: `LP collateral, AMM markets, Aave v4, and DeFi research from the ${SITE_NAME} team.`,
      type: "blog",
    })],
  },
  twitter: {
    card: "summary_large_image",
    images: [buildOgImagePath({
      title: "Newsroom",
      subtitle: `LP collateral, AMM markets, Aave v4, and DeFi research from the ${SITE_NAME} team.`,
      type: "blog",
    })],
  },
}

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
