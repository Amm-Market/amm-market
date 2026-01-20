"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "calculation", title: "Calculation" },
  { id: "health-bands", title: "Health Factor Bands" },
  { id: "penalty-accrual", title: "Penalty Accrual" },
  { id: "soft-unwind", title: "Soft Unwind" },
  { id: "ui-states", title: "UI States" },
]

export default function HealthFactorPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Factor</h1>
        <p className="text-lg text-gray-600 mb-8">
          How collateral value and debt interact to determine position safety.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The health factor (HF) is the most important metric for managing your position. 
            It represents the safety margin between your collateral and debt. When HF drops 
            to 1.0 or below, your position becomes liquidatable.
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">≥ 1.25</div>
              <div className="text-green-800 text-sm font-medium">Green</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">1.0 - 1.25</div>
              <div className="text-yellow-800 text-sm font-medium">Yellow</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">≤ 1.0</div>
              <div className="text-red-800 text-sm font-medium">Orange/Red</div>
            </div>
          </div>
        </section>

        <section id="calculation" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Calculation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We compute HF per Spoke:
          </p>
          
          <div className="p-4 bg-gray-900 rounded-lg mb-4">
            <code className="text-green-400 text-sm">
              HF_spoke = totalCollateralUsd_spoke / totalDebtUsd_spoke
            </code>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Per-Spoke Calculation</h3>
            <p className="text-blue-800 text-sm">
              Health factor bands apply per Spoke. A user with positions in multiple Spokes 
              (e.g., Uniswap v3 Spoke and Balancer v3 Spoke) will have independent health 
              factor calculations for each.
            </p>
          </div>
        </section>

        <section id="health-bands" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health Factor Bands</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-green-500 bg-green-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-green-900">Green (HF ≥ 1.25)</span>
                <span className="text-green-700 font-mono text-sm">Monitor</span>
              </div>
              <p className="text-green-800 text-sm">
                No action required. Normal borrow cost applies.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-yellow-900">Yellow Warning (1.05 ≤ HF &lt; 1.25)</span>
                <span className="text-yellow-700 font-mono text-sm">Warning</span>
              </div>
              <p className="text-yellow-800 text-sm mb-2">
                UI warns borrower. No protocol action yet, but borrower is asked to:
              </p>
              <ul className="text-yellow-800 text-sm space-y-1 ml-4">
                <li>• Add liquidity to the bad pool, OR</li>
                <li>• Add a different approved pool (in the same Spoke) as collateral</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-amber-900">Yellow Penalty Accrual (1.00 &lt; HF &lt; 1.05)</span>
                <span className="text-amber-700 font-mono text-sm">Penalty</span>
              </div>
              <p className="text-amber-800 text-sm mb-2">
                Penalty kicks in (spoke-level penalty):
              </p>
              <ul className="text-amber-800 text-sm space-y-1 ml-4">
                <li>• Penalty rate: 0.3% per day, accruing pro-rata (per-minute accrual)</li>
                <li>• Applied to borrower's effective borrowing cost</li>
                <li>• Grace period: up to 3 days by default</li>
                <li>• If market recovers, penalty remains as increased borrow rate</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-orange-500 bg-orange-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-orange-900">Orange (HF ≤ 1.00)</span>
                <span className="text-orange-700 font-mono text-sm">Soft Unwind</span>
              </div>
              <p className="text-orange-800 text-sm">
                LiquidationAdapter may perform soft-unwind steps to return HF to target (e.g., 1.10). 
                If soft-unwind fails (insufficient liquidity, slippage caps breached), immediately 
                execute hard liquidation.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-red-500 bg-red-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-red-900">Red (HF ≤ 0.95 or soft unwind failure)</span>
                <span className="text-red-700 font-mono text-sm">Hard Liquidation</span>
              </div>
              <p className="text-red-800 text-sm">
                Liquidation actions fully execute to repay debt up to allowed close factors. 
                No auctions, no protocol reserve — remove collateral as required and settle debt.
              </p>
            </div>
          </div>
        </section>

        <section id="penalty-accrual" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Penalty Accrual</h2>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 mb-4">
            <h3 className="font-semibold text-purple-900 mb-2">Why Penalty-First?</h3>
            <p className="text-purple-800 text-sm">
              It reproduces the LLAMMA ethos of giving markets time to recover while still protecting 
              lenders. Penalty nudges behavior and compensates protocol/spoke for carrying risk. It 
              avoids immediate market churn on transient moves.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Penalty Mechanics</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• <strong>Rate:</strong> 0.3% per day (example), accruing per-minute</li>
              <li>• <strong>Application:</strong> Compounded into debt balance or charged periodically</li>
              <li>• <strong>Visibility:</strong> Penalty is visible in UI and increases effective borrowing cost</li>
              <li>• <strong>Effect:</strong> Effective HF moves downward if unpaid</li>
              <li>• <strong>Recovery:</strong> If market recovers, penalty remains but user avoids collateral removal</li>
            </ul>
          </div>
        </section>

        <section id="soft-unwind" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Soft Unwind</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When HF drops to 1.00 or below after the penalty window, the soft-unwind mechanism activates:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Step 1: Partial Decrease</h3>
              <p className="text-gray-600 text-sm">
                Reduce liquidity from the LP position to extract value.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Step 2: Collect</h3>
              <p className="text-gray-600 text-sm">
                Collect the extracted tokens from the position.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Step 3: Swap</h3>
              <p className="text-gray-600 text-sm">
                Swap extracted tokens to the debt asset if needed.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Step 4: Repay</h3>
              <p className="text-gray-600 text-sm">
                Repay debt to return HF to target (e.g., 1.10).
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-900 mb-2">Failure Scenario</h3>
            <p className="text-red-800 text-sm">
              If soft-unwind fails due to insufficient liquidity for required swaps or slippage caps 
              being breached, hard liquidation executes immediately. Any shortfall requires governance 
              action later.
            </p>
          </div>
        </section>

        <section id="ui-states" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">UI States</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Healthy</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Shows total collateral, borrow amount, health factor</li>
                <li>• Borrow/repay buttons enabled</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">Warning</h3>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Banner: "Health Factor Dropping: Top up or repay soon."</li>
                <li>• Quick actions: Add liquidity, repay debt</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">At Risk</h3>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Banner: "Close to liquidation."</li>
                <li>• Countdown or "monitoring" mode</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Liquidatable</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Liquidators can trigger</li>
                <li>• User sees frozen borrowing UI, only repay/top-up allowed</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Partial Liquidation</h3>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• UI shows which NFT was liquidated and impact</li>
                <li>• Position may survive if others healthy</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Full Liquidation</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Dashboard → "Position Closed."</li>
                <li>• Breakdown: Debt repaid, collateral seized</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="How collateral value and debt interact to determine position safety."
        sectionColor="violet"
      />
    </div>
  )
}
