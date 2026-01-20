"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "example-1", title: "Example 1: Price Drop" },
  { id: "example-2", title: "Example 2: Interest Accrual" },
  { id: "example-3", title: "Example 3: Impermanent Loss" },
  { id: "example-4", title: "Example 4: Partial Liquidation" },
]

export default function LiquidationExamplesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Liquidation Examples</h1>
        <p className="text-lg text-gray-600 mb-8">
          Concrete scenarios illustrating health factor deterioration and liquidation outcomes.
        </p>

        <section id="example-1" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example 1: Price Drop Liquidation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A user deposits ETH/USDC LP tokens and borrows USDC. ETH price drops significantly.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Initial Position</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• ETH/USDC LP value: <strong>$10,000</strong></li>
                <li>• Liquidation threshold: <strong>82%</strong></li>
                <li>• Borrowed USDC: <strong>$7,000</strong></li>
                <li>• Health Factor: ($10,000 × 0.82) / $7,000 = <strong>1.17</strong></li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">After ETH Drops 20%</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• ETH/USDC LP value: <strong>$8,500</strong> (LP value drops ~15% due to IL)</li>
                <li>• Borrowed USDC: <strong>$7,000</strong> (unchanged)</li>
                <li>• Health Factor: ($8,500 × 0.82) / $7,000 = <strong>1.00</strong></li>
                <li className="text-yellow-900 font-medium">→ Position is now liquidatable!</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Liquidation Outcome</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Liquidator repays: <strong>$3,500</strong> (50% of debt)</li>
                <li>• Liquidation bonus: <strong>7.5%</strong></li>
                <li>• Collateral seized: $3,500 × 1.075 = <strong>$3,762.50</strong> worth of LP</li>
                <li>• User's remaining collateral: <strong>$4,737.50</strong></li>
                <li>• User's remaining debt: <strong>$3,500</strong></li>
                <li>• New HF: ($4,737.50 × 0.82) / $3,500 = <strong>1.11</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="example-2" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example 2: Interest Accrual Liquidation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A user borrows at high utilization and doesn't monitor their position as interest accrues.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Initial Position</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Stablecoin LP value: <strong>$50,000</strong></li>
                <li>• Liquidation threshold: <strong>90%</strong></li>
                <li>• Borrowed USDC: <strong>$42,000</strong></li>
                <li>• Health Factor: ($50,000 × 0.90) / $42,000 = <strong>1.07</strong></li>
                <li>• Borrow APR: <strong>15%</strong></li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">After 6 Months</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• LP value: <strong>$50,500</strong> (slight fee accrual)</li>
                <li>• Debt with interest: $42,000 × (1 + 0.15/2) = <strong>$45,150</strong></li>
                <li>• Health Factor: ($50,500 × 0.90) / $45,150 = <strong>1.01</strong></li>
                <li className="text-yellow-900 font-medium">→ Position approaching liquidation!</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Prevention</h3>
              <p className="text-green-800 text-sm">
                User could have avoided liquidation by:
              </p>
              <ul className="text-green-700 text-sm mt-2 space-y-1">
                <li>• Setting up HF alerts at 1.2</li>
                <li>• Repaying $5,000 to restore HF to 1.15</li>
                <li>• Adding $5,000 more LP collateral</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="example-3" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example 3: Impermanent Loss Liquidation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A user with volatile LP experiences significant impermanent loss during a price divergence.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Initial Position</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• ARB/ETH LP value: <strong>$20,000</strong></li>
                <li>• Liquidation threshold: <strong>70%</strong></li>
                <li>• Borrowed USDC: <strong>$12,000</strong></li>
                <li>• Health Factor: ($20,000 × 0.70) / $12,000 = <strong>1.17</strong></li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">ARB Pumps 100% vs ETH</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Price divergence causes ~5.7% IL</li>
                <li>• LP value if held: would be $30,000</li>
                <li>• Actual LP value: <strong>$28,290</strong> (after IL)</li>
                <li>• But then ARB crashes 60%...</li>
                <li>• Final LP value: <strong>$13,500</strong></li>
                <li>• Health Factor: ($13,500 × 0.70) / $12,000 = <strong>0.79</strong></li>
                <li className="text-red-900 font-medium">→ Deep underwater, immediate liquidation!</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Lesson</h3>
              <p className="text-gray-600 text-sm">
                Volatile LP pairs have lower liquidation thresholds for good reason. 
                The combination of price drops and IL can cause rapid HF deterioration.
              </p>
            </div>
          </div>
        </section>

        <section id="example-4" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example 4: Partial Liquidation Recovery</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A user's position is partially liquidated, but they recover by adding collateral.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Position at Liquidation</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• ETH/USDC LP value: <strong>$25,000</strong></li>
                <li>• Debt: <strong>$21,000</strong></li>
                <li>• Health Factor: <strong>0.98</strong></li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">First Liquidation (50%)</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Debt repaid: <strong>$10,500</strong></li>
                <li>• Collateral seized: $10,500 × 1.075 = <strong>$11,287.50</strong></li>
                <li>• Remaining collateral: <strong>$13,712.50</strong></li>
                <li>• Remaining debt: <strong>$10,500</strong></li>
                <li>• New HF: ($13,712.50 × 0.82) / $10,500 = <strong>1.07</strong></li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">User Adds Collateral</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• User deposits additional <strong>$5,000</strong> LP</li>
                <li>• Total collateral: <strong>$18,712.50</strong></li>
                <li>• Debt: <strong>$10,500</strong></li>
                <li>• New HF: ($18,712.50 × 0.82) / $10,500 = <strong>1.46</strong></li>
                <li className="text-green-900 font-medium">→ Position recovered to safe zone!</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Net Result</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Original position: $25,000 collateral, $21,000 debt</li>
                <li>• After recovery: $18,712.50 + $5,000 = $23,712.50 collateral, $10,500 debt</li>
                <li>• Loss from liquidation: ~$6,287.50 (liquidation penalty + lost collateral)</li>
                <li>• But position is now much healthier with lower leverage</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Concrete scenarios illustrating health factor deterioration and liquidation outcomes."
        sectionColor="amber"
      />
    </div>
  )
}
