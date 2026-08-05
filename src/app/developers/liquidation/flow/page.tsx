import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Liquidation Flow",
  description:
    "Operational liquidation flow for Avana. Follow the runtime sequence used when vault-backed LP collateral is unwound.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "canonical-reference", title: "Canonical Reference" },
  { id: "runtime-sequence", title: "Runtime Sequence" },
  { id: "state-transitions", title: "State Transitions" },
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
    title: "Repay debt and seize the vault collateral",
    body:
      "The relevant Borrow Spoke settles debt into the credit layer, takes custody of the vault collateral, and prepares it for LP-specific settlement.",
  },
  {
    title: "Burn the vault token and mark the backing position",
    body:
      "The adapter burns the seized vault token and marks the real LP position as in settlement so the backing supply cannot remain outstanding.",
  },
  {
    title: "Settle the LP position and close the liquidation",
    body:
      "Avana unwinds, sells, auctions, or transfers the real LP position, repays execution liquidity, pays the liquidator reward, and routes any surplus by the market rule.",
  },
]

const stateTransitions = [
  {
    title: "ACTIVE to LIQUIDATING",
    body:
      "Once Aave permits liquidation, the selected position leaves ACTIVE state and enters LIQUIDATING state. The borrower should no longer be able to withdraw it.",
  },
  {
    title: "LIQUIDATING to SETTLED",
    body:
      "After the real LP position has been unwound or sold, the backing supply is cleared and the position becomes SETTLED.",
  },
  {
    title: "State rule",
    body:
      "A vault token cannot remain outstanding after its backing LP position has been removed. If the vault tokens are burned, the LP position must be withdrawn, unwound, or moved into settlement.",
  },
]

export default function LiquidationFlowPage() {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_220px] xl:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader
          title="Liquidation Flow"
          description="Operational sequence for how unhealthy LP-backed positions are unwound once liquidation is triggered."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            This page expands the canonical liquidation design into an operator-facing runtime
            sequence. It explains how liquidation is executed in practice without redefining the
            policy rules.
          </p>
          <p className="type-body-copy text-gray-600">
            Avana treats LP liquidation as a controlled unwind problem. The node or keeper must
            repay debt, seize the vault collateral, burn the matching vault token, settle the real
            LP position, and preserve any residual borrower value.
          </p>
        </section>

        <section id="canonical-reference" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Canonical Reference</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The protocol source of truth for liquidation policy remains the main{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            page. This support page assumes the same recoverable-value valuation model described in{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>{" "}
            and the same position-level aggregation described in{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>
            .
          </p>
          <p className="type-body-copy text-gray-600">
            Use this page for execution flow, not for new policy assumptions. Thresholds, reward
            rules, and admissibility rules should always be read from the canonical architecture and
            risk docs.
          </p>
        </section>

        <section id="runtime-sequence" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Runtime Sequence</h2>
          <div className="space-y-4">
            {runtimeSteps.map((step, index) => (
              <div key={step.title}>
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-semibold text-[#01AACF]">{index + 1}.</span>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="type-body-copy text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="state-transitions" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">State Transitions</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Different LP families share the same liquidation objective but not the same exit path.
            That is why Avana treats venue handling as an adapter problem rather than assuming a
            single unwind function for every pool type.
          </p>
          <div className="space-y-4">
            {stateTransitions.map((item) => (
              <div key={item.title}>
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                <p className="type-body-copy text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="operator-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Operator Notes</h2>
          <div className="space-y-3 type-body-copy text-gray-600">
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

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Operator-facing runtime sequence for liquidation nodes and keepers."
        sectionColor="amber"
      />
    </div>
  )
}
