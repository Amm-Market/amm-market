import type { Metadata } from "next"
import { buildOgImagePath, SITE_NAME } from "@/lib/site"

/**
 * Blog section layout with SEO metadata
 */
export const metadata: Metadata = {
  title: "Blog & Updates",
  description: `Latest news, technical deep-dives, and updates from the ${SITE_NAME} team. Learn about DeFi innovations, LP strategies, yield optimization, and protocol development.`,
  openGraph: {
    title: `Blog - ${SITE_NAME}`,
    description: `DeFi insights, LP strategies, and protocol updates from the ${SITE_NAME} team.`,
    images: [buildOgImagePath({
      title: "Blog & Updates",
      subtitle: `DeFi insights, LP strategies, and protocol updates from the ${SITE_NAME} team.`,
      type: "blog",
    })],
  },
  twitter: {
    card: "summary_large_image",
    images: [buildOgImagePath({
      title: "Blog & Updates",
      subtitle: `DeFi insights, LP strategies, and protocol updates from the ${SITE_NAME} team.`,
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
