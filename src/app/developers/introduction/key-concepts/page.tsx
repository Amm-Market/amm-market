"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "lp-collateral", title: "LP Collateral" },
  { id: "spoke-and-hub", title: "Spoke and Hub" },
  { id: "health-factor", title: "Health Factor" },
  { id: "liquidation-threshold", title: "Liquidation Threshold" },
  { id: "loan-to-value", title: "Loan-to-Value (LTV)" },
  { id: "price-oracles", title: "Price Oracles" },
]

export default function KeyConceptsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Key Concepts</h1>
        <p className="text-lg text-gray-600 mb-8">
          Definitions of core terms such as LP collateral, spoke, hub, health factor, and liquidation thresholds.
        </p>

        <section id="lp-collateral" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Collateral</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP (Liquidity Provider) collateral refers to LP tokens deposited into AMM Market to secure 
            a loan. These tokens represent ownership of a share in a liquidity pool on a decentralized 
            exchange.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Key Properties</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Represents proportional ownership of pool assets</li>
              <li>• Value fluctuates with underlying token prices</li>
              <li>• Continues earning trading fees while collateralized</li>
              <li>• Subject to impermanent loss risk</li>
            </ul>
          </div>
        </section>

        <section id="spoke-and-hub" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spoke and Hub</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aave v4 uses a Hub-and-Spoke architecture to separate core lending logic from specialized 
            collateral handling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Hub</h3>
              <p className="text-blue-800 text-sm">
                The central component managing liquidity pools, interest rates, and cross-spoke 
                coordination. All borrowing ultimately draws from Hub liquidity.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Spoke</h3>
              <p className="text-purple-800 text-sm">
                A specialized module (like AMM Market) that handles specific collateral types. 
                Spokes define valuation logic, risk parameters, and liquidation rules.
              </p>
            </div>
          </div>
        </section>

        <section id="health-factor" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health Factor</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The health factor is a numeric indicator of your position's safety. It represents the 
            ratio between your collateral value (adjusted by liquidation threshold) and your debt.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Formula</h3>
            <code className="text-sm bg-gray-200 px-2 py-1 rounded">
              Health Factor = (Collateral Value × Liquidation Threshold) / Total Debt
            </code>
          </div>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span><strong>HF &gt; 1.5:</strong> Safe — comfortable buffer against liquidation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span><strong>1.0 &lt; HF &lt; 1.5:</strong> Caution — monitor closely</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span><strong>HF ≤ 1.0:</strong> Liquidatable — position can be liquidated</span>
            </li>
          </ul>
        </section>

        <section id="liquidation-threshold" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Threshold</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The liquidation threshold is the percentage of collateral value at which a position 
            becomes eligible for liquidation. Different LP types have different thresholds based 
            on their risk profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Pool Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Liquidation Threshold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-600">Stablecoin Pairs</td>
                  <td className="px-4 py-2 text-gray-900 font-medium">90%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Blue-chip Pairs (ETH/USDC)</td>
                  <td className="px-4 py-2 text-gray-900 font-medium">80%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Volatile Pairs</td>
                  <td className="px-4 py-2 text-gray-900 font-medium">70%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="loan-to-value" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loan-to-Value (LTV)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LTV defines the maximum amount you can borrow against your collateral. It's always 
            lower than the liquidation threshold to provide a safety buffer.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Example</h3>
            <p className="text-blue-800 text-sm">
              If you deposit $10,000 worth of LP tokens with 75% LTV, you can borrow up to $7,500. 
              The position becomes liquidatable when debt exceeds the liquidation threshold 
              (e.g., 80% = $8,000).
            </p>
          </div>
        </section>

        <section id="price-oracles" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Price Oracles</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Price oracles provide real-time valuations of LP tokens. AMM Market uses specialized 
            oracles that account for:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Underlying token prices from Chainlink or equivalent feeds</li>
            <li>• Pool reserves and total supply</li>
            <li>• Concentrated liquidity price ranges (for Uniswap v3-style positions)</li>
            <li>• Time-weighted average prices (TWAP) for manipulation resistance</li>
          </ul>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Definitions of core terms such as LP collateral, spoke, hub, health factor, and liquidation thresholds."
        sectionColor="blue"
      />
    </div>
  )
}
