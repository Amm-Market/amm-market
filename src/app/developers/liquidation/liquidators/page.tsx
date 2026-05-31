import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Liquidators",
  description:
    "Developer guide for liquidation operators, runtime coverage, execution requirements, and LP-specific unwind behavior.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "coverage-model", title: "Coverage Model" },
  { id: "execution-requirements", title: "Execution Requirements" },
  { id: "operational-notes", title: "Operational Notes" },
]

const coverageModel = [
  {
    title: "Permissionless participation",
    body:
      "Any keeper team or execution desk can service liquidation opportunities as long as they can monitor positions, source execution liquidity, and unwind the supported LP formats.",
  },
  {
    title: "LP-specific handling",
    body:
      "Liquidation is not a generic token sell. The runtime needs venue-aware logic for fee realization, position removal, routing, and settlement back into the debt asset.",
  },
  {
    title: "Safety backstop",
    body:
      "Specialized liquidators exist because LP-backed positions are harder to unwind safely than simple collateral. Coverage quality matters more than raw trigger speed.",
  },
]

const executionRequirements = [
  "Position monitoring and debt drift tracking",
  "Simulation for route depth, slippage, and liquidity availability",
  "Transaction delivery with flashloan or prefunded execution paths",
  "Venue-aware adapters for the LP families the protocol supports",
]

const operationalChecklist = [
  "Track the same risk state that the protocol uses, not a separate heuristic.",
  "Make sure the unwind path can be executed atomically from a clean state transition.",
  "Account for fee realization, route depth, and residual value before trying to optimize for speed.",
  "Treat partial coverage and full coverage as separate cases with separate routing assumptions.",
]

export default function DeveloperLiquidatorsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader
          title="Liquidators"
          description="Operator guide for understanding how Avana liquidation coverage works and what execution infrastructure is needed to service LP-backed debt."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Liquidators cover unhealthy LP-backed positions by repaying debt, unwinding the LP
            collateral through the right venue path, and settling the resulting assets back into the
            credit layer.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The operator side of liquidation is mostly about reliability: the keeper must know
            what can be covered, how the LP position is represented, and how the unwind should
            settle if slippage, fees, or range imbalance change the shape of the recovery.
          </p>
        </section>

        <section id="coverage-model" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Coverage Model</h2>
          <div className="space-y-4">
            {coverageModel.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="execution-requirements" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Execution Requirements</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {executionRequirements.map((item) => (
              <li key={item} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="operational-checklist" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Operational Checklist</h2>
          <div className="space-y-3 text-sm text-gray-600">
            {operationalChecklist.map((item) => (
              <p key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="operational-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Operational Notes</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            In practice, the most reliable liquidators are the ones that can model venue-specific
            unwind paths, fee realization, and debt repayment as one atomic workflow instead of a
            set of disconnected actions.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Operators should also think about failure handling, because a missed transaction,
            stale price, or partial unwind can turn a recoverable account into a much harder
            recovery if the runtime does not react quickly and consistently.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Developer guide for operators that service Avana liquidation coverage."
        sectionColor="amber"
      />
    </div>
  )
}
