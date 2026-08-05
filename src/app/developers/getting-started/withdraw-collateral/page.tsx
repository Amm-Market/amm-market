import Link from "next/link"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Withdraw Collateral",
  description:
    "How LP collateral leaves Avana after debt is repaid or after the remaining account still passes health checks without the withdrawn position.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "withdrawal-process", title: "Withdrawal Process" },
  { id: "position-modifications", title: "Position Modifications" },
  { id: "after-withdrawal", title: "After Withdrawal" },
]

export default function WithdrawCollateralPage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Withdraw Collateral"

          description="Collateral can leave the Borrow Spoke only when the account can still support its debt after the requested position is removed or resized."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Withdrawing collateral is the reverse side of deposit, but it is not just an asset
            transfer. Before the protocol releases an LP position, it has to prove that removing
            that collateral will not leave the remaining debt undersecured.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Full debt repayment is the cleanest path because it removes the need for collateral
            entirely. But Avana can also allow some collateral changes while debt remains open if
            the post-change account still passes the same valuation and health checks used
            everywhere else in the system.
          </p>
        </section>

        <section id="withdrawal-process" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Withdrawal Process</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">1. Reduce or clear debt:</strong> repay enough so the
              remaining account can still be supported by the collateral left behind.
            </p>
            <p>
              <strong className="text-gray-900">2. Recompute borrowing capacity:</strong> the Borrow
              Spoke recalculates the account after removing the requested LP position or resizing
              it, rather than assuming the old capacity still applies.
            </p>
            <p>
              <strong className="text-gray-900">3. Release the LP position:</strong> if post-withdraw
              health is valid, the protocol returns or unlocks the collateral so the user can manage
              it outside the spoke again.
            </p>
          </div>
        </section>

        <section id="position-modifications" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Position Modifications</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Not every collateral change is a full exit. A user may resize a fungible LP position,
              replace a concentrated-liquidity range, or rotate into a different approved position
              while keeping the same loan open.
            </p>
            <p>
              Those changes are only valid when the new or remaining collateral still belongs to the
              approved set and the resulting account stays above the liquidation boundary after the
              change is applied.
            </p>
          </div>
        </section>

        <section id="after-withdrawal" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">After Withdrawal</h2>
          <ul className="space-y-2 text-gray-600">
            <li>The LP position returns to normal user control</li>
            <li>The user can keep it in the underlying pool, re-range it, or exit liquidity entirely</li>
            <li>
              It can also come back later through{" "}
              <Link href="/developers/getting-started" className="text-[#01AACF] hover:underline">
                Deposit LP
              </Link>{" "}
              if the pool remains approved
            </li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How LP collateral is released once the remaining account still satisfies Avana health checks."
        sectionColor="emerald"
      />
    </div>
  )
}
