import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('integrations', {
    title: "Supported Integrations",
    description: "Which DEXs and AMMs Avana can integrate with and what must be in place before a market goes live.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "appkit", title: "AppKit" },
  { id: "dex-families", title: "DEX Families" },
  { id: "enablement-status", title: "Enablement Status" },
  { id: "review-requirements", title: "Review Requirements" },
]

const dexFamilies = [
  {
    title: "Concentrated liquidity DEXs",
    body:
      "Uniswap v3-style positions need position-level handling because value depends on current price, active range, and how inventory is split across the position.",
  },
  {
    title: "Fungible stable and weighted pools",
    body:
      "Curve, Balancer, and similar DEXs expose ERC-20 LP shares whose value can be rebuilt from pool balances, external prices, and conservative unwind assumptions.",
  },
  {
    title: "Custom or hook-based designs",
    body:
      "Advanced pool architectures need a clear oracle model, safe custody path, and liquidation adapter before they can be supported.",
  },
]

export default async function SupportedIntegrationsPage() {
  return withDocsI18n("integrations", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Supported Integrations"
          description="Which DEXs Avana can work with and what must be reviewed before support goes live."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana supports curated LP collateral markets across AMMs such as Uniswap, Balancer,
            Curve, and Aerodrome as markets are launched. Support is approved pool by approved pool,
            not automatically granted to every pool on a DEX.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Each supported market needs reliable asset pricing, enough liquidity depth, a defined
            unwind route, market caps, and collateral settings that match the pool type. See{" "}
            <Link href="/developers/integrations/allowed-pools" className="text-[#01AACF] hover:underline">
              Allowed LP Pools
            </Link>{" "}
            and{" "}
            <Link href="/developers/integrations/price-oracles" className="text-[#01AACF] hover:underline">
              Price Oracles
            </Link>{" "}
            for admission and valuation details.
          </p>
        </section>

        <section id="appkit" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">AppKit</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            AppKit lets DEXs, wallets, and portfolio apps embed Avana credit inside their existing
            user flows instead of sending users to a separate lending app.
          </p>
          <p className="text-sm text-gray-600">
            See the{" "}
            <Link href="/developers/integrations/appkit" className="text-[#01AACF] hover:underline">
              AppKit guide
            </Link>{" "}
            for partner controls, handoff patterns, and launch notes.
          </p>
        </section>

        <section id="dex-families" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">DEX Families</h2>
          <div className="space-y-4">
            {dexFamilies.map((family) => (
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
            Whether a DEX is enabled on a given network is a deployment decision. A DEX family can
            be supportable in theory but still disabled on a specific deployment until oracle
            coverage, liquidation routing, and risk parameters are ready.
          </p>
          <p className="text-sm text-gray-600">
            Check the Avana interface, release notes, or contract registry for what is live on your
            target deployment.
          </p>
        </section>

        <section id="review-requirements" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Review Requirements</h2>
          <ul className="list-disc space-y-2 ps-5 text-sm text-gray-600">
            <li>Conservative position valuation from robust external prices and verifiable state reconstruction</li>
            <li>A dependable unwind path for liquidation, including fee collection and routing into the debt asset</li>
            <li>Pool depth, concentration risk, correlation assumptions, and operational monitoring that fit the risk framework</li>
            <li>Governance and risk review before new DEX or pool family support goes live</li>
          </ul>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Which DEX families Avana can support and what must be reviewed before enablement."
        sectionColor="cyan"
      />
    </div>
  ))
}
