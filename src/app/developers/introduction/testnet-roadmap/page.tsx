"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "supported-networks", title: "Supported Networks" },
  { id: "testnet-prerequisites", title: "Testnet Prerequisites" },
  { id: "getting-started", title: "Getting Started" },
  { id: "rewards-program", title: "Rewards Program" },
  { id: "earning-points", title: "Earning Points" },
]

export default function TestnetRoadmapPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Testnet & Roadmap</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get started with AMM Market on testnet and learn about our rewards program.
        </p>

        <section id="supported-networks" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Networks</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To start using AMM Market, simply connect your wallet to one of our supported networks. 
            Since all these networks are Ethereum Virtual Machine (EVM) compatible, AMM Market supports 
            a wide range of wallets.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="border-l-4 border-green-500 pl-3 font-medium text-gray-900">Ethereum</span>
            <span className="border-l-4 border-green-500 pl-3 font-medium text-gray-900">Unichain</span>
            <span className="border-l-4 border-green-500 pl-3 font-medium text-gray-900">Arbitrum</span>
            <span className="border-l-4 border-green-500 pl-3 font-medium text-gray-900">Base</span>
          </div>
        </section>

        <section id="testnet-prerequisites" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testnet Prerequisites</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our testnet lets you explore AMM Market's features in a risk-free environment. 
            Before getting started, make sure you have:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-blue-500 mt-0.5">•</span>
              <div>
                <span className="font-medium text-gray-900">Wallet</span>
                <p className="text-gray-600 text-sm">A web3 wallet (e.g., MetaMask) connected to the Unichain testnet.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-blue-500 mt-0.5">•</span>
              <div>
                <span className="font-medium text-gray-900">Test ETH/USDC</span>
                <p className="text-gray-600 text-sm">You'll need test tokens for the Unichain testnet to add liquidity and potentially borrow.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-blue-500 mt-0.5">•</span>
              <div>
                <span className="font-medium text-gray-900">Uniswap V4 Test Environment</span>
                <p className="text-gray-600 text-sm">Familiarity with interacting with Uniswap V4 pools (though the hook integration should make AMM Market-specific actions seamless).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-blue-500 mt-0.5">•</span>
              <div>
                <span className="font-medium text-gray-900">AMM Market UI/Interface</span>
                <p className="text-gray-600 text-sm">Access to the AMM Market testnet frontend.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-blue-500 mt-0.5">•</span>
              <div>
                <span className="font-medium text-gray-900">Understanding</span>
                <p className="text-gray-600 text-sm">Basic knowledge of DeFi concepts like liquidity provision, borrowing, and collateral.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="getting-started" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started on Testnet</h2>
          
          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Claim Mock ETH</strong> — Get ETH Sepolia from an external faucet.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Claim Mock USDC</strong> — Visit our Circle USDC faucet to receive 100 mock USDC.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Add Liquidity</strong> — Go to the Trade page on AMM Market Testnet and click "Add Liquidity": connect to AMM Market and deposit both your testnet ETH and your mock USDC.
            </li>
            <li className="text-gray-600 text-sm">
              <strong className="text-gray-900">Try Borrow</strong> — You're now ready to execute your first trade on AMM Market!
            </li>
          </ol>
        </section>

        <section id="rewards-program" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rewards Program</h2>
          
          <p className="text-gray-600 text-sm mb-4">
            <strong>Eligibility & Compliance:</strong> Any user who can access and deposit liquidity is eligible for Mini rewards. Our system 
            adheres to strict compliance standards—including geo-blocking and AML requirements—enforced 
            directly within our web application and smart contracts.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our robust points engine enables us to reward actions at a granular level, applying distinct 
            rates and boosts for activities such as:
          </p>

          <ul className="space-y-2 text-gray-600 mb-4">
            <li className="flex items-center gap-2">
              <span className="text-purple-500">•</span>
              <span>Collateral Asset management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">•</span>
              <span>Debt Asset management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">•</span>
              <span>Liquidity Vault contributions</span>
            </li>
          </ul>
        </section>

        <section id="earning-points" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Earning Points</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Earning Mini points is simple and versatile. Here are some of the key methods:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Add Liquidity</h3>
              <p className="text-gray-600 text-sm">Use the AMM Market Pool to add liquidity and start earning points immediately.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Passive Points</h3>
              <p className="text-gray-600 text-sm">Earn points by simply holding whitelisted assets in your wallet.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Rollover Points</h3>
              <p className="text-gray-600 text-sm">Gain additional points by rolling over your yield assets.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Referral Points</h3>
              <p className="text-gray-600 text-sm">Invite friends to the platform and earn points for every successful referral.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Check-In Points</h3>
              <p className="text-gray-600 text-sm">Earn points by regularly checking into the platform.</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600 text-sm mb-2">
              As we expand our partnerships and integrations, expect new programs to earn points for:
            </p>
            <ul className="text-gray-600 text-sm space-y-1 ml-4">
              <li>• LP'ing into integrated DeFi protocols</li>
              <li>• Completing quests on Layer 2</li>
              <li>• And more...</li>
            </ul>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            <strong>Note:</strong> Loyalty points will only be accrued if your wallet holds eETH, weETH, or follows one of 
            the designated ecosystem paths outlined on our official ecosystems page.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Get started with AMM Market on testnet and learn about our rewards program."
        sectionColor="blue"
      />
    </div>
  )
}
