import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Manage Loans",
  description:
    "Manage debt against LP collateral in AMM Market by monitoring health, adjusting positions, and staying inside Borrow Spoke and Hub constraints.",
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div className="max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Manage Loans</h1>
        <p className="mb-8 text-lg text-gray-600">
          Ongoing loan management means watching health, adjusting LP collateral carefully, and
          staying inside spoke-level borrowing limits.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="leading-relaxed text-gray-600">
            A live AMM Market loan is not static. Borrowing headroom changes as LP positions move,
            fee balances change, markets reprice, and Hub liquidity conditions evolve. Managing a
            loan means treating collateral and debt as a linked position rather than as unrelated
            actions.
          </p>
        </section>

        <section id="borrowing-more" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Borrowing More</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            You can borrow more only when the Borrow Spoke still shows unused aggregate capacity and
            the Hub can supply the requested asset.
          </p>
          <p className="text-sm text-gray-600">
            Partial repayment is the opposite lever: it reduces debt immediately, improves health,
            and creates more room for later actions such as withdrawals or position changes.
          </p>
        </section>

        <section id="monitoring-health" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Monitoring Health</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Healthy:</strong> adjusted collateral value remains
              comfortably above debt, leaving room for normal market moves.
            </p>
            <p>
              <strong className="text-gray-900">Watchlist:</strong> the account still passes checks,
              but the remaining buffer is thinning. This is the point to repay, add approved
              collateral, or reduce exposure.
            </p>
            <p>
              <strong className="text-gray-900">Liquidatable:</strong> debt has moved too close to or
              beyond the allowed borrowing boundary, so the liquidation framework can take over.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            For the canonical definition, use{" "}
            <Link href="/developers/architecture/health-factor" className="text-blue-600 hover:underline">
              Health Factor
            </Link>{" "}
            rather than treating UI warning bands as separate protocol mechanics.
          </p>
        </section>

        <section id="operational-control" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Operational Control</h2>
          <ul className="space-y-3 text-gray-600">
            <li>Repay part of the debt to restore room</li>
            <li>Add more approved LP collateral to the same Borrow Spoke</li>
            <li>Claim accrued fees when post-claim health checks still pass</li>
            <li>Withdraw or resize collateral only when the remaining account stays healthy</li>
          </ul>
        </section>

        <section id="position-changes" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Position Changes</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Concentrated-liquidity positions may need re-ranging or replacement over time. Fungible
              LP positions may be resized or rotated within the supported collateral set.
            </p>
            <p>
              The protocol does not treat these as cosmetic edits. Any change that alters LP
              exposure is re-evaluated through the same admission, valuation, and health checks used
              for deposits and borrows.
            </p>
          </div>
        </section>

        <section id="key-constraints" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Key Constraints</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Collateral changes cannot leave debt above allowed spoke capacity</li>
            <li>New positions must remain inside the approved pool set</li>
            <li>Borrow actions still depend on Hub liquidity and caps</li>
            <li>At-risk accounts should use repayment or collateral addition before liquidation is triggered</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Keep{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">
              Collateral Factors
            </Link>{" "}
            as the main references when making changes to a live loan.
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How to manage live debt against LP collateral without drifting outside spoke-level health constraints."
        sectionColor="emerald"
      />
    </div>
  )
}
