import Link from "next/link"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Borrow Assets",
  description:
    "How borrowing works against LP collateral in Avana, from spoke-side capacity checks through Hub liquidity and post-borrow health validation.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "borrow-checks", title: "Borrow Checks" },
  { id: "health-check", title: "Health Check" },
  { id: "internal-accounting", title: "Internal Accounting" },
  { id: "borrowable-assets", title: "Borrowable Assets" },
  { id: "borrowing-power", title: "Borrowing Power" },
]

export default function BorrowAssetsPage() {
  return (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Borrow Assets"

          description="Borrow against the combined capacity of admitted LP positions while the Hub provides the shared liquidity layer."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowing starts only after the Borrow Spoke has already admitted and valued the LP
            positions in the account. At that point the user is not asking the protocol to
            re-underwrite from scratch. They are asking to spend some of the borrowing room the
            spoke has already recognized.
          </p>
          <p className="mb-4 leading-relaxed text-gray-600">
            For a borrow to succeed, the spoke must confirm there is still enough remaining
            capacity, the account must stay healthy after new debt is added, and the Hub must
            actually have the requested asset available to draw.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            <strong>Important:</strong> borrowing creates debt that accrues over time. Capacity can
            change with market conditions, so a safe buffer matters even after a borrow succeeds.
          </p>
        </section>

        <section id="borrow-checks" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrow Checks</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Position and ownership checks:</strong> the spoke
              makes sure the positions still belong to the borrower, are still recognized by the
              account, and still sit inside the approved collateral set.
            </p>
            <p>
              <strong className="text-gray-900">Capacity check:</strong> the requested debt is tested
              against the user&apos;s remaining aggregate borrowing capacity inside that Borrow Spoke.
            </p>
            <p>
              <strong className="text-gray-900">Hub liquidity and cap checks:</strong> even if
              collateral is sufficient, the request can still fail if the Hub does not have enough
              available liquidity or if asset-level or protocol-level caps block more borrowing.
            </p>
            <p>
              <strong className="text-gray-900">Post-borrow health check:</strong> the account must
              remain above the liquidation boundary after the protocol adds the new debt to the
              account state.
            </p>
          </div>
        </section>

        <section id="health-check" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health Check</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The health check is not a separate shortcut rule. It uses the same valuation path and
            risk settings that already govern collateral factors and liquidation eligibility.
            Borrowing only goes through if the account still has enough adjusted collateral value
            after the extra debt is applied.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <code className="text-sm text-gray-900">
              healthFactor = adjustedCollateralValue / outstandingDebt
            </code>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            The adjusted collateral value already includes conservative LP valuation, collateral
            factors, and pool-level risk controls. See{" "}
            <Link href="/developers/architecture/health-factor" className="text-[#01AACF] hover:underline">
              Health Factor
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>{" "}
            for the canonical model.
          </p>
        </section>

        <section id="internal-accounting" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Internal Accounting</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Debt shares:</strong> new debt is recorded through a
              debt-share model so interest can accrue over time without rewriting the full account
              balance on every block.
            </p>
            <p>
              <strong className="text-gray-900">Hub draw:</strong> the Borrow Spoke requests the
              asset from the Hub only after the spoke finishes the collateral, capacity, and health
              checks.
            </p>
            <p>
              <strong className="text-gray-900">State update:</strong> the user receives the borrowed
              asset, and the spoke records the resulting debt state so future health checks,
              repayments, and liquidation logic all reference the same updated account.
            </p>
          </div>
        </section>

        <section id="borrowable-assets" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowable Assets</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowable assets are configured at the Hub layer. They are not a fixed property of the
            collateral itself. In practice, deployments usually begin with major stablecoins and
            other liquid assets before broadening the set.
          </p>
          <p className="text-sm text-gray-600">
            Check the active deployment or interface configuration for the exact assets currently
            enabled to borrow.
          </p>
        </section>

        <section id="borrowing-power" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowing Power</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowing power is the sum of the approved LP-position contributions inside one Borrow
            Spoke. It is not assigned to a pool in the abstract, and it is not one undifferentiated
            account number divorced from the underlying positions.
          </p>
          <p className="mb-4 text-sm text-gray-600">
            <strong>Practical rule:</strong> the closer you borrow to maximum capacity, the less room
            you have for price movement, volatility spikes, and recoverable-value haircuts.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Recommended:</strong> keep a buffer and use{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/health-factor" className="text-[#01AACF] hover:underline">
              Health Factor
            </Link>{" "}
            as the canonical references when sizing risk.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How borrowing works once approved LP positions have created aggregate capacity inside a Borrow Spoke."
        sectionColor="emerald"
      />
    </div>
  )
}
