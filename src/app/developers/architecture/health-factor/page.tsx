import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Health Factor",
  description:
    "How AMM Market compares adjusted collateral value and debt inside a Borrow Spoke to determine position safety and liquidation eligibility.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "calculation", title: "Calculation" },
  { id: "health-bands", title: "Monitoring Bands" },
  { id: "response-path", title: "Response Path" },
  { id: "user-actions", title: "User Actions" },
]

export default function HealthFactorPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div className="max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Health Factor</h1>
        <p className="mb-8 text-lg text-gray-600">
          How adjusted collateral value and debt interact inside a Borrow Spoke to determine
          position safety.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The health factor is the protocol&apos;s shorthand for the relationship between
            risk-adjusted collateral value and outstanding debt. It is driven by the same valuation,
            collateral-factor, and liquidation assumptions used everywhere else in AMM Market.
          </p>
          <p className="text-sm text-gray-600">
            When health deteriorates far enough that debt exceeds the allowed borrowing boundary, the
            position becomes liquidatable under the canonical{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
        </section>

        <section id="calculation" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Calculation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Health is computed per Borrow Spoke. The numerator is the user&apos;s adjusted collateral
            value inside that spoke, which already reflects position-level valuation, collateral
            factors, pool-level risk, and conservative recoverable-value assumptions.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <code className="text-sm text-gray-900">
              healthFactor = adjustedCollateralValue / outstandingDebt
            </code>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            If a user has collateral across multiple Borrow Spokes, each spoke has its own health
            calculation. One spoke&apos;s surplus does not automatically rescue another spoke&apos;s
            shortfall.
          </p>
        </section>

        <section id="health-bands" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Monitoring Bands</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Healthy buffer:</strong> collateral value remains
              well above debt, leaving room for normal market movement.
            </p>
            <p>
              <strong className="text-gray-900">Watchlist:</strong> the account still passes checks,
              but the margin is thinning enough that user action is sensible.
            </p>
            <p>
              <strong className="text-gray-900">Liquidatable:</strong> the account has reached or
              fallen through the liquidation boundary, so the liquidation process can take over.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Interface warning bands may be more conservative than the hard liquidation boundary, but
            they should be understood as monitoring aids, not as separate protocol mechanics.
          </p>
        </section>

        <section id="response-path" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Response Path</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              If health weakens, the first response is user-driven: repay debt, add approved LP
              collateral, or reduce exposure through position changes that still pass health checks.
            </p>
            <p>
              If health crosses the liquidation boundary, the protocol shifts from monitoring to
              settlement. Liquidation nodes and third-party liquidators can then unwind the minimum
              required collateral path to restore solvency.
            </p>
          </div>
        </section>

        <section id="user-actions" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">User Actions</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Borrowing more lowers health because debt rises</li>
            <li>Repaying debt improves health immediately</li>
            <li>Adding approved collateral can increase remaining borrowing headroom</li>
            <li>Claiming fees, withdrawing collateral, or re-ranging positions may reduce health and must be checked carefully</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Use{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">
              Collateral Factors
            </Link>{" "}
            for the numerator logic and{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>{" "}
            for what happens once health is no longer sufficient.
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How AMM Market measures account safety inside a Borrow Spoke using the same risk-adjusted collateral model that drives liquidation."
        sectionColor="violet"
      />
    </div>
  )
}
