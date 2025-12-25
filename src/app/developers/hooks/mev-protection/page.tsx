import Link from "next/link"
import { ChevronRight, Shield, Clock, Activity, AlertTriangle, Code, CheckCircle } from "lucide-react"

export default function MevProtectionPage() {
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
        <span className="text-gray-900">MEV Protection</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Advanced Protection Against MEV Exploitation</h1>
        <p className="text-gray-600 mb-6">
          Dex Mini MEV Hook is a state-of-the-art solution designed to protect users from Miner Extractable Value (MEV)
          exploitation, front-running, and sandwich attacks in decentralized finance (DeFi). Built as a Uniswap v4 hook,
          it adapts to market conditions to provide a safer, more stable trading experience. By combining real-time fee
          adjustments, adaptive cooldowns, and volatility monitoring, the MEV Hook enables traders, liquidity providers
          (LPs), and developers to reduce risks and optimize returns in a highly competitive environment.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Core Features</h2>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <div className="flex items-start mb-4">
            <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Adaptive Fee Mechanism</h3>
              <p className="text-gray-700 mt-2">
                <strong>Dynamic Fee Calculation:</strong> Fees adjust in real-time based on market volatility and
                transaction size using exponential moving averages (EMAs). Larger trades or volatile markets trigger
                higher fees to discourage exploitative strategies.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Volatility-Based Fees:</strong> Fees increase during periods of market turbulence to deter
                    front-running.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Size-Based Fees:</strong> Large transactions incur higher fees to mitigate their price
                    impact.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 mb-6">
          <div className="flex items-start mb-4">
            <Clock className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-purple-800">Adaptive Cooldown Enforcement</h3>
              <p className="text-gray-700 mt-2">
                <strong>Frequency Limitation:</strong> A dynamic cooldown period is implemented between swaps, extending
                during periods of high volatility to prevent rapid, predatory trades.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <strong>Reduces Sandwich Attacks:</strong> Prevents attackers from exploiting price movements.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <strong>Stabilizes the Market:</strong> Disrupts high-frequency predatory trading that leads to
                    instability.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <div className="flex items-start mb-4">
            <Activity className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-green-800">Real-Time Market Monitoring</h3>
              <p className="text-gray-700 mt-2">
                <strong>EMA-Powered Tracking:</strong> Constant monitoring of market volatility and transaction size
                trends ensures fee adjustments are accurate and timely.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Volatility EMA:</strong> Smooths price fluctuations to highlight market instability.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Swap Size EMA:</strong> Tracks transaction volumes to inform proactive fee changes.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Mitigating MEV Exploitation</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Cost Prohibition:</strong> Increased fees during volatile times make MEV strategies
                  economically unprofitable.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Market Stabilization:</strong> Cooldown periods reduce drastic price swings from rapid trades.
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Protecting Users</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Front-Running Resistance:</strong> The combination of fees and cooldowns disrupts malicious
                  front-running attempts.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Rebate Opportunities:</strong> Users can earn rewards from back-running activities resulting
                  from their trades.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding MEV Risks</h2>

        <div className="bg-red-50 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">What is MEV?</h3>
              <p className="text-gray-700 mt-2">
                Miner Extractable Value (MEV) is the profit miners/validators make by reordering, censoring, or
                inserting transactions. Over $1.43 billion has been extracted from Ethereum users through MEV
                strategies, negatively impacting trades, liquidity provision, and NFT mints.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
              Front-Running
            </h3>
            <p className="text-gray-600">
              Occurs when an attacker detects a pending transaction, executes it first by paying higher gas fees, and
              profits from the expected price movement.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
              Sandwich Attacks
            </h3>
            <p className="text-gray-600">
              A malicious actor manipulates a victim's trade by placing a transaction before (to alter the price) and
              one after (to profit from the price distortion).
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Implementation & Usage</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              For Traders & LPs
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Deployment:</strong> Activate the MEV Hook via the Dex Mini dApp when creating liquidity
                  pools. Customize settings like fee multipliers and cooldown thresholds based on your risk preferences.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Monitoring:</strong> Track real-time metrics (fees, cooldowns, EMAs) on the Dex Mini dashboard
                  for continuous oversight.
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Code className="h-5 w-5 text-blue-500 mr-2" />
              For Developers
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Uniswap v4 Integration:</strong> Leverage open-source code and API documentation to embed the
                  MEV Hook into custom applications.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <strong>Customization:</strong> Tailor EMA time constants, cooldown logic, or fee structures to meet
                  specific market needs.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-4">
            The Dex Mini MEV Hook redefines MEV protection with its combination of adaptive fees, cooldown periods, and
            algorithmic market tracking. It provides:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Enhanced Security:</strong> Reduced vulnerability to front-running and sandwich attacks.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Market Stability:</strong> Smoother price action for both LPs and traders.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <div>
                <strong>Customizable Solutions:</strong> Flexibility for developers and DAOs to adapt protections.
              </div>
            </li>
          </ul>
          <p className="text-gray-700">
            By integrating the Dex Mini MEV Hook, users gain a competitive edge, securing their transactions and
            optimizing returns in the rapidly evolving DeFi landscape.
          </p>
        </div>
      </div>
    </main>
  )
}

