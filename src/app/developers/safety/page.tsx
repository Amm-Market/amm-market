"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "collateral-parameters", title: "Collateral Parameters" },
  { id: "protocol-limits", title: "Protocol Limits" },
  { id: "emergency-procedures", title: "Emergency Procedures" },
  { id: "risk-monitoring", title: "Risk Monitoring" },
]

export default function RiskParametersPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Risk Parameters</h1>
        <p className="text-lg text-gray-600 mb-8">
          Configurable limits and safeguards designed to manage systemic and asset-specific risk.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market implements multiple layers of risk management to protect users and the 
            protocol from adverse market conditions. These parameters are configurable through 
            governance and can be adjusted in response to changing market dynamics.
          </p>
        </section>

        <section id="collateral-parameters" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collateral Parameters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Each LP type has specific risk parameters:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Parameter</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Description</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">LTV</td>
                  <td className="px-4 py-2 text-gray-600">Maximum borrowing capacity</td>
                  <td className="px-4 py-2 text-gray-600">50-85%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Liquidation Threshold</td>
                  <td className="px-4 py-2 text-gray-600">HF level triggering liquidation</td>
                  <td className="px-4 py-2 text-gray-600">60-90%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Liquidation Bonus</td>
                  <td className="px-4 py-2 text-gray-600">Discount for liquidators</td>
                  <td className="px-4 py-2 text-gray-600">5-15%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Reserve Factor</td>
                  <td className="px-4 py-2 text-gray-600">Protocol fee on interest</td>
                  <td className="px-4 py-2 text-gray-600">10-30%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Supply Cap</td>
                  <td className="px-4 py-2 text-gray-600">Max LP tokens accepted</td>
                  <td className="px-4 py-2 text-gray-600">Variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="protocol-limits" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protocol Limits</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Supply Caps</h3>
              <p className="text-gray-600 text-sm mb-2">
                Maximum amount of each LP type that can be deposited as collateral.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Prevents concentration risk in single LP types</li>
                <li>• Ensures liquidations can be absorbed by market</li>
                <li>• Adjusted based on pool liquidity depth</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Borrow Caps</h3>
              <p className="text-gray-600 text-sm mb-2">
                Maximum amount that can be borrowed against specific LP types.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Limits exposure to volatile collateral</li>
                <li>• Protects Hub liquidity providers</li>
                <li>• Per-asset and global limits</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Debt Ceiling</h3>
              <p className="text-gray-600 text-sm mb-2">
                Total debt that can be issued against all LP collateral combined.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Global protocol limit</li>
                <li>• Scales with insurance fund size</li>
                <li>• Increased as protocol matures</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="emergency-procedures" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Procedures</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In extreme market conditions, the protocol can activate emergency measures:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-1">Pause Borrowing</h3>
              <p className="text-red-800 text-sm">
                Temporarily halt new borrows while allowing repayments and liquidations.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-1">Freeze LP Type</h3>
              <p className="text-orange-800 text-sm">
                Disable deposits for specific LP tokens experiencing issues.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-1">Adjust Parameters</h3>
              <p className="text-yellow-800 text-sm">
                Emergency parameter changes (LTV reduction, threshold changes) via guardian.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Full Pause</h3>
              <p className="text-gray-600 text-sm">
                Complete protocol pause in case of critical vulnerability. Requires multi-sig.
              </p>
            </div>
          </div>
        </section>

        <section id="risk-monitoring" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Risk Monitoring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Continuous monitoring systems track protocol health:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Utilization Alerts</h3>
              <p className="text-gray-600 text-sm">
                Notifications when utilization exceeds optimal levels.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Liquidation Queue</h3>
              <p className="text-gray-600 text-sm">
                Real-time tracking of positions approaching liquidation.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Oracle Health</h3>
              <p className="text-gray-600 text-sm">
                Monitoring of price feed freshness and deviation.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Bad Debt Tracking</h3>
              <p className="text-gray-600 text-sm">
                Detection and reporting of any underwater positions.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Configurable limits and safeguards designed to manage systemic and asset-specific risk."
        sectionColor="rose"
      />
    </div>
  )
}
