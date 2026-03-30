import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Claim LP Fees",
  description:
    "Claim accrued LP fees in Avana without fully unwinding principal liquidity, subject to post-claim health checks.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "health-checks", title: "Health Checks" },
  { id: "fee-accounting", title: "Fee Accounting" },
  { id: "key-benefits", title: "Key Benefits" },
]

export default function ClaimLPFeesPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Claim LP Fees"

          description="Claim realized fee income while keeping LP principal active as collateral, as long as the account remains healthy afterwards."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana separates principal liquidity from accrued fees in its valuation model. That
            makes it possible to recognize fee income and, when permitted by health checks, release
            claimed fees without forcing a full LP unwind.
          </p>
          <p className="text-sm text-gray-600">
            Fee claiming is therefore a collateral-aware operation, not just a convenience action.
          </p>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">How It Works</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              The protocol routes a venue-appropriate fee-collection operation for the LP position.
              For concentrated-liquidity positions, that may look like a collect-style call without a
              full principal exit. For fungible LPs, the venue&apos;s own fee-claim path is used when
              available.
            </p>
            <p>
              The important protocol-level rule is consistent across LP types: claim only the fee
              component, keep the principal position active, and sync the resulting state back into
              the Borrow Spoke.
            </p>
          </div>
        </section>

        <section id="health-checks" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health Checks</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The Borrow Spoke checks health before and after a fee claim because fees can still be
            part of the recognized collateral buffer prior to withdrawal.
          </p>
          <p className="text-sm text-gray-600">
            If removing the claimed fee value would leave the account too close to or beyond the
            allowed borrowing boundary, the claim path should be blocked until debt is reduced or
            more collateral is added.
          </p>
        </section>

        <section id="fee-accounting" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Fee Accounting</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Oracle outputs distinguish principal liquidity from accrued fees so the protocol can
              reason about productive collateral more accurately than a simple token balance model.
            </p>
            <p>
              That distinction matters in liquidation too: accrued fees may be applied before
              principal LP liquidity needs to be unwound.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            The canonical references are{" "}
            <Link href="/developers/integrations/price-oracles" className="text-blue-600 hover:underline">
              Price Oracles
            </Link>{" "}
            and{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
        </section>

        <section id="key-benefits" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Key Benefits</h2>
          <ul className="space-y-2 text-gray-600">
            <li>LP principal can stay productive in the pool</li>
            <li>Earned fees can be realized without fully closing the collateral position</li>
            <li>The same risk engine that prices the LP also protects fee claims from over-withdrawal</li>
          </ul>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How accrued LP fees are recognized and, when safe, claimed without fully unwinding collateral."
        sectionColor="emerald"
      />
    </div>
  )
}
