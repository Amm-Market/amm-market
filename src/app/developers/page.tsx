import Link from "next/link"

export default function DevelopersPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Developer Documentation</h1>
      <div className="w-full max-w-3xl mx-auto py-8 px-4">
        {/* Notification banner */}
        <div className="w-full bg-gray-100 rounded-lg mb-6 p-3 flex justify-between items-center">
          <p className="text-sm text-gray-700">AAVE staking is live, stake yours today!</p>
          <Link
            href="/stake"
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700 transition-colors"
          >
            Stake Now
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Dex Mini</h1>

        <p className="text-gray-700 mb-6">
          Whether you're a retail investor, developer, or simply exploring, this guide is designed to get you up to
          speed quickly. Dex Mini is a consumer DeFi platform that combines multiple DeFi tools into one seamless
          platform, integrating advanced liquidity management, versatile lending markets, and leverage opportunities.
        </p>

        <p className="text-gray-700 mb-8">
          Our mission is to empower users with the tools to master crypto and unlock DeFi's full potential. By
          revolutionizing Uniswap beyond a simple DEX, we are building the premier capital markets infrastructure for
          crypto. Prioritizing long-term liquidity sustainability over short-term yield farming paves the way for mass
          DeFi adoption.
        </p>

        <h2 className="text-2xl font-bold mb-4">High-level Core Innovations</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Unified DeFi Layer</h3>
            <p className="text-gray-700">
              Integrate diverse yield strategies into a single, cohesive interface that eliminates protocol-hopping and
              maximizes capital efficiency.
            </p>
          </li>
          <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Composable Architecture</h3>
            <p className="text-gray-700">
              Build confidently on our security-audited, permissionless foundation that extends functionality while
              preserving core protocol safety.
            </p>
          </li>
          <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Capital-Efficient Lending</h3>
            <p className="text-gray-700">
              Access flexible lending markets with collateral range selection for concentrated liquidity positions,
              supported by automated risk management.
            </p>
          </li>
          <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Liquidity Strategy</h3>
            <p className="text-gray-700">
              Deploy advanced liquidity management techniques that were once exclusive to professional market makers.
              Amplify your returns with competitive rates and minimal collateral requirements.
            </p>
          </li>
          <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-700">
              Monitor performance with institutional-grade metrics, including impermanent loss projections, fee accrual
              rates, and detailed position health indicators.
            </p>
          </li>
          <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-2">AI-Powered Optimization</h3>
            <p className="text-gray-700">
              Leverage machine learning algorithms to optimize your positions in real-time, adapting to market
              conditions and maximizing returns while minimizing risks through predictive analytics.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Current Development</h2>

        <p className="text-gray-700 mb-6">
          As we approach our mainnet launch, you can experience Dex Mini today on the Unichain and Base Sepolia
          testnets. Our documentation is designed for full protocol exploration in under 15 minutes, ensuring you
          quickly grasp the powerful capabilities of our platform.
        </p>

        <p className="text-gray-700 italic">
          Thank you for joining us on this journey as we redefine the future of Uniswap with Dex Mini.
        </p>
      </div>
    </div>
  )
}

