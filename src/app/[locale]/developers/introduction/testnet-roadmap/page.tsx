import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata('introduction/testnet-roadmap', {
    title: "Testnet & Roadmap",
    description: "Operational guide to Avana test deployments and roadmap framing, for evaluation context rather than canonical protocol rules or launch promises.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "testnet-scope", title: "Testnet Scope" },
  { id: "how-to-evaluate", title: "How to Evaluate" },
  { id: "roadmap-framing", title: "Roadmap Framing" },
  { id: "campaigns-and-status", title: "Campaigns & Status" },
]

export default async function TestnetRoadmapPage() {
  return withDocsI18n("introduction/testnet-roadmap", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Testnet & Roadmap"

          description="Operational page for testing Avana deployments and for reading roadmap statements with the right level of caution."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Testnet status, supported networks, and public roadmap sequencing change faster than the
            architecture docs. This page exists so builders can separate environment status from
            stable protocol design and avoid reading rollout language as if it were a specification.
          </p>
          <p className="border-l-4 border-cyan-400 pl-3 text-sm text-gray-600">
            Use the lightpaper and core developer docs for protocol design. Use this page for
            environment readiness, trial scope, and rollout context.
          </p>
        </section>

        <section id="testnet-scope" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Testnet Scope</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            A test deployment may expose only part of the full production design. LP families,
            borrow assets, oracle coverage, and liquidation tooling can all be narrower or more
            heavily simplified on testnet.
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
            The most useful evaluation path is to deposit an eligible LP, confirm spoke valuation,
            observe aggregate borrowing capacity, borrow against Hub liquidity, and then watch how
            health monitoring and repayment behave on that same account.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Points, quests, or other campaigns on a test deployment are operational features. They
            are not the collateral model itself.
          </p>
        </section>

        <section id="roadmap-framing" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Roadmap Framing</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Roadmap language is directional. It points toward broader LP family coverage, stronger
            oracle support, deeper liquidation tooling, and more refined risk governance. It should
            not be read as a fixed launch date or a hard network promise unless that commitment is
            announced separately.
          </p>
        </section>

        <section id="campaigns-and-status" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Campaigns & Status</h2>
          <p className="leading-relaxed text-gray-600">
            Active incentives, points programs, or network-specific rollout details should live in
            campaign docs or release notes. Keeping them out of the core protocol pages makes the
            developer docs more stable when campaigns or rollout plans change.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Operational guide to Avana test deployments and roadmap framing."
        sectionColor="cyan"
      />
    </div>
  ))
}
