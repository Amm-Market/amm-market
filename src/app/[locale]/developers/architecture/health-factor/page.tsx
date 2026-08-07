import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('architecture/health-factor', {
    title: "Health Factor",
    description: "How a Borrow Spoke compares adjusted collateral value and debt to determine whether an LP-backed account is healthy or liquidatable.",
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

          description="How a Borrow Spoke measures account safety from adjusted collateral value and outstanding debt."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The health factor is the Borrow Spoke&apos;s compact view of whether an account still has
            enough adjusted collateral to support its debt. It is not a separate risk model. The
            same valuation path, collateral-factor logic, and liquidation assumptions that govern
            borrowing also determine the health factor that the interface and liquidators read.
          </p>
          <p className="text-sm text-gray-600">
            When health falls far enough that the account no longer satisfies the spoke&apos;s
            borrowing boundary, the position becomes liquidatable under the canonical{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>
            .
          </p>
        </section>

        <section id="calculation" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Calculation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Health is computed per Borrow Spoke. The numerator is the user&apos;s adjusted collateral
            value inside that spoke, which means the position has already gone through
            reconstruction, pricing, recoverable-value discounting, and the market-specific
            collateral settings used by that spoke.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <code className="text-sm text-gray-900">
              healthFactor = adjustedCollateralValue / outstandingDebt
            </code>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            If a user has collateral in more than one Borrow Spoke, each spoke computes health on
            its own local state. Extra margin in one spoke does not automatically cover a deficit
            in another, because the protocol contains risk at the market where it was created.
          </p>
        </section>

        <section id="health-bands" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Monitoring Bands</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-gray-900">Healthy:</strong> adjusted collateral value stays
              comfortably above outstanding debt, so the account has room for ordinary market
              movement without immediate intervention.
            </p>
            <p>
              <strong className="text-gray-900">Watchlist:</strong> the account still passes the
              spoke&apos;s checks, but the buffer is thin enough that a borrower should consider repaying
              debt, adding collateral, or otherwise improving the position.
            </p>
            <p>
              <strong className="text-gray-900">Liquidatable:</strong> the account has reached or
              crossed the liquidation boundary, so the recovery path can move from user action to
              protocol-enforced settlement.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Interface warnings can be more conservative than the hard liquidation threshold. They
            are there to help users act earlier, not to introduce a second set of protocol rules.
          </p>
        </section>

        <section id="response-path" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Response Path</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              If health weakens, the first response is still the borrower&apos;s. The account can be
              repaired by repaying debt, adding approved LP collateral, or changing the position in
              ways that remain valid under the spoke&apos;s health checks.
            </p>
            <p>
              Once health crosses the liquidation boundary, the account moves out of the monitoring
              phase and into the recovery path. Liquidation nodes and third-party liquidators can
              then unwind the required collateral path to restore solvency according to the market&apos;s
              liquidation rules.
            </p>
          </div>
        </section>

        <section id="user-actions" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">User Actions</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Borrowing more reduces health because outstanding debt increases against the same collateral base.</li>
            <li>Repaying debt improves health immediately because the denominator in the ratio falls.</li>
            <li>Adding approved collateral can increase remaining headroom if the spoke accepts and values it.</li>
            <li>Claiming fees, withdrawing collateral, or re-ranging positions can reduce health and should be checked against the post-action state before execution.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Use{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-[#01AACF] hover:underline">
              Collateral Factors
            </Link>{" "}
            for the numerator logic and{" "}
            <Link href="/developers/liquidation" className="text-[#01AACF] hover:underline">
              Liquidation Framework
            </Link>{" "}
            for the recovery path that begins once health is no longer sufficient.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How a Borrow Spoke computes account safety from adjusted collateral value and debt using the same rules that govern liquidation."
        sectionColor="violet"
      />
    </div>
  ))
}
