import type React from "react"
import type { Metadata } from "next"
import DeveloperSidebar from "@/components/developer-sidebar"
import { DeveloperContentWrapper } from "@/components/developer-content-wrapper"

/**
 * Developer documentation section metadata
 * Individual pages override with their own specific metadata
 */
export const metadata: Metadata = {
  title: {
    template: "%s - Developer Docs | AMM Market",
    default: "Developer Documentation",
  },
  description: "Technical documentation for integrating with AMM Market. Learn about LP token collateral, health factors, liquidation flows, and smart contract architecture on Aave v4.",
  openGraph: {
    title: "Developer Documentation - AMM Market",
    description: "Technical docs for integrating with AMM Market on Aave v4.",
    images: ["/og?title=Developer%20Documentation&subtitle=Technical%20guides%20for%20integrating%20with%20AMM%20Market&type=developers"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og?title=Developer%20Documentation&subtitle=Technical%20guides%20for%20integrating%20with%20AMM%20Market&type=developers"],
  },
}

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 min-h-screen bg-white">
      <div className="flex flex-1 max-w-[1200px] mx-auto">
        <DeveloperSidebar />
        <div className="flex-1 py-8 px-6 lg:px-10 min-w-0">
          <DeveloperContentWrapper>{children}</DeveloperContentWrapper>
        </div>
      </div>
    </div>
  )
}
