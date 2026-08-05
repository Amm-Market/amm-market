import Link from "next/link"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Manage Loans",
  description:
    "Manage open debt against LP collateral in Avana by watching health, updating positions carefully, and staying inside spoke and Hub limits.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "borrowing-more", title: "Borrowing More" },
  { id: "monitoring-health", title: "Monitoring Health" },
  { id: "operational-control", title: "Operational Control" },
  { id: "position-changes", title: "Position Changes" },
  { id: "key-constraints", title: "Key Constraints" },
]

export default function ManageLoansPage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Manage Loans"

          description="Managing an open loan means treating collateral, debt, and venue state as one live position instead of separate actions."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="leading-relaxed text-gray-600">
            A live Avana loan keeps moving even when the borrower does nothing. LP inventory shifts,
            fees accrue, markets reprice, and available Hub liquidity can change. Good loan
            management means following those moving parts together instead of looking only at the
            debt number in isolation.
          </p>
        </section>

        <section id="borrowing-more" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowing More</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowing more is only possible when the Borrow Spoke still shows unused capacity after
            revaluing the current positions and the Hub can still provide the requested asset.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Partial repayment moves in the other direction. It reduces debt immediately, improves
            health, and often creates the room needed for later actions such as withdrawals,
            re-ranging, or collateral replacement.
          </p>
        </section>

        <section id="monitoring-health" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Monitoring Health</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Healthy:</strong> adjusted collateral value remains
              comfortably above debt, leaving space for ordinary price movement and position drift.
            </p>
            <p>
              <strong className="text-gray-900">Watchlist:</strong> the account still passes checks,
              but the remaining buffer is getting thin. This is the time to repay, add approved
              collateral, or cut exposure before conditions get worse.
            </p>
            <p>
              <strong className="text-gray-900">Liquidatable:</strong> debt has moved too close to or
              beyond the allowed borrowing boundary, so the liquidation framework is allowed to take
              over.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            For the canonical definition, use{" "}
            <Link href="/developers/architecture/health-factor" className="text-[#01AACF] hover:underline">
              Health Factor
            </Link>{" "}
            rather than treating UI warning bands as separate protocol mechanics.
          </p>
        </section>

        <section id="operational-control" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Operational Control</h2>
          <ul className="space-y-3 text-gray-600">
            <li>Repay part of the debt to rebuild buffer</li>
            <li>Add more approved LP collateral to the same Borrow Spoke</li>
            <li>Claim accrued fees only when the account still passes post-claim health checks</li>
            <li>Withdraw or resize collateral only when the remaining account still stays healthy</li>
          </ul>
        </section>

        <section id="position-changes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Position Changes</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Concentrated-liquidity positions may need re-ranging or replacement as market price
              moves. Fungible LP positions may be resized or rotated within the supported collateral
              set.
            </p>
            <p>
              The protocol does not treat those moves as cosmetic edits. Any change that alters LP
              exposure is pushed back through the same admission, valuation, and health checks used
              for deposits and borrows.
            </p>
          </div>
        </section>

        <section id="key-constraints" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Key Constraints</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Collateral changes cannot leave the remaining debt above allowed spoke capacity</li>
            <li>New or replacement positions must stay inside the approved pool set</li>
            <li>Borrow actions still depend on Hub liquidity and active caps</li>
            <li>At-risk accounts should use repayment or collateral addition before liquidation is triggered</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Keep{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>{" "}
            as the main references when making changes to a live loan.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How to manage live debt against LP collateral without drifting outside spoke-level health constraints."
        sectionColor="emerald"
      />
    </div>
  )
}
