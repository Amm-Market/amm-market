"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "oracle-sources", title: "Oracle Sources" },
  { id: "lp-valuation", title: "LP Valuation" },
  { id: "security-measures", title: "Security Measures" },
  { id: "oracle-addresses", title: "Oracle Addresses" },
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
            Accurate LP token valuation is critical for determining borrowing power and 
            liquidation thresholds. AMM Market uses a combination of Chainlink price feeds 
            and on-chain LP calculations to derive fair values.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Key Principle:</strong> LP value is derived from underlying asset prices 
              and pool reserves, not from LP token market prices (which can be manipulated).
            </p>
          </div>
        </section>

        <section id="oracle-sources" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oracle Sources</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">CL</span>
                </div>
                <h3 className="font-semibold text-gray-900">Chainlink Price Feeds</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Primary source for major asset prices (ETH, BTC, stablecoins). 
                Decentralized oracle network with multiple data providers.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Update frequency: Heartbeat + deviation threshold</li>
                <li>• Coverage: 100+ assets across major chains</li>
                <li>• Latency: ~1 block</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xs">TW</span>
                </div>
                <h3 className="font-semibold text-gray-900">TWAP Oracles</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Time-weighted average prices from DEX pools for assets without Chainlink feeds.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Window: 30 minutes default</li>
                <li>• Manipulation resistant</li>
                <li>• Fallback for exotic assets</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">LP</span>
                </div>
                <h3 className="font-semibold text-gray-900">LP Adapter Oracles</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Custom adapters that calculate LP value from underlying prices and pool state.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• DEX-specific implementations</li>
                <li>• Handles concentrated liquidity math</li>
                <li>• Accounts for fees and IL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="lp-valuation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Valuation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP token value is calculated differently based on pool type:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Constant Product (x*y=k)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Used by Uniswap v2, Aerodrome volatile pools.
              </p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  lpValue = 2 × sqrt(reserve0 × reserve1 × price0 × price1) / totalSupply
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Concentrated Liquidity</h3>
              <p className="text-gray-600 text-sm mb-2">
                Used by Uniswap v3. Value depends on price range.
              </p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  lpValue = amount0 × price0 + amount1 × price1 + unclaimedFees<br/>
                  // Where amounts depend on current price vs position range
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">StableSwap</h3>
              <p className="text-gray-600 text-sm mb-2">
                Used by Curve, Aerodrome stable pools.
              </p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  lpValue = virtualPrice × lpBalance × baseAssetPrice
                </code>
              </div>
            </div>
          </div>
        </section>

        <section id="security-measures" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Measures</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Multiple safeguards protect against oracle manipulation:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Price Deviation Checks</h3>
              <p className="text-gray-600 text-sm">
                Transactions revert if price moves more than 5% from TWAP in a single block.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Staleness Checks</h3>
              <p className="text-gray-600 text-sm">
                Oracle data older than the heartbeat threshold is rejected.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Circuit Breakers</h3>
              <p className="text-gray-600 text-sm">
                Operations pause if oracle reports extreme price movements (&gt;50% in 1 hour).
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Multi-Oracle Validation</h3>
              <p className="text-gray-600 text-sm">
                Critical operations cross-check prices against multiple sources.
              </p>
            </div>
          </div>
        </section>

        <section id="oracle-addresses" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oracle Addresses</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Asset</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Source</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Address (Base)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">ETH/USD</td>
                  <td className="px-4 py-2 text-gray-600">Chainlink</td>
                  <td className="px-4 py-2 font-mono text-xs text-gray-600">0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">USDC/USD</td>
                  <td className="px-4 py-2 text-gray-600">Chainlink</td>
                  <td className="px-4 py-2 font-mono text-xs text-gray-600">0x7e860098F58bBFC8648a4311b374B1D669a2bc6B</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">cbETH/ETH</td>
                  <td className="px-4 py-2 text-gray-600">Chainlink</td>
                  <td className="px-4 py-2 font-mono text-xs text-gray-600">0x806b4Ac04501c29769051e42783cF04dCE41440b</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">LP Adapter</td>
                  <td className="px-4 py-2 text-gray-600">Custom</td>
                  <td className="px-4 py-2 font-mono text-xs text-gray-600">0x...</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Full oracle registry available via contract query or dashboard.
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
