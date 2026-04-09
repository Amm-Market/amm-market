import type React from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { DeveloperContentWrapper } from "@/components/developer-content-wrapper"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

const DeferredDeveloperSidebar = dynamic(
  () => import("@/components/developer-sidebar"),
  {
    loading: () => (
      <aside
        aria-hidden="true"
        className="hidden h-[calc(100vh-73px)] w-64 shrink-0 border-r border-gray-200 md:block"
      />
    ),
  },
)

/**
 * Developer documentation section metadata
 * Individual pages override with their own specific metadata
 */
export const metadata: Metadata = {
  title: {
    template: `%s - Developer Docs | ${SITE_NAME}`,
    default: "Developer Documentation",
  },
  description: `Technical documentation for integrating with ${SITE_NAME}. Learn about LP token collateral, health factors, liquidation flows, and smart contract architecture on Aave v4.`,
  alternates: {
    canonical: siteRoutes.developers,
  },
  openGraph: {
    title: `Developer Documentation - ${SITE_NAME}`,
    url: siteRoutes.developers,
    description: `Technical docs for integrating with ${SITE_NAME} on Aave v4.`,
    images: [buildOgImagePath({
      title: "Developer Documentation",
      subtitle: `Technical guides for integrating with ${SITE_NAME}`,
      type: "developers",
    })],
  },
  twitter: {
    card: "summary_large_image",
    images: [buildOgImagePath({
      title: "Developer Documentation",
      subtitle: `Technical guides for integrating with ${SITE_NAME}`,
      type: "developers",
    })],
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
        <DeferredDeveloperSidebar />
        <div className="flex-1 py-8 px-6 lg:px-10 min-w-0">
          <DeveloperContentWrapper>{children}</DeveloperContentWrapper>
        </div>
      </div>
    </div>
  )
}
