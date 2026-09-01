import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('getting-started/withdraw-collateral', {
    title: "Withdraw Collateral",
    description: "How to withdraw LP collateral from Avana after repaying debt or when your account stays healthy.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "withdrawal-process", title: "Withdrawal Process" },
  { id: "partial-withdrawal", title: "Partial Withdrawal" },
  { id: "after-withdrawal", title: "After Withdrawal" },
]

export default async function WithdrawCollateralPage() {
  return withDocsI18n("getting-started/withdraw-collateral", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Withdraw Collateral"
          description="Withdraw your LP position from Avana when debt is cleared or your account stays healthy without it."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Withdrawing returns your LP position from Avana custody back to your wallet. The easiest
            path is full debt repayment first — once debt is zero, collateral is no longer securing
            a loan and withdrawal is straightforward.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            You can also withdraw while debt is still open if the remaining collateral still supports
            the outstanding debt after the withdrawal. Avana runs a health check before releasing
            the position.
          </p>
        </section>

        <section id="withdrawal-process" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Withdrawal Process</h2>
          <div className="space-y-5 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">1. Repay debt if needed</p>
              <p className="mt-1 leading-relaxed">
                If you still owe debt, repay enough so the remaining collateral can support what is
                left. Full repayment is the simplest path.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">2. Request withdrawal</p>
              <p className="mt-1 leading-relaxed">
                In the Avana interface, select the LP position you want to withdraw and confirm the
                transaction.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">3. Health check and release</p>
              <p className="mt-1 leading-relaxed">
                The Borrow Spoke recalculates your account without the withdrawn position. If health
                is still valid, the LP token or position NFT is returned to your wallet.
              </p>
            </div>
          </div>
        </section>

        <section id="partial-withdrawal" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Partial Withdrawal</h2>
          <p className="leading-relaxed text-gray-600">
            You can withdraw one LP position while keeping others deposited, or withdraw part of a
            fungible LP balance, as long as the remaining collateral still covers open debt. Each
            withdrawal is checked individually against your current health factor.
          </p>
        </section>

        <section id="after-withdrawal" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">After Withdrawal</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Your LP returns to your wallet and you control it directly again</li>
            <li>You can keep it in the pool, adjust the range on the DEX, or exit liquidity entirely</li>
            <li>
              You can deposit it again later through{" "}
              <Link href="/developers/getting-started" className="text-[#01AACF] hover:underline">
                Deposit LP
              </Link>{" "}
              if the pool is still approved
            </li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How to withdraw LP collateral from Avana after repaying debt or when health allows."
        sectionColor="emerald"
      />
    </div>
  ))
}
