import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('safety/insurance', {
    title: "Insurance Funds",
    description: "Planned backstop design for Avana, describing how a future insurance fund could address liquidation shortfalls without changing the core LP-backed lending model.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "purpose", title: "Purpose" },
  { id: "funding-approach", title: "Funding Approach" },
  { id: "activation-path", title: "Activation Path" },
  { id: "coverage-boundary", title: "Coverage Boundary" },
]

export default async function InsuranceFundsPage() {
  return withDocsI18n("safety/insurance", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Insurance Funds"

          description="Planned backstop layer for handling residual bad debt after the normal LP liquidation path has already run."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana&apos;s first lines of defense are conservative collateral valuation, bounded
            exposure, and timely liquidation. A future insurance fund would sit behind those
            controls and come into view only when liquidation still cannot fully close bad debt.
          </p>
          <p className="border-l-4 border-rose-400 pl-3 text-sm text-gray-600">
            Insurance funds are a planned protection layer. A live insurance fund may not exist on
            every deployment today.
          </p>
        </section>

        <section id="purpose" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Purpose</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            An insurance fund would exist to absorb qualifying residual protocol bad debt after the
            supported liquidation path has already tried to recover value from fees and principal.
          </p>
        </section>

        <section id="funding-approach" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Funding Approach</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            If activated, the fund could be capitalized through governance-approved treasury
            allocations, reserve contributions, or a dedicated safety module. The exact funding mix
            is a risk-governance decision and should be published with the program terms.
          </p>
        </section>

        <section id="activation-path" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Activation Path</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Detect a residual shortfall after an allowed liquidation path has completed.</li>
            <li>• Verify that the shortfall fits the fund&apos;s approved coverage policy.</li>
            <li>• Execute the recapitalization or deficit-coverage path defined by governance.</li>
            <li>• Publish a post-incident summary describing the trigger, response, and follow-up controls.</li>
          </ul>
        </section>

        <section id="coverage-boundary" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Coverage Boundary</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Coverage should stay narrow. The target is qualifying protocol bad debt after
            liquidation, not a blanket guarantee against user trading losses, impermanent loss,
            market moves, or every third-party failure in DeFi.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            Covered shortfalls and ordinary market risk need a sharp line so the fund does not turn
            into compensation for normal LP outcomes.
          </div>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Planned backstop design for residual bad debt after LP liquidation."
        sectionColor="rose"
      />
    </div>
  ))
}
