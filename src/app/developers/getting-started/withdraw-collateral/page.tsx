import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Withdraw Collateral",
  description:
    "How LP collateral is released from AMM Market once debt is repaid or the remaining account can still pass health checks after withdrawal.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "withdrawal-process", title: "Withdrawal Process" },
  { id: "position-modifications", title: "Position Modifications" },
  { id: "after-withdrawal", title: "After Withdrawal" },
]

export default function WithdrawCollateralPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div className="max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Withdraw Collateral</h1>
        <p className="mb-8 text-lg text-gray-600">
          Collateral can leave the Borrow Spoke once debt is cleared or the remaining account still
          satisfies all health checks after the withdrawal.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Withdrawing collateral is the reverse of deposit. The protocol releases LP positions only
            when doing so will not leave outstanding debt undersecured.
          </p>
          <p className="text-sm text-gray-600">
            Full debt repayment is the cleanest withdrawal path, but some collateral changes may also
            be possible while debt remains outstanding if the post-change account still passes the
            same valuation and health checks used everywhere else in the protocol.
          </p>
        </section>

        <section id="withdrawal-process" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Withdrawal Process</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">1. Reduce or clear debt:</strong> repay enough so the
              remaining account can support any collateral that stays in place.
            </p>
            <p>
              <strong className="text-gray-900">2. Recompute borrowing capacity:</strong> the Borrow
              Spoke recalculates the aggregate account after removing the requested LP position or
              resizing it.
            </p>
            <p>
              <strong className="text-gray-900">3. Release the LP position:</strong> if post-withdraw
              health is valid, the protocol returns or unlocks the collateral for normal user control.
            </p>
          </div>
        </section>

        <section id="position-modifications" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Position Modifications</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Some users will not fully exit collateral when they make changes. Instead, they may
              resize a fungible LP position, replace a concentrated-liquidity range, or rotate into a
              different approved position inside the same spoke.
            </p>
            <p>
              Those changes are only valid if the new or remaining collateral still belongs to the
              approved set and the resulting account remains above the liquidation boundary.
            </p>
          </div>
        </section>

        <section id="after-withdrawal" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">After Withdrawal</h2>
          <ul className="space-y-2 text-gray-600">
            <li>The LP position returns to normal user control</li>
            <li>The user may keep it in the underlying pool, re-range it, or exit liquidity entirely</li>
            <li>
              It can also be redeposited later through{" "}
              <Link href="/developers/getting-started" className="text-blue-600 hover:underline">
                Deposit LP
              </Link>{" "}
              if the pool remains approved
            </li>
          </ul>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How LP collateral is released once the remaining account still satisfies AMM Market health checks."
        sectionColor="emerald"
      />
    </div>
  )
}
