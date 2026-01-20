"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "insurance-fund", title: "Insurance Fund" },
  { id: "solvency-buffer", title: "Solvency Buffer" },
  { id: "payout-mechanism", title: "Payout Mechanism" },
  { id: "auto-deleveraging", title: "Auto-Deleveraging" },
  { id: "coverage-scenarios", title: "Coverage Scenarios" },
]

export default function InsuranceFundsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Insurance Funds</h1>
        <p className="text-lg text-gray-600 mb-8">
          Backstop mechanisms intended to mitigate losses during extreme market events.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Managing distressed positions is critical for protocol stability. The Insurance Fund 
            serves as a backstop against bad debt that may occur when liquidations fail to fully 
            cover outstanding loans.
          </p>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>Current Status:</strong> AMM Market does not currently have insurance funds, 
              but plans to implement one soon. This page describes the planned functionality.
            </p>
          </div>
        </section>

        <section id="insurance-fund" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Insurance Fund Purpose</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Insurance Fund is essential for mitigating leveraged losses among protocol users. 
            In volatile markets, delayed liquidations or unfavorable execution prices can result 
            in negative account balances.
          </p>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Key Function</h3>
            <p className="text-blue-800 text-sm">
              The Insurance Fund covers these "bad debts," ensuring that even in times of financial 
              stress, the protocol remains resilient and profitable positions are honored.
            </p>
          </div>
        </section>

        <section id="solvency-buffer" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solvency Buffer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By providing a robust solvency buffer, the Insurance Fund ensures that each market can 
            cover a predetermined amount of leveraged losses.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">User Confidence</h3>
              <p className="text-green-800 text-sm">
                This buffer is critical in maintaining user confidence and ensuring that liabilities 
                from bankrupt accounts are settled without impacting the overall health of the protocol.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Fund Structure (Planned)</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• <strong>Primary Fund:</strong> Main reserve funded by protocol fees</li>
                <li>• <strong>Safety Module:</strong> Staked tokens providing additional coverage</li>
                <li>• <strong>Treasury Reserve:</strong> Protocol treasury as last-resort backstop</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="payout-mechanism" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payout Mechanism</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Insurance Fund is structured to provide different levels of coverage:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Full Loss Coverage for Spot Markets</h3>
              <p className="text-blue-800 text-sm">
                Protecting all spot market balances with complete coverage.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Limited Coverage for Perpetual Contracts</h3>
              <p className="text-purple-800 text-sm">
                Up to the maximum insurance limit defined for each perpetual market.
              </p>
            </div>
          </div>
        </section>

        <section id="auto-deleveraging" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Auto-Deleveraging</h2>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-200 mb-4">
            <h3 className="font-semibold text-red-900 mb-2">Last Resort Mechanism</h3>
            <p className="text-red-800 text-sm">
              If the Insurance Fund's equity falls below zero, the protocol automatically deleverages 
              opposing positions at the fund's zero price. Auto-deleveraging is a last-resort mechanism, 
              activated only when the Insurance Fund is depleted.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Minimizing Impact</h3>
            <p className="text-green-800 text-sm">
              AMM Market's sophisticated algorithms work continuously to minimize the need for, and 
              the impact of, auto-deleveraging. This streamlined approach clarifies the operational 
              mechanics while highlighting its vital role in protecting users and maintaining protocol 
              stability during periods of market distress.
            </p>
          </div>
        </section>

        <section id="coverage-scenarios" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coverage Scenarios</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The insurance fund covers specific scenarios:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-1">Covered</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Bad debt from failed liquidations</li>
                <li>• Oracle manipulation losses (with proof)</li>
                <li>• Smart contract bugs (post-audit)</li>
                <li>• Negative account balances from delayed liquidations</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-1">Not Covered</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• User error (wrong transactions)</li>
                <li>• Impermanent loss on LP positions</li>
                <li>• Market price movements</li>
                <li>• Third-party protocol failures</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Claims Process (Planned)</h3>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li><strong>Detection:</strong> Bad debt automatically detected when collateral is fully liquidated but debt remains</li>
              <li><strong>Verification:</strong> Risk committee verifies the shortfall qualifies for coverage</li>
              <li><strong>Coverage:</strong> Insurance fund automatically covers the shortfall</li>
              <li><strong>Resolution:</strong> Bad debt cleared, post-mortem analysis conducted</li>
            </ol>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Backstop mechanisms intended to mitigate losses during extreme market events."
        sectionColor="rose"
      />
    </div>
  )
}
