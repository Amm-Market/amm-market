import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Platform Fees",
  description:
    "Operational fee policy for Avana interfaces. Learn how interface fees differ from protocol economics, how fees are disclosed, and how to verify current policy.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "interface-vs-protocol", title: "Interface vs Protocol" },
  { id: "disclosure", title: "Disclosure" },
  { id: "treasury-usage", title: "Treasury Usage" },
  { id: "integration-notes", title: "Integration Notes" },
]

export default function PlatformFeesPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Platform Fees"

          description="Interface-level fee policy and disclosure guidance for Avana frontends."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            This page describes interface policy, not the core protocol borrowing model. Avana
            may charge frontend or service fees on official interfaces, but those operational charges
            should not be confused with the protocol&apos;s collateral, oracle, or liquidation rules.
          </p>
          <p className="border-l-4 border-violet-400 pl-3 text-sm text-gray-600">
            Exact fee rates, exemptions, and rollout status are operational settings and should be
            verified in the live interface or release materials before relying on them.
          </p>
        </section>

        <section id="interface-vs-protocol" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Interface vs Protocol</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana&apos;s core contracts govern LP admission, borrowing capacity, and liquidation
            behavior. Interface fees, if enabled, are layered on top of those contracts as a frontend
            business policy rather than as a change to the borrow or risk engine itself.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Protocol economics determine debt accrual, collateral treatment, and liquidation outcomes.</li>
            <li>• Interface fees are an operational choice tied to a specific frontend or service path.</li>
            <li>• Direct contract integrations may follow different fee assumptions than the official UI.</li>
          </ul>
        </section>

        <section id="disclosure" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Disclosure</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Any interface fee should be surfaced clearly before signature so builders and users can
            distinguish it from gas costs, swap fees, or protocol-level debt and liquidation effects.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            Good disclosure should identify the fee source, whether it is optional or interface
            specific, and where proceeds are directed.
          </div>
        </section>

        <section id="treasury-usage" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Treasury Usage</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            If interface fees are collected, they typically fund product operations such as
            infrastructure, monitoring, security work, documentation, and support. Governance may
            choose to formalize or change these policies over time.
          </p>
          <p className="text-sm text-gray-600">
            Treasury use should be published as operational reporting, not implied by the protocol&apos;s
            collateral architecture.
          </p>
        </section>

        <section id="integration-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Integration Notes</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Builders should verify current fee policy before quoting end-user costs.</li>
            <li>• Avoid hard-coding interface-fee assumptions into protocol integrations unless the policy is formally versioned.</li>
            <li>• When documenting integrations, keep fee policy separate from borrow capacity and liquidation logic.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Operational fee policy for Avana interfaces and service layers."
        sectionColor="violet"
      />
    </div>
  )
}
