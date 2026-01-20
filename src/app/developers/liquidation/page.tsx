"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "lp-complexity", title: "LP Collateral Complexity" },
  { id: "key-principles", title: "Key Principles" },
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
            mode is activated when a position's accrued debt exceeds its borrowing capacity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under this mode, any account can clear the debt and earn a liquidation premium, which ranges 
            from 2% to 10% based on the position's debt-to-value ratio. The liquidation process initially 
            utilizes uncollected fees from the position. If these are not enough, the principal assets 
            are tapped to cover the remaining debt and to reward the liquidator.
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800 text-sm">
              <strong>Trigger:</strong> Liquidation is triggered when a position's accrued debt &gt; BorrowingCapacity.
            </p>
          </div>
        </section>

        <section id="lp-complexity" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Collateral Complexity</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LP-backed positions are more complex than single-token loans because they involve:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Token Compositions</h3>
              <p className="text-gray-600 text-sm">
                LP positions contain multiple tokens (e.g., ETH–USDC, WETH–DAI) that must be unwrapped 
                and handled separately during liquidation.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Impermanent Loss Risk</h3>
              <p className="text-gray-600 text-sm">
                LP value can change due to impermanent loss, requiring accurate real-time valuation 
                during liquidation.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">ERC-20 vs NFT Mechanics</h3>
              <p className="text-gray-600 text-sm">
                Different LP types (Uniswap V2/V3/V4) require different unwrapping and handling logic.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Multi-DEX Swap Execution</h3>
              <p className="text-gray-600 text-sm">
                Underlying tokens must be swapped across multiple DEXes (Uniswap, Curve, Balancer, 
                PancakeSwap, Aerodrome) for optimal execution.
              </p>
            </div>
          </div>
        </section>

        <section id="key-principles" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Principles</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Target Health Factor (HF)</h3>
              <p className="text-blue-800 text-sm mb-2">
                The protocol aims to restore HF to <strong>1.2</strong> whenever HF drops below 1 or a 
                configurable warning threshold. Partial liquidations are preferred to minimize collateral 
                loss and market impact.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Minimal Intervention</h3>
              <p className="text-purple-800 text-sm mb-2">
                Compute exact debt needed to restore HF using the formula:
              </p>
              <div className="p-3 bg-purple-100 rounded mb-2">
                <code className="text-purple-900 text-sm">
                  x = (HF_target × D − C × LT) / HF_target
                </code>
              </div>
              <p className="text-purple-700 text-xs">
                Where: D = current debt, C = collateral value (oracle), LT = liquidation threshold, 
                HF_target = desired HF (default 1.2). Only this portion of debt is liquidated; the rest 
                of the position remains intact.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Protocol-Owned Flashloan Execution</h3>
              <p className="text-green-800 text-sm">
                AMM Market executes flashloans internally to repay debt, seize LP collateral, unwrap LPs, 
                swap underlying tokens, and repay flashloan in a single atomic transaction. <strong>No 
                external liquidators or bots are required.</strong>
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Escalation to Full Liquidation</h3>
              <p className="text-amber-800 text-sm">
                If HF cannot be restored due to sudden price moves or low liquidity, the protocol 
                escalates to full liquidation to maintain solvency.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">User Transparency</h3>
              <p className="text-gray-600 text-sm">
                Real-time dashboard displays partial liquidation amounts and potential full liquidation 
                scenarios. Users can see exact HF changes, debt covered, and expected collateral adjustments.
              </p>
            </div>
          </div>
        </section>

        <section id="liquidation-pathways" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Pathways</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Liquidation in AMM Market has two distinct pathways:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">User-Initiated Liquidation</h3>
              <p className="text-blue-800 text-sm mb-3">
                Occurs when an external party identifies an undercollateralized loan.
              </p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Liquidator calls the <code className="bg-blue-100 px-1 rounded">liquidate</code> function with <code className="bg-blue-100 px-1 rounded">tokenId</code> and <code className="bg-blue-100 px-1 rounded">permitData</code></li>
                <li>• Spoke validates the loan's unhealthy status</li>
                <li>• Calculates <code className="bg-blue-100 px-1 rounded">liquidationCost</code> (debt + bonus) and <code className="bg-blue-100 px-1 rounded">liquidationValue</code> (assets to seize)</li>
                <li>• Executes <code className="bg-blue-100 px-1 rounded">_sendPositionValue</code> via Uniswap's <code className="bg-blue-100 px-1 rounded">decreaseLiquidity</code> and <code className="bg-blue-100 px-1 rounded">collect</code></li>
                <li>• Precise, surgical process targeting a single loan</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Hub-Initiated Liquidation</h3>
              <p className="text-purple-800 text-sm mb-3">
                A broader, systemic event when the Hub needs to cover bad debt.
              </p>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Hub calls <code className="bg-purple-100 px-1 rounded">handleLiquidation(debtToCover)</code></li>
                <li>• Spoke iterates through active loans, starting from most underwater</li>
                <li>• Extracts liquidity and fees from each position</li>
                <li>• Uses SwapRouter to convert tokens (ETH, WBTC) into Hub's requested asset (USDC)</li>
                <li>• Proceeds are repaid to the Hub</li>
                <li>• Incremental and health-targeted to minimize disruption</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">External Liquidator Flow</h3>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Liquidator transfers <code className="bg-gray-200 px-1 rounded">liquidationCost</code> in asset to AMM Market</li>
              <li>AMM Market extracts partial position liquidity proportional to <code className="bg-gray-200 px-1 rounded">liquidationValue</code></li>
              <li>Collected tokens transferred to liquidator</li>
              <li>Debt shares reduced for the loan</li>
              <li>State cleaned up for loans reaching zero shares</li>
            </ol>
          </div>
        </section>

        <section id="liquidation-threshold" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Threshold (LT)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Liquidation Threshold is the point at which a borrower's debt relative to the 
            collateral value triggers eligibility for liquidation. It is set slightly above the 
            borrowable LTV to provide a safety buffer.
          </p>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mb-4">
            <h3 className="font-semibold text-amber-900 mb-2">Example</h3>
            <p className="text-amber-800 text-sm">
              If the borrowable LTV is 66% for an ETH/USDC LP, the LT might be 70–75%. This gap 
              ensures the position remains safe under normal market fluctuations but allows 
              liquidators to act if risk exceeds tolerance.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Fair Resolution</h3>
            <p className="text-green-800 text-sm">
              During liquidation, the necessary value is extracted from the position to settle the 
              debt and pay the liquidator's premium. The assets remaining after these deductions 
              stay within the position, which is then automatically returned to the original owner.
            </p>
          </div>
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
            Liquidations are permissionless — anyone can liquidate an underwater position:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">Liquidation Bots</h3>
              <p className="text-blue-800 text-sm">
                Automated systems that monitor positions and execute liquidations for profit. 
                Most liquidations are performed by bots.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-1">Individual Users</h3>
              <p className="text-purple-800 text-sm">
                Any user with sufficient capital can manually liquidate positions through 
                the contract interface.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-1">Protocol Keepers</h3>
              <p className="text-green-800 text-sm">
                Backstop liquidators operated by the protocol to ensure positions are 
                liquidated even in extreme conditions.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-1">Aave v4 Hub</h3>
              <p className="text-amber-800 text-sm">
                The Hub can call <code className="bg-amber-100 px-1 rounded">handleLiquidation</code> to cover 
                Hub-level deficits by iterating through unhealthy loans.
              </p>
            </div>
          </div>
        </section>

        <section id="protection-mechanisms" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection Mechanisms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Several mechanisms protect borrowers and the protocol:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Close Factor</h3>
              <p className="text-gray-600 text-sm">
                Liquidators can only repay up to 50% of debt per transaction, giving borrowers 
                a chance to recover their position.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Fees First</h3>
              <p className="text-gray-600 text-sm">
                Uncollected fees are used first before tapping principal assets, preserving 
                as much of the original position as possible.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Residual Return</h3>
              <p className="text-gray-600 text-sm">
                Any leftover value after debt + premium is preserved for the original owner 
                and the (possibly modified) position is returned.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Oracle Safeguards</h3>
              <p className="text-gray-600 text-sm">
                Price feeds include circuit breakers and TWAP smoothing to prevent manipulation-driven 
                liquidations.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Conditions under which positions become liquidatable and who can trigger them."
        sectionColor="amber"
      />
    </div>
  )
}
