import { Shield, Zap, BarChart3, Clock, ArrowUpDown, CheckCircle2, AlertTriangle } from "lucide-react"

export default function LongAndShortPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Redefining Leveraged Trading with Uniswap v4</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl">
          Dex Mini's Leverage Hook introduces a new era of decentralized leveraged trading, seamlessly integrating
          Uniswap v4's powerful infrastructure with advanced risk management and security features. This hook empowers
          traders with up to 10x leverage, automated safeguards, and a robust MEV-resistant architecture.
        </p>
      </div>

      {/* Key Innovations Section */}
      <h2 className="text-2xl font-bold mb-6">Key Innovations:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Enhanced Leverage</h3>
          </div>
          <p className="text-gray-600">
            Achieve up to 10x leverage, maximizing trading potential within a decentralized environment.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Automated Risk Management</h3>
          </div>
          <p className="text-gray-600">
            Intelligent systems proactively manage risk, protecting both traders and liquidity providers.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">MEV-Resistant Architecture</h3>
          </div>
          <p className="text-gray-600">
            Designed to minimize Miner Extractable Value (MEV), ensuring fair and transparent trading.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Just-In-Time (JIT) Liquidity</h3>
          </div>
          <p className="text-gray-600">
            Optimizes capital efficiency by dynamically providing liquidity when and where leverage is needed.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Robust Oracle Integration</h3>
          </div>
          <p className="text-gray-600">
            Leverages Chainlink Oracle data and Uniswap's native oracle for accurate and reliable price feeds.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <ArrowUpDown className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Seamless Margin Trading</h3>
          </div>
          <p className="text-gray-600">Provides a user-friendly platform for efficient and secure margin trading.</p>
        </div>
      </div>

      {/* Benefits Section */}
      <h2 className="text-2xl font-bold mb-6">Benefits for Users:</h2>
      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 mb-12">
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-blue-600">Traders</h3>
          <p className="text-gray-600">
            Access amplified trading power with robust risk controls and a secure trading environment.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-blue-600">Liquidity Providers (LPs)</h3>
          <p className="text-gray-600">
            Benefit from enhanced security and optimized capital utilization through JIT liquidity provisioning and
            robust oracle integration.
          </p>
        </div>
      </div>

      {/* Key Participants Section */}
      <h2 className="text-2xl font-bold mb-6">Key Participants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-lg text-blue-600 mb-4">Liquidity Providers (LPs)</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Deposit assets into pools to earn fees from both standard swaps and leveraged trading activity.</li>
            <li>• Pool value fluctuates with traders' profits and losses, but fees sustain long-term liquidity.</li>
            <li>• Benefit from dynamic revenue streams tied to trading demand and market volatility.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-lg text-blue-600 mb-4">Standard Swappers</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Execute regular token swaps via Uniswap or DEX aggregators.</li>
            <li>• Their trades generate fees for LPs without exposure to leverage-based risks.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-lg text-blue-600 mb-4">Leveraged Traders</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              • Open long or short positions via the Dex Mini interface, with collateral securely held in the hook
              contract.
            </li>
            <li>
              • Automated risk checks, TWAP-based liquidations, and slippage protections maintain system stability.
            </li>
          </ul>
        </div>
      </div>

      {/* How It Works Section */}
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="space-y-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
              <span className="font-bold text-blue-600">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Opening a Position</h3>
              <p className="text-gray-600">Traders select an asset pair (e.g., ETH/USDC) and deposit collateral.</p>
              <p className="text-gray-600">
                The hook contract holds collateral separately from the LP pool, isolating risk.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
              <span className="font-bold text-blue-600">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Liquidity Optimization</h3>
              <p className="text-gray-600">
                JIT Liquidity ensures capital is deployed efficiently, minimizing idle funds.
              </p>
              <p className="text-gray-600">
                Withdrawal Delay (1-day cooldown) prevents sudden liquidity drains, stabilizing pools.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
              <span className="font-bold text-blue-600">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Execution & Risk Management</h3>
              <p className="text-gray-600">
                The hook enforces slippage protection, margin requirements, and liquidation logic in real time.
              </p>
              <p className="text-gray-600">
                Profits/losses are settled against the LP pool, with fees continuously redistributed to LPs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LP Pool Impact Section */}
      <h2 className="text-2xl font-bold mb-6">How Leverage Impacts the LP Pool</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-lg text-blue-600 mb-4">Long Positions</h3>
          <p className="text-gray-600 mb-4">Traders borrow assets, indirectly exposing the pool to short-side risk.</p>
          <ul className="space-y-2 text-gray-600">
            <li>• If the trader profits, the pool loses value.</li>
            <li>• If the trader loses, the pool gains value.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-lg text-blue-600 mb-4">Short Positions</h3>
          <p className="text-gray-600 mb-4">The pool assumes the opposite exposure, mirroring price movement.</p>
          <ul className="space-y-2 text-gray-600">
            <li>• If the trader profits, the pool loses value.</li>
            <li>• If the trader loses, the pool gains value.</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-12">
        <h3 className="font-semibold text-lg mb-2">Self-Sustaining Mechanism:</h3>
        <p className="text-gray-700">
          While trader profits/losses impact LPs, continuous trading fees replenish the pool, creating a sustainable
          ecosystem.
        </p>
      </div>

      {/* Why Dex Mini Stands Out Section */}
      <h2 className="text-2xl font-bold mb-6">Why Dex Mini Stands Out</h2>
      <div className="space-y-4 mb-12">
        <div className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Deep Liquidity</h3>
            <p className="text-gray-600">JIT liquidity dynamically aligns capital with trading demand.</p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Advanced Risk Management</h3>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>• TWAP-Based Liquidations prevent price manipulation using a 14-day time-weighted average price.</li>
              <li>• Dynamic Leverage Adjustments adapt to market volatility.</li>
              <li>• Circuit Breakers pause trading if prices move beyond 50%, preventing mass liquidations.</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">MEV Resistance</h3>
            <p className="text-gray-600">Smart LP selection filters out predatory actors.</p>
          </div>
        </div>

        <div className="flex items-start">
          <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Flexible Collateral</h3>
            <p className="text-gray-600">Use ETH, stablecoins, or other assets to fund leveraged positions.</p>
          </div>
        </div>
      </div>

      {/* Collateral Strategies Section */}
      <h2 className="text-2xl font-bold mb-6">Collateral Strategies for Leveraged Trading</h2>
      <p className="text-gray-600 mb-6">
        Dex Mini's Leverage Hook allows for diverse collateral strategies, enabling traders to tailor their positions to
        specific market outlooks and risk tolerances. Here's a breakdown of common approaches:
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Long Positions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold mb-2">Long ETH with ETH Collateral:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Strategy:</span> Leverage ETH price appreciation with existing ETH
                holdings.
              </li>
              <li>
                <span className="font-medium">Benefit:</span> Amplifies potential gains when ETH rises.
              </li>
              <li>
                <span className="font-medium">Consideration:</span> Increased liquidation risk due to correlated
                collateral and asset price fluctuations.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold mb-2">Long ETH with USDC Collateral:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Strategy:</span> Open a long ETH position using stablecoin collateral.
              </li>
              <li>
                <span className="font-medium">Benefit:</span> Reduces liquidation risk by decoupling collateral value
                from ETH price swings.
              </li>
              <li>
                <span className="font-medium">Consideration:</span> Limits potential gains compared to ETH collateral,
                but provides greater stability.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Short Positions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold mb-2">Short ETH with ETH Collateral:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Strategy:</span> Profit from ETH price declines while utilizing ETH
                collateral.
              </li>
              <li>
                <span className="font-medium">Benefit:</span> Useful for delta-neutral strategies, hedging against
                existing ETH holdings, or speculating on price drops.
              </li>
              <li>
                <span className="font-medium">Consideration:</span> Requires careful management to maintain balance and
                avoid liquidation.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold mb-2">Short ETH with USDC Collateral:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Strategy:</span> Directly capitalize on ETH price drops with stable
                collateral.
              </li>
              <li>
                <span className="font-medium">Benefit:</span> Provides a straightforward way to profit from bearish
                market conditions.
              </li>
              <li>
                <span className="font-medium">Consideration:</span> Requires accurate prediction of ETH price movement.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
        <h3 className="flex items-center text-lg font-semibold mb-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
          Important Risk Considerations:
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            • <span className="font-medium">Volatility Impact:</span> Using volatile collateral (e.g., ETH) can
            dynamically shift your liquidation price as the collateral's value fluctuates.
          </li>
          <li>
            • <span className="font-medium">Careful Monitoring:</span> Regardless of the chosen collateral strategy,
            continuous monitoring of your position is essential to mitigate risk.
          </li>
        </ul>
      </div>

      {/* Key Pillars Section */}
      <h2 className="text-2xl font-bold mb-6">Key Pillars of Scalability and Security:</h2>
      <div className="space-y-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-500">
          <h3 className="font-semibold text-lg mb-2">Real-Time Transparency</h3>
          <p className="text-gray-600">
            Liquidity pool values dynamically reflect market activity, providing instant visibility and fostering trust.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-500">
          <h3 className="font-semibold text-lg mb-2">Sustainable Growth through Adaptive Fees</h3>
          <p className="text-gray-600">
            Fee structures are designed to align Liquidity Provider (LP) incentives with platform growth, ensuring
            long-term viability.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-500">
          <h3 className="font-semibold text-lg mb-2">Fortified Security Measures</h3>
          <ul className="space-y-2 text-gray-600 mt-2">
            <li>
              • <span className="font-medium">Circuit Breakers:</span> Prevent cascading liquidations during extreme
              market volatility.
            </li>
            <li>
              • <span className="font-medium">Volatility-Adjusted Leverage:</span> Mitigates risk by dynamically
              adjusting leverage based on market conditions.
            </li>
            <li>
              • <span className="font-medium">TWAP (Time-Weighted Average Price) Anchoring:</span> Enhances price
              stability and minimizes manipulation risks.
            </li>
          </ul>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <p className="text-gray-700 mb-4">Dex Mini cultivates a mutually beneficial ecosystem where:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
              T
            </span>
            <div>
              <span className="font-medium">Traders:</span> Access deep liquidity with minimal slippage, enabling
              precise execution of leveraged strategies.
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
              L
            </span>
            <div>
              <span className="font-medium">Liquidity Providers (LPs):</span> Earn amplified fees from diverse revenue
              streams, maximizing their returns.
            </div>
          </li>
        </ul>
        <p className="text-gray-700">
          By seamlessly integrating cutting-edge technology with robust security measures, Dex Mini establishes a new
          standard for decentralized leveraged trading, poised to drive the future of on-chain finance.
        </p>
      </div>

      {/* Warning Note */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-700 font-medium flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Smart contracts inherently carry risk. Never invest more than you can afford to lose.
        </p>
      </div>
    </div>
  )
}

