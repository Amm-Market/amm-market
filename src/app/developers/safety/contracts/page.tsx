import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Smart Contract Security",
  description:
    "Avana smart contract security reference covering trust boundaries, contract surfaces, and how audits and bug bounties support the LP-backed lending design.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "security-challenges", title: "Security Challenges" },
  { id: "multi-layer-security", title: "Multi-Layer Security" },
  { id: "core-contract-surfaces", title: "Core Contract Surfaces" },
  { id: "trust-boundaries", title: "Trust Boundaries" },
  { id: "audit-readiness", title: "Audit Readiness" },
]

const coreSurfaces = [
  {
    title: "Borrow Spoke logic",
    body:
      "Handles collateral admission, user accounting, and the spoke-side lifecycle for LP-backed loans.",
  },
  {
    title: "Hub integration",
    body:
      "Connects spoke-level borrowing capacity to shared credit and liquidity constraints in the Hub layer.",
  },
  {
    title: "Oracle and valuation adapters",
    body:
      "Translate LP positions into conservative collateral values using external prices, position reconstruction, and recoverable-value assumptions.",
  },
  {
    title: "Liquidation execution layer",
    body:
      "Coordinates unwind paths, fee realization, routing, and settlement when an unhealthy account must be closed or resized.",
  },
]

export default function ContractsArchitecturePage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Contracts & Security"

          description="Security reference for the smart contract surfaces and external dependencies behind LP-backed lending."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana expands lending into LP collateral, which means security is not only about
            code correctness. It is also about how pricing, custody, liquidation, and governance work
            together under stress.
          </p>
          <p className="text-sm text-gray-600">
            The protocol therefore treats smart contract review, economic review, and operational
            review as one security surface rather than as isolated checklists.
          </p>
        </section>

        <section id="security-challenges" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Security Challenges</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• LP positions have path-dependent value and often require venue-specific custody and unwind logic.</li>
            <li>• Oracle misuse or stale pricing can become an economic exploit even when contracts behave exactly as coded.</li>
            <li>• Governance, parameter control, and emergency response are part of the real attack surface.</li>
          </ul>
        </section>

        <section id="multi-layer-security" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Multi-Layer Security</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-1 font-semibold text-gray-900">Contract review</h3>
              <p className="text-sm text-gray-600">
                Core contract surfaces, adapters, and privileged control paths should be reviewed
                before new LP families or execution paths are enabled.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-1 font-semibold text-gray-900">Economic stress testing</h3>
              <p className="text-sm text-gray-600">
                The protocol should test market shocks, oracle edge cases, and liquidation routing
                failures, not just contract-level unit behavior.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-1 font-semibold text-gray-900">External review channels</h3>
              <p className="text-sm text-gray-600">
                Formal audits and the{" "}
                <Link href="/developers/safety/bug-bounty" className="text-blue-600 hover:underline">
                  Bug Bounty
                </Link>{" "}
                program should reinforce one another rather than operate as isolated checkboxes.
              </p>
            </div>
          </div>
        </section>

        <section id="core-contract-surfaces" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Core Contract Surfaces</h2>
          <div className="space-y-4">
            {coreSurfaces.map((surface) => (
              <div key={surface.title} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <h3 className="mb-1 font-semibold text-gray-900">{surface.title}</h3>
                <p className="text-sm text-gray-600">{surface.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="trust-boundaries" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Trust Boundaries</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Onchain accounting and liquidation settlement should be deterministic once triggered.</li>
            <li>• Oracle sources, venue adapters, and operational liquidator infrastructure are external dependencies and must be monitored as such.</li>
            <li>• Governance, pause authority, and upgrades are privileged powers that should remain bounded, reviewable, and timelocked wherever possible.</li>
          </ul>
        </section>

        <section id="audit-readiness" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Audit Readiness</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            This page intentionally avoids publishing speculative auditor schedules or placeholder
            milestones. Audit reports, scopes, and remediation notes should be published once they are
            real and reviewable.
          </p>
          <p className="text-sm text-gray-600">
            The highest-value audit targets are usually new LP-family support, new liquidation paths,
            new oracle models, and any change that expands privileged control or the recoverable-value
            assumptions used by the protocol.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Security reference for the smart contract surfaces and trust boundaries behind LP-backed lending."
        sectionColor="rose"
      />
    </div>
  )
}
