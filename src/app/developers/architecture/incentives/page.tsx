import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Incentives Programs",
  description:
    "Operational overview of Avana incentives and rewards. Understand how optional campaigns relate to the core protocol without treating them as canonical architecture.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "program-types", title: "Program Types" },
  { id: "distribution-principles", title: "Distribution Principles" },
  { id: "claiming-and-reconciliation", title: "Claiming & Reconciliation" },
  { id: "status", title: "Current Status" },
]

export default function IncentivesPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Incentives Programs"

          description="Optional reward and campaign layer that may sit on top of Avana deployments."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Incentives are not the core protocol. The canonical Avana system is still defined by
            LP collateral valuation, Borrow Spoke risk controls, Hub liquidity, and liquidation
            mechanics. Reward campaigns are optional overlays that may be introduced to encourage
            liquidity formation, borrower activity, or operator participation.
          </p>
          <p className="text-sm text-gray-600">
            Because campaigns are operational and time-dependent, builders should treat this page as a
            policy frame rather than as a guarantee that any specific rewards program is active.
          </p>
        </section>

        <section id="program-types" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Program Types</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Supplier-facing campaigns that deepen available capital in the Invest Spoke or connected liquidity layer.</li>
            <li>• Borrower-facing campaigns that encourage healthy LP-backed borrowing behavior.</li>
            <li>• Operator or ecosystem campaigns tied to testing, integrations, or risk-supporting activity.</li>
          </ul>
        </section>

        <section id="distribution-principles" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Distribution Principles</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            When incentives exist, they should be understandable, auditable, and separable from core
            risk logic. Reward calculations may depend on activity, duration, or campaign-specific
            rules, but they should not change how Avana values collateral or decides liquidation
            eligibility.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            Campaign logic should reward desired behavior without encouraging unsafe leverage or
            obscuring the real economics of LP-backed borrowing.
          </div>
        </section>

        <section id="claiming-and-reconciliation" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Claiming & Reconciliation</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Claim paths, vesting schedules, and reconciliation methods are campaign-specific. They may
            be handled onchain, through a dedicated rewards controller, or through offchain accounting
            published by the operator of the campaign.
          </p>
          <p className="text-sm text-gray-600">
            Integrators should always verify the active claim path and eligibility rules for the
            deployment they are targeting.
          </p>
        </section>

        <section id="status" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Current Status</h2>
          <p className="leading-relaxed text-gray-600">
            Treat incentives as deployment-specific and season-specific. If a campaign is live, its
            details should be announced separately from the protocol architecture docs and referenced
            with explicit dates, rules, and distribution terms.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Operational overview of optional rewards and campaign mechanics."
        sectionColor="violet"
      />
    </div>
  )
}
