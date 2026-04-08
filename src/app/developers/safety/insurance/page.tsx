import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Insurance Funds",
  description:
    "Planned backstop design for Avana. Learn how a future insurance fund could address liquidation shortfalls without changing the protocol's core LP-backed lending model.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "purpose", title: "Purpose" },
  { id: "funding-approach", title: "Funding Approach" },
  { id: "activation-path", title: "Activation Path" },
  { id: "coverage-boundary", title: "Coverage Boundary" },
]

export default function InsuranceFundsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Insurance Funds"

          description="Planned backstop layer for handling residual bad debt after LP liquidation has already done its job."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana&apos;s first line of defense is conservative collateral valuation, capped
            exposure, and timely liquidation. A future insurance fund would sit behind those controls
            as a last-resort backstop for situations where liquidation cannot fully close a bad debt.
          </p>
          <p className="border-l-4 border-rose-400 pl-3 text-sm text-gray-600">
            This page describes a planned protection layer. It should not be read as a promise that a
            live insurance fund currently exists on every deployment.
          </p>
        </section>

        <section id="purpose" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Purpose</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The purpose of an insurance fund is to contain protocol-level bad debt after liquidation
            has already attempted to recover value from fees and principal. In an LP-backed lending
            system, this means covering residual shortfalls that remain after the supported unwind path
            is exhausted.
          </p>
        </section>

        <section id="funding-approach" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Funding Approach</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            If activated, the fund could be capitalized through governance-approved treasury
            allocations, reserve contributions, or a dedicated safety module. The exact mix is a risk
            governance question and should be published with the program terms.
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
            A protocol insurance fund should be narrowly scoped. It is best understood as a system
            backstop for qualifying bad debt, not as a blanket guarantee against user trading losses,
            impermanent loss, market moves, or every third-party failure in DeFi.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            The cleaner the boundary is between covered protocol shortfalls and ordinary market risk,
            the more credible the insurance design becomes.
          </div>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Planned backstop design for residual bad debt after LP liquidation."
        sectionColor="rose"
      />
    </div>
  )
}
