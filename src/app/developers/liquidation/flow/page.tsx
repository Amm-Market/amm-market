"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "liquidation-process", title: "Liquidation Process" },
  { id: "step-by-step", title: "Step-by-Step Flow" },
  { id: "lp-unwrapping", title: "LP Unwrapping by Type" },
  { id: "liquidator-reward", title: "Liquidator Reward" },
  { id: "technical-details", title: "Technical Details" },
  { id: "additional-considerations", title: "Additional Considerations" },
  { id: "integration-guide", title: "Integration Guide" },
]

export default function LiquidationFlowPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Liquidation Flow</h1>
        <p className="text-lg text-gray-600 mb-8">
          Step-by-step breakdown of the liquidation process from trigger to settlement.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The liquidation flow is structured for <strong>partial liquidation first</strong>, with 
            escalation to full liquidation if necessary. It integrates with Aave v4 Hub/Spoke architecture 
            and supports multiple LP types.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The process is designed to be equitable for both borrowers and liquidators. By providing a 
            clear incentive structure, it encourages active participation from liquidators while protecting 
            the interests of position owners by ensuring the return of the maximum possible value post-liquidation.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Key Principle</h3>
            <p className="text-blue-800 text-sm">
              Initially, the debt value and any applicable liquidation penalties are deducted from 
              the total value of the liquidated position. This deduction is first made from any 
              uncollected fees and subsequently from the principal assets of the position.
            </p>
          </div>
        </section>

        <section id="liquidation-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Process</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">1. Liquidation Mode Enabled</h3>
              <p className="text-red-800 text-sm">
                Any keeper can attempt liquidation once a position's accrued debt exceeds its 
                borrowing capacity.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">2. Use Uncollected Fees First</h3>
              <p className="text-amber-800 text-sm">
                If collected fees cover the debt, fees are used and the position remains live 
                (remainder returned to owner).
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">3. Extract Principal If Insufficient</h3>
              <p className="text-orange-800 text-sm">
                The protocol determines the minimum assets to withdraw from the LP (burn LP tokens 
                if needed) and swaps them into the debt asset(s) using on-chain liquidity routes.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">4. Liquidator Reward</h3>
              <p className="text-green-800 text-sm">
                Liquidator receives a premium (liquidation bonus) paid from the proceeds. 
                Suggested range: 2%–10% depending on debt-to-value and pool risk.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">5. Residual Value Returned</h3>
              <p className="text-blue-800 text-sm">
                Any leftover value after debt + premium is preserved for the original owner and 
                the (possibly modified) position is returned.
              </p>
            </div>
          </div>
        </section>

        <section id="step-by-step" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Flow</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                <p className="text-gray-600 text-sm">
                  Spoke oracles track LP collateral values and compute HF. If HF &lt; 1 or below warning 
                  threshold, self-liquidation triggers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Compute Minimal Debt Repayment</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Use the HF formula to determine the exact debt portion to cover:
                </p>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded block">
                  x = (HF_target × D − C × LT) / HF_target
                </code>
                <p className="text-gray-500 text-xs mt-1">
                  Supports variable close factors per Spoke configuration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Protocol Flashloan Execution</h3>
                <p className="text-gray-600 text-sm">
                  Borrow debt token (e.g., GHO) via Aave v4 Hub flashloan. Enables repayment of borrower's 
                  debt without upfront capital.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Repay Debt on Spoke</h3>
                <p className="text-gray-600 text-sm">
                  Debt is repaid on the Spoke, marking LP collateral withdrawable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">5</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Withdraw and Unwrap LP Collateral</h3>
                <p className="text-gray-600 text-sm">
                  Extract the minimum required assets from the LP position based on LP type 
                  (see LP Unwrapping section below).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">6</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Swap Tokens to Repay Flashloan</h3>
                <p className="text-gray-600 text-sm">
                  Convert underlying tokens into flashloan asset. Use multi-DEX routing, TWAPs, and 
                  slippage bounds for safety.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">7</div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Repay Flashloan</h3>
                <p className="text-gray-600 text-sm">
                  Repay principal + fees within the same atomic transaction. Failure reverts the entire 
                  liquidation to prevent losses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">8</div>
              <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Distribute Profit & Update State</h3>
                <p className="text-green-800 text-sm">
                  Any leftover tokens go to the liquidator (protocol if self-liquidation). HF recalculated 
                  and dashboard updated.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">9</div>
              <div className="flex-1 p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Escalation</h3>
                <p className="text-red-800 text-sm">
                  If HF still &lt; 1.2, protocol escalates to full liquidation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="lp-unwrapping" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Unwrapping by Type</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">ERC-20 LPs (V2, Balancer, Curve)</h3>
              <p className="text-blue-800 text-sm">
                Withdraw LP, approve router, call <code className="bg-blue-100 px-1 rounded">removeLiquidity</code>. 
                Receive underlying tokens directly.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">NFT LPs (V3)</h3>
              <p className="text-purple-800 text-sm">
                Withdraw NFT, call <code className="bg-purple-100 px-1 rounded">decreaseLiquidity</code> and 
                <code className="bg-purple-100 px-1 rounded ml-1">collect</code> to retrieve underlying tokens.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">V4 LPs (Hooks/Custom Pools)</h3>
              <p className="text-green-800 text-sm">
                Withdraw LP, call pool manager/hook API to unwrap. Custom logic may differ per pool.
              </p>
            </div>
          </div>
        </section>

        <section id="liquidator-reward" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidator Reward Structure</h2>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Pool Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Liquidation Bonus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Stablecoin LPs</td>
                  <td className="px-4 py-2 text-green-600 font-medium">5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">ETH/Stable LPs</td>
                  <td className="px-4 py-2 text-blue-600 font-medium">6–8%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Blue-chip / Volatile LPs</td>
                  <td className="px-4 py-2 text-amber-600 font-medium">8–12%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Small-cap / Governance LPs</td>
                  <td className="px-4 py-2 text-red-600 font-medium">12–15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm">
            The bonus incentivizes timely liquidation while keeping the system solvent. Higher-risk 
            pools offer larger bonuses to compensate liquidators for the additional complexity and risk.
          </p>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Details</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Collateral Calculation</h3>
              <p className="text-gray-600 text-sm mb-2">
                The amount of collateral seized is calculated as:
              </p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  liquidationValue = (debtRepaid × (1 + liquidationBonus)) / collateralPrice
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Flash Liquidation</h3>
              <p className="text-gray-600 text-sm">
                Liquidators can use flash loans to liquidate without upfront capital:
              </p>
              <ol className="text-gray-600 text-sm mt-2 space-y-1 list-decimal list-inside">
                <li>Flash borrow debt asset from Aave v4</li>
                <li>Execute liquidation via AMM Market</li>
                <li>Receive LP tokens / underlying assets</li>
                <li>Sell received assets on DEX</li>
                <li>Repay flash loan + fee</li>
                <li>Keep profit</li>
              </ol>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Hub-Initiated Liquidation</h3>
              <p className="text-gray-600 text-sm mb-2">
                When the Hub calls <code className="bg-gray-200 px-1 rounded">handleLiquidation(debtToCover, hintStartIndex)</code>:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Spoke iterates active loan list starting from hint</li>
                <li>• For each unhealthy loan: extract LP liquidity into tokens</li>
                <li>• Swap tokens to debt asset using configured swapRouter</li>
                <li>• Aggregate received assets and repay Hub</li>
                <li>• Report any shortfall as deficit</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="additional-considerations" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Considerations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Oracle Accuracy</h3>
              <p className="text-amber-800 text-sm">
                Must cross-check Aave pricing with DEX TWAPs to prevent manipulation.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Liquidity Risks</h3>
              <p className="text-amber-800 text-sm">
                Thin LP pools require chunked swaps to minimize slippage impact.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Gas & Stack Limits</h3>
              <p className="text-amber-800 text-sm">
                Complex multi-step transactions may hit EVM limits; optimize calldata.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Token Peculiarities</h3>
              <p className="text-amber-800 text-sm">
                Fee-on-transfer, rebasing, and nonstandard ERC-20 tokens require SafeERC20 handling.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200 md:col-span-2">
              <h3 className="font-semibold text-red-900 mb-2">MEV / Front-running Risks</h3>
              <p className="text-red-800 text-sm">
                Consider private relay or Flashbots for large liquidations to prevent sandwich attacks.
              </p>
            </div>
          </div>
        </section>

        <section id="integration-guide" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Integration Guide</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For building a liquidation bot:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">1. Monitor Events</h3>
              <p className="text-gray-600 text-sm">
                Subscribe to <code className="bg-gray-200 px-1 rounded">Borrow</code>, 
                <code className="bg-gray-200 px-1 rounded">Deposit</code>, and 
                <code className="bg-gray-200 px-1 rounded">Repay</code> events to track positions.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">2. Maintain Position Index</h3>
              <p className="text-gray-600 text-sm">
                Keep a local database of all positions with their health factors and debt values.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">3. Price Feed Integration</h3>
              <p className="text-gray-600 text-sm">
                Use the same oracle sources as the protocol for accurate health factor calculations.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">4. Profitability Check</h3>
              <p className="text-gray-600 text-sm">
                Calculate expected profit after gas, slippage, and flash loan fees before executing.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">5. Execute with Flash Loan</h3>
              <p className="text-gray-600 text-sm">
                Use Aave v4 flash loans to liquidate without upfront capital requirements.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Gas Considerations</h3>
            <ul className="text-amber-800 text-sm space-y-1">
              <li>• Simple Liquidation: ~300,000 gas</li>
              <li>• Flash Liquidation: ~500,000 gas</li>
              <li>• Multi-collateral Liquidation: ~400,000+ gas</li>
            </ul>
            <p className="text-amber-700 text-xs mt-2">
              Gas costs vary with network conditions. Factor gas into profitability calculations.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Step-by-step breakdown of the liquidation process from trigger to settlement."
        sectionColor="amber"
      />
    </div>
  )
}
