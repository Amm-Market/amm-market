import dynamic from "next/dynamic"

const DeferredScrollSpySidebar = dynamic(
  () => import("@/components/scroll-spy-sidebar").then((module) => module.ScrollSpySidebar),
  {
    loading: () => <div aria-hidden="true" className="hidden w-[17rem] xl:block" />,
  },
)

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
      <DeferredScrollSpySidebar
        sections={sections}
        pageSummary={pageSummary}
        sectionColor={sectionColor}
      />
    </div>
  )
}
