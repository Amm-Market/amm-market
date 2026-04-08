import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Bug Bounty",
  description: "Avana Bug Bounty - responsible disclosure scope, LP-collateral risk surfaces, and economic impact severity philosophy.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "scope-and-system-architecture", title: "Scope & System Architecture" },
  { id: "severity-philosophy", title: "Severity Philosophy" },
]

const programs = [
  {
    title: "Program A - Core Lending",
    summary:
      "Covers the primary credit engine where accounting integrity, collateralization, and liquidation execution directly protect user funds.",
    includes: [
      "Deposit / withdraw flows",
      "Borrow / repay logic",
      "Health factor and interest accrual",
      "Reserve accounting and debt mint / burn",
      "Liquidation core execution and caps",
    ],
    risks: [
      "Theft of user funds",
      "Reserve insolvency",
      "Undercollateralized borrowing",
      "Blocked repayments, withdrawals, or liquidations",
    ],
  },
  {
    title: "Program B - LP Collateral & Valuation",
    summary:
      "Covers the Avana-specific valuation system for LP-backed credit, including how LP positions are priced, risk-weighted, and stress-tested under volatile market conditions.",
    includes: [
      "LP token onboarding logic",
      "Collateral factor assignment for LP positions",
      "LP share pricing and oracle integration",
      "Concentrated liquidity position handling",
      "Edge cases during imbalance, depegs, low liquidity, or stale oracle states",
    ],
    risks: [
      "Overvaluation of LP collateral",
      "Oracle manipulation enabling bad debt",
      "Unfair liquidation from underpricing",
      "Recursive exploit paths against mispriced LP collateral",
    ],
    highlighted: true,
    note: "This subsystem carries the highest severity ceiling because LP mispricing can create bad debt, insolvency, or unfair liquidations without requiring a traditional contract-drain exploit.",
  },
  {
    title: "Program C - Governance, Admin, and Protocol Infrastructure",
    summary:
      "Covers privileged control surfaces that can alter parameters, upgrade contracts, pause operations, or redirect protocol-owned assets.",
    includes: [
      "Governance executor and timelock",
      "Role management and upgradeability mechanisms",
      "Pause / guardian roles",
      "Parameter admin systems",
      "Treasury, collector, and privileged automation contracts",
    ],
    risks: [
      "Unauthorized admin action",
      "Upgrade hijack",
      "Parameter corruption",
      "Governance takeover or treasury loss",
    ],
  },
  {
    title: "Program D - Offchain / Integration Surfaces",
    summary:
      "Covers supporting systems whose compromise can influence trusted protocol operations, user interactions, or keeper behavior.",
    includes: [
      "Indexing or liquidation bots maintained by Avana",
      "Keeper assumptions and oracle relays",
      "SDK logic that can induce unsafe interactions",
      "Hosted APIs used in safety-critical paths",
      "Frontend issues with direct wallet-risk consequences",
    ],
    risks: [
      "Malicious transaction construction",
      "Compromised liquidation or oracle relay paths",
      "User fund loss through trusted integrations",
      "Operational outages that freeze critical actions",
    ],
  },
]

const severityLevels = [
  {
    title: "Critical",
    style: "border-red-400 bg-red-50/70",
    text: "Direct or indirect fund loss, creation of bad debt, protocol insolvency, or systemic manipulation of collateral valuation.",
  },
  {
    title: "High",
    style: "border-amber-400 bg-amber-50/70",
    text: "Meaningful but bounded damage, such as incorrect liquidation behavior, partial bypass of risk controls, or contained accounting failures.",
  },
  {
    title: "Medium / Low",
    style: "border-gray-300 bg-gray-50",
    text: "Limited-impact findings, edge-case inconsistencies, non-critical logic issues, or vulnerabilities without a credible path to major economic harm.",
  },
]

export default function BugBountyPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Bug Bounty"

          description="Responsible disclosure scope and economic-impact triage for Avana security research."

        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The Avana Bug Bounty is a core part of the protocol&apos;s security model. It is
            designed to incentivize responsible disclosure across smart contracts, risk systems, and
            supporting infrastructure that can affect user funds or protocol solvency.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Avana introduces a lending system where AMM liquidity positions are used as
            collateral. That creates a security surface where risk is defined not only by contract
            correctness, but also by how liquidity, pricing, and market dynamics are translated into
            collateral value.
          </p>
          <p className="text-gray-600 text-sm border-l-4 border-rose-400 pl-3">
            <strong>Severity is economic first:</strong> rewards are determined by exploitability and
            real outcomes such as fund loss, insolvency, bad debt, or systemic collateral mispricing,
            not just by the apparent size of the code bug.
          </p>
        </section>

        <section id="scope-and-system-architecture" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Scope & System Architecture</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Avana separates its bug bounty into distinct subsystems so triage mirrors how risk
            actually manifests across lending, valuation, governance, and integrations.
          </p>

          <div className="space-y-5">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`rounded-xl border p-5 ${
                  program.highlighted
                    ? "border-rose-300 bg-gradient-to-br from-rose-50 via-white to-amber-50 shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{program.summary}</p>
                  </div>
                  {program.highlighted ? (
                    <span className="shrink-0 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rose-700">
                      Highest sensitivity
                    </span>
                  ) : null}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Includes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {program.includes.map((item) => (
                        <li key={item} className="border-l-4 border-gray-300 pl-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Primary risks</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {program.risks.map((item) => (
                        <li
                          key={item}
                          className={`pl-3 ${
                            program.highlighted
                              ? "border-l-4 border-rose-400"
                              : "border-l-4 border-gray-300"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {program.note ? (
                  <p className="mt-4 border-l-4 border-rose-500 pl-3 text-sm text-rose-800">
                    <strong>Why it matters:</strong> {program.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            Each subsystem is evaluated independently during triage, but impact is always assessed
            holistically across solvency, user safety, liquidation integrity, and protocol-wide
            trust assumptions.
          </p>
        </section>

        <section id="severity-philosophy" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Severity Philosophy</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Avana does not use generic vulnerability scoring as its primary severity model.
            Findings are judged by credible exploit paths and real economic consequences.
          </p>

          <div className="space-y-4">
            {severityLevels.map((level) => (
              <div
                key={level.title}
                className={`rounded-xl border p-4 ${level.style}`}
              >
                <h3 className="mb-1 text-base font-semibold text-gray-900">{level.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{level.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">
            A minor-looking implementation flaw can still be critical if it enables LP overvaluation
            or bad debt, while a technically interesting bug may be rated lower if it lacks a
            credible path to meaningful financial damage.
          </p>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="Responsible disclosure scope, LP-collateral risk surfaces, and economic-impact triage for Avana."
        sectionColor="rose"
      />
    </div>
  )
}
