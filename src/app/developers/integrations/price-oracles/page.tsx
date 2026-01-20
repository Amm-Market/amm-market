"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "oracle-interface", title: "Oracle Interface" },
  { id: "multi-layer-architecture", title: "Multi-Layer Architecture" },
  { id: "dex-handling", title: "DEX-Specific Handling" },
  { id: "twap-computation", title: "TWAP Computation" },
  { id: "safety-measures", title: "Safety & Manipulation Prevention" },
  { id: "configurable-parameters", title: "Configurable Parameters" },
]

const dexOracleTable = [
  { dex: "Curve Stable/Stable ERC-20 LPs", source: "On-chain TWAP + Chainlink", notes: "ERC-20 tokens; very low volatility; TWAP ensures anti-manipulation." },
  { dex: "Uniswap V2 ERC-20 LPs", source: "On-chain TWAP + Chainlink", notes: "Standard LP token; liquidity data directly from pool." },
  { dex: "Uniswap V3 NFT LPs", source: "TWAP per position + Chainlink", notes: "NFT represents liquidity in specific price range; accounts for accrued fees separately." },
  { dex: "Balancer Multi-Asset LPs", source: "Weighted TWAP + Chainlink", notes: "Multi-token pools; calculate weighted average for collateral value." },
  { dex: "SushiSwap / Aerodrome", source: "On-chain TWAP + Chainlink", notes: "Similar to Uniswap V2; cumulative price over 1-hour window." },
  { dex: "PancakeSwap", source: "Block-based TWAP + Chainlink", notes: "BSC block-based observations with fallback to Chainlink." },
]

export default function PriceOraclesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Price Oracles</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oracle sources and methodologies used to value LP positions and underlying assets.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In AMM Market, LP token collateral spans multiple DEX protocols: Uniswap V2/V3, Balancer, 
            Curve, SushiSwap, Aerodrome, PancakeSwap, and other AMMs. Each has different LP structures, 
            risk profiles, and data access methods, which requires a flexible, layered oracle system.
          </p>
          <p className="text-gray-600 text-sm border-l-4 border-red-400 pl-3">
            <strong>Critical:</strong> Oracles are the linchpin of collateral security. Inaccurate or 
            manipulable pricing exposes the Spoke to immediate risk. AMM Market's oracle architecture 
            integrates Chainlink and on-chain DEX data, providing reliable, tamper-resistant valuation.
          </p>
        </section>

        <section id="oracle-interface" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oracle Interface: IOracle</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The IOracle interface standardizes collateral valuation, regardless of DEX:
          </p>
          
          <div className="p-4 bg-gray-900 rounded-lg mb-4">
            <code className="text-green-400 text-sm">
              function getValue(uint256 tokenId, address asset)<br/>
              &nbsp;&nbsp;external view returns (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;uint256 fullValue,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;uint256 feeValue,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;uint256 reserveValue<br/>
              &nbsp;&nbsp;);
            </code>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">fullValue</span>
              <span className="text-gray-600 text-sm ml-2">— Value of principal liquidity</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">feeValue</span>
              <span className="text-gray-600 text-sm ml-2">— Value of accrued fees</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">reserveValue</span>
              <span className="text-gray-600 text-sm ml-2">— Reserved portion for protocol risk buffers</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            This interface abstracts DEX-specific differences, allowing the Spoke to handle ERC-20 LPs, 
            NFT LPs, and multi-asset pools uniformly in lending, liquidation, and fee claims.
          </p>
        </section>

        <section id="multi-layer-architecture" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Multi-Layer Architecture</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 1: DEX-Specific Position Data</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• <strong>Uniswap V2 / Curve / Balancer ERC-20 LPs:</strong> Fetch raw liquidity balances, token amounts, and pool composition</li>
                <li>• <strong>Uniswap V3 NFT LPs:</strong> Retrieve liquidity in range, position tick data, and accrued fees</li>
                <li>• <strong>Balancer Multi-Asset Pools:</strong> Include weighted token balances and pool weights for accurate USD conversion</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 2: TWAP & Time-Weighted Aggregation</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Calculate Time-Weighted Average Prices (TWAPs) for each underlying token using DEX-native oracles</li>
                <li>• TWAP windows (e.g., 1 hour) mitigate flash loan and short-term price manipulation</li>
                <li>• For NFT LPs, TWAP is computed over the NFT's active range, combining pool liquidity and token TWAPs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 3: Cross-DEX Verification with Chainlink</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Aggregate token prices using trusted Chainlink feeds</li>
                <li>• Verify DEX TWAPs against Chainlink: if deviation is within bounds, use DEX price</li>
                <li>• If deviation exceeds threshold, fallback to Chainlink feed</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="dex-handling" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">DEX-Specific Handling</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">DEX / LP Type</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Oracle Source</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dexOracleTable.map((item) => (
                  <tr key={item.dex}>
                    <td className="px-3 py-2 text-gray-900 font-medium">{item.dex}</td>
                    <td className="px-3 py-2 text-gray-600">{item.source}</td>
                    <td className="px-3 py-2 text-gray-600 text-xs">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="twap-computation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">TWAP Computation by DEX</h2>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V2 & SushiSwap</h3>
              <p className="text-gray-600 text-sm">
                TWAP computed on-chain using cumulative price data over a 1-hour window, reducing 
                susceptibility to flash swaps.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V3</h3>
              <p className="text-gray-600 text-sm">
                TWAP computed per NFT position, taking into account the tick range and accrued fees. 
                Multi-tick positions require aggregation of liquidity-weighted prices.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Balancer</h3>
              <p className="text-gray-600 text-sm">
                Weighted TWAP of each underlying token is computed and combined according to pool 
                weights to produce the LP's USD value.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Curve</h3>
              <p className="text-gray-600 text-sm">
                Stable/Stable pools use a simplified TWAP for underlying stablecoins, primarily to 
                guard against oracle staleness and short-term anomalies.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Trader Joe & Aerodrome</h3>
              <p className="text-gray-600 text-sm">
                TWAP uses cumulative price from the pool with a 30–60 minute averaging window to 
                prevent manipulation in low-liquidity pools.
              </p>
            </div>
          </div>
        </section>

        <section id="safety-measures" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Safety & Manipulation Prevention</h2>
          
          <ul className="space-y-3">
            <li className="border-l-4 border-red-400 pl-3">
              <span className="font-semibold text-gray-900">Deviation Thresholds</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Pauses new loans or liquidations if TWAP vs Chainlink diverges beyond <code className="bg-gray-100 px-1 rounded text-gray-800">maxDifference</code>.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">maxPoolPriceDifference</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Ensures pool-implied price aligns with underlying token prices, preventing instantaneous 
                pool manipulation.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Open Interest Caps</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Dynamically limit exposure to low-liquidity pools or highly leveraged positions.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Oracle Sentinel</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Monitors feed health; triggers fallback if feeds are stale or compromised.
              </p>
            </li>
          </ul>
        </section>

        <section id="configurable-parameters" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Configurable Oracle Parameters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Developers can configure pool-specific oracle settings for each token via <code className="bg-gray-200 px-1 rounded">setTokenConfig</code>:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Parameter</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Token</td>
                  <td className="px-4 py-2 text-gray-600">Collateral token address</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">AggregatorV3Interface</td>
                  <td className="px-4 py-2 text-gray-600">Chainlink feed for underlying token</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">maxFeedAge</td>
                  <td className="px-4 py-2 text-gray-600">Maximum acceptable age for Chainlink feed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Pool</td>
                  <td className="px-4 py-2 text-gray-600">Specific DEX pool (Uniswap V3, Balancer, Curve, etc.)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">twapSeconds</td>
                  <td className="px-4 py-2 text-gray-600">Window for TWAP computation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Mode</td>
                  <td className="px-4 py-2 text-gray-600">Oracle operational mode (standard/fallback)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">maxDifference</td>
                  <td className="px-4 py-2 text-gray-600">Max allowed deviation between DEX and verification price</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            <strong>Summary:</strong> AMM Market's multi-DEX, dual-oracle system delivers accurate valuation for ERC-20 and NFT LPs, 
            safe handling of multi-asset pools, dynamic fallback to Chainlink when TWAP data is unreliable, 
            protection against price manipulation and flash loan attacks, and developer configurability 
            for hundreds of pools with varying liquidity and volatility.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Oracle sources and methodologies used to value LP positions and underlying assets."
        sectionColor="cyan"
      />
    </div>
  )
}
