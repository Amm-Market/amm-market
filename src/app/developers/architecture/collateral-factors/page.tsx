"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "ltv-ratios", title: "LTV Ratios" },
  { id: "liquidation-thresholds", title: "Liquidation Thresholds" },
  { id: "risk-tiers", title: "Risk Tiers" },
  { id: "parameter-updates", title: "Parameter Updates" },
]

export default function CollateralFactorsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Collateral Factors</h1>
        <p className="text-lg text-gray-600 mb-8">
          Loan-to-value ratios, liquidation thresholds, and how LP risk is parameterized.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Collateral factors determine how much you can borrow against LP tokens and when 
            positions become liquidatable. These parameters are set based on the risk profile 
            of each LP type.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Key Principle:</strong> Higher-risk LP tokens have lower LTV ratios and 
              liquidation thresholds to protect the protocol from bad debt.
            </p>
          </div>
        </section>

        <section id="ltv-ratios" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LTV Ratios</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Loan-to-Value (LTV) defines the maximum borrowing capacity relative to collateral value.
          </p>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Formula</h3>
            <code className="text-sm text-gray-900">
              Max Borrow = Collateral Value × LTV
            </code>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LP Category</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LTV</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Example Pools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Stablecoin</td>
                  <td className="px-4 py-2 text-green-600 font-medium">85%</td>
                  <td className="px-4 py-2 text-gray-600">USDC/USDT, DAI/USDC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Blue-chip</td>
                  <td className="px-4 py-2 text-blue-600 font-medium">75%</td>
                  <td className="px-4 py-2 text-gray-600">ETH/USDC, WBTC/ETH</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">LST Pairs</td>
                  <td className="px-4 py-2 text-purple-600 font-medium">70%</td>
                  <td className="px-4 py-2 text-gray-600">stETH/ETH, rETH/ETH</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Volatile</td>
                  <td className="px-4 py-2 text-orange-600 font-medium">60%</td>
                  <td className="px-4 py-2 text-gray-600">ARB/ETH, OP/ETH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="liquidation-thresholds" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Thresholds</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The liquidation threshold is always higher than LTV, creating a safety buffer.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LP Category</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LTV</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Liq. Threshold</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Buffer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Stablecoin</td>
                  <td className="px-4 py-2 text-gray-600">85%</td>
                  <td className="px-4 py-2 text-gray-600">90%</td>
                  <td className="px-4 py-2 text-green-600">5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Blue-chip</td>
                  <td className="px-4 py-2 text-gray-600">75%</td>
                  <td className="px-4 py-2 text-gray-600">82%</td>
                  <td className="px-4 py-2 text-green-600">7%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">LST Pairs</td>
                  <td className="px-4 py-2 text-gray-600">70%</td>
                  <td className="px-4 py-2 text-gray-600">78%</td>
                  <td className="px-4 py-2 text-green-600">8%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Volatile</td>
                  <td className="px-4 py-2 text-gray-600">60%</td>
                  <td className="px-4 py-2 text-gray-600">70%</td>
                  <td className="px-4 py-2 text-green-600">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            The buffer provides time to react before liquidation when prices move against you.
          </p>
        </section>

        <section id="risk-tiers" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Risk Tiers</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP tokens are categorized into risk tiers based on:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Underlying Asset Volatility</h3>
              <p className="text-gray-600 text-sm">
                Historical price volatility of the tokens in the pool. Stablecoins have minimal 
                volatility; governance tokens have high volatility.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Pool Liquidity Depth</h3>
              <p className="text-gray-600 text-sm">
                Total value locked and trading volume. Deeper pools can absorb liquidations 
                with less slippage.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Oracle Reliability</h3>
              <p className="text-gray-600 text-sm">
                Quality and frequency of price feeds. Assets with robust Chainlink feeds 
                receive better parameters.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Impermanent Loss Risk</h3>
              <p className="text-gray-600 text-sm">
                Correlated pairs (stETH/ETH) have lower IL risk than uncorrelated pairs (ETH/USDC).
              </p>
            </div>
          </div>
        </section>

        <section id="parameter-updates" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Parameter Updates</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Collateral factors can be updated through governance:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Risk Committee:</strong> Reviews parameters periodically</li>
            <li>• <strong>Market Conditions:</strong> Adjustments based on volatility changes</li>
            <li>• <strong>New Pools:</strong> Initial parameters set conservatively</li>
            <li>• <strong>Emergency:</strong> Parameters can be tightened during market stress</li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Parameter changes do not affect existing positions retroactively 
              for LTV, but liquidation threshold changes apply immediately.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Loan-to-value ratios, liquidation thresholds, and how LP risk is parameterized."
        sectionColor="violet"
      />
    </div>
  )
}
