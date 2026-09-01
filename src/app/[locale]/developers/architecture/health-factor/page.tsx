import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('architecture/health-factor', {
    title: "Health Factor",
    description: "How Avana measures whether an LP-backed account has enough collateral to support its debt.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "calculation", title: "Calculation" },
  { id: "health-bands", title: "Monitoring Bands" },
  { id: "response-path", title: "Response Path" },
  { id: "user-actions", title: "User Actions" },
]

export default async function HealthFactorPage() {
  return withDocsI18n("architecture/health-factor", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Health Factor"
          description="The ratio between risk-adjusted collateral value and outstanding debt inside a Borrow Spoke."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Health factor measures the relationship between risk-adjusted collateral value and
            outstanding debt inside a Borrow Spoke. Adjusted collateral value already includes
            Avana&apos;s LP valuation, collateral factors, pool-level risk treatment, and
            recoverable-value assumptions.
          </p>
          <p className="text-sm text-gray-600">
            If health falls below the liquidation boundary, the position becomes eligible for
            liquidation. See the{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            for what happens next.
          </p>
        </section>

        <section id="calculation" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Calculation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Health is computed per Borrow Spoke. The numerator is adjusted collateral value — already
            discounted through reconstruction, pricing, collateral factors, and recoverable-value
            assumptions.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <code className="text-sm text-gray-900">
              healthFactor = adjustedCollateralValue / outstandingDebt
            </code>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            If a user has collateral in more than one Borrow Spoke, each spoke computes health
            independently. Extra margin in one market does not cover a deficit in another.
          </p>
        </section>

        <section id="health-bands" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Monitoring Bands</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Healthy:</strong> collateral stays comfortably above
              debt, with room for normal market movement.
            </p>
            <p>
              <strong className="text-gray-900">Watchlist:</strong> the account still passes checks,
              but the buffer is thin. Consider repaying, adding collateral, or reducing exposure.
            </p>
            <p>
              <strong className="text-gray-900">Liquidatable:</strong> health has crossed the
              liquidation threshold. The recovery path can begin.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Interface warnings may appear earlier than the hard liquidation threshold to give users
            time to act.
          </p>
        </section>

        <section id="response-path" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Response Path</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              When health weakens, the borrower can repay debt, add approved LP collateral, or take
              other actions that improve the account under the spoke&apos;s health checks.
            </p>
            <p>
              Once health crosses the liquidation boundary, liquidators can unwind the required
              collateral path to restore solvency according to the market&apos;s liquidation rules.
            </p>
          </div>
        </section>

        <section id="user-actions" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">User Actions</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Borrowing more reduces health because debt rises against the same collateral.</li>
            <li>Repaying debt improves health immediately.</li>
            <li>Adding approved collateral can increase headroom if the spoke accepts and values it.</li>
            <li>Claiming fees, withdrawing collateral, or changing positions can reduce health — check the post-action state first.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            See{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>{" "}
            for how adjusted collateral value is calculated.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How health factor measures account safety from adjusted collateral value and debt."
        sectionColor="violet"
      />
    </div>
  ))
}
