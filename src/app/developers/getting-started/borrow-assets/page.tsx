import Link from "next/link"
import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Borrow Assets",
  description:
    "How to borrow assets against LP collateral in Avana, including aggregate borrowing capacity, Hub liquidity, and spoke-level health checks.",
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Borrow Assets"

          description="Borrow against the aggregate capacity of your approved LP positions while the Hub supplies the shared capital."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowing happens after the Borrow Spoke has admitted and valued your LP positions. When
            you request an asset, the spoke checks your remaining capacity, verifies that the account
            stays healthy, and then draws liquidity from the Hub on your behalf.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Important:</strong> borrowing creates debt that accrues over time. Capacity can
            change with market conditions, so a safe buffer matters even after a borrow succeeds.
          </p>
        </section>

        <section id="borrow-checks" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrow Checks</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Position and ownership checks:</strong> the spoke
              confirms that the collateral positions are valid for the caller and remain in the
              approved collateral set.
            </p>
            <p>
              <strong className="text-gray-900">Capacity check:</strong> the requested debt is tested
              against the user&apos;s aggregate borrowing capacity inside that Borrow Spoke.
            </p>
            <p>
              <strong className="text-gray-900">Hub liquidity and cap checks:</strong> even if
              collateral is sufficient, the borrow still depends on available Hub liquidity and any
              asset-level or protocol-level borrow constraints.
            </p>
            <p>
              <strong className="text-gray-900">Post-borrow health check:</strong> the account must
              remain above the liquidation boundary after the new debt is added.
            </p>
          </div>
        </section>

        <section id="health-check" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Health Check</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The spoke uses the same valuation engine and risk settings that determine collateral
            factors and liquidation eligibility. Borrowing only succeeds if adjusted collateral value
            remains comfortably above total debt after the new draw.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <code className="text-sm text-gray-900">
              healthFactor = adjustedCollateralValue / outstandingDebt
            </code>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The adjusted collateral value already includes conservative LP valuation, collateral
            factors, and pool-level risk controls. See{" "}
            <Link href="/developers/architecture/health-factor" className="text-blue-600 hover:underline">
              Health Factor
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">
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
              debt-share model so interest can accrue without rewriting the full account balance on
              every block.
            </p>
            <p>
              <strong className="text-gray-900">Hub draw:</strong> the Borrow Spoke requests the
              asset from the Hub once all checks pass.
            </p>
            <p>
              <strong className="text-gray-900">State update:</strong> the user receives the borrowed
              asset, and the spoke records the new debt state for future health checks, repayments,
              and liquidation logic.
            </p>
          </div>
        </section>

        <section id="borrowable-assets" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowable Assets</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowable assets are a Hub-side operational configuration rather than a permanent
            protocol invariant. In practice, live markets generally start with major stablecoins and
            other highly liquid assets before expanding.
          </p>
          <p className="text-sm text-gray-600">
            Check the active deployment or interface configuration for the exact current borrow set.
          </p>
        </section>

        <section id="borrowing-power" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Borrowing Power</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Borrowing power is the total of all approved LP-position contributions inside the same
            Borrow Spoke. It is not assigned to the pool as a whole and not to the account as an
            undifferentiated balance.
          </p>
          <p className="mb-4 text-sm text-gray-600">
            <strong>Practical rule:</strong> the closer you borrow to maximum capacity, the less room
            you have for price movement, volatility spikes, and recoverable-value haircuts.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Recommended:</strong> keep a buffer and use{" "}
            <Link href="/developers/liquidation" className="text-blue-600 hover:underline">
              Liquidation Framework
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/health-factor" className="text-blue-600 hover:underline">
              Health Factor
            </Link>{" "}
            as the canonical references when sizing risk.
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="How borrowing works once approved LP positions have created aggregate capacity inside a Borrow Spoke."
        sectionColor="emerald"
      />
    </div>
  )
}
