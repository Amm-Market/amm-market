import { Check, ArrowRight, Repeat, Shield, Zap, CreditCard, TrendingUp } from "lucide-react"

export default function Overview() {
  return (
    <div className="flex-1 py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6">Overview of Dex Mini</h1>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
        <p className="text-gray-800 leading-relaxed">
          Dex Mini enhances Uniswap v4 with a specialized hooks architecture to boost capital efficiency and user
          experience. Our suite features real-time MEV Protection and Dynamic Fee adjustments, along with advanced
          portfolio management, lending markets, impermanent loss mitigation, and dedicated perps support.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">To start using Dex Mini, simply connect your wallet to:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="font-medium">Unichain</span>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="font-medium">Ethereum</span>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="font-medium">Arbitrum</span>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="font-medium">Base</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Since all these networks are Ethereum Virtual Machine (EVM) compatible, Dex Mini supports a wide range of
          wallets.
        </p>
        <p className="font-medium mb-2">Once connected, you can access:</p>
      </div>

      {/* Features Section */}
      <div className="space-y-12 mb-10">
        {/* Swap */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <ArrowRight className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Swap</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Seamlessly execute gasless swaps with zero fees, zero slippage, and no MEV risk.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">Limit Order Integration:</span>
              <span>Combine limit orders with MEV-resistant filters to ensure optimal pricing and protection.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Toxic MEV Filtering:</span>
              <span>Automatically block predatory bots, promoting fair and sustainable trading for all.</span>
            </li>
          </ul>
        </div>

        {/* Earn */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Repeat className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Earn</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Maximize your returns by providing liquidity to Uniswap pools with auto-compounding yields.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">Effortless Reinvestment:</span>
              <span>LP fees are automatically reinvested, eliminating the need for manual management.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Passive Growth:</span>
              <span>Watch your yields grow seamlessly, powered by advanced algorithmic compounding.</span>
            </li>
          </ul>
        </div>

        {/* Automate */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Automate</h3>
          </div>
          <p className="text-gray-700 mb-4">Set it and forget it with intelligent liquidity management.</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">Dynamic Fee Adjustment:</span>
              <span>Swap fees automatically adjust in real-time based on market volatility for better pricing.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Concentrated Liquidity Strategies:</span>
              <span>Tailored solutions to optimize yield for retail traders, protocols, and funds.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Auto-Rebalancing:</span>
              <span>Positions are autonomously rebalanced and compounded with no user intervention required.</span>
            </li>
          </ul>
        </div>

        {/* Mitigate */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold">Mitigate</h3>
          </div>
          <p className="text-gray-700 mb-4">Secure and amplify your yield while protecting against exploits.</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">MEV-Proof Architecture:</span>
              <span>Adaptive cooldown periods and dynamic fees prevent front-running and ensure fair execution.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Sandwich Attack Protection:</span>
              <span>
                Safeguard liquidity pools from rapid-swap exploits, maintaining a stable and secure environment.
              </span>
            </li>
          </ul>
        </div>

        {/* Borrow & Lend */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold">Borrow & Lend</h3>
          </div>
          <p className="text-gray-700 mb-4">Unlock new opportunities by leveraging dual-yield collateral.</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">Collateralized Liquidity:</span>
              <span>Borrow assets by using concentrated LP positions as collateral.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Dual Earnings:</span>
              <span>Earn both Uniswap trading fees and lending yields simultaneously, maximizing your returns.</span>
            </li>
          </ul>
        </div>

        {/* Long & Short */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold">Long & Short</h3>
          </div>
          <p className="text-gray-700 mb-4">Trade with precision and leverage at your fingertips.</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">10x Leverage:</span>
              <span>Long or short assets instantly with MEV-resistant execution for precise trades.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">JIT Liquidity:</span>
              <span>Access Just-In-Time liquidity for optimal pricing and execution.</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Automated Risk Controls:</span>
              <span>
                Smart contracts enforce stop-losses and position limits, protecting your portfolio from excessive risk.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Liquidity Pools Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Liquidity Pools</h2>
        <div className="bg-gray-50 p-6 rounded-xl mb-6">
          <p className="text-gray-700 mb-4">
            Uniswap hooks are just fancy Uniswap pools. When you create a liquidity pool on Uniswap, if you don't add
            any hook, your pool is the same basic or vanilla as any hook on Uniswap v3. Hook adds additional functions
            to the pool. But at the end, they are still Uniswap pools so your liquidity, unless otherside removed, will
            always stay on Uniswap. Each liquidity pool market in Dex Mini operates independently, offering targeted
            opportunities for liquidity providers.
          </p>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="text-green-800 font-medium mb-2">
              🟢 When you provide liquidity on Uniswap with Dex Mini hook attached, you:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Earn proportional revenue from all trading activity on Uniswap in your chosen markets.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Receive automatic fee distributions based on the hook performance.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Maintain full control over your capital allocation.</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="text-gray-800 font-medium mb-2">📊 Strategic Benefits</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-medium">Emerging Market Incentives</span> – Higher yield opportunities in less
                  liquid markets reward LPs for assuming additional volatility risk.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-medium">Efficiency Through Competition</span> – As LP participation increases,
                  fee structures optimize naturally.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-medium">Diversification</span> – Position yourself across multiple liquidity
                  tiers to balance stable returns with high-growth potential.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testnet Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Testnet</h2>
        <p className="text-gray-700 mb-4">
          Our testnet lets you explore Dex Mini's features in a risk-free environment.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Getting Started on Testnet</h3>

          <div className="space-y-6">
            <div className="flex">
              <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-blue-700">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Claim Mock ETH</h4>
                <p className="text-gray-700">Get ETH Sepolia from an external faucet.</p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-blue-700">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Claim Mock USDC</h4>
                <p className="text-gray-700">Visit our Circle USDC faucet to receive 100 mock USDC.</p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-blue-700">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Add Liquidity</h4>
                <p className="text-gray-700 mb-2">Go to the Trade page on Dex Mini Testnet.</p>
                <p className="text-gray-700">Click "Add Liquidity" and follow the prompts:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span>Connect to Dex Mini</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span>Deposit both your tesnet ETH and your mock USDC</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex">
              <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-blue-700">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Try borrow or leverage</h4>
                <p className="text-gray-700">You're now ready to execute your first trade on Dex Mini!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

