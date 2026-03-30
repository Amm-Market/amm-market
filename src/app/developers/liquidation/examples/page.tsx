import type { Metadata } from "next"
import Link from "next/link"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Liquidation Examples",
  description:
    "Illustrative liquidation examples for Avana. Compare how fungible LPs, concentrated liquidity, and multi-position accounts can be unwound under the canonical framework.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "fungible-lp", title: "Fungible LP Example" },
  { id: "concentrated-liquidity", title: "Concentrated Example" },
  { id: "multi-position-account", title: "Multi-Position Account" },
  { id: "edge-cases", title: "Edge Cases" },
  { id: "summary", title: "Summary" },
]

const edgeCases = [
  "The position may be mostly one-sided by the time liquidation starts, especially for concentrated liquidity.",
  "Pool depth may be sufficient for valuation but still thin enough to require conservative unwind routing.",
  "Claimable fees can improve recoveries, but they should not be treated as guaranteed until actually realized.",
  "A borrower may have several positions contributing to one spoke-level borrowing capacity, so liquidation sequencing matters.",
]

export default function LiquidationExamplesPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Liquidation Examples"

          description="Illustrative scenarios showing how the same liquidation framework applies to different LP collateral types."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            These examples are intentionally simplified. They show the shape of a liquidation
            without introducing extra protocol rules beyond the canonical{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600">
            In every case, Avana values collateral conservatively, repays debt into the credit
            layer, unwinds the LP position through a supported path, and returns residual value after
            execution costs and liquidation premium are settled.
          </p>
        </section>

        <section id="fungible-lp" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Fungible LP Example</h2>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="mb-4 text-sm text-gray-600">
              A borrower has deposited a fungible LP token from an approved stable or weighted pool.
              The account falls below allowed borrowing capacity after pool composition and oracle
              inputs move against it.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• The liquidation node detects the shortfall and sources execution liquidity.</li>
              <li>• Debt is repaid and the LP token is redeemed into its underlying assets.</li>
              <li>• Claimable fees are realized if available and helpful to recovery.</li>
              <li>• Underlying assets are routed into the debt asset and the liquidation closes.</li>
              <li>• Any value left after repayment and premium is returned to the borrower.</li>
            </ul>
          </div>
        </section>

        <section id="concentrated-liquidity" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Concentrated Liquidity Example</h2>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="mb-4 text-sm text-gray-600">
              A concentrated liquidity position drifts toward the edge of its active range. The
              account remains healthy for a time, then becomes liquidatable when debt outpaces the
              recoverable value of the position.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• The node values the position from its current range, liquidity, and token split.</li>
              <li>• Once liquidation begins, claimable fees are checked before principal is unwound.</li>
              <li>• Because the position may now be mostly one-sided, routing logic adapts to the actual inventory recovered.</li>
              <li>• Settlement follows the same pattern: repay execution liquidity, pay premium, return residual value.</li>
            </ul>
          </div>
        </section>

        <section id="multi-position-account" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Multi-Position Account</h2>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="mb-4 text-sm text-gray-600">
              A borrower may hold several LP positions inside one Borrow Spoke. Borrowing capacity is
              aggregated across those positions, but liquidation still works at the position level.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• The spoke reports one aggregate borrowing capacity to the Hub.</li>
              <li>• When the account becomes unhealthy, the liquidation node chooses the unwind path that best restores solvency.</li>
              <li>• One position may be enough to close the shortfall, or several may need to be partially or fully unwound.</li>
              <li>• This is why execution ordering, oracle consistency, and route depth matter as much as raw spot value.</li>
            </ul>
          </div>
        </section>

        <section id="edge-cases" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Edge Cases</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {edgeCases.map((item) => (
              <li key={item} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="summary" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Summary</h2>
          <p className="leading-relaxed text-gray-600">
            Across fungible LPs, concentrated liquidity, and multi-position accounts, the protocol is
            solving the same problem: convert LP collateral into recoverable debt repayment without
            relying on optimistic NAV. The details of the unwind change, but the policy framework does
            not.
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="Illustrative support page for how the liquidation framework applies across LP families."
        sectionColor="amber"
      />
    </div>
  )
}
