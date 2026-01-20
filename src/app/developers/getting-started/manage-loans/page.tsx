"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "borrowing-more", title: "Borrowing More" },
  { id: "monitoring-health", title: "Monitoring Health" },
  { id: "operational-control", title: "Operational Control" },
  { id: "position-changes", title: "Position Changes" },
  { id: "key-constraints", title: "Key Constraints" },
]

export default function ManageLoansPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Loans</h1>
        <p className="text-lg text-gray-600 mb-8">
          Monitoring positions, adjusting collateral, and maintaining healthy loan parameters.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Active loan management is critical to maintaining a healthy position and avoiding 
            liquidation. This includes monitoring your health factor, adjusting collateral as 
            needed, and staying informed about market conditions.
          </p>
        </section>

        <section id="borrowing-more" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Borrowing More</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If a loan remains healthy and the maximum borrowing limit has not been reached, 
            additional funds can be borrowed.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Partial Repayments</h3>
            <p className="text-blue-800 text-sm">
              To reduce exposure, users may make partial repayments at any time. This improves 
              the health factor and reduces interest accrual.
            </p>
          </div>
        </section>

        <section id="monitoring-health" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Monitoring Health</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The interface provides tools to monitor market conditions and assess their impact on collateral.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-lg border-l-4 border-green-500 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-900">Safe Zone</span>
                <span className="text-green-700 font-mono text-sm">HF &gt; 1.5</span>
              </div>
              <p className="text-green-800 text-sm mt-1">Comfortable buffer. Normal operations.</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-yellow-900">Caution Zone</span>
                <span className="text-yellow-700 font-mono text-sm">1.0 &lt; HF &lt; 1.5</span>
              </div>
              <p className="text-yellow-800 text-sm mt-1">Monitor closely. Consider adding collateral or repaying debt.</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-red-500 bg-red-50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-red-900">Danger Zone</span>
                <span className="text-red-700 font-mono text-sm">HF ≤ 1.0</span>
              </div>
              <p className="text-red-800 text-sm mt-1">Position is liquidatable. Take immediate action.</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Proactive Warnings</h3>
            <p className="text-amber-800 text-sm">
              If the value of the LP NFT decreases and loan health declines, the application issues 
              warnings. This proactive monitoring enables users to respond before a position becomes 
              critical and subject to liquidation.
            </p>
          </div>
        </section>

        <section id="operational-control" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Operational Control</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Users retain operational control of LPs even while they are collateralized, provided 
            the loan remains healthy. You can:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Collect and Compound Fees</h3>
              <p className="text-gray-600 text-sm">
                Claim accrued trading fees and optionally compound them back into your position.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Add or Withdraw Liquidity</h3>
              <p className="text-gray-600 text-sm">
                Adjust liquidity as long as the updated collateral value remains above the protocol's requirement.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Full Withdrawal</h3>
              <p className="text-gray-600 text-sm">
                Fully withdraw the position by repaying all outstanding debt.
              </p>
            </div>
          </div>
        </section>

        <section id="position-changes" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Position Changes</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can make changes to your LP position while it's collateralized:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Change Price Range</h3>
              <p className="text-blue-800 text-sm">
                To change a position's price range, users must first withdraw liquidity and then 
                create a new position at the desired range.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Reallocate to Different Pair</h3>
              <p className="text-purple-800 text-sm">
                Liquidity can also be reallocated to a different asset pair. In both cases, the 
                new pair must be approved as valid collateral by the protocol.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> The resulting collateral value must be sufficient to 
              maintain a healthy loan status after any position changes.
            </p>
          </div>
        </section>

        <section id="key-constraints" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Constraints</h2>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-900 mb-2">Collateral Threshold Protection</h3>
            <p className="text-red-800 text-sm mb-3">
              Any modification that reduces collateral below the required threshold is either 
              blocked or must be paired with:
            </p>
            <ul className="text-red-800 text-sm space-y-1 ml-4">
              <li>• Additional collateral deposit</li>
              <li>• Partial repayment of debt</li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            These safeguards ensure loan stability and reduce liquidation risk.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Monitoring positions, adjusting collateral, and maintaining healthy loan parameters."
        sectionColor="emerald"
      />
    </div>
  )
}
