import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('getting-started/claim-lp-fees', {
    title: "Claim LP Fees",
    description: "How to claim accrued LP trading fees on Avana without exiting your collateral position.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "how-it-works", title: "How It Works" },
  { id: "health-checks", title: "Health Checks" },
  { id: "fee-accounting", title: "Fee Accounting" },
  { id: "key-benefits", title: "Key Benefits" },
]

export default async function ClaimLPFeesPage() {
  return withDocsI18n("getting-started/claim-lp-fees", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Claim LP Fees"
          description="Claim trading fees from your LP position while it stays active as collateral."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana tracks principal liquidity and accrued fees separately. That means you can claim
            fee income from your LP without closing the position that backs your loan.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Fee claims still affect your collateral value, so Avana runs a health check before and
            after the claim. If claiming fees would push your account below the required collateral
            boundary, the claim is blocked until you repay debt or add more collateral.
          </p>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">How It Works</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              In the Avana interface, open the claim-fees action for your deposited position. Avana
              routes the claim through the DEX-specific path for that LP type.
            </p>
            <p>
              For concentrated-liquidity DEXs, that is typically a collect-style call that pulls
              accrued fees while leaving principal in the pool. For fungible LP tokens, Avana uses
              the DEX&apos;s native fee-claim path when one is available.
            </p>
            <p>
              After fees are claimed, Avana syncs the updated position state back into the Borrow
              Spoke so health and borrowing capacity reflect the new balance.
            </p>
          </div>
        </section>

        <section id="health-checks" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health Checks</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Accrued fees can count toward your collateral buffer until they are claimed. When you
            claim fees, that value leaves the position, which can lower health if your account is
            already close to the liquidation threshold.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Repay debt or add collateral first if a fee claim would leave your account under the
            required boundary.
          </p>
        </section>

        <section id="fee-accounting" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Fee Accounting</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Avana&apos;s oracle model separates principal value from fee value so the protocol
              knows how much of the position is core liquidity and how much is claimable fee income.
            </p>
            <p>
              During liquidation, accrued fees may be applied before principal liquidity is unwound,
              reducing how much of the core LP position has to be disturbed to cover debt.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            See{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>{" "}
            and{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
        </section>

        <section id="key-benefits" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Key Benefits</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Your LP principal keeps earning fees and stays active in the pool while you borrow.</li>
            <li>You can realize fee income without unwinding the collateral position.</li>
            <li>Health checks prevent fee claims from pulling out too much value and leaving debt undersecured.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How to claim accrued LP trading fees without exiting your collateral position."
        sectionColor="emerald"
      />
    </div>
  ))
}
