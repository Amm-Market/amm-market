"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "repayment-options", title: "Repayment Options" },
  { id: "interest-accrual", title: "Interest Accrual" },
  { id: "repay-process", title: "Repay Process" },
  { id: "full-vs-partial", title: "Full vs Partial Repayment" },
]

export default function RepayLoansPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Repay Loans</h1>
        <p className="text-lg text-gray-600 mb-8">
          Repayment mechanics, interest accrual considerations, and partial vs full repayment.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Repaying your loan reduces debt and improves your health factor. There are no 
            fixed repayment schedules — you can repay any amount at any time. However, 
            interest continues to accrue until the debt is fully repaid.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> Repaying even a small amount can significantly improve your 
              health factor when it's low.
            </p>
          </div>
        </section>

        <section id="repayment-options" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repayment Options</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can repay using:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Same Asset</h3>
              <p className="text-gray-600 text-sm">
                Repay with the same asset you borrowed (e.g., repay USDC debt with USDC).
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Collateral (Flash Repay)</h3>
              <p className="text-gray-600 text-sm">
                Use a portion of your LP collateral to repay debt via flash loan mechanics. 
                Useful when you don't have liquid assets.
              </p>
            </div>
          </div>
        </section>

        <section id="interest-accrual" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest Accrual</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Interest accrues continuously on your outstanding debt:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Aspect</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Accrual Frequency</td>
                  <td className="px-4 py-2 text-gray-600">Per-second compounding</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Rate Type</td>
                  <td className="px-4 py-2 text-gray-600">Variable (changes with utilization) or Stable</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Calculation</td>
                  <td className="px-4 py-2 text-gray-600">Principal × (1 + rate/seconds_per_year)^elapsed_seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            The total debt shown in the dashboard always includes accrued interest.
          </p>
        </section>

        <section id="repay-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repay Process</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Approve Repayment Asset</h3>
              <p className="text-gray-600 text-sm mb-2">
                If not already approved, grant permission to transfer the repayment asset.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                asset.approve(ammMarketAddress, repayAmount)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Execute Repayment</h3>
              <p className="text-gray-600 text-sm mb-2">
                Call the repay function with the asset and amount.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                ammMarket.repay(assetAddress, amount, interestRateMode, onBehalfOf)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Confirm</h3>
              <p className="text-gray-600 text-sm">
                Sign the transaction. Your debt decreases and health factor improves immediately.
              </p>
            </div>
          </div>
        </section>

        <section id="full-vs-partial" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full vs Partial Repayment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Full Repayment</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Pass <code className="bg-green-100 px-1 rounded">type(uint256).max</code> as amount</li>
                <li>• Clears all debt including accrued interest</li>
                <li>• Enables full collateral withdrawal</li>
                <li>• No more interest accrual</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Partial Repayment</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Specify exact amount to repay</li>
                <li>• Reduces debt proportionally</li>
                <li>• Improves health factor</li>
                <li>• Interest continues on remaining debt</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> When repaying the full amount, use <code className="bg-yellow-100 px-1 rounded">type(uint256).max</code> 
              to ensure all accrued interest is covered. Specifying an exact amount may leave dust debt.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Repayment mechanics, interest accrual considerations, and partial vs full repayment."
        sectionColor="emerald"
      />
    </div>
  )
}
