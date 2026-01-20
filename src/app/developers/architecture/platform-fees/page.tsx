"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "fee-types", title: "Fee Types" },
  { id: "fee-calculation", title: "Fee Calculation" },
  { id: "fee-distribution", title: "Fee Distribution" },
  { id: "fee-schedule", title: "Current Fee Schedule" },
]

export default function PlatformFeesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Fees</h1>
        <p className="text-lg text-gray-600 mb-8">
          Fee types, calculation logic, and distribution between protocol participants.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market generates revenue through various fees that sustain protocol operations, 
            fund development, and reward stakeholders. Fees are designed to be competitive 
            while ensuring long-term protocol sustainability.
          </p>
        </section>

        <section id="fee-types" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Types</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Borrow Interest</h3>
              <p className="text-gray-600 text-sm mb-2">
                Interest paid by borrowers on outstanding debt. Rates are determined by the 
                Aave v4 Hub's interest rate model.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Variable Rate</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Stable Rate</span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Reserve Factor</h3>
              <p className="text-gray-600 text-sm">
                A percentage of borrow interest directed to the protocol treasury. This funds 
                development, security audits, and insurance reserves.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Liquidation Penalty</h3>
              <p className="text-gray-600 text-sm">
                A fee charged when positions are liquidated. Split between liquidators 
                (as incentive) and the protocol treasury.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Flash Loan Fee</h3>
              <p className="text-gray-600 text-sm">
                Fee charged on flash loan operations. Typically a small percentage of the 
                borrowed amount.
              </p>
            </div>
          </div>
        </section>

        <section id="fee-calculation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Calculation</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Interest Rate Model</h3>
              <p className="text-gray-600 text-sm mb-2">
                Borrow rates follow a utilization-based curve:
              </p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  Rate = BaseRate + (Utilization × Slope1)  // Below optimal<br/>
                  Rate = BaseRate + (Optimal × Slope1) + ((Utilization - Optimal) × Slope2)  // Above optimal
                </code>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Example: USDC Borrowing</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Base rate: 0%</li>
                <li>• Optimal utilization: 80%</li>
                <li>• Slope 1: 4%</li>
                <li>• Slope 2: 75%</li>
                <li>• At 50% utilization: 0% + (50% × 4%) = <strong>2% APR</strong></li>
                <li>• At 90% utilization: 0% + (80% × 4%) + (10% × 75%) = <strong>10.7% APR</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fee-distribution" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fee Distribution</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Protocol fees are distributed among various stakeholders:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Recipient</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Share</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Lenders (Hub)</td>
                  <td className="px-4 py-2 text-gray-600">~80%</td>
                  <td className="px-4 py-2 text-gray-600">Supply interest to liquidity providers</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Protocol Treasury</td>
                  <td className="px-4 py-2 text-gray-600">~15%</td>
                  <td className="px-4 py-2 text-gray-600">Development, audits, operations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Insurance Fund</td>
                  <td className="px-4 py-2 text-gray-600">~5%</td>
                  <td className="px-4 py-2 text-gray-600">Bad debt coverage, emergency reserves</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="fee-schedule" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Fee Schedule</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Fee Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Amount</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Reserve Factor</td>
                  <td className="px-4 py-2 text-gray-600">10-20%</td>
                  <td className="px-4 py-2 text-gray-600">Varies by asset</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Liquidation Penalty</td>
                  <td className="px-4 py-2 text-gray-600">5-10%</td>
                  <td className="px-4 py-2 text-gray-600">Varies by LP type</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Flash Loan Fee</td>
                  <td className="px-4 py-2 text-gray-600">0.05%</td>
                  <td className="px-4 py-2 text-gray-600">Per flash loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Deposit Fee</td>
                  <td className="px-4 py-2 text-green-600 font-medium">0%</td>
                  <td className="px-4 py-2 text-gray-600">No fee to deposit</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Withdrawal Fee</td>
                  <td className="px-4 py-2 text-green-600 font-medium">0%</td>
                  <td className="px-4 py-2 text-gray-600">No fee to withdraw</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Fees are subject to change through governance. Check the dashboard for current rates.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Fee types, calculation logic, and distribution between protocol participants."
        sectionColor="violet"
      />
    </div>
  )
}
