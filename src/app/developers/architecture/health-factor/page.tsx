"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "calculation", title: "Calculation" },
  { id: "factors-affecting", title: "Factors Affecting HF" },
  { id: "monitoring", title: "Monitoring" },
  { id: "improving-hf", title: "Improving Health Factor" },
]

export default function HealthFactorPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Factor</h1>
        <p className="text-lg text-gray-600 mb-8">
          How collateral value and debt interact to determine position safety.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The health factor (HF) is the most important metric for managing your position. 
            It represents the safety margin between your collateral and debt. When HF drops 
            to 1.0 or below, your position becomes liquidatable.
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">&gt; 1.5</div>
              <div className="text-green-800 text-sm font-medium">Safe</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">1.0 - 1.5</div>
              <div className="text-yellow-800 text-sm font-medium">Caution</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">≤ 1.0</div>
              <div className="text-red-800 text-sm font-medium">Liquidatable</div>
            </div>
          </div>
        </section>

        <section id="calculation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Calculation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Health factor is calculated using the following formula:
          </p>
          
          <div className="p-4 bg-gray-900 rounded-lg mb-4">
            <code className="text-green-400 text-sm">
              HF = (Σ Collateral_i × LiquidationThreshold_i) / TotalDebt
            </code>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Components</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><strong>Collateral_i:</strong> USD value of each LP token type deposited</li>
                <li><strong>LiquidationThreshold_i:</strong> The liquidation threshold for that LP type</li>
                <li><strong>TotalDebt:</strong> Sum of all borrowed amounts plus accrued interest</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Example Calculation</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• ETH/USDC LP value: $10,000</li>
                <li>• Liquidation threshold: 82%</li>
                <li>• Total debt: $6,000</li>
                <li>• <strong>HF = ($10,000 × 0.82) / $6,000 = 1.37</strong></li>
              </ul>
              <p className="text-blue-700 text-xs mt-2">
                This position is in the caution zone but not yet liquidatable.
              </p>
            </div>
          </div>
        </section>

        <section id="factors-affecting" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Factors Affecting HF</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your health factor changes based on:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500">↓</span>
                <h3 className="font-semibold text-gray-900">LP Value Decreases</h3>
              </div>
              <p className="text-gray-600 text-sm">
                When underlying token prices drop or impermanent loss increases, your collateral 
                value decreases and HF drops.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500">↓</span>
                <h3 className="font-semibold text-gray-900">Debt Increases</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Interest accrual increases your debt over time, slowly reducing HF.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-500">↑</span>
                <h3 className="font-semibold text-gray-900">LP Value Increases</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Price appreciation or accumulated trading fees increase collateral value and HF.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-500">↑</span>
                <h3 className="font-semibold text-gray-900">Debt Repayment</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Repaying any amount of debt immediately improves your HF.
              </p>
            </div>
          </div>
        </section>

        <section id="monitoring" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Monitoring</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can monitor your health factor through:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Real-time HF display with color-coded status indicators.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">On-Chain Query</h3>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block mt-2">
                ammMarket.getUserHealthFactor(userAddress)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Alerts</h3>
              <p className="text-gray-600 text-sm">
                Set up notifications when HF drops below custom thresholds.
              </p>
            </div>
          </div>
        </section>

        <section id="improving-hf" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Improving Health Factor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your HF is low, you have two options:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Add Collateral</h3>
              <p className="text-green-800 text-sm mb-2">
                Deposit more LP tokens to increase the numerator.
              </p>
              <code className="text-xs bg-green-100 px-2 py-1 rounded block">
                ammMarket.deposit(lpToken, amount, onBehalfOf)
              </code>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Repay Debt</h3>
              <p className="text-blue-800 text-sm mb-2">
                Reduce your borrowed amount to decrease the denominator.
              </p>
              <code className="text-xs bg-blue-100 px-2 py-1 rounded block">
                ammMarket.repay(asset, amount, rateMode, onBehalfOf)
              </code>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Tip:</strong> Repaying debt is often more capital-efficient than adding 
              collateral, especially when LP tokens are expensive to acquire.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="How collateral value and debt interact to determine position safety."
        sectionColor="violet"
      />
    </div>
  )
}
