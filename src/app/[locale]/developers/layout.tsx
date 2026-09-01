import { createPageMetadata } from "@/lib/i18n/page-metadata"
import type React from "react"
import dynamic from "next/dynamic"
import { DeveloperContentWrapper } from "@/components/developer-content-wrapper"

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
export async function generateMetadata() {
  return createPageMetadata("developers", "/developers", { ogType: "developers" })
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
