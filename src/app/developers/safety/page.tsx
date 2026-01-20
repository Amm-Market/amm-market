"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "multi-layer-risk", title: "Multi-Layer Risk Management" },
  { id: "hard-caps", title: "Hard Caps" },
  { id: "liquidation-threshold", title: "Liquidation Threshold" },
  { id: "impermanent-loss", title: "Impermanent Loss" },
  { id: "penalty-mechanism", title: "Penalty Mechanism" },
  { id: "emergency-procedures", title: "Emergency Procedures" },
]

export default function RiskParametersPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Risk Parameters</h1>
        <p className="text-lg text-gray-600 mb-8">
          Configurable limits and safeguards designed to manage systemic and asset-specific risk.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market implements multiple layers of risk management to protect users and the 
            protocol from adverse market conditions. These parameters are configurable through 
            governance and can be adjusted in response to changing market dynamics.
          </p>
          <p className="text-gray-500 text-sm">
            <strong>Core Principle:</strong> The health factor is enforced after every user action, 
            providing the first layer of protection at the position level.
          </p>
        </section>

        <section id="multi-layer-risk" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Multi-Layer Risk Management</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 1: Position-Level Health Factor</h3>
              <p className="text-gray-600 text-sm">
                The health factor is enforced after every user action. This ensures that each 
                individual position maintains adequate collateralization at all times.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 2: Spoke Risk Premium Integration</h3>
              <p className="text-gray-600 text-sm mb-2">
                The Spoke integrates with Aave v4's Risk Premium system. While the Spoke calculates 
                its own internal interest rate for users, the rate it pays to the Hub is influenced 
                by a "Spoke Risk Premium."
              </p>
              <p className="text-gray-500 text-xs">
                If the Hub detects that the Spoke's collateral (the basket of all its Uniswap NFTs) 
                is becoming riskier—perhaps due to a market-wide drop in stablecoin liquidity—it can 
                increase the premium it charges the Spoke. The Spoke can then pass this cost on to 
                its users, creating a direct market signal that encourages deleveraging or the deposit 
                of higher-quality collateral.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Layer 3: Hard Caps & Circuit Breakers</h3>
              <p className="text-gray-600 text-sm">
                Global debt limits and per-token debt ceilings prevent the Spoke from growing too 
                large or becoming overexposed to a single asset.
              </p>
            </div>
          </div>
        </section>

        <section id="hard-caps" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hard Caps</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">globalDebtLimit</h3>
              <p className="text-gray-600 text-sm">
                Prevents the Spoke from amassing too much outstanding borrow across all Hubs — 
                a hard cap on total protocol debt exposure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">maxDebtCeiling (Per Token)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Prevents a single token category from concentrating too much drawn debt.
              </p>
              <p className="text-gray-500 text-xs">
                <strong>Example:</strong> A maxDebtCeiling of $100M for ETH collateral means that 
                the total debt from all loans backed by ETH (e.g., ETH/USDC, ETH/WBTC) can never 
                exceed $100M, providing a circuit breaker against catastrophic failure in that asset.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Per Hub Draw Caps</h3>
              <p className="text-gray-600 text-sm">
                Respected by calling <code className="bg-gray-100 px-1 rounded text-gray-800">getSpokeDrawCap</code> for 
                a Hub asset id. The code also rejects token deposits that have zero liquidity and 
                rejects borrow operations when the health check would fail, using conservative rounding.
              </p>
            </div>
          </div>
        </section>

        <section id="liquidation-threshold" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liquidation Threshold</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The liquidation threshold is a pool-specific parameter, allowing the protocol to tailor 
            its response to the unique risk profile of each pool. By implementing these controls at 
            the pool level, AMM Market creates a dynamic risk framework that adapts to the inherent 
            characteristics of the underlying assets.
          </p>
          
          <div className="border-l-4 border-amber-400 pl-3">
            <h3 className="font-semibold text-gray-900 mb-2">Concentrated Range Risk</h3>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Risk:</strong> Narrow ranges can make a position effectively single-sided and illiquid.
            </p>
            <p className="text-gray-500 text-xs">
              <strong>Mitigation:</strong> Require full-range positions (min=0, max=∞) for initial 
              collateral acceptance; allow concentrated ranges only after per-pool review and tighter LTVs.
            </p>
          </div>
        </section>

        <section id="impermanent-loss" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impermanent Loss (IL)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The biggest risk isn't just price volatility of the underlying tokens, but the 
            <em> impermanent loss</em> the LP position itself has experienced or might experience. 
            An LP NFT worth $1000 in principal liquidity might only be worth $800 in a "realized" 
            sense if IL has eroded $200 of value.
          </p>
          
          <div className="border-l-4 border-red-400 pl-3 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
            <p className="text-gray-600 text-sm">
              Pricing IL accurately, especially for volatile pairs, is incredibly complex. AMM Market 
              risk management must price the <em>tokens</em> but model the <em>position's</em> historical 
              and potential future IL.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Mitigation Strategies</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>Tiered LTVs:</strong> Different LTV ratios based on pair volatility</li>
              <li>• <strong>Conservative Initial LTVs:</strong> Lower starting LTVs for volatile pairs</li>
              <li>• <strong>Dynamic LTV Adjustments:</strong> Using realized volatility metrics to adjust parameters</li>
            </ul>
            <p className="text-gray-500 text-xs mt-2">
              <strong>Risk:</strong> LP value can fall faster than single assets when tokens diverge.
            </p>
          </div>
        </section>

        <section id="penalty-mechanism" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Penalty Mechanism</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The penalty mechanism is an essential economic incentive that ensures the stability and 
            efficiency of the liquidation process. When a loan is liquidated, the liquidator does not 
            receive assets worth the full value of the debt they repaid. Instead, they receive a 
            discounted amount, with the difference being the penalty.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Purpose 1: Deterrent Against Manipulation</h3>
              <p className="text-gray-600 text-sm">
                Acts as a deterrent against malicious actors attempting to manipulate the market to 
                trigger liquidations, as the cost of the attack is higher than the potential reward.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Purpose 2: Protocol Buffer</h3>
              <p className="text-gray-600 text-sm">
                The penalty is effectively a fee paid by the undercollateralized borrower, which is 
                used to offset any potential shortfall in the collateral. In the event that the value 
                of the collateral extracted during liquidation is slightly less than the debt repaid 
                by the liquidator (due to slippage or oracle inaccuracies), the penalty provides a 
                reserve to cover this gap.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dynamic Penalty Size</h3>
              <p className="text-gray-600 text-sm">
                The size of the penalty is not fixed; it is often dynamic, meaning it can increase 
                if the loan is significantly undercollateralized or if the system is under stress, 
                ensuring that the incentive for liquidators is always sufficient to maintain system health.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Liquidation Complexity</h3>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Risk:</strong> Liquidator must sell both sides into the debt asset, increasing 
              slippage and complexity.
            </p>
            <p className="text-gray-500 text-xs">
              <strong>Mitigation:</strong> Specialized liquidation paths, price impact caps, and 
              higher liquidation bonuses to compensate keepers.
            </p>
          </div>
        </section>

        <section id="emergency-procedures" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Procedures</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In extreme market conditions, the protocol can activate emergency measures:
          </p>
          
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Pause Borrowing</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Temporarily halt new borrows while allowing repayments and liquidations.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Freeze LP Type</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Disable deposits for specific LP tokens experiencing issues.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Adjust Parameters</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Emergency parameter changes (LTV reduction, threshold changes) via guardian.
              </p>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Full Pause</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Complete protocol pause in case of critical vulnerability. Requires multi-sig.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Configurable limits and safeguards designed to manage systemic and asset-specific risk."
        sectionColor="rose"
      />
    </div>
  )
}
