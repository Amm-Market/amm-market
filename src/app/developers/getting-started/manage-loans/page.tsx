"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "monitoring-health", title: "Monitoring Health Factor" },
  { id: "adjusting-collateral", title: "Adjusting Collateral" },
  { id: "position-dashboard", title: "Position Dashboard" },
  { id: "alerts-notifications", title: "Alerts & Notifications" },
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

        <section id="monitoring-health" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Monitoring Health Factor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your health factor indicates position safety. It changes as collateral value and 
            debt fluctuate.
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

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Query Health Factor On-Chain</h3>
            <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
              uint256 healthFactor = ammMarket.getUserHealthFactor(userAddress)
            </code>
          </div>
        </section>

        <section id="adjusting-collateral" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adjusting Collateral</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can improve your health factor by adding more collateral or reduce exposure by 
            withdrawing excess collateral.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Add Collateral</h3>
              <p className="text-green-800 text-sm mb-2">Increases health factor and borrowing power.</p>
              <code className="text-xs bg-green-100 px-2 py-1 rounded block">
                ammMarket.deposit(lpToken, amount, onBehalfOf)
              </code>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">Withdraw Collateral</h3>
              <p className="text-orange-800 text-sm mb-2">Only possible if HF remains above 1.0 after withdrawal.</p>
              <code className="text-xs bg-orange-100 px-2 py-1 rounded block">
                ammMarket.withdraw(lpToken, amount, to)
              </code>
            </div>
          </div>
        </section>

        <section id="position-dashboard" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Position Dashboard</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AMM Market dashboard provides a comprehensive view of your position:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Collateral Value:</strong> Real-time USD value of deposited LP tokens</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Borrowed Amount:</strong> Total debt including accrued interest</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Health Factor:</strong> Current position safety indicator</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Available to Borrow:</strong> Remaining borrowing capacity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>LP Fees Earned:</strong> Trading fees accrued on your LP position</span>
            </li>
          </ul>
        </section>

        <section id="alerts-notifications" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alerts & Notifications</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Set up alerts to stay informed about your position health:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Health Factor Alerts</h3>
              <p className="text-gray-600 text-sm">
                Receive notifications when your health factor drops below configurable thresholds.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Price Movement Alerts</h3>
              <p className="text-gray-600 text-sm">
                Get notified of significant price changes in your LP's underlying assets.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Interest Rate Changes</h3>
              <p className="text-gray-600 text-sm">
                Stay informed when borrow rates change significantly.
              </p>
            </div>
          </div>
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
