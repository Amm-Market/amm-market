import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Safety Mechanisms - Risk Framework",
  description:
    "AMM Market Risk Framework - protocol-wide risk management across the Hub and LP Collateral Spokes, including roles, timelocked updates, and emergency controls.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "core-principles", title: "Core Principles" },
  { id: "roles", title: "Roles" },
  { id: "update-flow", title: "Update Flow" },
  { id: "parameter-classes", title: "Parameter Classes" },
  { id: "public-disclosure", title: "Public Disclosure" },
  { id: "emergency-actions", title: "Emergency Actions" },
]

const corePrinciples = [
  {
    title: "Role Separation",
    description:
      "Risk recommendation, independent review, and emergency containment are separate responsibilities.",
  },
  {
    title: "Constrained Execution",
    description:
      "Risk changes only execute if they stay inside predefined policy bounds and pass framework validation.",
  },
  {
    title: "Public Consistency",
    description:
      "What is disclosed before submission should match what is actually queued for execution.",
  },
  {
    title: "Spoke Awareness",
    description:
      "Each LP collateral spoke has its own admissibility rules, oracle assumptions, liquidation logic, and risk profile.",
  },
  {
    title: "Defensive Asymmetry",
    description:
      "It should always be easier to reduce risk than to increase it.",
  },
]

const roles = [
  {
    title: "AMM Market Risk Initiator",
    summary:
      "The primary recommending authority for routine risk updates across the Hub and LP Collateral Spokes.",
    responsibilities: [
      "Publish the rationale and classify the update as defensive or growth-oriented",
      "Submit routine updates into the timelocked execution path",
      "Recommend supply caps, borrow caps, LT/LTV, reserve factor, and interest-rate changes inside approved ranges",
      "Initiate spoke-level de-risking and pool onboarding inside preapproved spoke templates",
    ],
  },
  {
    title: "AMM Market Risk Guardian",
    summary:
      "The independent review and veto layer that preserves integrity, consistency, and execution safety.",
    responsibilities: [
      "Verify that the queued update matches the public disclosure",
      "Check that the action stays inside approved policy bounds",
      "Reject updates based on invalid oracle, liquidity, or liquidation assumptions",
      "Cancel a queued update during the timelock window when it creates obvious spoke-level or hub-level instability",
    ],
  },
  {
    title: "AMM Market Risk Defender",
    summary:
      "The narrow emergency containment role for incidents where the normal timelocked process would create unacceptable exposure.",
    responsibilities: [
      "Reduce borrow caps or supply caps to defensive levels",
      "Freeze new borrowing on a spoke or freeze collateral usage for a pool, template, or spoke",
      "Disable a specific adapter or borrow path when predefined failure conditions are met",
      "Block new debt origination under emergency conditions without being used for routine optimization or growth actions",
    ],
  },
]

const updateFlow = [
  {
    step: "Public Notice",
    description:
      "The Risk Initiator publishes a notice describing the intended update and its rationale.",
  },
  {
    step: "Submission",
    description:
      "The Risk Initiator submits the proposed change into the execution path.",
  },
  {
    step: "Validation",
    description:
      "The framework checks the update against predefined constraints and policy bounds.",
  },
  {
    step: "Timelock",
    description:
      "If valid, the update enters a timelock window before it can execute.",
  },
  {
    step: "Guardian Review",
    description:
      "During timelock, the Risk Guardian reviews the exact queued change and may veto it.",
  },
  {
    step: "Execution",
    description:
      "If the change is not cancelled, it executes automatically after timelock.",
  },
  {
    step: "Emergency Path",
    description:
      "If emergency conditions are met, the Risk Defender may act through a separate defensive path with narrower authority.",
  },
]

const parameterClasses = [
  {
    title: "Defensive Changes",
    tone: "border-red-400 bg-red-50/70",
    description: "These should be the easiest changes to execute.",
    examples: [
      "Lowering borrow caps",
      "Lowering supply caps",
      "Reducing LTV or liquidation threshold",
      "Freezing borrow or collateral usage",
      "Tightening spoke settings",
    ],
  },
  {
    title: "Routine Bounded Changes",
    tone: "border-amber-400 bg-amber-50/70",
    description:
      "These move through the standard Initiator -> Guardian -> timelock flow.",
    examples: [
      "Modest cap increases",
      "Modest parameter tuning inside approved ranges",
      "Adding new pools inside an existing spoke template",
    ],
  },
  {
    title: "Governance-Level Changes",
    tone: "border-gray-300 bg-gray-50",
    description: "These remain outside the routine framework path.",
    examples: [
      "Creating a new spoke family",
      "Enabling a new LP primitive",
      "Adding a new oracle model",
      "Enabling a new liquidation adapter",
      "Materially expanding the risk surface beyond preapproved assumptions",
    ],
  },
]

const disclosureItems = [
  "Affected spoke",
  "Affected pools or templates",
  "Current parameters",
  "Proposed parameters",
  "Reason for the update",
  "Whether the update is defensive or growth-oriented",
  "Expected submission timing",
  "Expected timelock window",
  "Relevant dependencies or assumptions",
]

const emergencyTriggers = [
  "Oracle inconsistency",
  "Liquidation path degradation",
  "Abnormal pool behavior",
  "Wrapper dependency failure",
  "Adapter-level compromise",
  "Sudden spoke-level instability",
]

const emergencyDisclosures = [
  "The trigger",
  "The action taken",
  "The intended duration",
  "The path back to normal operation",
]

export default function RiskFrameworkPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
      <div className="max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Risk Framework</h1>
        <p className="mb-8 text-lg text-gray-600">
          Protocol-wide operating rules for risk management across the AMM Market Hub and LP
          Collateral Spokes.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The AMM Market Risk Framework is the protocol-wide operating system for risk parameter
            management across the AMM Market Hub and all LP Collateral Spokes. It governs how the
            protocol interprets market data and protocol state, including circuit breakers, spot
            price, utilization, liquidity pool depth, collateral concentration, volatility, peg
            stability, proof-of-reserves inputs, supply and borrow caps, LT/LTV settings, interest
            rate models, market status, portfolio composition, and position health.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            AMM Market is not a generic lending market. It is an LP-as-collateral protocol built on
            Aave v4 infrastructure, supporting stable LPs, correlated-asset LPs, weighted pools,
            concentrated liquidity positions, and other AMM designs through dedicated spokes. Those
            markets do not share the same valuation logic, liquidation path, or failure modes, so
            the framework exists to manage that complexity with clear operating rules.
          </p>
          <p className="mb-4 text-gray-600 leading-relaxed">
            The framework is built around three deliberately separated roles: the AMM Market Risk
            Initiator, the AMM Market Risk Guardian, and the AMM Market Risk Defender. The actor
            that proposes changes should not be the same actor that independently reviews them, and
            emergency containment should remain narrower than routine risk management.
          </p>
          <p className="text-sm text-gray-600 border-l-4 border-rose-400 pl-3">
            <strong>Core idea:</strong> it should always be easier to contain risk quickly than to
            expand it casually.
          </p>
        </section>

        <section id="core-principles" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Core Principles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {corePrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="roles" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Roles</h2>
          <div className="space-y-5">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{role.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="border-l-4 border-rose-300 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="update-flow" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Update Flow</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            The standard framework flow is designed to be simple, reviewable, and auditable.
          </p>

          <div className="space-y-4">
            {updateFlow.map((item, index) => (
              <div
                key={item.step}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-semibold text-rose-700">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-gray-900">
                      {item.step}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="parameter-classes" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Parameter Classes</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Not every parameter change should move through the same path.
          </p>

          <div className="space-y-4">
            {parameterClasses.map((group) => (
              <div
                key={group.title}
                className={`rounded-xl border p-4 ${group.tone}`}
              >
                <h3 className="mb-1 text-base font-semibold text-gray-900">
                  {group.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-700">
                  {group.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {group.examples.map((item) => (
                    <li key={item} className="border-l-4 border-white/70 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="public-disclosure" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Public Disclosure</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Each routine update should be published in a consistent format before submission.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="mb-3 text-base font-semibold text-gray-900">
              Minimum disclosure standard
            </h3>
            <ul className="grid gap-3 text-sm text-gray-600 md:grid-cols-2">
              {disclosureItems.map((item) => (
                <li key={item} className="border-l-4 border-gray-300 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            This standard gives developers, users, and the Risk Guardian a clear basis for review.
          </p>
        </section>

        <section id="emergency-actions" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Emergency Actions</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Emergency actions should be rare, narrow, and reversible. The Risk Defender should only
            act when there is a defined or highly probable failure condition that makes waiting for
            the normal timelocked process unsafe.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50/70 p-4">
              <h3 className="mb-3 text-base font-semibold text-gray-900">
                Emergency triggers
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {emergencyTriggers.map((item) => (
                  <li key={item} className="border-l-4 border-red-300 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <h3 className="mb-3 text-base font-semibold text-gray-900">
                Required post-action disclosure
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {emergencyDisclosures.map((item) => (
                  <li key={item} className="border-l-4 border-gray-300 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600 border-l-4 border-rose-400 pl-3">
            Emergency authority is a defense mechanism, not a substitute for conservative routine
            risk management.
          </p>
        </section>

        <p className="text-sm leading-relaxed text-gray-600">
          Most importantly, the framework separates recommendation, review, and emergency
          containment because LP collateral is not a single market. It is a family of markets with
          different structures, assumptions, and failure modes, and the framework is designed to
          support that diversity with discipline, transparency, and operational control.
        </p>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="Protocol-wide operating rules for risk management across the AMM Market Hub and LP Collateral Spokes."
        sectionColor="rose"
      />
    </div>
  )
}
