import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('architecture/incentives', {
    title: "Incentives Programs",
    description: "How optional reward campaigns relate to Avana without changing core lending mechanics.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "program-types", title: "Program Types" },
  { id: "distribution-principles", title: "Distribution Principles" },
  { id: "claiming-and-reconciliation", title: "Claiming & Reconciliation" },
  { id: "status", title: "Current Status" },
]

export default async function IncentivesPage() {
  return withDocsI18n("architecture/incentives", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Incentives Programs"
          description="Optional reward campaigns that sit on top of Avana without changing core lending mechanics."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Incentives are an overlay, not part of the lending core. The protocol is defined by LP
            valuation, Borrow Spoke risk controls, Hub liquidity, and liquidation. Campaigns can
            encourage participation, but they do not change those mechanics.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Campaigns are operational and time limited. This does not imply a specific rewards
            program is live on every deployment.
          </p>
        </section>

        <section id="program-types" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Program Types</h2>
          <ul className="list-disc space-y-2 ps-5 text-sm text-gray-600">
            <li>Supplier-facing campaigns that deepen capital in the Lend Spoke or connected liquidity layer</li>
            <li>Borrower-facing campaigns that encourage healthy LP-backed borrowing</li>
            <li>Operator or ecosystem campaigns tied to testing, integrations, or risk-supporting activity</li>
          </ul>
        </section>

        <section id="distribution-principles" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Distribution Principles</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            When incentives exist, they should be understandable, auditable, and kept separate from
            core risk logic. Reward math may depend on activity, duration, or campaign rules, but it
            should not change how Avana values collateral or decides liquidation eligibility.
          </p>
        </section>

        <section id="claiming-and-reconciliation" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Claiming & Reconciliation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Claim paths, vesting schedules, and reconciliation methods are campaign-specific. They
            may be handled onchain, through a dedicated rewards controller, or through offchain
            accounting published by the campaign operator.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Integrators should verify the active claim path and eligibility rules for the deployment
            they are targeting.
          </p>
        </section>

        <section id="status" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Current Status</h2>
          <p className="leading-relaxed text-gray-600">
            Treat incentives as deployment-specific and season-specific. If a campaign is live,
            its details should be announced separately with explicit dates, rules, and distribution
            terms.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Optional rewards and campaign mechanics on top of Avana."
        sectionColor="violet"
      />
    </div>
  ))
}
