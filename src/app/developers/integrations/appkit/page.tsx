import type { Metadata } from "next"
import Link from "next/link"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "AppKit",
  description:
    "Developer guide for AppKit integration, partner placement, user handoff, and how Avana embeds LP-backed credit inside third-party product surfaces.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "integration-model", title: "Integration Model" },
  { id: "partner-controls", title: "Partner Controls" },
  { id: "launch-notes", title: "Launch Notes" },
]

const integrationPoints = [
  {
    title: "Intent capture",
    body:
      "AppKit is best suited for surfaces where users already see LP positions, portfolio balances, or swap intent, so the credit entry point feels native to the product flow.",
  },
  {
    title: "Protocol handoff",
    body:
      "The partner surface passes context into Avana, then the borrowing flow opens with the right wallet, collateral path, and market framing already in place.",
  },
  {
    title: "Shared monetization",
    body:
      "Partners can build around referral, routing, or integration revenue without becoming the lender or the risk engine.",
  },
]

const partnerControls = [
  "Where the credit surface appears in the product",
  "Which user segments see the borrow entry point",
  "How much education or explanation appears alongside the handoff",
  "Whether the product uses a full embedded handoff or a lighter context-preserving entry point",
]

const implementationNotes = [
  "Keep the credit trigger close to the LP position view or portfolio context.",
  "Carry the user's wallet and market context into the borrowing flow so they do not re-enter it manually.",
  "Use Avana as the credit and settlement layer rather than duplicating risk logic in the partner interface.",
  "Treat copy, placement, and launch gating as part of the integration contract, not afterthoughts.",
]

export default function DeveloperAppKitPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader
          title="AppKit"
          description="How to embed Avana LP-backed credit inside partner products while keeping the borrowing flow, risk logic, and settlement path on the protocol side."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            AppKit is the integration surface for third-party products that already own the user
            relationship. It is designed for DEXs, wallets, portfolio apps, and other interfaces
            where LP positions are already visible and the credit handoff can happen in context.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            The documentation here focuses on the integration contract rather than the commercial
            pitch. That means partner placement, user handoff, and launch gating matter more than
            visual polish. The goal is to keep the borrowing flow legible while making sure the
            protocol remains responsible for the credit and settlement path.
          </p>
        </section>

        <section id="integration-model" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Integration Model</h2>
          <div className="space-y-4">
            {integrationPoints.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="partner-controls" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Partner Controls</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {partnerControls.map((item) => (
              <li key={item} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="implementation-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Implementation Notes</h2>
          <div className="space-y-3 text-sm text-gray-600">
            {implementationNotes.map((item) => (
              <p key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="launch-notes" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Launch Notes</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            The safest launch pattern is to treat AppKit as an integration guide first and a
            distribution layer second. Confirm the user flow, review the partner placement, and
            keep the protocol-owned credit path separate from the partner-owned interface.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Launch review should also cover the fallback state when the credit surface is hidden,
            whether the partner can deep-link into the borrow flow safely, and how the integration
            behaves when the wallet, market, or collateral context is incomplete.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Developer integration guide for embedding AppKit inside partner product surfaces."
        sectionColor="cyan"
      />
    </div>
  )
}
