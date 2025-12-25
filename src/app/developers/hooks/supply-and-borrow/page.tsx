import Link from "next/link"
import {
  ChevronRight,
  Zap,
  BarChart2,
  Shield,
  RefreshCw,
  ArrowUpDown,
  AlertTriangle,
  CheckCircle2,
  PieChart,
  Layers,
  Lock,
} from "lucide-react"

export default function SupplyAndBorrowPage() {
  return (
    <main className="flex-1 max-w-[800px] pl-8 pr-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/developers" className="hover:text-gray-900">
          Developers
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/developers/hooks" className="hover:text-gray-900">
          Hooks
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Supply and Borrow</span>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Advanced Lending & Borrowing with Concentrated Liquidity
        </h1>
        <p className="text-lg text-blue-800">
          Dex Mini's innovative Borrow Hook, accessible through our intuitive dApp, empowers both retail and
          institutional users with unprecedented control over on-chain liquidity.
        </p>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 mb-6">
          In the standard lending market, users deposit collateral (e.g., ETH) and borrow assets (e.g., DAI) based on a
          loan-to-value (LTV) ratio. If the value of the collateral drops, the LTV ratio increases. When the LTV exceeds
          a set liquidation threshold, the loan becomes eligible for liquidation. The platform's smart contract detects
          this breach and triggers the process. External liquidators, incentivized by discounts or a share of the
          collateral, step in to liquidate the loan. The collateral is sold, and the proceeds are used to repay the
          debt, with any surplus returned to the borrower. This process helps mitigate risk for the platform and lenders
          by protecting against defaults caused by price volatility.
        </p>

        <div className="bg-blue-900 text-white p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-100">Our Lending hook</h2>
          <p className="text-blue-100 italic mb-4">
            We're not just enhancing liquidity management; we're redefining it.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Key Benefits:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start mb-3">
              <Zap className="h-6 w-6 text-blue-600 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800">Precision Liquidity Deployment & Enhanced LTV</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>
                    Deploy collateral within custom, granular liquidity ranges (e.g., -100 to +100 ticks), aligning with
                    precise market conditions.
                  </li>
                  <li>Achieve industry-leading Loan-to-Value (LTV) ratios, borrowing up to 95% against ETH.</li>
                  <li>Execute sophisticated borrowing strategies with unparalleled control over price positions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start mb-3">
              <BarChart2 className="h-6 w-6 text-blue-600 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800">Optimized Fee Generation</h3>
                <p className="mt-2 text-gray-600">
                  Maximize returns from concentrated liquidity, effectively offsetting borrowing costs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start mb-3">
              <RefreshCw className="h-6 w-6 text-blue-600 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800">Ecosystem Rewards</h3>
                <p className="mt-2 text-gray-600">
                  Participate and earn rewards through incentivized liquidity provision.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start mb-3">
              <ArrowUpDown className="h-6 w-6 text-blue-600 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800">Cross-Pool Flexibility</h3>
                <p className="mt-2 text-gray-600">
                  Deposit collateral in one pool (e.g., WBTC/ETH) and borrow from another (e.g., USDT/GHO), unlocking
                  diverse and advanced trading strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 md:col-span-2">
            <div className="flex items-start mb-3">
              <Layers className="h-6 w-6 text-blue-600 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800">Collateral Efficiency via Built-in Zap</h3>
                <p className="mt-2 text-gray-600">
                  Seamlessly convert single-asset deposits into dual-token liquidity, optimizing capital utilization.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Core Innovations Driving Capital Efficiency and Security:</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-800">Automated Limit Adjustments</h3>
            <p className="mt-2 text-gray-600">
              Our intelligent system dynamically adjusts debt/collateral ceilings per block, ensuring continuous organic
              borrowing while mitigating risks from sudden, large-scale withdrawals ("whale moments"). This provides a
              crucial safety buffer against vulnerabilities and market manipulation.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-800">Robust Liquidation Engine</h3>
            <p className="mt-2 text-gray-600">
              Prioritizing timely elimination of bad debt, our advanced liquidation engine maintains protocol safety and
              optimizes LTV ratios.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-800">Unified Liquidity through Tick Consolidation</h3>
            <p className="mt-2 text-gray-600">
              Addressing liquidity fragmentation, the Borrow Hook consolidates user liquidity into discrete ticks,
              enabling efficient position management.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-800">Dynamic Loan-to-Value (LTV)</h3>
            <p className="mt-2 text-gray-600">
              Borrow up to a predefined LTV ratio, dynamically adjusted based on collateral type and market conditions.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-800">Base Layer for Advanced DeFi Protocols</h3>
            <p className="mt-2 text-gray-600">
              The Borrow Hook serves as a fundamental building block for innovative, capital-efficient DeFi protocols.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Risk & Reward Synergy</h2>
          <p className="mb-4 text-indigo-800">Borrowers' performance directly influences liquidity providers (LPs):</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Profitable Positions</span> → Enhance LP returns through sustained
                trading activity.
              </p>
            </div>
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Defaults & Liquidations</span> → Impact pool value, emphasizing the need
                for robust risk management.
              </p>
            </div>
          </div>
          <p className="mt-4 text-indigo-800">
            This interconnected system ensures that borrowers and LPs are aligned, fostering an ecosystem where both
            parties benefit from responsible financial strategies.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="mb-6 text-gray-700">
          Dex Mini integrates seamlessly with Uniswap v4, where liquidity is concentrated within specific price ranges.
          Borrowers engage with this structure through three fundamental pillars:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Liquidity Availability</h3>
            <p className="text-gray-700">Borrowing requires sufficient LP coverage within the selected range.</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Collateral Alignment</h3>
            <p className="text-gray-700">
              Matching borrowing ranges with active LP positions minimizes slippage and enhances efficiency.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Risk Mitigation</h3>
            <p className="text-gray-700">
              Positions moving beyond LP-supported ranges risk under collateralization and liquidation.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Step-by-Step Workflow</h2>

        <div className="space-y-6 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Deposit Collateral</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Supply assets to earn passive yield and unlock borrowing capacity.</li>
                <li>
                  Set a price range (lower/upper ticks) or use the Zap feature for seamless single-asset conversion.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Borrow Assets</h3>
              <p className="mt-2 text-gray-600">
                Access liquidity within designated ranges, borrowing either a single asset or a token pair.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Monitor & Manage</h3>
              <p className="mt-2 text-gray-600">
                Track your LTV ratio and liquidation thresholds in real time to maintain a secure position.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Liquidation & Risk Management</h2>
        <p className="mb-6 text-gray-700">
          Dex Mini prioritizes the safety of both borrowers and liquidity providers with a sophisticated, two-tiered
          liquidation system and proactive risk mitigation tools.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Margin Requirements: Safeguarding Your Position</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Minimum Maintenance Margin (MMR)</p>
                <p className="text-gray-600">
                  This essential collateral buffer acts as a first line of defense, preventing immediate liquidation
                  during minor market fluctuations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Full Liquidation Threshold</p>
                <p className="text-gray-600">
                  A critical safety boundary. Breaching this threshold triggers a full liquidation to protect liquidity
                  providers from potential losses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Liquidation Process: A Two-Tiered Approach</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-3">Partial Liquidation (MMR Breach)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Triggered when your collateral value falls below the MMR.</li>
              <li>A portion of your position is automatically liquidated to restore the required safety margin.</li>
              <li>Position modifications are temporarily restricted to prevent further risk.</li>
            </ul>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-800 mb-3">Full Liquidation (Critical Threshold Breach)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Activated when your collateral value breaches the full liquidation threshold.</li>
              <li>Remaining assets are distributed to liquidity providers.</li>
              <li>Protocol reserves cover any potential shortfalls, ensuring liquidity provider safety.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Proactive Risk Mitigation: Staying Ahead of Market Volatility</h3>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <RefreshCw className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Auto-Deleverage System</h4>
                <p className="mt-1 text-gray-600">
                  Automatically unwinds high-risk positions, preventing cascading liquidations and maintaining overall
                  protocol stability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <PieChart className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Liquidation Price Alerts (Uniswap Oracle Powered)</h4>
                <ul className="mt-1 space-y-2 text-gray-600">
                  <li>
                    Utilizes Uniswap's robust oracle to filter out temporary price fluctuations, ensuring accurate
                    alerts.
                  </li>
                  <li>
                    Provides real-time notifications based on your collateral value, accrued fees, and leverage (e.g.,
                    &gt;10x).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Empowering Users with Automated Position Protection:</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-blue-800 mb-2">Trigger Health Factor:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Sets the point at which automated position protection activates.</li>
                <li>Allows users to define a health factor threshold below their current level.</li>
                <li>
                  When the position's health factor drops below this trigger, the system automatically executes a
                  transaction to bolster the position.
                </li>
                <li>Automation uses available collateral to pay back debt.</li>
                <li>Gas fees and a small service fee are deducted from the collateral.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-800 mb-2">Target Health Factor:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Determines the desired health factor level the automation will achieve.</li>
                <li>The system repays debt until the position reaches this target health factor.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-blue-800 mb-2">Continuous Monitoring and Control:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Automated protection remains active until manually deactivated.</li>
                <li>
                  Multiple automation events may occur during market downturns, each restoring the position to the
                  target health factor.
                </li>
                <li>Users can cancel automation at any time.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-3 text-green-800">Strategies to Avoid Liquidation:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Maintain your Loan-to-Value (LTV) ratio below established risk thresholds.</li>
            <li>Proactively add collateral or repay debt during periods of market volatility.</li>
            <li>Utilize real-time monitoring tools to continuously track your position's health.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Security & Transparency</h2>
          <p className="mb-4 text-gray-700">Dex Mini prioritizes security and trust, employing:</p>
          <ul className="space-y-2 mb-4 text-gray-700">
            <li className="flex items-start">
              <Lock className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <span>Rigorous smart contract audits</span>
            </li>
            <li className="flex items-start">
              <Shield className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <span>Bug bounty programs</span>
            </li>
            <li className="flex items-start">
              <Layers className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <span>Multi-layered risk mitigation (reserve factors, dynamic hooks, real-time monitoring)</span>
            </li>
          </ul>
          <p className="text-gray-700">
            However, DeFi carries inherent risks—users should always conduct due diligence before participating.
          </p>
        </div>

        <div className="bg-blue-900 text-white p-6 rounded-lg mb-8">
          <p className="mb-4">
            Dex Mini redefines DeFi lending by integrating concentrated liquidity strategies with institutional-grade
            risk management. With Auto-Deleverage mechanisms, cross-pool flexibility, and LP-focused protections, Dex
            Mini creates a sustainable ecosystem where capital efficiency meets user empowerment.
          </p>
          <p className="font-medium">
            Stay agile, monitor wisely, and leverage responsibly to maximize your DeFi potential.
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
            <p className="text-amber-800 font-medium">
              Note: Smart contracts inherently carry risk. Never invest more than you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

