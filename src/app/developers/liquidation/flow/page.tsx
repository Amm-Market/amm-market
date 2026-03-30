import type { Metadata } from "next"
import Link from "next/link"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Liquidation Flow",
  description:
    "Operational liquidation flow for Avana. Follow the runtime sequence used by liquidation nodes when unhealthy LP-backed loans are unwound.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "canonical-reference", title: "Canonical Reference" },
  { id: "runtime-sequence", title: "Runtime Sequence" },
  { id: "collateral-handling", title: "Collateral Handling" },
  { id: "operator-notes", title: "Operator Notes" },
]

const runtimeSteps = [
  {
    title: "Detect an unhealthy account",
    body:
      "Liquidation nodes or external keepers watch the same risk-adjusted collateral values used by the protocol and flag accounts whose debt now exceeds allowed borrowing capacity.",
  },
  {
    title: "Source execution liquidity",
    body:
      "The liquidator acquires temporary liquidity, commonly through a flashloan-style path, so debt can be repaid without pre-funding the full position unwind.",
  },
  {
    title: "Repay debt and take control of collateral",
    body:
      "The relevant Borrow Spoke settles debt into the credit layer, takes custody of the liquidated position, and prepares it for venue-specific fee collection or unwind.",
  },
  {
    title: "Claim fees and unwind the LP position",
    body:
      "Any claimable fees are realized first when possible, then principal is unwound into underlying assets using the venue-specific removal path for that LP family.",
  },
  {
    title: "Route proceeds and close the liquidation",
    body:
      "Underlying assets are routed into the debt asset, execution liquidity is repaid, the liquidation premium is distributed, and any remaining value is returned to the borrower.",
  },
]

const collateralHandling = [
  {
    title: "Fungible LP tokens",
    body:
      "Standard ERC-20 LP positions are removed from the underlying pool and converted into their component assets before routing and settlement.",
  },
  {
    title: "Concentrated liquidity positions",
    body:
      "Range-based positions are decomposed according to their current inventory split. When a position is mostly one-sided, routing logic accounts for that before debt repayment is finalized.",
  },
  {
    title: "Custom or hook-based pools",
    body:
      "Pools with custom exit logic require a dedicated adapter or supported removal path before they can be considered safe for liquidation coverage.",
  },
]

export default function LiquidationFlowPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Liquidation Flow"

          description="Operational sequence for how unhealthy LP-backed positions are unwound once liquidation is triggered."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            This page expands the protocol&apos;s liquidation design into an operator-facing runtime
            sequence. It is intentionally narrower than the canonical liquidation spec: the goal is
            to explain how a liquidation is executed in practice without redefining protocol rules.
          </p>
          <p className="text-sm text-gray-600">
            Avana treats LP liquidation as a controlled unwind problem. The node or keeper must
            repay debt, realize claimable fees, exit the LP position through the correct venue path,
            route proceeds into the debt asset, and preserve any residual borrower value.
          </p>
        </section>

        <section id="canonical-reference" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Canonical Reference</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The protocol source of truth for liquidation policy remains the main{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>{" "}
            page. This support page assumes the same recoverable-value valuation model described in{" "}
            <Link href="/developers/integrations/price-oracles" className="text-blue-600 hover:underline">
              Price Oracles
            </Link>{" "}
            and the same position-level aggregation described in{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">
              Collateral Factors
            </Link>
            .
          </p>
          <p className="border-l-4 border-amber-400 pl-3 text-sm text-gray-600">
            Use this page for execution flow, not for new policy assumptions. Thresholds, bonuses,
            and admissibility rules should always be read from the canonical architecture and risk
            docs.
          </p>
        </section>

        <section id="runtime-sequence" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Runtime Sequence</h2>
          <div className="space-y-4">
            {runtimeSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="collateral-handling" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Collateral Handling</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Different LP families share the same liquidation objective but not the same exit path.
            That is why Avana treats venue handling as an adapter problem rather than assuming a
            single unwind function for every pool type.
          </p>
          <div className="space-y-4">
            {collateralHandling.map((item) => (
              <div key={item.title} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="operator-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Operator Notes</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              Liquidation bots should index active positions, refresh debt drift, and price accounts
              from the same oracle stack used by the protocol rather than from raw AMM spot state.
            </p>
            <p>
              Profitability checks should account for slippage, route depth, flashloan costs, and
              execution risk. Large or unusual unwinds may benefit from private execution paths to
              reduce adverse MEV exposure.
            </p>
            <p>
              For most builders, the safest pattern is to treat this page as a runtime checklist and
              keep the policy layer anchored to the canonical liquidation, oracle, and risk pages.
            </p>
          </div>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="Operator-facing runtime sequence for liquidation nodes and keepers."
        sectionColor="amber"
      />
    </div>
  )
}
