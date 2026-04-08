import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Allowed LP Pools",
  description:
    "Governance-defined allowlist and review criteria for LP pools that can be admitted as collateral in Avana.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "review-criteria", title: "Review Criteria" },
  { id: "pool-families", title: "Pool Families" },
  { id: "risk-application", title: "Risk Application" },
  { id: "integration-notes", title: "Integration Notes" },
]

const poolFamilies = [
  {
    family: "Stable and correlated pools",
    treatment: "Usually the simplest to admit when pricing, peg stability, and unwind depth are strong.",
  },
  {
    family: "Blue-chip volatile pools",
    treatment: "Can be supported with conservative collateral factors, liquidity checks, and stronger liquidation assumptions.",
  },
  {
    family: "Concentrated liquidity positions",
    treatment: "Require position-level valuation and careful handling of active range, one-sided inventory, and fee state.",
  },
  {
    family: "Custom or experimental designs",
    treatment: "Need explicit oracle, custody, and liquidation support before they can enter the allowlist.",
  },
]

const reviewCriteria = [
  "Reliable external price coverage for the underlying assets",
  "Sufficient pool depth and credible unwind paths during liquidation",
  "Clear admissibility rules for the LP family or spoke template",
  "Acceptable concentration, volatility, and peg-stability profile",
  "Operational support for indexing, fee handling, and liquidation routing",
]

export default function AllowedPoolsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Allowed LP Pools"

          description="Governance-controlled allowlist for the pools and LP families that may be admitted as collateral."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            LP collateral is accepted only from pre-approved pools or templates. Admission is not
            based on brand name alone. Avana needs enough information to value the position,
            manage liquidation, and constrain exposure inside the protocol&apos;s risk framework.
          </p>
          <p className="text-sm text-gray-600">
            Pool approval works alongside{" "}
            <Link href="/developers/architecture/collateral-factors" className="text-blue-600 hover:underline">
              Collateral Factors
            </Link>{" "}
            and{" "}
            <Link href="/developers/safety" className="text-blue-600 hover:underline">
              Risk Framework
            </Link>
            . The allowlist decides whether a pool may enter the system; collateral factors decide how
            much borrowable value each admitted position can contribute.
          </p>
        </section>

        <section id="review-criteria" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Review Criteria</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {reviewCriteria.map((criterion) => (
              <li key={criterion} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                {criterion}
              </li>
            ))}
          </ul>
        </section>

        <section id="pool-families" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Pool Families</h2>
          <div className="space-y-4">
            {poolFamilies.map((family) => (
              <div key={family.family} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <h3 className="mb-1 font-semibold text-gray-900">{family.family}</h3>
                <p className="text-sm text-gray-600">{family.treatment}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="risk-application" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Risk Application</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana does not apply one blanket collateral factor to an entire spoke. Each admitted
            LP position is valued independently, discounted according to its risk treatment, and then
            added to the user&apos;s aggregate borrowing capacity inside that Borrow Spoke.
          </p>
          <p className="text-sm text-gray-600">
            This is why pool approval and collateral valuation are tightly linked: a pool may be
            operationally valid for deposit, but still require conservative caps, lower LTVs, or
            stricter liquidation handling once it is admitted.
          </p>
        </section>

        <section id="integration-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Integration Notes</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              Builders should think in terms of approved pool templates and deployment-specific
              allowlists, not an open-ended list of all LPs in a venue.
            </p>
            <p>
              New pool families usually require updates across oracle handling, liquidation routing,
              risk limits, and monitoring infrastructure before they are safe to enable.
            </p>
          </div>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Governance-defined allowlist and review criteria for LP pools admitted as collateral."
        sectionColor="cyan"
      />
    </div>
  )
}
