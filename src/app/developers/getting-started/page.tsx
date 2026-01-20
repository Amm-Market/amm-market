"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "deposit-flow", title: "Deposit Flow" },
  { id: "technical-details", title: "Technical Details" },
  { id: "supported-lp-tokens", title: "Supported LP Tokens" },
  { id: "after-deposit", title: "After Deposit" },
]

export default function DepositLPPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Deposit LP</h1>
        <p className="text-lg text-gray-600 mb-8">
          The process of supplying collateral is the core user journey. Learn how to deposit your LP positions into AMM Market.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The process of supplying collateral and borrowing funds is the core user journey. It begins 
            with the deposit function. Let's use our Uniswap V3 Spoke as an example.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A user deposits their Uniswap V3 position by transferring the NFT to AMM Market. The NFT is 
            cached and valued by an oracle that returns the full position value plus accumulated fees. 
            When the owner requests a borrow, AMM Market converts the requested asset amount into debt 
            shares using the current exchange rate, updates per-token and per-token-pair accounting, 
            checks that the resulting loan is safe given the configured collateral factors, and then 
            draws the requested asset from the chosen Hub.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Your LP position remains active in the underlying pool. 
              AMM Market holds your LP tokens but does not remove liquidity from the DEX.
            </p>
          </div>
        </section>

        <section id="deposit-flow" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deposit Flow</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Call deposit(tokenId)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Inside the Spoke, a user calls <code className="bg-gray-200 px-1 rounded">deposit(tokenId)</code>, 
                which internally triggers a <code className="bg-gray-200 px-1 rounded">safeTransferFrom</code> call 
                to the Uniswap NonfungiblePositionManager.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                spoke.deposit(tokenId)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: NFT Transfer</h3>
              <p className="text-gray-600 text-sm">
                The NFT moves from the user's wallet into the Spoke's custody. This action fires the 
                <code className="bg-gray-200 px-1 rounded ml-1">onERC721Received</code> hook.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Initialization Logic</h3>
              <p className="text-gray-600 text-sm">
                The Spoke performs its initialization logic in the <code className="bg-gray-200 px-1 rounded">onERC721Received</code> hook:
              </p>
              <ul className="text-gray-600 text-sm mt-2 space-y-1 ml-4">
                <li>• Records the NFT's ownership</li>
                <li>• Caches the position's metadata (tokens, fee tier, tick range, liquidity)</li>
                <li>• Creates a new, empty loan entry for the tokenId</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="technical-details" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Details</h2>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 mb-4">
            <h3 className="font-semibold text-purple-900 mb-2">Oracle Valuation</h3>
            <p className="text-purple-800 text-sm">
              The NFT is valued by an oracle that returns the full position value plus accumulated fees. 
              This valuation is used to determine borrowing power.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Per-Position Accounting</h3>
            <p className="text-green-800 text-sm">
              Each LP position (tokenId) has its own loan entry. This means you can have multiple 
              distinct loans from different LP positions, each tracked independently.
            </p>
          </div>
        </section>

        <section id="supported-lp-tokens" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported LP Tokens</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market accepts LP tokens from the following DEXes:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">DEX</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Pool Types</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Uniswap v3</td>
                  <td className="px-4 py-2 text-gray-600">Concentrated liquidity NFTs</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded">Active</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Uniswap v4</td>
                  <td className="px-4 py-2 text-gray-600">Concentrated liquidity NFTs</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded">Active</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Balancer</td>
                  <td className="px-4 py-2 text-gray-600">Weighted & Composable pools</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            See <a href="/developers/integrations/allowed-pools" className="text-blue-600 hover:underline">Allowed LP Pools</a> for the complete list.
          </p>
        </section>

        <section id="after-deposit" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">After Deposit</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once your LP tokens are deposited:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Your <strong>borrowing power</strong> is calculated based on LP value and collateral factors</li>
            <li>• LP tokens continue <strong>earning trading fees</strong> from the underlying pool</li>
            <li>• You can <strong>monitor your position</strong> via the dashboard or on-chain</li>
            <li>• You're ready to <a href="/developers/getting-started/borrow-assets" className="text-blue-600 hover:underline">borrow assets</a></li>
          </ul>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="The process of supplying collateral is the core user journey. Learn how to deposit your LP positions."
        sectionColor="emerald"
      />
    </div>
  )
}
