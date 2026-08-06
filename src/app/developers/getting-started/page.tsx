import Link from "next/link"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Getting Started - Deposit LP",
  description:
    "Learn how supported LP positions enter Avana as collateral and how each admitted position starts contributing borrowing capacity inside a Borrow Spoke.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "deposit-flow", title: "Deposit Flow" },
  { id: "technical-details", title: "Technical Details" },
  { id: "supported-lp-tokens", title: "Supported LP Position Types" },
  { id: "after-deposit", title: "After Deposit" },
]

const supportedFamilies = [
  {
    family: "Concentrated liquidity positions",
    examples: "Range-bound NFT or position-manager based LPs",
    notes: "Range, tick position, and fee accrual are part of the valuation path.",
  },
  {
    family: "Fungible stable or correlated LPs",
    examples: "Stable-swap and tightly correlated pool shares",
    notes: "Pool inventory and unwind quality drive conservative borrowing power.",
  },
  {
    family: "Weighted and multi-asset LPs",
    examples: "Weighted baskets and multi-token pools",
    notes: "Each supported family is admitted only through approved pool templates.",
  },
]

export default function DepositLPPage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Deposit LP"

          description="Deposit moves a supported LP position under spoke custody so Avana can account for it as collateral and turn it into borrowable capacity."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Depositing is how an LP position becomes usable inside Avana. The Borrow Spoke takes
            custody of the supported position, records the state it needs for valuation, and starts
            treating that position as collateral instead of as a wallet-held asset.
          </p>
          <p className="mb-4 leading-relaxed text-gray-600">
            That does not mean the liquidity disappears from the underlying venue. The position can
            remain active in the AMM while the spoke tracks its exposure, fee state, and risk
            treatment for later borrow and liquidation checks.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>Important:</strong> Avana does not grant borrowing power just because an LP
            position exists. The position must belong to an approved pool family, pass valuation
            checks, and fit the spoke&apos;s current risk configuration.
          </p>
        </section>

        <section id="deposit-flow" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Deposit Flow</h2>
          <div className="space-y-5">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">1. Transfer or Approve the LP Position</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                The user hands the supported LP position to the relevant Borrow Spoke. The exact
                path depends on whether the collateral is fungible or position-specific, but the
                protocol outcome is the same: the spoke must control the asset before it can count
                it as collateral.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">2. Validate the Pool Family</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Next the spoke confirms that the position belongs to an approved pool or template.
                That check is really a package of requirements: oracle coverage must exist, routing
                and liquidation support must exist, and the deployment must already have risk
                settings for that LP family.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">3. Cache Position State</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Once the position is admitted, the protocol stores the state it needs to rebuild the
                position later. That includes the metadata required to reconstruct exposure, monitor
                accrued fees, and refresh borrowing power as prices or pool conditions move.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">4. Add the Position to Aggregate Capacity</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                After valuation and risk discounts are applied, the position adds its own
                contribution to the user&apos;s total borrowing capacity inside that Borrow Spoke.
                When the user later borrows, the Hub relies on that spoke-side capacity update.
              </p>
            </div>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Technical Details</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Position-aware valuation:</strong> the deposit itself
              does not lock in a fixed loan amount. Borrowing power is recalculated from the live LP
              position using the oracle stack and collateral-factor model each time the protocol
              needs an updated view.
            </p>
            <p>
              <strong className="text-gray-900">Format-specific custody:</strong> some LP positions
              are fungible tokens, while others are concentrated-liquidity positions with extra
              metadata. The Borrow Spoke handles those custody differences so the rest of the credit
              system can still reason about them in a consistent way.
            </p>
            <p>
              <strong className="text-gray-900">No forced unwind on deposit:</strong> supplying
              collateral does not mean closing the LP. The unwind path is reserved for later user
              actions or liquidation, not for the initial deposit itself.
            </p>
          </div>
        </section>

        <section id="supported-lp-tokens" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Supported LP Position Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Family</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Examples</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900">Admission Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {supportedFamilies.map((item) => (
                  <tr key={item.family}>
                    <td className="px-4 py-2 font-medium text-gray-900">{item.family}</td>
                    <td className="px-4 py-2 text-gray-600">{item.examples}</td>
                    <td className="px-4 py-2 text-gray-600">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Exact live support is governed by the approved pool list. See{" "}
            <Link href="/developers/integrations/allowed-pools" className="text-[#01AACF] hover:underline">
              Allowed LP Pools
            </Link>{" "}
            for the admission model.
          </p>
        </section>

        <section id="after-deposit" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">After Deposit</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Each approved position now contributes its own discounted value to spoke-level borrowing capacity</li>
            <li>The LP principal stays active in the underlying pool and may continue accruing fees</li>
            <li>Actual borrowing still depends on Hub liquidity, spoke health checks, and collateral-factor limits</li>
            <li>
              The next step in the normal flow is{" "}
              <Link href="/developers/getting-started/borrow-assets" className="text-[#01AACF] hover:underline">
                Borrow Assets
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How a supported LP position enters a Borrow Spoke and becomes part of aggregate borrowing capacity."
        sectionColor="emerald"
      />
    </div>
  )
}
