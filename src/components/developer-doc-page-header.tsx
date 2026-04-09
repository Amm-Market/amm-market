import dynamic from "next/dynamic"

interface DeveloperDocPageHeaderProps {
  title: string
  description: string
}

const DeferredLlmExportMenu = dynamic(
  () => import("@/components/llm-export-menu").then((module) => module.LlmExportMenu),
  {
    loading: () => (
      <div
        aria-hidden="true"
        className="h-10 w-32 rounded-full border border-slate-200 bg-slate-50"
      />
    ),
  },
)

export function DeveloperDocPageHeader({ title, description }: DeveloperDocPageHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="type-page-title min-w-0 text-slate-950">
          {title}
        </h1>

        <div className="relative self-start" data-export-skip>
          <DeferredLlmExportMenu />
        </div>
      </div>

      <div className="mt-4 border-b border-slate-200" />

      <p className="type-page-lead mt-6 max-w-4xl text-slate-600">{description}</p>
    </div>
  )
}
