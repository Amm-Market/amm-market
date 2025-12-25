import { Database, Check, ArrowRightLeft, Coins, Wallet, Bell } from "lucide-react"
import { ProtocolCard } from "@/components/protocol-card"
import { protocols } from "@/data/protocols"

export default function ProtocolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Protocols & Functions Supported for the Router
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the extensive ecosystem of protocols and functions supported by Dex Mini's router contract through
          ILiquidityAdapter interfaces.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">The Foundation of Seamless Integration</h2>
            <p className="text-gray-700 mb-4">
              The foundation of Dex Mini's seamless router contract functionality lies in its ILiquidityAdapter
              contracts. These individual protocol adapters act as standardized interfaces, bridging the gap between the
              router, Mini AI, and various DeFi protocols.
            </p>
            <p className="text-gray-700 mb-4">
              This ingenious design abstracts away protocol-specific complexities, making it remarkably easy to
              integrate support for new protocols and unlock a wider range of DeFi opportunities.
            </p>
            <p className="text-gray-700">
              ILiquidityAdapters act as universal connectors, enabling Dex Mini to interface with diverse smart
              contracts. This standardized approach unlocks crucial actions like cross-protocol interoperability,
              empowering users to leverage unique features like multi-token pools and specific parameters.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Database className="h-16 w-16 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">For Developers</h3>
            <p className="text-gray-700 text-center">
              This simplifies the creation of intricate DeFi transactions across protocols using simple Javascript,
              significantly reducing development time.
            </p>
          </div>
        </div>
      </div>

      {/* Key Responsibilities Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Responsibilities of ILiquidityAdapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <h3 className="font-semibold">Approve Protocol Usage</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Authorize contract interactions for actions like deposits, withdrawals, buys, and sells.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Coins className="h-5 w-5 text-yellow-500 mr-2" />
              <h3 className="font-semibold">Claim Rewards</h3>
            </div>
            <p className="text-gray-600 text-sm">Retrieve farming rewards earned within the protocol.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Wallet className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="font-semibold">Withdraw Liquidity</h3>
            </div>
            <p className="text-gray-600 text-sm">Remove liquidity from a source pool.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Coins className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-semibold">Apply Fees</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Deduct fees for the rollover service, ensuring transparency and sustainability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Wallet className="h-5 w-5 text-green-500 mr-2" />
              <h3 className="font-semibold">Deposit Liquidity</h3>
            </div>
            <p className="text-gray-600 text-sm">Add liquidity tokens to the protocol's farming contract.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <ArrowRightLeft className="h-5 w-5 text-purple-500 mr-2" />
              <h3 className="font-semibold">Swap</h3>
            </div>
            <p className="text-gray-600 text-sm">Execute token swaps within the protocol's ecosystem.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="font-semibold">Event Emission</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Notify the frontend about critical stages of the process, providing real-time feedback to users.
            </p>
          </div>
        </div>
      </div>

      {/* Protocols Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Supported Protocol Adapters</h2>
      </div>

      {/* Protocol Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {protocols.map((protocol, index) => (
          <ProtocolCard
            key={index}
            name={protocol.name}
            shortName={protocol.shortName}
            category={protocol.category}
            purpose={protocol.purpose}
            useCases={protocol.useCases}
            features={protocol.features}
            bgColor={protocol.bgColor}
            textColor={protocol.textColor}
          />
        ))}
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Expanding the DeFi Ecosystem</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          The ILiquidityAdapter architecture continues to grow, with new protocols being added regularly. This modular
          approach ensures that Dex Mini can quickly adapt to the evolving DeFi landscape, providing users with seamless
          access to the latest innovations.
        </p>
      </div>
    </div>
  )
}

