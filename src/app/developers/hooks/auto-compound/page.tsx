import Link from "next/link"
import { ChevronRight, Clock, BarChart2, Zap, Shield, RefreshCw, Database, Check } from "lucide-react"

export default function AutoCompoundPage() {
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
        <span className="text-gray-900">Auto Compound</span>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold mb-4">Autonomous Liquidity Management for DeFi</h1>
        <p className="text-gray-700">
          Auto Compound Hook transforms liquidity provision on Uniswap v4 by automating key tasks, allowing liquidity
          providers (LPs) to maximize returns with minimal effort. Seamlessly integrated into Dex Mini, this innovative
          hook removes the need for manual intervention, optimizing capital efficiency, compounding rewards, and
          protecting assets with state-of-the-art risk mitigation.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Why Auto Compound Hook?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <Clock className="h-8 w-8 text-blue-500 mb-3" />
          <h3 className="font-semibold mb-2">Effortless Yield Maximization</h3>
          <p className="text-gray-600 text-sm">
            Automatically reinvest trading fees every hour, accelerating returns and letting your capital work harder.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <BarChart2 className="h-8 w-8 text-purple-500 mb-3" />
          <h3 className="font-semibold mb-2">Self-Optimizing Liquidity</h3>
          <p className="text-gray-600 text-sm">
            Dynamically rebalances positions to stay in profitable price ranges, even during volatile market conditions.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <Shield className="h-8 w-8 text-green-500 mb-3" />
          <h3 className="font-semibold mb-2">Enterprise-Grade Security</h3>
          <p className="text-gray-600 text-sm">
            Designed with anti-manipulation safeguards, audit trails, and battle-tested protocols to ensure robust
            protection.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Core Features</h2>

      <div className="space-y-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Automated Fee Compounding Engine</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Hourly Reinvestment:</span> Converts accrued trading fees into
                  additional liquidity every hour (up to 24 times per day), boosting returns exponentially.
                </li>
                <li>
                  <span className="font-medium">Transparent Tracking:</span> All compounding events are recorded
                  on-chain for full transparency and accountability.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="bg-purple-100 rounded-full p-2 mr-4">
              <RefreshCw className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Dynamic Position Rebalancing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">TWAP-Driven Adjustments:</span> Monitors the Time-Weighted Average Price
                  (TWAP) over a 3-minute window, triggering rebalances when price deviates by more than 10 ticks,
                  avoiding unnecessary gas costs.
                </li>
                <li>
                  <span className="font-medium">Manipulation Resistance:</span> Protects against volatile price swings
                  and predatory trading strategies, ensuring stable returns.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full p-2 mr-4">
              <Database className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Gas-Optimized Batch Processing</h3>
              <p className="text-gray-700">
                <span className="font-medium">Multi-Position Efficiency:</span> Aggregates fee reinvestments across
                multiple users, reducing gas costs by up to 40% compared to manual management.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="bg-red-100 rounded-full p-2 mr-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Military-Grade Security Architecture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Reentrancy Protection:</span> Designed to withstand common smart
                  contract exploits.
                </li>
                <li>
                  <span className="font-medium">Permissioned Access:</span> Only trusted protocols, such as Dex Mini,
                  can trigger critical functions.
                </li>
                <li>
                  <span className="font-medium">Eigenlayer-Powered Risk Models:</span> Dex Mini leverages Eigenlayer's
                  restaking mechanisms for secure liquidations and systemic stability, protecting LPs from cascading
                  risks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <ol className="space-y-4">
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-medium">Fee Harvesting</p>
              <p className="text-gray-600">The hook continuously collects trading fees from Uniswap V4 pools.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-medium">Conversion & Reinvestment</p>
              <p className="text-gray-600">
                Fees are swapped into the pool's underlying tokens (e.g., ETH/USDC) and reinvested as new liquidity in
                the LP's position.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-medium">TWAP Surveillance</p>
              <p className="text-gray-600">
                Real-time price tracking compares the current ticks against historical TWAP data.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              4
            </div>
            <div>
              <p className="font-medium">Rebalance Execution</p>
              <p className="text-gray-600">
                If the price drifts beyond a 10-tick threshold, liquidity is adjusted to recenter around the new TWAP,
                ensuring optimal positioning.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold mb-6">Security & Risk Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-10">
        <div className="flex justify-center mb-4">
          <Shield className="h-12 w-12 text-red-500" />
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
              <Shield className="h-4 w-4 text-red-600" />
            </div>
            <p className="text-gray-700">
              <span className="font-medium">Manipulation-Proof Design:</span> Rebalancing thresholds and TWAP windows
              prevent flash-price attacks, ensuring stability.
            </p>
          </li>
          <li className="flex items-start">
            <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
              <Shield className="h-4 w-4 text-red-600" />
            </div>
            <p className="text-gray-700">
              <span className="font-medium">Liquidation Safeguards:</span> Dex Mini's dynamic margin engine guarantees
              orderly liquidations during extreme market volatility, minimizing losses for LPs.
            </p>
          </li>
          <li className="flex items-start">
            <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
              <Shield className="h-4 w-4 text-red-600" />
            </div>
            <p className="text-gray-700">
              <span className="font-medium">Full Audit Readiness:</span> Open-source codebase with detailed event logs,
              enabling third-party audits and transparency.
            </p>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6">Benefits at a Glance</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <p className="text-gray-700">
              <span className="font-medium">Higher APYs:</span> Automated compounding frequency outperforms manual
              strategies, delivering superior yields.
            </p>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <p className="text-gray-700">
              <span className="font-medium">24/7 Optimization:</span> No more missed fee cycles or outdated price
              ranges—always working in the background.
            </p>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <p className="text-gray-700">
              <span className="font-medium">Peace of Mind:</span> Secure, automated, and trustless design that takes the
              guesswork out of liquidity management.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700">
          The Auto Compound Hook turns passive liquidity provision into an active growth engine. By automating
          compounding, rebalancing, and risk management, Dex Mini empowers LPs to scale their portfolios
          effortlessly—while Uniswap V4's hooks handle the complex tasks.
        </p>
      </div>
    </main>
  )
}

