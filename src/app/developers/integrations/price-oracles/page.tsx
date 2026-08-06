import type { Metadata } from "next"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Price Oracles",
  description:
    "How Avana Oracle prices LP collateral through external feeds, deterministic position reconstruction, and recoverable-value discounts.",
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
      "Start from resilient external feeds for the underlying assets so collateral does not inherit the full noise or manipulability of raw pool spot state.",
  },
  {
    title: "Derive LP value conservatively",
    description:
      "Rebuild fungible LP balances or decompose concentrated-liquidity positions from reserves, liquidity, range, and fees using a deterministic path that the spoke can reason about.",
  },
  {
    title: "Haircut for impermanent loss and liquidation slippage",
    description:
      "Discount the reconstructed mark to a recoverable collateral value that assumes stress, slippage, and imperfect exits rather than a clean redemption at theoretical NAV.",
  },
  {
    title: "Cap exposure by LP family and pool depth",
    description:
      "Apply controls based on LP family, pool class, and available depth so thinner or more complex markets do not receive the same borrow limits as deeper and simpler ones.",
  },
  {
    title: "Liquidate based on recoverable unwind value, not optimistic NAV",
    description:
      "Use the value that can reasonably be realized through the unwind path when granting borrow power and deciding liquidation, rather than the best-case mark value.",
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
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      {/* Main content */}
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader

          title="Price Oracles"

          description="How the protocol turns LP position state into credit-relevant collateral values."

        />

        <section id="overview" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avana Oracle is not a single price lookup. It is the valuation path that turns an LP
            position into something the lending system can use for collateral accounting. To do
            that safely, it combines external market feeds, deterministic reconstruction of the LP,
            and recovery haircuts based on unwind assumptions instead of trusting raw AMM spot
            state on its own.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The exact inputs depend on the collateral family. A fungible LP is reconstructed from
            balances, reserves, and fees, while concentrated liquidity must be decomposed through
            its range, liquidity, and current price context. In both cases the result is pushed
            through recoverable-value logic so borrowing uses a conservative number rather than a
            frictionless exit assumption.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            That distinction between mark value and recoverable value is what keeps the oracle
            useful for lending instead of just analytics. ERC-20 LPs, NFT LPs, and multi-asset
            pools can share one high-level interface only because each class goes through its own
            validation and manipulation-resistance checks before the value reaches the spoke.
          </p>

          <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-3">LP collateral value depends on:</h3>
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
            Borrow Spokes need one contract surface even though LP formats differ a lot across
            DEXs. `IOracle` provides that common shape and keeps principal value, accrued fees, and
            reserved buffers separate so later risk logic does not have to guess which part of the
            position it is looking at:
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
              <span className="text-gray-600 text-sm ml-2">Reconstructed value of the principal liquidity before later liquidation stress adjustments are applied.</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">feeValue</span>
              <span className="text-gray-600 text-sm ml-2">Value of the fees accrued by the position that can be recognized alongside principal.</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold text-gray-900">reserveValue</span>
              <span className="text-gray-600 text-sm ml-2">Reserved portion held back for oracle, unwind, and protocol risk buffers.</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            The interface hides DEX-specific plumbing from the spoke. That lets the same caller
            handle ERC-20 LPs, NFT LPs, and multi-asset pools through one return shape while still
            leaving room for conservative, collateral-family-specific treatment behind the scenes.
          </p>
        </section>

        <section id="multi-layer-architecture" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Multi-Layer Architecture</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP valuation is a staged process rather than a single spot-price read. The oracle path
            moves through the following steps:
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
            Different venues expose different pieces of state, and the oracle uses those inputs in
            different ways. The important point is that venue-specific data helps reconstruct the
            position and verify pricing; it is not accepted blindly as a direct collateral mark.
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
            TWAPs are verification inputs. They sit beside external asset prices and deterministic
            position reconstruction to check whether the pool state being observed is consistent
            with a credible unwind path. They help reject suspicious or short-lived distortions,
            but they do not replace the broader oracle model on their own.
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V2 & SushiSwap</h3>
              <p className="text-gray-600 text-sm">
                On-chain cumulative price data over a 1-hour window is used to cross-check the
                reconstructed reserve picture and reduce sensitivity to flash swaps or other
                short-lived pool distortions.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V3</h3>
              <p className="text-gray-600 text-sm">
                Position-aware checks incorporate tick range, liquidity distribution, and accrued
                fees so the protocol can verify the decomposed token exposure of each NFT LP rather
                than treating the NFT as a black box.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Balancer</h3>
              <p className="text-gray-600 text-sm">
                Weighted token observations are combined with pool weights to validate multi-asset
                inventory splits before the oracle assigns a conservative collateral value.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Curve</h3>
              <p className="text-gray-600 text-sm">
                Stablecoin observations are used mainly to detect stale feeds, reserve drift, and
                short-term anomalies while external prices remain the primary anchor.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Trader Joe & Aerodrome</h3>
              <p className="text-gray-600 text-sm">
                Cumulative price observations over a 30-60 minute window help validate
                lower-liquidity pool state and resist same-transaction manipulation during
                collateral checks.
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
                New loans or liquidations can be paused when pool-derived verification data moves
                too far away from external reference prices beyond{" "}
                <code className="bg-gray-100 px-1 rounded text-gray-800">maxDifference</code>.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">maxPoolPriceDifference</span>
              <p className="text-gray-600 text-sm mt-0.5">
                This keeps pool-implied state aligned with underlying token prices and limits
                instantaneous pool manipulation or same-transaction oracle abuse.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Open Interest Caps</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Exposure is capped by LP family, pool depth, and collateral complexity so thinner
                markets receive tighter borrow limits.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Recovery Haircuts</span>
              <p className="text-gray-600 text-sm mt-0.5">
                The oracle discounts theoretical LP value for impermanent loss, unwind slippage,
                and stressed liquidation assumptions before any borrow power is granted.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Oracle Sentinel</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Oracle Sentinel watches feed health and verification inputs and can trigger fallback
                behavior when data is stale, compromised, or inconsistent with position-state
                checks.
              </p>
            </li>
          </ul>
        </section>

        <section id="configurable-parameters" className="mb-12">
          <h2 className="type-section-title text-gray-900 mb-4">Configurable Oracle Parameters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pool-specific oracle settings are configured per token through{" "}
            <code className="bg-gray-200 px-1 rounded">setTokenConfig</code>. The table below shows
            the parameters that define how a token and its associated pool should be checked:
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
            In practice, oracle behavior comes from the combination of external asset pricing, LP
            reconstruction logic, recoverable-value treatment, and the per-token settings configured
            through <code className="bg-gray-200 px-1 rounded">setTokenConfig</code>.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <DeveloperScrollSpyRail 
        sections={sections} 
        pageSummary="How Avana Oracle reconstructs LP positions, applies conservative pricing, and checks market data before value reaches the spoke."
        sectionColor="cyan"
      />
    </div>
  )
}
