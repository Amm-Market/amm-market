import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Price Oracles",
  description: "Avana Oracle architecture for LP-backed lending - conservative collateral valuation, position reconstruction, recoverable unwind assumptions, and manipulation prevention.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "oracle-interface", title: "Oracle Interface" },
  { id: "multi-layer-architecture", title: "Multi-Layer Architecture" },
  { id: "dex-handling", title: "DEX-Specific Handling" },
  { id: "twap-computation", title: "TWAP Computation" },
  { id: "safety-measures", title: "Safety & Manipulation Prevention" },
  { id: "configurable-parameters", title: "Configurable Parameters" },
]

const collateralValueDrivers = [
  "The prices of the underlying assets",
  "The pool reserves or inventory split",
  "Fee accrual",
  "For concentrated liquidity, the current tick relative to the position range",
  "Whether the position is in-range or mostly one-sided",
]

const architectureChecklist = [
  {
    title: "Price underlying assets from external robust oracles",
    description:
      "Use resilient external feeds as the primary mark for each underlying token instead of relying on raw AMM spot state.",
  },
  {
    title: "Derive LP value conservatively",
    description:
      "Reconstruct pool balances or decompose concentrated liquidity positions deterministically from reserves, liquidity, range, and fees.",
  },
  {
    title: "Haircut for impermanent loss and liquidation slippage",
    description:
      "Discount theoretical value into recoverable collateral value by assuming stressed unwind conditions rather than frictionless exits.",
  },
  {
    title: "Cap exposure by LP family and pool depth",
    description:
      "Apply pool-class and liquidity-depth controls so thinner or more complex collateral receives tighter borrowing limits.",
  },
  {
    title: "Liquidate based on recoverable unwind value, not optimistic NAV",
    description:
      "Borrow power and liquidation logic are anchored to what can realistically be realized during unwind, not the position's best-case mark value.",
  },
]

const dexOracleTable = [
  {
    dex: "Curve Stable/Stable ERC-20 LPs",
    source: "External stablecoin feeds + pool-state checks + TWAP verification",
    notes: "External prices anchor the assets while pool balances and fee accrual determine discounted collateral value.",
  },
  {
    dex: "Uniswap V2 ERC-20 LPs",
    source: "Chainlink + reserve reconstruction + TWAP verification",
    notes: "Standard LP tokens are valued from reconstructed underlying balances, with TWAP used as a manipulation-resistant cross-check.",
  },
  {
    dex: "Uniswap V3 NFT LPs",
    source: "Chainlink + position decomposition + tick/TWAP checks",
    notes: "The NFT is decomposed by liquidity, active range, and current price, then haircut for recoverable liquidation value.",
  },
  {
    dex: "Balancer Multi-Asset LPs",
    source: "Chainlink + weighted inventory reconstruction",
    notes: "Multi-token pools use external prices and weighted pool inventory to estimate conservative collateral value.",
  },
  {
    dex: "SushiSwap / Aerodrome",
    source: "Chainlink + reserve reconstruction + TWAP verification",
    notes: "Pool-derived observations verify reconstructed value and help resist same-transaction abuse in lower-liquidity markets.",
  },
  {
    dex: "PancakeSwap",
    source: "Chainlink + block-based TWAP verification",
    notes: "External prices remain the anchor while block-based observations validate position state and unwind assumptions.",
  },
]

export default function PriceOraclesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div data-developer-doc-export-root className="max-w-3xl">
        <DeveloperDocPageHeader

          title="Price Oracles"

          description="Avana Oracle is the protocol&apos;s collateral valuation engine for LP-backed lending."

        />

        <section id="overview" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avana Oracle is the protocol&apos;s collateral valuation engine for LP-backed lending. It is
            designed to price LP positions conservatively using robust external market data, deterministic
            position reconstruction, and stressed liquidation assumptions rather than raw AMM spot state.
            This architecture is intended to reduce the risk of collateral inflation, pool-state
            manipulation, thin-market pricing failures, and same-transaction oracle abuse.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For fungible LPs, Avana Oracle derives value from external prices and a
            market-consistent reconstruction of pool balances. For concentrated liquidity positions, it
            values the position directly by decomposing its underlying token exposure based on range,
            liquidity, and current price. In both cases, the protocol applies recovery haircuts to
            estimate the value that can realistically be realized during liquidation. Borrow power is
            based on this discounted collateral value, not on theoretical net asset value.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            This approach allows Avana to support LP collateral with stronger risk controls than
            traditional lending markets. By separating mark value from recoverable value and enforcing
            oracle-specific safeguards across each collateral class, Avana Oracle forms the
            foundation for safer LP-backed credit markets.
          </p>

          <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-3">For LP collateral, value depends on:</h3>
            <ul className="space-y-3">
              {collateralValueDrivers.map((item) => (
                <li key={item} className="border-l-4 border-cyan-500 pl-3 text-sm text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="oracle-interface" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Oracle Interface: IOracle</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The IOracle interface standardizes how the protocol measures LP collateral across DEX
            designs, while preserving the distinction between theoretical mark value, accrued fees, and
            protocol-held risk buffers:
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
              <span className="text-gray-600 text-sm ml-2">— Reconstructed value of principal liquidity before liquidation stress adjustments</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">feeValue</span>
              <span className="text-gray-600 text-sm ml-2">— Value of accrued fees that can be recognized alongside the position</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">reserveValue</span>
              <span className="text-gray-600 text-sm ml-2">— Reserved portion used to absorb oracle, unwind, and protocol risk buffers</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            This interface abstracts DEX-specific differences so the Spoke can treat ERC-20 LPs, NFT
            LPs, and multi-asset pools consistently while still basing borrow power on discounted,
            recoverable collateral treatment instead of optimistic NAV.
          </p>
        </section>

        <section id="multi-layer-architecture" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Multi-Layer Architecture</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For LP collateral, the safe architecture is closer to a recoverable-value checklist than a
            single spot-price lookup:
          </p>

          <div className="space-y-4">
            {architectureChecklist.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-semibold text-cyan-700">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="dex-handling" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">DEX-Specific Handling</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Different LP formats expose different position-state data, but Avana Oracle uses those
            venue-specific inputs to reconstruct collateral and verify pricing, not to accept raw pool
            state at face value.
          </p>
          
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
          <h2 className="type-section-title text-gray-900 mb-4">TWAP Computation by DEX</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            TWAPs are used as verification and manipulation-resistance inputs alongside external asset
            prices and deterministic position reconstruction. They help validate unwind assumptions rather
            than define collateral value on their own.
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V2 & SushiSwap</h3>
              <p className="text-gray-600 text-sm">
                On-chain cumulative price data over a 1-hour window is used to verify reconstructed
                reserve value and reduce susceptibility to flash swaps or short-lived pool distortions.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V3</h3>
              <p className="text-gray-600 text-sm">
                Position-aware checks incorporate tick range, liquidity distribution, and accrued fees so
                the protocol can verify the decomposed token exposure of each NFT LP.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Balancer</h3>
              <p className="text-gray-600 text-sm">
                Weighted token observations are combined with pool weights to validate multi-asset
                inventory splits before assigning conservative collateral value.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Curve</h3>
              <p className="text-gray-600 text-sm">
                Stablecoin observations are used primarily to guard against stale feeds, reserve drift,
                and short-term anomalies while external prices remain the anchor.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Trader Joe & Aerodrome</h3>
              <p className="text-gray-600 text-sm">
                Cumulative price observations over a 30-60 minute window help validate low-liquidity pool
                state and resist same-transaction manipulation during collateral checks.
              </p>
            </div>
          </div>
        </section>

        <section id="safety-measures" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Safety & Manipulation Prevention</h2>
          
          <ul className="space-y-3">
            <li className="border-l-4 border-red-400 pl-3">
              <span className="font-semibold text-gray-900">Deviation Thresholds</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Pauses new loans or liquidations if pool-derived verification data diverges from external
                reference prices beyond <code className="bg-gray-100 px-1 rounded text-gray-800">maxDifference</code>.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">maxPoolPriceDifference</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Ensures pool-implied state remains aligned with underlying token prices, limiting
                instantaneous pool manipulation and same-transaction oracle abuse.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Open Interest Caps</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Cap exposure by LP family, pool depth, and collateral complexity so thinner markets
                receive tighter borrow limits.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Recovery Haircuts</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Discount theoretical LP value for impermanent loss, unwind slippage, and stressed
                liquidation assumptions before borrow power is granted.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Oracle Sentinel</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Monitors feed health and verification inputs, triggering fallback behavior when oracle
                data is stale, compromised, or inconsistent with position-state checks.
              </p>
            </li>
          </ul>
        </section>

        <section id="configurable-parameters" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Configurable Oracle Parameters</h2>
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
            <strong>Summary:</strong> Avana Oracle combines external asset pricing, deterministic
            LP reconstruction, discounted collateral treatment, and oracle-specific safeguards to support
            ERC-20 and NFT LPs with stronger protection against manipulation, stale data, and optimistic
            unwind assumptions across hundreds of pools.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Avana Oracle prices LP collateral conservatively using external asset prices, position reconstruction, and recoverable unwind assumptions."
        sectionColor="cyan"
      />
    </div>
  )
}
