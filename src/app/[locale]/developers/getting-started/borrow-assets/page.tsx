import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('getting-started/borrow-assets', {
    title: "Borrow Assets",
    description: "How to borrow against deposited LP collateral on Avana.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "borrow-checks", title: "Borrow Checks" },
  { id: "health-check", title: "Health Check" },
  { id: "internal-accounting", title: "Internal Accounting" },
  { id: "borrowable-assets", title: "Borrowable Assets" },
  { id: "borrowing-power", title: "Borrowing Power" },
]

export default async function BorrowAssetsPage() {
  return withDocsI18n("getting-started/borrow-assets", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Borrow Assets"
          description="Borrow stablecoins, ETH, or other enabled assets against the LP collateral you have already deposited."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4">Overview</h2>
          <p className="mb-4">
            After your LP is deposited and valued, you can borrow from the Hub using the capacity
            shown in the interface. Choose the asset and amount, confirm the transaction, and the
            borrowed tokens are sent to your wallet.
          </p>
          <p>
            Interest accrues on open debt, so your health factor can change even if you do nothing.
            Leave a buffer below your maximum borrow rather than drawing the full amount.
          </p>
        </section>

        <section id="borrow-checks" className="mb-12">
          <h2 className="mb-4">Borrow Checks</h2>
          <div className="space-y-5 text-sm text-type-secondary">
            <div>
              <p>Position and ownership checks</p>
              <p className="mt-1">
                The spoke confirms your LP positions are still in the account, still approved, and
                still recognized as collateral.
              </p>
            </div>
            <div>
              <p>Capacity check</p>
              <p className="mt-1">
                The borrow amount must fit within your remaining borrowing capacity in that Borrow
                Spoke.
              </p>
            </div>
            <div>
              <p>Hub liquidity and cap checks</p>
              <p className="mt-1">
                The Hub must have enough of the requested asset available, and protocol caps must
                allow the borrow.
              </p>
            </div>
            <div>
              <p>Post-borrow health check</p>
              <p className="mt-1">
                Your account must stay above the liquidation threshold after the new debt is added.
              </p>
            </div>
          </div>
        </section>

        <section id="health-check" className="mb-12">
          <h2 className="mb-4">Health Check</h2>
          <p className="mb-4">
            Before a borrow is approved, Avana checks that your account stays healthy after the new
            debt. Health factor is adjusted collateral value divided by outstanding debt. The
            adjusted collateral value already includes LP valuation, collateral factors, and
            recoverable-value discounts.
          </p>

          <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
            <code className="text-sm text-foreground">
              healthFactor = adjustedCollateralValue / outstandingDebt
            </code>
          </div>

          <p className="mt-4">
            If health falls below the liquidation boundary, the position becomes eligible for
            liquidation. See{" "}
            <Link href="/developers/architecture/health-factor" className="text-type-accent hover:underline">
              Health Factor
            </Link>{" "}
            for the full model.
          </p>
        </section>

        <section id="internal-accounting" className="mb-12">
          <h2 className="mb-4">Internal Accounting</h2>
          <div className="space-y-4 text-sm text-type-secondary">
            <p>
              <strong className="text-foreground">Debt shares:</strong> new debt is recorded through a
              debt-share model so interest can accrue over time without rewriting the full account
              balance on every block.
            </p>
            <p>
              <strong className="text-foreground">Hub draw:</strong> the Borrow Spoke requests the
              asset from the Hub only after the spoke finishes the collateral, capacity, and health
              checks.
            </p>
            <p>
              <strong className="text-foreground">State update:</strong> the user receives the borrowed
              asset, and the spoke records the resulting debt state so future health checks,
              repayments, and liquidation logic all reference the same updated account.
            </p>
          </div>
        </section>

        <section id="borrowable-assets" className="mb-12">
          <h2 className="mb-4">Borrowable Assets</h2>
          <p className="mb-4">
            Each market shows which assets you can borrow — typically major stablecoins, GHO, ETH,
            BTC, and other liquid assets configured for that deployment. A supported LP collateral
            type does not unlock every borrow asset automatically; each debt asset is part of the
            market configuration.
          </p>
          <p>
            Check the Avana interface on your target deployment for the live borrow list.
          </p>
        </section>

        <section id="borrowing-power" className="mb-12">
          <h2 className="mb-4">Borrowing Power</h2>
          <p className="mb-4">
            Borrowing power is the sum of your approved LP positions in one Borrow Spoke, after
            collateral factors and risk discounts. Each position contributes based on its own pool,
            range, liquidity, and risk settings.
          </p>
          <p>
            The closer you borrow to your maximum, the less room you have for price moves or
            volatility. See{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-type-accent hover:underline">
              Collateral Factors
            </Link>{" "}
            and{" "}
            <Link href="/developers/architecture/health-factor" className="text-type-accent hover:underline">
              Health Factor
            </Link>{" "}
            when sizing a borrow.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How to borrow against deposited LP collateral on Avana."
        sectionColor="emerald"
      />
    </div>
  ))
}
