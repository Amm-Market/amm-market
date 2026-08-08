import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('liquidation/flow', {
    title: "Liquidation Flow",
    description: "Operational liquidation flow for Avana, covering the runtime sequence used when vault-backed LP collateral is seized and unwound.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "canonical-reference", title: "Related Policy Docs" },
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
      "The liquidator acquires temporary liquidity, commonly through a flashloan-style path, so debt can be repaid without pre-funding the full unwind out of pocket.",
  },
  {
    title: "Repay debt and seize the vault collateral",
    body:
      "The relevant Borrow Spoke settles debt into the credit layer, takes custody of the vault collateral, and hands the position into LP-specific settlement.",
  },
  {
    title: "Burn the vault token and mark the backing position",
    body:
      "The adapter burns the seized vault token and marks the real LP position as in settlement so the backing supply cannot remain outstanding against a position that is already being unwound.",
  },
  {
    title: "Settle the LP position and close the liquidation",
    body:
      "Avana unwinds, sells, auctions, or transfers the real LP position, repays execution liquidity, pays the liquidator reward, and routes any surplus according to the market rule.",
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

export default async function LiquidationFlowPage() {
  return withDocsI18n("liquidation/flow", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Liquidation Flow"
          description="Runtime sequence for how unhealthy LP-backed positions move from detection through settlement once liquidation starts."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            This page is the runtime view of liquidation. It is written for the moment an account is
            already unhealthy and an operator needs to understand what happens next, in order, from
            detection through final settlement.
          </p>
          <p className="type-body-copy text-gray-600">
            LP liquidation is a controlled unwind rather than a single token sale. Debt is repaid,
            vault collateral is seized, the matching vault token is burned, the real LP position is
            settled, and residual value is returned if any remains.
          </p>
        </section>

        <section id="canonical-reference" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Related Policy Docs</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Liquidation policy lives on the{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            page. This flow assumes the recoverable value model in{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>{" "}
            and position level aggregation in{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>
            .
          </p>
          <p className="type-body-copy text-gray-600">
            Use this page for execution order. Thresholds, rewards, and admission rules still come
            from the architecture and risk docs, not from this checklist by itself.
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
            Different LP families are all trying to reach the same end state, but they do not get
            there through identical exits. Adapter-based handling lets each pool family follow the
            unwind path that matches its own mechanics.
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
              Liquidation bots should index active positions, refresh debt drift, and price
              accounts from the same oracle stack used by the protocol rather than from raw AMM
              spot state alone.
            </p>
            <p>
              Profitability checks should account for slippage, route depth, flashloan costs, and
              execution risk. Large or unusual unwinds may benefit from private execution paths to
              reduce adverse MEV exposure.
            </p>
            <p>
              Treat this page as a runtime checklist. Keep policy details on the main liquidation,
              oracle, and risk pages.
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
  ))
}
