import type { Metadata } from "next"
import { buildOgImagePath, SITE_NAME } from "@/lib/site"

/**
 * Blog section layout with SEO metadata
 */
export const metadata: Metadata = {
  title: "Avana Blog | LP Collateral, AMM Markets, and DeFi Research",
  description: `Latest posts from the ${SITE_NAME} team on LP collateral, AMM markets, Aave v4, borrow against LP positions, yield strategy, and protocol development.`,
  openGraph: {
    title: `Avana Blog - ${SITE_NAME}`,
    description: `DeFi insights, LP collateral research, AMM strategy, and protocol updates from the ${SITE_NAME} team.`,
    images: [buildOgImagePath({
      title: "Avana Blog",
      subtitle: `LP collateral, AMM markets, Aave v4, and DeFi research from the ${SITE_NAME} team.`,
      type: "blog",
    })],
  },
  twitter: {
    card: "summary_large_image",
    images: [buildOgImagePath({
      title: "Avana Blog",
      subtitle: `LP collateral, AMM markets, Aave v4, and DeFi research from the ${SITE_NAME} team.`,
      type: "blog",
    })],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
