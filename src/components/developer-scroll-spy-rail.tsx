import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

interface DeveloperScrollSpyRailProps {
  sections: Array<{ id: string; title: string }>
  pageSummary?: string
  sectionColor?: "blue" | "emerald" | "violet" | "amber" | "cyan" | "rose" | "slate"
}

export function DeveloperScrollSpyRail({
  sections,
  pageSummary,
  sectionColor = "blue",
}: DeveloperScrollSpyRailProps) {
  return (
    <div className="hidden xl:flex xl:sticky xl:top-32 xl:self-start xl:pr-2">
      <ScrollSpySidebar
        sections={sections}
        pageSummary={pageSummary}
        sectionColor={sectionColor}
      />
    </div>
  )
}
