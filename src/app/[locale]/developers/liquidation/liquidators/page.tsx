import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('liquidation/liquidators', {
    title: "Liquidators",
    description: "Developer guide for liquidation operators, covering monitoring, execution requirements, and LP-specific unwind behavior.",
  })
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
      "Any keeper or execution desk can liquidate if it can monitor positions, source execution liquidity, and unwind the LP formats Avana supports.",
  },
  {
    title: "LP-specific handling",
    body:
      "Liquidation is not a generic token sale. Runtime needs venue-aware logic for fee realization, position removal, routing, and settlement into the debt asset.",
  },
  {
    title: "Coverage quality",
    body:
      "LP positions are harder to unwind than simple tokens. Operators that model the full route for supported venues usually handle stress better than bots that only react to a health trigger.",
  },
]

const operationalChecklist = [
  "Track the same risk state the protocol uses, not a separate heuristic.",
  "Unwind from a clean state transition in one atomic job whenever possible.",
  "Price fee realization, route depth, and residual value before optimizing for speed alone.",
  "Treat partial coverage and full coverage as separate cases with separate routing assumptions.",
]

const executionRequirements = [
  "Position monitoring and debt drift tracking",
  "Simulation for route depth, slippage, and liquidity availability",
  "Transaction delivery with flashloan or prefunded execution paths",
  "Venue-aware adapters for the LP families the protocol supports",
]

export default async function DeveloperLiquidatorsPage() {
  return withDocsI18n("liquidation/liquidators", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Liquidators"
          description="How operators service Avana liquidations and what execution infrastructure is required for LP-backed debt."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Liquidators are the operators who close unhealthy LP-backed positions. Their job is to
            repay the debt, unwind the LP through the correct venue path, and settle the recovered
            value back into the credit layer.
          </p>
          <p className="type-body-copy leading-relaxed text-gray-600">
            Speed matters, but it is not enough on its own. Operators need to understand what is
            actually coverable, how the LP is represented, and how fees, slippage, or one-sided
            inventory change recovery before they submit anything onchain.
          </p>
        </section>

        <section id="coverage-model" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Coverage Model</h2>
          <div className="space-y-4">
            {coverageModel.map((item) => (
              <div key={item.title}>
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="type-body-copy text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="execution-requirements" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Execution Requirements</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            A liquidator for Avana needs more than a trigger bot. It needs enough infrastructure to
            value positions, simulate exits, source capital, and deliver a transaction that can
            finish the unwind path it started.
          </p>
          <ul className="space-y-2 type-body-copy text-gray-600">
            {executionRequirements.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="operational-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Operational Notes</h2>
          <div className="space-y-3 type-body-copy text-gray-600">
            {operationalChecklist.map((item) => (
              <p key={item}>
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Practical requirement</h2>
          <p className="type-body-copy leading-relaxed text-gray-600">
            Build venue-specific unwind, fee realization, and debt repayment as one workflow.
            Disconnected steps make it much easier for a theoretically coverable liquidation to fail
            in execution.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Developer guide for operators that service Avana liquidation coverage."
        sectionColor="amber"
      />
    </div>
  ))
}
