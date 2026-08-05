import Link from "next/link"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Repay Loans",
  description:
    "How repayment reduces debt in Avana, updates debt shares, settles against the Hub, and clears the path back to collateral release.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "repay-process", title: "Repay Process" },
  { id: "technical-details", title: "Technical Details" },
  { id: "liquidation-scenario", title: "When Repayment Is Urgent" },
  { id: "full-repayment", title: "Full Repayment" },
]

export default function RepayLoansPage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Repay Loans"

          description="Repayment lowers debt, improves account health, and is usually the cleanest way to regain freedom over collateral."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Repayment changes the debt side of the account without changing the LP position itself.
            When debt goes down, the account gets healthier immediately because the same collateral
            is now supporting a smaller liability.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Full repayment is not required for repayment to matter. Even a partial reduction can
            restore useful headroom when the account is drifting toward the liquidation boundary.
          </p>
        </section>

        <section id="repay-process" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Repay Process</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">1. Choose an amount:</strong> repay a partial amount
              to regain breathing room, or repay the full balance to leave the debt side entirely.
            </p>
            <p>
              <strong className="text-gray-900">2. Submit the debt asset:</strong> the repayment is
              routed back through the Borrow Spoke and applied against the outstanding liability.
            </p>
            <p>
              <strong className="text-gray-900">3. Recompute health:</strong> once debt shares are
              reduced, the account&apos;s health factor and remaining capacity update from the new
              lower debt balance.
            </p>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Technical Details</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Repayment is fundamentally a debt-share reduction. Whether a user repays by specifying
              an asset amount or, where supported, a share amount, the protocol resolves the payment
              into fewer outstanding debt shares and therefore less debt.
            </p>
            <p>
              The Borrow Spoke updates local debt state and settles the repayment against Hub-side
              liquidity accounting so the shared liquidity layer and the LP-collateral layer keep
              the same picture of the account.
            </p>
          </div>
        </section>

        <section id="liquidation-scenario" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">When Repayment Is Urgent</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            When an account is getting close to liquidation, repayment is one of the fastest ways to
            improve safety because it directly reduces debt. It does not depend on waiting for the
            market to recover or on onboarding more collateral first.
          </p>
          <p className="text-sm text-gray-600">
            Once the liquidation boundary is crossed, the root{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            becomes the canonical process.
          </p>
        </section>

        <section id="full-repayment" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Full Repayment</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Once debt reaches zero, the account no longer needs collateral to secure an active
            borrow. At that point the LP positions attached to that account can move back toward
            normal user control through the collateral-withdrawal path.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Depending on the collateral implementation, the final release may happen automatically or
            through an explicit follow-up action. See{" "}
            <Link href="/developers/getting-started/withdraw-collateral" className="text-[#01AACF] hover:underline">
              Withdraw Collateral
            </Link>{" "}
            for the canonical release flow.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How repayment lowers debt, restores health, and unlocks collateral release in Avana."
        sectionColor="emerald"
      />
    </div>
  )
}
