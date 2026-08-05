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
        className="hidden h-[calc(100vh-73px)] w-64 shrink-0 border-r border-gray-200 xl:block"
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
    template: "%s | Developer Docs",
    default: "Developer Docs",
  },
  description: `Technical documentation for integrating with ${SITE_NAME}. Learn about LP token collateral, health factors, liquidation flows, and smart contract architecture on Aave v4.`,
  alternates: {
    canonical: siteRoutes.developers,
  },
  openGraph: {
    title: "Developer Docs",
    url: siteRoutes.developers,
    description: `Technical docs for integrating with ${SITE_NAME} on Aave v4.`,
    images: [buildOgImagePath({
      title: "Developer Docs",
      subtitle: `Technical guides for integrating with ${SITE_NAME}`,
      type: "developers",
    })],
  },
  twitter: {
    card: "summary_large_image",
    images: [buildOgImagePath({
      title: "Developer Docs",
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
    <div className="flex min-h-screen min-w-0 flex-1 overflow-x-clip bg-white">
      <div className="mx-auto flex min-w-0 w-full max-w-[1200px] flex-1">
        <DeferredDeveloperSidebar />
        <div className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
          <DeveloperContentWrapper>{children}</DeveloperContentWrapper>
        </div>
      </div>
    </div>
  )
}
