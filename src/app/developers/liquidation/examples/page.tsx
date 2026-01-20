"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "partial-liquidation", title: "Partial Liquidation Example" },
  { id: "curve-lp", title: "Curve LP Collateral" },
  { id: "balancer-lp", title: "Balancer LP Collateral" },
  { id: "multi-pool", title: "Multi-Pool Collateral" },
  { id: "uniswap-v2", title: "Uniswap V2 LP Tokens" },
  { id: "uniswap-v3", title: "Uniswap V3 LP Tokens" },
  { id: "uniswap-v4", title: "Uniswap V4 LP Tokens" },
  { id: "edge-cases", title: "Edge Cases & Issues" },
  { id: "summary", title: "Summary" },
]

export default function LiquidationExamplesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Liquidation Examples</h1>
        <p className="text-lg text-gray-600 mb-8">
          Concrete scenarios illustrating liquidation processes for different LP token types.
        </p>

        <section id="partial-liquidation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partial Liquidation Example</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Scenario</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>LP collateral:</strong> $7,071 (V3 NFTs: ETH/USDC + WETH/DAI)</li>
              <li>• <strong>Debt:</strong> $5,000 (GHO)</li>
              <li>• <strong>Liquidation threshold:</strong> 70%</li>
              <li>• <strong>HF target:</strong> 1.2</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Step-by-Step Process</h3>
            <ol className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <strong>Compute minimal debt repayment:</strong>
                  <div className="p-2 bg-gray-200 rounded mt-1">
                    <code className="text-xs">x = (1.2 × 5000 − 7071 × 0.7) / 1.2 = 875.21</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span><strong>Execute Flashloan:</strong> Borrow $875.21 from Aave Hub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span><strong>Repay debt & withdraw collateral:</strong> Repay GHO on Spoke, withdraw V3 NFT positions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span><strong>Unwrap LPs & collect tokens:</strong> decreaseLiquidity and collect on NFTs. Now holding ETH/WETH and USDC/DAI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span><strong>Swap to repay flashloan:</strong> Swap tokens via multi-DEX routing into GHO to cover flashloan + fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span><strong>Finalize:</strong> HF restored to 1.2. Partial liquidation preserves remaining collateral. Any leftover tokens go to liquidator</span>
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Key Edge Cases</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>Position out-of-range (V3):</strong> Only one token returned → requires multi-hop swap</li>
              <li>• <strong>V4 hooks:</strong> Custom unwrap API may differ per pool</li>
              <li>• <strong>Low liquidity:</strong> Multi-step swaps or DEX fallback routes needed</li>
              <li>• <strong>Oracle mismatches:</strong> TWAP safeguards required</li>
            </ul>
          </div>
        </section>

        <section id="curve-lp" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scenario 1: Curve LP Collateral</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Setup</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>LP collateral:</strong> 3Pool (DAI/USDC/USDT) LP tokens (ERC-20)</li>
              <li>• <strong>Debt:</strong> 10,000 GHO</li>
              <li>• <strong>Liquidation threshold:</strong> 75%</li>
              <li>• <strong>HF target:</strong> 1.2</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Liquidation Process</h3>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span><strong>HF drops below 1:</strong> Spoke oracle shows LP value decreased due to stablecoin imbalance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <strong>Compute minimal debt repayment:</strong>
                  <div className="p-2 bg-gray-200 rounded mt-1">
                    <code className="text-xs">x = (1.2 × 10000 − 12000 × 0.75) / 1.2 = 500</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span><strong>Flashloan:</strong> Borrow $500 GHO via Aave Hub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span><strong>Repay debt & withdraw LP:</strong> spoke.repay(borrower, GHO, 500, variable). Withdraw Curve 3Pool LP (ERC-20)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span><strong>Remove liquidity from Curve:</strong> Call remove_liquidity_imbalance([amountDAI, amountUSDC, amountUSDT], minAmounts). Receive individual stablecoins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span><strong>Swap to repay flashloan:</strong> Typically one token (e.g., DAI) is swapped to GHO using Uniswap or PancakeSwap</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <span><strong>Complete:</strong> Repay flashloan + fee. Remaining stablecoins sent to liquidator</span>
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Edge Cases / Notes</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Imbalance in pool may cause slippage → set minAmounts to prevent under-repayment</li>
              <li>• Multi-step swaps required if Curve pool token isn't directly GHO-compatible</li>
              <li>• HF may require partial liquidation only; full liquidation avoided unless HF still &lt; 1</li>
            </ul>
          </div>
        </section>

        <section id="balancer-lp" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scenario 2: Balancer Weighted Pool LP Collateral</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Setup</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>LP collateral:</strong> Balancer 50/50 ETH/USDC LP (ERC-20)</li>
              <li>• <strong>Debt:</strong> 8,000 GHO</li>
              <li>• <strong>Liquidation threshold:</strong> 70%</li>
              <li>• <strong>HF target:</strong> 1.2</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Liquidation Process</h3>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span><strong>HF drops below threshold:</strong> ETH price volatility causes LP value to drop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <strong>Compute minimal debt repayment:</strong>
                  <div className="p-2 bg-gray-200 rounded mt-1">
                    <code className="text-xs">x = (1.2 × 8000 − 11000 × 0.7) / 1.2 = 400</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span><strong>Flashloan:</strong> Borrow $400 GHO from Aave Hub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span><strong>Repay debt & withdraw LP:</strong> spoke.repay(borrower, GHO, 400, variable). Withdraw Balancer LP (ERC-20)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span><strong>Remove liquidity from Balancer:</strong> Call exitPool(amount, minAmountsOut). Receive underlying ETH and USDC</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span><strong>Swap to GHO:</strong> Use multi-DEX route: swap ETH → GHO on Uniswap V3; USDC → GHO on Curve or Aerodrome</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <span><strong>Complete:</strong> Repay flashloan and distribute profit. Any leftover ETH or USDC transferred to liquidator</span>
              </li>
            </ol>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Edge Cases / Notes</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Low pool liquidity → multi-step swaps or aggregator needed</li>
              <li>• Fee-on-transfer tokens must use removeLiquiditySupportingFeeOnTransferTokens</li>
              <li>• HF recalculation may trigger additional liquidation if ETH drops further</li>
            </ul>
          </div>
        </section>

        <section id="multi-pool" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scenario 3: Multi-Pool LP Collateral</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Setup</h3>
            <p className="text-gray-600 text-sm mb-2">Borrower has mixed collateral:</p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Uniswap V3 ETH/USDC NFT (range liquidity)</li>
              <li>• Curve 3Pool LP (ERC-20)</li>
              <li>• Balancer 50/50 ETH/USDC LP (ERC-20)</li>
              <li>• <strong>Total debt:</strong> 15,000 GHO</li>
              <li>• <strong>HF target:</strong> 1.2</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Liquidation Process</h3>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span><strong>HF drops below 1:</strong> ETH volatility + stablecoin imbalance → HF &lt; 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <strong>Compute minimal repayment per collateral type:</strong>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>• V3 NFT: 1,200 GHO</li>
                    <li>• Curve LP: 500 GHO</li>
                    <li>• Balancer LP: 300 GHO</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span><strong>Flashloan execution:</strong> Borrow total 2,000 GHO via Aave Hub. Execute all liquidations atomically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span><strong>Repay debt on Spoke:</strong> spoke.repay called per asset type</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <div>
                  <strong>Withdraw LPs:</strong>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>• V3 NFT: withdraw NFT, decreaseLiquidity, collect</li>
                    <li>• Curve & Balancer: withdraw ERC-20 LPs</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <div>
                  <strong>Unwrap / Remove liquidity:</strong>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>• V3 NFT → token0/token1 (ETH/USDC)</li>
                    <li>• Curve LP → DAI/USDC/USDT</li>
                    <li>• Balancer LP → ETH/USDC</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <div>
                  <strong>Swap underlying tokens to repay flashloan:</strong>
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>• ETH → GHO via Uniswap V3</li>
                    <li>• DAI → GHO via Curve</li>
                    <li>• USDC → GHO via Aerodrome</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">8</span>
                <span><strong>Flashloan repayment & profit distribution:</strong> Repay full 2,000 GHO + fees. Leftover tokens sent to liquidator</span>
              </li>
            </ol>
          </div>

          <div className="mt-4 border-l-4 border-red-400 pl-3">
            <h3 className="font-semibold text-gray-900 mb-2">Edge Cases / Notes</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• V3 liquidity may be out-of-range → only one token returned → adjust swaps</li>
              <li>• Multi-pool swaps increase slippage risk → set minReturn carefully</li>
              <li>• Gas limits may require chunked liquidation or modular calls</li>
              <li>• HF recalculated after each partial liquidation; protocol escalates to full liquidation if HF still &lt; 1</li>
            </ul>
          </div>
        </section>

        <section id="uniswap-v2" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Uniswap V2 LP Tokens</h2>
          
          <p className="text-gray-600 text-sm mb-4">
            A user provides liquidity to a Uniswap V2 ETH/USDC pool and borrows GHO against their LP tokens.
          </p>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Liquidation Process</h3>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>The liquidator identifies the under-collateralized position</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>A flash loan is obtained from Aave v4</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>The borrower's debt is repaid using the flash loan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>The LP tokens are withdrawn from the Aave v4 Spoke</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span>The LP tokens are unwound to retrieve the underlying assets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span>The underlying assets are swapped as needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <span>The flash loan is repaid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">8</span>
                <span>Any remaining assets are retained as profit</span>
              </li>
            </ol>
          </div>
        </section>

        <section id="uniswap-v3" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uniswap V3 LP Tokens</h2>
          
          <p className="text-gray-600 text-sm mb-4">
            A user provides liquidity to a Uniswap V3 ETH/USDC pool within a specific price range 
            and borrows GHO against their LP tokens (NFT position).
          </p>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Liquidation Process</h3>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>The liquidator identifies the under-collateralized position</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>A flash loan is obtained from Aave v4</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>The borrower's debt is repaid using the flash loan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>The LP NFT is withdrawn from the Aave v4 Spoke</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span>The LP position is unwound (decreaseLiquidity + collect) to retrieve underlying assets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span>The underlying assets are swapped as needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <span>The flash loan is repaid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">8</span>
                <span>Any remaining assets are retained as profit</span>
              </li>
            </ol>
          </div>
        </section>

        <section id="uniswap-v4" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uniswap V4 LP Tokens</h2>
          
          <p className="text-gray-600 text-sm mb-4">
            A user provides liquidity to a Uniswap V4 ETH/USDC pool (with hooks enabled) and 
            borrows GHO against their LP tokens.
          </p>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Liquidation Process</h3>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>The liquidator identifies the under-collateralized position</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>A flash loan is obtained from Aave v4</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>The borrower's debt is repaid using the flash loan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>The LP tokens are withdrawn from the Aave v4 Spoke</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span>The LP tokens are unwound to retrieve the underlying assets (hook logic may apply)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <span>The underlying assets are swapped as needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                <span>The flash loan is repaid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">8</span>
                <span>Any remaining assets are retained as profit</span>
              </li>
            </ol>
          </div>
        </section>

        <section id="edge-cases" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Edge Cases & Potential Issues</h2>
          
          <ul className="space-y-4">
            <li className="border-b border-gray-100 pb-4">
              <span className="font-semibold text-gray-900">1. Impermanent Loss</span>
              <p className="text-gray-600 text-sm mt-1">
                Providing liquidity to volatile pairs can lead to impermanent loss, affecting the value of LP tokens. A user may experience a significant price movement that triggers liquidation.
              </p>
            </li>

            <li className="border-b border-gray-100 pb-4">
              <span className="font-semibold text-gray-900">2. Slippage</span>
              <p className="text-gray-600 text-sm mt-1">
                Large transactions can cause slippage, impacting the profitability of the liquidation. A liquidator executing a large swap may experience significant price movement.
              </p>
            </li>

            <li className="border-b border-gray-100 pb-4">
              <span className="font-semibold text-gray-900">3. Flash Loan Fees</span>
              <p className="text-gray-600 text-sm mt-1">
                Flash loan fees can reduce the profitability of the liquidation, potentially leaving little profit after repaying the loan.
              </p>
            </li>

            <li className="border-l-4 border-red-400 pl-3 pb-4">
              <span className="font-semibold text-gray-900">4. Oracle Manipulation</span>
              <p className="text-gray-600 text-sm mt-1">
                Manipulated price oracles can lead to incorrect valuations, affecting liquidation decisions and potentially causing bad debt.
              </p>
            </li>

            <li className="border-l-4 border-red-400 pl-3">
              <span className="font-semibold text-gray-900">5. Smart Contract Risks</span>
              <p className="text-gray-600 text-sm mt-1">
                Vulnerabilities in smart contracts can be exploited, leading to loss of funds or assets.
              </p>
            </li>
          </ul>
        </section>

        <section id="summary" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V2 LP Tokens</h3>
              <p className="text-gray-600 text-sm">
                Standard ERC-20 tokens representing a user's share in a Uniswap V2 liquidity pool.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V3 LP Tokens</h3>
              <p className="text-gray-600 text-sm">
                Represent concentrated liquidity positions (NFTs) and are more complex due to their 
                range-based nature.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Uniswap V4 LP Tokens</h3>
              <p className="text-gray-600 text-sm">
                Introduced with hooks, allowing for more flexible interactions but requiring custom 
                logic for integration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Aave v4 Integration</h3>
              <p className="text-gray-600 text-sm">
                Aave v4's Spoke pools are designed to interact with these LP tokens, enabling them 
                to be used as collateral and facilitating their liquidation when necessary.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Concrete scenarios illustrating liquidation processes for different LP token types."
        sectionColor="amber"
      />
    </div>
  )
}
