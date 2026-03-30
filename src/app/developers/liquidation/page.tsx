import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Liquidation Framework",
  description: "AMM Market liquidation framework - LP collateral complexity, liquidation nodes, pathways, thresholds, bonuses, and protection mechanisms.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "lp-complexity", title: "LP Collateral Complexity" },
  { id: "key-principles", title: "Key Principles" },
  { id: "liquidation-node", title: "Liquidation Node" },
  { id: "liquidation-pathways", title: "Liquidation Pathways" },
  { id: "liquidation-threshold", title: "Liquidation Threshold" },
  { id: "liquidation-bonus", title: "Liquidation Bonus" },
  { id: "who-can-liquidate", title: "Who Can Liquidate" },
  { id: "protection-mechanisms", title: "Protection Mechanisms" },
]

const liquidationBonuses = [
  { category: "Stablecoin LPs", bonus: "5%", notes: "Low volatility, minimal IL risk" },
  { category: "ETH/Stable LPs", bonus: "6–8%", notes: "Moderate volatility" },
  { category: "Blue-chip / Volatile LPs", bonus: "8–12%", notes: "Higher volatility, deeper liquidity" },
  { category: "Small-cap / Governance LPs", bonus: "12–15%", notes: "Highest risk, lower liquidity" },
]

export default function LiquidationDesignPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Liquidation Design</h1>
        <p className="text-lg text-gray-600 mb-8">
          Conditions under which positions become liquidatable and who can trigger them.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In AMM Market, the liquidation lifecycle is a core safety mechanism to protect both the 
            protocol and its liquidity providers from losses due to undercollateralized loans. Liquidation 
            mode is activated when a position&apos;s accrued debt exceeds its borrowing capacity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under this mode, any account can clear the debt and earn a liquidation premium, which ranges 
            from 2% to 10% based on the position&apos;s debt-to-value ratio. The liquidation process initially 
            utilizes uncollected fees from the position. If these are not enough, the principal assets 
            are tapped to cover the remaining debt and to reward the liquidator.
          </p>
          <p className="text-red-700 text-sm border-l-4 border-red-400 pl-3">
            <strong>Trigger:</strong> Liquidation is triggered when a position&apos;s accrued debt &gt; BorrowingCapacity.
          </p>
        </section>

        <section id="lp-complexity" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Collateral Complexity</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP-backed positions are more complex than single-token loans because they involve:
          </p>
          
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Multi-Token Compositions</span>
              <p className="text-gray-600 text-sm mt-0.5">
                LP positions contain multiple tokens (e.g., ETH–USDC, WETH–DAI) that must be unwrapped 
                and handled separately during liquidation.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Impermanent Loss Risk</span>
              <p className="text-gray-600 text-sm mt-0.5">
                LP value can change due to impermanent loss, requiring accurate real-time valuation 
                during liquidation.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">ERC-20 vs NFT Mechanics</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Different LP types (Uniswap V2/V3/V4) require different unwrapping and handling logic.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Multi-DEX Swap Execution</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Underlying tokens must be swapped across multiple DEXes (Uniswap, Curve, Balancer, 
                PancakeSwap, Aerodrome) for optimal execution.
              </p>
            </li>
          </ul>
        </section>

        <section id="key-principles" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Principles</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Target Health Factor (HF)</h3>
              <p className="text-gray-600 text-sm">
                The protocol aims to restore HF to <strong>1.2</strong> whenever HF drops below 1 or a 
                configurable warning threshold. Partial liquidations are preferred to minimize collateral 
                loss and market impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Minimal Intervention</h3>
              <p className="text-gray-600 text-sm mb-2">
                Compute exact debt needed to restore HF using the formula:
              </p>
              <code className="text-sm bg-gray-100 text-gray-800 px-3 py-2 rounded block mb-2">
                x = (HF_target × D − C × LT) / HF_target
              </code>
              <p className="text-gray-500 text-xs">
                Where: D = current debt, C = collateral value (oracle), LT = liquidation threshold, 
                HF_target = desired HF (default 1.2). Only this portion of debt is liquidated; the rest 
                of the position remains intact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Protocol-Owned Flashloan Execution</h3>
              <p className="text-gray-600 text-sm">
                AMM Market can orchestrate flashloan-backed liquidation execution through specialized
                protocol nodes that repay debt, seize LP collateral, unwrap LPs, route underlying
                assets, and settle execution liquidity in a single atomic transaction. This reduces
                dependence on third-party liquidators without removing permissionless participation.
              </p>
            </div>

            <div className="border-l-4 border-amber-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-2">Escalation to Full Liquidation</h3>
              <p className="text-gray-600 text-sm">
                If HF cannot be restored due to sudden price moves or low liquidity, the protocol 
                escalates to full liquidation to maintain solvency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">User Transparency</h3>
              <p className="text-gray-600 text-sm">
                Real-time dashboard displays partial liquidation amounts and potential full liquidation 
                scenarios. Users can see exact HF changes, debt covered, and expected collateral adjustments.
              </p>
            </div>
          </div>
        </section>

        <section id="liquidation-node" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Node</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market Node is the protocol&apos;s indexing and liquidation bot runtime. It handles
            liquidity operations and routing, tracks active positions, refreshes market and debt
            state in real time, and reacts as soon as a position falls below its allowed borrowing
            capacity. Rather than relying only on generic third-party liquidators to interpret
            complex LP collateral, AMM Market operates specialized nodes built for LP-specific
            workflows such as fee claiming, full LP unwind, asset routing, flashloan repayment, and
            residual value return.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Runtime Model</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="border-l-4 border-amber-300 pl-3">Reads directly from on-chain activity and maintains an in-memory map of active positions</li>
                <li className="border-l-4 border-amber-300 pl-3">Refreshes drifting debt values on short intervals for faster liquidation readiness</li>
                <li className="border-l-4 border-amber-300 pl-3">Performs periodic full-system sweeps to catch missed updates or stale state</li>
                <li className="border-l-4 border-amber-300 pl-3">Feeds the application UI and protocol dashboards from one consistent shared data layer</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Execution Path</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="border-l-4 border-amber-300 pl-3">Sources temporary liquidity and repays debt into the credit layer</li>
                <li className="border-l-4 border-amber-300 pl-3">Claims accrued LP fees and unwinds collateral into its underlying assets</li>
                <li className="border-l-4 border-amber-300 pl-3">Repays execution liquidity, pays the liquidation premium, and preserves atomic settlement</li>
                <li className="border-l-4 border-amber-300 pl-3">Returns any residual value to the borrower before closing or resizing the position</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="border-l-4 border-red-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-1">Risk Management</h3>
              <p className="text-gray-600 text-sm">
                Specialized nodes improve liquidation coverage for LP collateral that is traditionally
                harder to service and provide a reliable first line of defense against bad debt during
                stressed conditions.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-1">Product Defensibility</h3>
              <p className="text-gray-600 text-sm">
                This architecture supports LP collateral markets that traditional lending systems
                struggle to service, helping AMM Market build a differentiated credit engine around
                active on-chain liquidity.
              </p>
            </div>
            <div className="border-l-4 border-green-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-1">Scalability</h3>
              <p className="text-gray-600 text-sm">
                The runtime is intentionally lightweight at launch, making it easier to expand from a
                lean single-runtime model into broader market coverage without changing the core
                operating model.
              </p>
            </div>
          </div>
        </section>

        <section id="liquidation-pathways" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Pathways</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidation in AMM Market has two distinct pathways:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">User-Initiated Liquidation</h3>
              <p className="text-gray-600 text-sm mb-3">
                Occurs when an external party identifies an undercollateralized loan.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Liquidator calls the <code className="bg-gray-100 px-1 rounded text-gray-800">liquidate</code> function with <code className="bg-gray-100 px-1 rounded text-gray-800">tokenId</code> and <code className="bg-gray-100 px-1 rounded text-gray-800">permitData</code></li>
                <li>• Spoke validates the loan&apos;s unhealthy status</li>
                <li>• Calculates <code className="bg-gray-100 px-1 rounded text-gray-800">liquidationCost</code> (debt + bonus) and <code className="bg-gray-100 px-1 rounded text-gray-800">liquidationValue</code> (assets to seize)</li>
                <li>• Executes <code className="bg-gray-100 px-1 rounded text-gray-800">_sendPositionValue</code> via Uniswap&apos;s <code className="bg-gray-100 px-1 rounded text-gray-800">decreaseLiquidity</code> and <code className="bg-gray-100 px-1 rounded text-gray-800">collect</code></li>
                <li>• Precise, surgical process targeting a single loan</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hub-Initiated Liquidation</h3>
              <p className="text-gray-600 text-sm mb-3">
                A broader, systemic event when the Hub needs to cover bad debt.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 ml-4">
                <li>• Hub calls <code className="bg-gray-100 px-1 rounded text-gray-800">handleLiquidation(debtToCover)</code></li>
                <li>• Spoke iterates through active loans, starting from most underwater</li>
                <li>• Extracts liquidity and fees from each position</li>
                <li>• Uses SwapRouter to convert tokens (ETH, WBTC) into Hub&apos;s requested asset (USDC)</li>
                <li>• Proceeds are repaid to the Hub</li>
                <li>• Incremental and health-targeted to minimize disruption</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">External Liquidator Flow</h3>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Liquidator transfers <code className="bg-gray-100 px-1 rounded text-gray-800">liquidationCost</code> in asset to AMM Market</li>
              <li>AMM Market extracts partial position liquidity proportional to <code className="bg-gray-100 px-1 rounded text-gray-800">liquidationValue</code></li>
              <li>Collected tokens transferred to liquidator</li>
              <li>Debt shares reduced for the loan</li>
              <li>State cleaned up for loans reaching zero shares</li>
            </ol>
          </div>
        </section>

        <section id="liquidation-threshold" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Threshold (LT)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Liquidation Threshold is the point at which a borrower&apos;s debt relative to the 
            collateral value triggers eligibility for liquidation. It is set slightly above the 
            borrowable LTV to provide a safety buffer.
          </p>
          
          <p className="text-gray-600 text-sm mb-4">
            <strong>Example:</strong> If the borrowable LTV is 66% for an ETH/USDC LP, the LT might be 70–75%. 
            This gap ensures the position remains safe under normal market fluctuations but allows 
            liquidators to act if risk exceeds tolerance.
          </p>

          <p className="text-gray-600 text-sm">
            <strong>Fair Resolution:</strong> During liquidation, the necessary value is extracted from the position 
            to settle the debt and pay the liquidator&apos;s premium. The assets remaining after these deductions 
            stay within the position, which is then automatically returned to the original owner.
          </p>
        </section>

        <section id="liquidation-bonus" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Bonus</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidators receive a bonus percentage of the collateral as an incentive to act quickly 
            when positions exceed the LT. The bonus varies depending on the pool type:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">LP Category</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Liquidation Bonus</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {liquidationBonuses.map((item) => (
                  <tr key={item.category}>
                    <td className="px-4 py-2 text-gray-900 font-medium">{item.category}</td>
                    <td className="px-4 py-2 text-blue-600 font-medium">{item.bonus}</td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            This encourages timely liquidation while keeping the system solvent.
          </p>
        </section>

        <section id="who-can-liquidate" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Can Liquidate</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidations remain permissionless, but AMM Market also operates specialized liquidation
            nodes to improve coverage for complex LP collateral:
          </p>
          
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Liquidation Bots</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Automated systems that monitor positions and execute liquidations for profit. 
                Most liquidations are performed by bots.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Individual Users</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Any user with sufficient capital can manually liquidate positions through 
                the contract interface.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">AMM Market Liquidation Nodes</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Protocol-operated backstop runtimes that monitor active positions, route liquidity,
                and execute LP-specific liquidation workflows when speed and coverage matter most.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Aave v4 Hub</span>
              <p className="text-gray-600 text-sm mt-0.5">
                The Hub can call <code className="bg-gray-100 px-1 rounded text-gray-800">handleLiquidation</code> to cover 
                Hub-level deficits by iterating through unhealthy loans.
              </p>
            </li>
          </ul>
        </section>

        <section id="protection-mechanisms" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection Mechanisms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Several mechanisms protect borrowers and the protocol:
          </p>
          
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Close Factor</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Liquidators can only repay up to 50% of debt per transaction, giving borrowers 
                a chance to recover their position.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Fees First</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Uncollected fees are used first before tapping principal assets, preserving 
                as much of the original position as possible.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Residual Return</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Any leftover value after debt + premium is preserved for the original owner 
                and the (possibly modified) position is returned.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Oracle Safeguards</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Price feeds include circuit breakers and TWAP smoothing to prevent manipulation-driven 
                liquidations.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="How AMM Market detects unhealthy positions, routes liquidations, and protects solvency across complex LP collateral."
        sectionColor="amber"
      />
    </div>
  )
}
