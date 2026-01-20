import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Liquidation Flow",
  description: "Step-by-step liquidation flow in AMM Market - process overview, LP unwrapping by type, liquidator rewards, and technical integration guide.",
}

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
          <p className="text-gray-600 text-sm">
            <strong>Key Principle:</strong> Initially, the debt value and any applicable liquidation penalties are deducted from 
            the total value of the liquidated position. This deduction is first made from any 
            uncollected fees and subsequently from the principal assets of the position.
          </p>
        </section>

        <section id="liquidation-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Process</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Liquidation Mode Enabled</h3>
              <p className="text-gray-600 text-sm">
                Any keeper can attempt liquidation once a position's accrued debt exceeds its 
                borrowing capacity.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Use Uncollected Fees First</h3>
              <p className="text-gray-600 text-sm">
                If collected fees cover the debt, fees are used and the position remains live 
                (remainder returned to owner).
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Extract Principal If Insufficient</h3>
              <p className="text-gray-600 text-sm">
                The protocol determines the minimum assets to withdraw from the LP (burn LP tokens 
                if needed) and swaps them into the debt asset(s) using on-chain liquidity routes.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Liquidator Reward</h3>
              <p className="text-gray-600 text-sm">
                Liquidator receives a premium (liquidation bonus) paid from the proceeds. 
                Suggested range: 2%–10% depending on debt-to-value and pool risk.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">5. Residual Value Returned</h3>
              <p className="text-gray-600 text-sm">
                Any leftover value after debt + premium is preserved for the original owner and 
                the (possibly modified) position is returned.
              </p>
            </div>
          </div>
        </section>

        <section id="step-by-step" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Flow</h2>
          
          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Continuous Monitoring</strong> — Spoke oracles track LP collateral values and compute HF. If HF &lt; 1 or below warning threshold, self-liquidation triggers.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Compute Minimal Debt Repayment</strong> — Use the HF formula: <code className="text-xs bg-gray-100 px-1 rounded text-gray-800">x = (HF_target × D − C × LT) / HF_target</code>. Supports variable close factors per Spoke configuration.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Protocol Flashloan Execution</strong> — Borrow debt token (e.g., GHO) via Aave v4 Hub flashloan. Enables repayment of borrower's debt without upfront capital.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Repay Debt on Spoke</strong> — Debt is repaid on the Spoke, marking LP collateral withdrawable.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Withdraw and Unwrap LP Collateral</strong> — Extract the minimum required assets from the LP position based on LP type.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Swap Tokens to Repay Flashloan</strong> — Convert underlying tokens into flashloan asset. Use multi-DEX routing, TWAPs, and slippage bounds for safety.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Repay Flashloan</strong> — Repay principal + fees within the same atomic transaction. Failure reverts the entire liquidation to prevent losses.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Distribute Profit & Update State</strong> — Any leftover tokens go to the liquidator (protocol if self-liquidation). HF recalculated and dashboard updated.
            </li>
            <li className="text-gray-600 text-sm border-l-4 border-red-400 pl-3">
              <strong className="text-gray-900">Escalation</strong> — If HF still &lt; 1.2, protocol escalates to full liquidation.
            </li>
          </ol>
        </section>

        <section id="lp-unwrapping" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LP Unwrapping by Type</h2>
          
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">ERC-20 LPs (V2, Balancer, Curve)</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Withdraw LP, approve router, call <code className="bg-gray-100 px-1 rounded text-gray-800">removeLiquidity</code>. 
                Receive underlying tokens directly.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">NFT LPs (V3)</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Withdraw NFT, call <code className="bg-gray-100 px-1 rounded text-gray-800">decreaseLiquidity</code> and 
                <code className="bg-gray-100 px-1 rounded text-gray-800 ml-1">collect</code> to retrieve underlying tokens.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">V4 LPs (Hooks/Custom Pools)</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Withdraw LP, call pool manager/hook API to unwrap. Custom logic may differ per pool.
              </p>
            </li>
          </ul>
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
          
          <ul className="space-y-4 mb-4">
            <li>
              <span className="font-semibold text-gray-900">Oracle Accuracy</span>
              <p className="text-gray-600 text-sm mt-0.5">Must cross-check Aave pricing with DEX TWAPs to prevent manipulation.</p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Liquidity Risks</span>
              <p className="text-gray-600 text-sm mt-0.5">Thin LP pools require chunked swaps to minimize slippage impact.</p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Gas & Stack Limits</span>
              <p className="text-gray-600 text-sm mt-0.5">Complex multi-step transactions may hit EVM limits; optimize calldata.</p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Token Peculiarities</span>
              <p className="text-gray-600 text-sm mt-0.5">Fee-on-transfer, rebasing, and nonstandard ERC-20 tokens require SafeERC20 handling.</p>
            </li>
          </ul>
          <p className="text-gray-600 text-sm border-l-4 border-red-400 pl-3">
            <strong>MEV / Front-running Risks:</strong> Consider private relay or Flashbots for large liquidations to prevent sandwich attacks.
          </p>
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

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Gas Considerations</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Simple Liquidation: ~300,000 gas</li>
              <li>• Flash Liquidation: ~500,000 gas</li>
              <li>• Multi-collateral Liquidation: ~400,000+ gas</li>
            </ul>
            <p className="text-gray-500 text-xs mt-2">
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
