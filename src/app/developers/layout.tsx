import type React from "react"
import DeveloperSidebar from "@/components/developer-sidebar"
import { DeveloperContentWrapper } from "@/components/developer-content-wrapper"

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
