import type { Metadata } from "next"

/**
 * Blog section layout with SEO metadata
 */
export const metadata: Metadata = {
  title: "Blog & Updates",
  description: "Latest news, technical deep-dives, and updates from the AMM Market team. Learn about DeFi innovations, LP strategies, yield optimization, and protocol development.",
  openGraph: {
    title: "Blog - AMM Market",
    description: "DeFi insights, LP strategies, and protocol updates from the AMM Market team.",
    images: ["/og?title=Blog%20%26%20Updates&subtitle=DeFi%20insights%2C%20LP%20strategies%2C%20and%20protocol%20updates&type=blog"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og?title=Blog%20%26%20Updates&subtitle=DeFi%20insights%2C%20LP%20strategies%2C%20and%20protocol%20updates&type=blog"],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
