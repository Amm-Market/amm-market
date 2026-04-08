"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

interface BlogScrollSpyRailProps {
  sections: Array<{ id: string; title: string }>
}

export function BlogScrollSpyRail({ sections }: BlogScrollSpyRailProps) {
  if (sections.length === 0) {
    return null
  }

  return (
    <div className="hidden self-start xl:block xl:sticky xl:top-28 xl:pt-4">
      <ScrollSpySidebar sections={sections} />
    </div>
  )
}
