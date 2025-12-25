import { ArrowRightLeft, Shield, Zap, BarChart3, RefreshCw } from "lucide-react"

export default function RouterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Router Contract – Dex Mini
      </h1>

      <div className="prose prose-lg max-w-none mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Router Contract is the intelligent routing engine behind Dex Mini protocol and Mini AI Agent, designed to
          revolutionize DeFi liquidity movement. It empowers users to seamlessly migrate liquidity across protocols with
          a single click, dramatically simplifying the process, saving time, reducing gas costs, and minimizing errors.
        </p>
      </div>

      {/* Central Hub Visualization */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-10 shadow-sm">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
            <ArrowRightLeft size={40} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">The Central Hub for DeFi Liquidity</h3>
          <p className="text-center text-gray-700">
            Imagine a central hub for managing your liquidity across the entire DeFi landscape. The Dex Mini Router acts
            as that hub, abstracting away the complexities of individual protocols. Whether you're moving assets between
            lending platforms or shifting liquidity between DEXs, you interact with a single, intuitive interface. As
            Mini AI Agent integrates with more protocols, developers can easily build upon this foundation, and users
            can access a unified experience without complex transactions or new smart contracts.
          </p>
        </div>
      </div>

      {/* Key Benefits */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Benefits:</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <RefreshCw className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Effortless Refinancing</h3>
              <p className="text-gray-600">
                Move assets between protocols to optimize returns, simplifying complex financial strategies for
                everyone, even non-technical users. Dex Mini links your holdings across platforms, providing a single
                view of your assets and highlighting opportunities for maximizing yield and managing collateral.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <ArrowRightLeft className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Seamless Transfers</h3>
              <p className="text-gray-600">Execute cross-protocol transfers in a single, atomic transaction.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Automated Position Management</h3>
              <p className="text-gray-600">
                Automatically harvest rewards, calculate fees, and reconfigure positions with equivalent parameters.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Capital Efficiency</h3>
              <p className="text-gray-600">Transparently handles ETH/WETH conversions to maximize efficiency.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2">
          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Robust Security</h3>
              <p className="text-gray-600">
                Features military-grade reentrancy protection and community-reviewed critical parameter changes.
                Rigorous validation at each step ensures error-free transfers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Works:</h2>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-10">
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Register Adapters</h3>
              <p className="text-gray-700">
                The system administrator registers protocol-specific adapters (e.g., Curve, Uniswap V4).
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Initiate Rollover</h3>
              <p className="text-gray-700">
                Users specify the source pool, destination pool, liquidity amount, and protocol-specific parameters
                (e.g., slippage, tick range) through the Mini AI Agent interface.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Underlying Process</h3>
              <p className="text-gray-700">
                The contract withdraws liquidity from the source pool via the adapter, applies fees, validates balances,
                and deposits liquidity into the destination pool via its adapter.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Outcome</h3>
              <p className="text-gray-700">
                Users receive new liquidity positions in the destination pool, and fees are directed to the designated
                recipient.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <p className="text-lg font-medium text-blue-800">
          The Dex Mini Router Contract represents a significant leap forward in DeFi liquidity management. It
          streamlines capital flow across the ecosystem, making sophisticated strategies accessible to everyone while
          maintaining robust security and efficiency.
        </p>
      </div>
    </div>
  )
}

