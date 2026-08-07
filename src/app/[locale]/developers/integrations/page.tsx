import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('integrations', {
    title: "Supported Integrations",
    description: "Deployment-aware guide to the venue families Avana can integrate with, the checks they must pass, and the review work required before enablement.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "appkit", title: "AppKit" },
  { id: "venue-families", title: "Venue Families" },
  { id: "enablement-status", title: "Enablement Status" },
  { id: "review-requirements", title: "Review Requirements" },
]

const venueFamilies = [
  {
    title: "Concentrated liquidity venues",
    body:
      "These venues require position-level handling because LP value depends on current price, active range, and how inventory is split across the position.",
  },
  {
    title: "Fungible stable and weighted pools",
    body:
      "These venues expose ERC-20 LP shares whose value can be rebuilt from pool balances, external prices, and conservative unwind assumptions.",
  },
  {
    title: "Custom or hook-based designs",
    body:
      "More advanced pool architectures are only supportable when Avana has a clear oracle model, a safe custody path, and a liquidation adapter for the design.",
  },
]

export default async function SupportedIntegrationsPage() {
  return withDocsI18n("integrations", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Supported Integrations"

          description="Reference guide to the venue families Avana can work with and the review gates that have to be cleared before support goes live."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana does not integrate venues just because they are popular or expose LP tokens.
            Support depends on whether the protocol can reconstruct the position accurately, value
            it conservatively, and exit it cleanly when liquidation is required.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            This page is an integration reference, not a live launch dashboard. For pool admission
            policy, see{" "}
            <Link href="/developers/integrations/allowed-pools" className="text-[#01AACF] hover:underline">
              Allowed LP Pools
            </Link>
            . For valuation assumptions, see{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>
            .
          </p>
        </section>

        <section id="appkit" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">AppKit</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            AppKit is the partner-facing path for products that want to drop Avana credit into an
            existing user journey instead of sending users to a standalone flow with no context.
          </p>
          <p className="text-sm text-gray-600">
            Read the{" "}
            <Link href="/developers/integrations/appkit" className="text-[#01AACF] hover:underline">
              AppKit developer guide
            </Link>{" "}
            for partner controls, handoff patterns, and launch notes.
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
            Whether a venue is enabled on a given network is a deployment decision, not a permanent
            protocol truth. A venue family can be supportable in theory but still disabled on a
            specific deployment until oracle coverage, liquidation routing, and risk parameters are
            all ready.
          </p>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-900">
            Builders should verify current deployment configuration in the app, release notes, or
            published contract registry instead of reading this page as a real-time support matrix.
          </div>
        </section>

        <section id="review-requirements" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Review Requirements</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• A venue must support conservative position valuation from robust external prices and verifiable state reconstruction.</li>
            <li>• The protocol needs a dependable unwind path for liquidation, including fee collection and routing into the debt asset.</li>
            <li>• Pool depth, concentration risk, correlation assumptions, and operational monitoring all have to fit the risk framework.</li>
            <li>• New venue support is a governance and risk decision, not just an interface update or adapter merge.</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Governance-aware overview of which AMM venue families Avana can safely support."
        sectionColor="cyan"
      />
    </div>
  ))
}
