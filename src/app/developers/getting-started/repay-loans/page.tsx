import Link from "next/link"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Repay Loans",
  description:
    "How repayment works in Avana, including debt-share reduction, Hub settlement, and the path back to collateral withdrawal.",
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Repay Loans"

          description="Repayment reduces debt shares, improves health, and is the cleanest path back to free collateral movement."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Repaying reduces the liability side of the account without changing LP exposure. That
            means every successful repayment immediately improves the user&apos;s remaining borrowing
            headroom.
          </p>
          <p className="text-sm text-gray-600">
            Even partial repayments can meaningfully reduce liquidation risk when the account is
            moving closer to the boundary.
          </p>
        </section>

        <section id="repay-process" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Repay Process</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">1. Choose an amount:</strong> repay a partial amount
              to restore room or the full balance to exit the debt side entirely.
            </p>
            <p>
              <strong className="text-gray-900">2. Submit the debt asset:</strong> the repayment is
              routed back through the Borrow Spoke and settled against the outstanding liability.
            </p>
            <p>
              <strong className="text-gray-900">3. Recompute health:</strong> once debt shares are
              reduced, the account&apos;s health factor and remaining capacity update automatically.
            </p>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Technical Details</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Repayment is fundamentally a debt-share reduction. Whether a user repays by specifying
              an asset amount or, where supported, a share amount, the protocol resolves the payment
              into lower outstanding debt.
            </p>
            <p>
              The Borrow Spoke updates local debt state and settles the repayment against Hub-side
              liquidity accounting so the shared monetary layer and the LP-collateral layer stay in
              sync.
            </p>
          </div>
        </section>

        <section id="liquidation-scenario" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">When Repayment Is Urgent</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            If the account is approaching liquidation eligibility, repayment is one of the fastest
            ways to restore safety because it directly lowers debt without depending on new collateral
            admission or market recovery.
          </p>
          <p className="text-sm text-gray-600">
            Once the liquidation boundary is crossed, the root{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>{" "}
            becomes the canonical process.
          </p>
        </section>

        <section id="full-repayment" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Full Repayment</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Once debt is reduced to zero, the account no longer needs collateral to secure a live
            borrow. At that point the associated LP positions can be released back into normal user
            control through the collateral-withdrawal path.
          </p>
          <p className="text-sm text-gray-600">
            Depending on the collateral implementation, the final release may happen automatically or
            through an explicit follow-up action. See{" "}
            <Link href="/developers/getting-started/withdraw-collateral" className="text-blue-600 hover:underline">
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
