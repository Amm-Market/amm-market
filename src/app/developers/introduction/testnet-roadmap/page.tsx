import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Testnet & Roadmap",
  description:
    "Operational guide to Avana test deployments and roadmap framing. Use this page for evaluation context, not as a canonical protocol specification or launch promise.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "testnet-scope", title: "Testnet Scope" },
  { id: "how-to-evaluate", title: "How to Evaluate" },
  { id: "roadmap-framing", title: "Roadmap Framing" },
  { id: "campaigns-and-status", title: "Campaigns & Status" },
]

export default function TestnetRoadmapPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Testnet & Roadmap"

          description="Operational page for testing Avana deployments and understanding how roadmap statements should be read."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            This page is intentionally separate from the protocol-spec story. Testnet availability,
            supported networks, and public roadmap sequencing are operational matters that can change
            faster than the underlying architecture.
          </p>
          <p className="border-l-4 border-blue-400 pl-3 text-sm text-gray-600">
            Use the lightpaper and core developer docs for protocol design. Use this page for
            environment readiness, trial scope, and rollout context.
          </p>
        </section>

        <section id="testnet-scope" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Testnet Scope</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            A test deployment may expose only a subset of the full architecture. Supported LP
            families, borrow assets, oracle coverage, and liquidation tooling can all be narrower on
            testnet than on an eventual production deployment.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Verify the active network, contract registry, and supported pool set for the current environment.</li>
            <li>• Expect mocked assets, restricted venue coverage, and shortened operational loops.</li>
            <li>• Treat testnet behavior as an evaluation environment, not as a final production promise.</li>
          </ul>
        </section>

        <section id="how-to-evaluate" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">How to Evaluate</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The most useful way to test Avana is to walk the canonical flow: deposit an eligible
            LP position, confirm spoke-level valuation, observe aggregate borrowing capacity, borrow
            from the Hub-side liquidity layer, and then inspect health monitoring and repayment paths.
          </p>
          <p className="text-sm text-gray-600">
            If a test deployment includes points, quests, or other campaigns, those should be treated
            as separate operational features rather than as evidence of the protocol&apos;s core
            collateral model.
          </p>
        </section>

        <section id="roadmap-framing" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Roadmap Framing</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Roadmap statements should be interpreted as directional priorities: broader LP-family
            coverage, stronger oracle support, deeper liquidation tooling, and more refined risk
            governance. They should not be read as fixed launch dates or immutable network promises
            unless separately announced.
          </p>
        </section>

        <section id="campaigns-and-status" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Campaigns & Status</h2>
          <p className="leading-relaxed text-gray-600">
            Any active incentives, points programs, or network-specific rollout details should be
            published as campaign documentation or release notes. Keeping those details separate from
            the core protocol narrative makes the developer docs more stable and easier to trust.
          </p>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="Operational guide to Avana test deployments and roadmap framing."
        sectionColor="blue"
      />
    </div>
  )
}
