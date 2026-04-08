import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Supported Integrations",
  description:
    "Governance- and deployment-aware overview of Avana integrations, including supported venue families, enablement criteria, and integration review expectations.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "venue-families", title: "Venue Families" },
  { id: "enablement-status", title: "Enablement Status" },
  { id: "review-requirements", title: "Review Requirements" },
]

const venueFamilies = [
  {
    title: "Concentrated liquidity venues",
    body:
      "These integrations support range-based LP positions whose value depends on current price, active range, and inventory split.",
  },
  {
    title: "Fungible stable and weighted pools",
    body:
      "These venues expose ERC-20 LP shares that can be reconstructed from pool balances, external prices, and recoverable unwind assumptions.",
  },
  {
    title: "Custom or hook-based designs",
    body:
      "More advanced pool architectures can be supported only when the protocol has a clear oracle model, custody path, and liquidation adapter for them.",
  },
]

export default function SupportedIntegrationsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Supported Integrations"

          description="Reference guide for the venue families Avana can support and the review gates used before any integration is enabled."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana does not treat every AMM venue as interchangeable. Support depends on whether
            the protocol can price a position conservatively, unwind it in stressed conditions, and
            manage it within the Borrow Spoke and Hub risk framework.
          </p>
          <p className="text-sm text-gray-600">
            This page is an integration reference, not a live launch dashboard. For pool admission
            policy, see{" "}
            <Link href="/developers/integrations/allowed-pools" className="text-blue-600 hover:underline">
              Allowed LP Pools
            </Link>
            . For valuation assumptions, see{" "}
            <Link href="/developers/integrations/price-oracles" className="text-blue-600 hover:underline">
              Price Oracles
            </Link>
            .
          </p>
        </section>

        <section id="venue-families" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Venue Families</h2>
          <div className="space-y-4">
            {venueFamilies.map((family) => (
              <div key={family.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 font-semibold text-gray-900">{family.title}</h3>
                <p className="text-sm text-gray-600">{family.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="enablement-status" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Enablement Status</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Whether a venue is enabled on a specific network is an operational question, not a
            protocol invariant. A venue family may be supported in principle but disabled on a given
            deployment until oracle coverage, liquidation routing, and risk parameters are in place.
          </p>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-900">
            Builders should verify current deployment configuration in the app, release notes, or
            published contract registry instead of treating this page as a real-time status board.
          </div>
        </section>

        <section id="review-requirements" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Review Requirements</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• A venue must support conservative position valuation from robust external prices and verifiable state reconstruction.</li>
            <li>• The protocol needs a reliable unwind path for liquidation, including fee collection and routing into the debt asset.</li>
            <li>• Pool depth, concentration risk, correlation assumptions, and operational monitoring must fit inside the risk framework.</li>
            <li>• New venue support should be treated as a governance and risk action, not just an interface update.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Governance-aware overview of which AMM venue families Avana can safely support."
        sectionColor="cyan"
      />
    </div>
  )
}
