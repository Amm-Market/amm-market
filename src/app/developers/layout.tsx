import type React from "react"
import DeveloperSidebar from "@/components/developer-sidebar"

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 min-h-screen bg-white">
      <div className="flex flex-1 max-w-[1200px] mx-auto px-4 sm:px-6">
        <DeveloperSidebar />
        <div className="flex-1 py-6 pl-6">{children}</div>
      </div>
    </div>
  )
}

