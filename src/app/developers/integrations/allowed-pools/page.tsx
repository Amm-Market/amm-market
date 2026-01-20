"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "pool-categories", title: "Pool Categories" },
  { id: "tiered-risk-parameters", title: "Tiered Risk Parameters" },
  { id: "integration-notes", title: "Integration Notes" },
  { id: "developer-value", title: "Developer Value" },
]

const riskParameters = [
  { tier: "Stable / Stable", ilBuffer: "2%", maxLTV: "70%", liqThreshold: "85%", riskPremium: "+0.5%", notes: "Minimal impermanent loss; predictable collateral." },
  { tier: "Blue-Chip ERC-20", ilBuffer: "5%", maxLTV: "50%", liqThreshold: "65%", riskPremium: "+3%", notes: "High liquidity; moderate volatility." },
  { tier: "Blue-Chip NFT (Uniswap V3)", ilBuffer: "5–7%", maxLTV: "45–60%", liqThreshold: "60–70%", riskPremium: "+3–4%", notes: "Concentrated liquidity; valuation uses oracles." },
  { tier: "Emerging / Experimental", ilBuffer: "10%", maxLTV: "30%", liqThreshold: "45%", riskPremium: "+7%", notes: "Higher volatility; conservative limits." },
]

export default function AllowedPoolsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Allowed LP Pools</h1>
        <p className="text-lg text-gray-600 mb-8">
          Specific pool types, configurations, and constraints accepted by the protocol.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market supports a wide range of AMM pools across multiple protocols, including Curve, 
            Balancer, and Uniswap V2/V3. These pools are carefully curated to ensure sufficient liquidity, 
            predictable pricing, and risk management, enabling LP tokens to be safely used as collateral.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Scalability:</strong> The protocol can accommodate hundreds of pools. New pools 
            may be added after review of liquidity, volatility, and oracle support.
          </p>
        </section>

        <section id="pool-categories" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pool Categories</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To organize hundreds of pools, AMM Market classifies them into three main tiers, reflecting 
            their stability, liquidity, and risk profile:
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-3 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Stable / Stable Pools</h3>
              <div className="flex gap-6 mb-3 text-sm">
                <div>
                  <span className="text-gray-500">Protocol:</span>
                  <span className="text-gray-700 ml-1">Curve</span>
                </div>
                <div>
                  <span className="text-gray-500">LP Type:</span>
                  <span className="text-gray-700 ml-1">ERC-20</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Assets:</strong> USD-pegged stablecoins (USDC, DAI, USDT). Minimal volatility, extremely low impermanent loss, deep liquidity.
              </p>
              <p className="text-gray-500 text-xs">
                Stable pools are the foundation of the AMM Market collateral system. All stable pools 
                must have verified oracle feeds to report accurate pricing.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-3 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Blue-Chip Pools</h3>
              <div className="flex gap-6 mb-3 text-sm">
                <div>
                  <span className="text-gray-500">Protocols:</span>
                  <span className="text-gray-700 ml-1">Uniswap V2/V3, Balancer</span>
                </div>
                <div>
                  <span className="text-gray-500">LP Type:</span>
                  <span className="text-gray-700 ml-1">ERC-20 / NFT</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Assets:</strong> ETH, WBTC, LINK, UNI, AAVE, LDO, and other large-cap tokens. Deep liquidity, established adoption, moderate volatility.
              </p>
              <p className="text-gray-500 text-xs">
                Includes both standard ERC-20 LPs and Uniswap V3 NFT-based positions, which require 
                additional handling due to concentrated liquidity and discrete price ranges.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-3">
              <h3 className="font-semibold text-gray-900 mb-2">3. Emerging or Experimental Pools</h3>
              <div className="flex gap-6 mb-3 text-sm">
                <div>
                  <span className="text-gray-500">Protocols:</span>
                  <span className="text-gray-700 ml-1">Uniswap V2/V3, Balancer</span>
                </div>
                <div>
                  <span className="text-gray-500">LP Type:</span>
                  <span className="text-gray-700 ml-1">ERC-20 / NFT</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Assets:</strong> Smaller-cap or newly launched tokens with sufficient liquidity. Higher volatility, lower liquidity, higher impermanent loss.
              </p>
              <p className="text-gray-500 text-xs">
                Emerging pools are carefully vetted. The protocol assigns lower LTVs and higher risk 
                premiums, with liquidation thresholds set conservatively.
              </p>
            </div>
          </div>
        </section>

        <section id="tiered-risk-parameters" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tiered Risk Parameters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market assigns risk parameters based on pool tier, which define loan-to-value ratios (LTV), 
            liquidation thresholds, impermanent loss buffers, and suggested risk premiums.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Tier</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">IL Buffer</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Max LTV</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Liq. Threshold</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Risk Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {riskParameters.map((item) => (
                  <tr key={item.tier}>
                    <td className="px-3 py-2 text-gray-900 font-medium">{item.tier}</td>
                    <td className="px-3 py-2 text-gray-600">{item.ilBuffer}</td>
                    <td className="px-3 py-2 text-blue-600 font-medium">{item.maxLTV}</td>
                    <td className="px-3 py-2 text-gray-600">{item.liqThreshold}</td>
                    <td className="px-3 py-2 text-gray-600">{item.riskPremium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            These tiered parameters allow developers to quickly determine collateral risk for any given pool.
          </p>
        </section>

        <section id="integration-notes" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Integration Notes for Developers</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Oracles</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Every pool must have an active, reliable price feed</li>
                <li>• Oracle data is used for health factor calculations, liquidation triggers, and LTV enforcement</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Router & Contract Support</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• All LP deposits and withdrawals must flow through the AMM Market router</li>
                <li>• NFT LPs (Uniswap V3) require special handling for partial withdrawals and range-based valuation</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Scalability</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• The system is designed to support 500+ pools, including combinations of ERC-20 and NFT LPs</li>
                <li>• New pools undergo risk review, liquidity analysis, and oracle integration before approval</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Risk Monitoring</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Pools are continuously evaluated for liquidity changes, volatility spikes, and oracle reliability</li>
                <li>• Developers integrating new pools must ensure correct oracle feeds, router compatibility, and risk parameters</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="developer-value" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Developer Value</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By structuring allowed pools in this way, AMM Market:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Provides clear guidelines for which pools are eligible as collateral</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Distinguishes between ERC-20 vs NFT LPs for proper integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Assigns tiered risk parameters for hundreds of pools, enabling safe and scalable lending</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Integrates protocol-specific considerations, like oracles and router support</span>
            </li>
          </ul>
          <p className="mt-4 text-gray-600 text-sm">
            This approach ensures that AMM Market remains robust, flexible, and scalable, while providing 
            clear guidance to developers integrating new pools or building applications on top of the protocol.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Specific pool types, configurations, and constraints accepted by the protocol."
        sectionColor="cyan"
      />
    </div>
  )
}
