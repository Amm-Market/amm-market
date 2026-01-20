"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "prerequisites", title: "Prerequisites" },
  { id: "supported-lp-tokens", title: "Supported LP Tokens" },
  { id: "deposit-process", title: "Deposit Process" },
  { id: "after-deposit", title: "After Deposit" },
]

export default function DepositLPPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Deposit LP</h1>
        <p className="text-lg text-gray-600 mb-8">
          How to supply supported LP tokens to the AMM Market as collateral.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depositing LP tokens is the first step to accessing borrowing power on AMM Market. 
            Once deposited, your LP tokens serve as collateral while continuing to earn trading 
            fees from the underlying DEX.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Your LP position remains active in the underlying pool. 
              AMM Market holds your LP tokens but does not remove liquidity from the DEX.
            </p>
          </div>
        </section>

        <section id="prerequisites" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before depositing, ensure you have:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <div>
                <span className="font-medium text-gray-900">LP tokens in your wallet</span>
                <p className="text-gray-600 text-sm mt-0.5">From a supported DEX and pool type.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
              <div>
                <span className="font-medium text-gray-900">ETH for gas fees</span>
                <p className="text-gray-600 text-sm mt-0.5">Sufficient native token to cover transaction costs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
              <div>
                <span className="font-medium text-gray-900">Connected wallet</span>
                <p className="text-gray-600 text-sm mt-0.5">MetaMask, WalletConnect, or other supported wallet.</p>
              </div>
            </li>
          </ul>
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
                  <td className="px-4 py-2 text-gray-900 font-medium">Aerodrome</td>
                  <td className="px-4 py-2 text-gray-600">Volatile & Stable pools</td>
                  <td className="px-4 py-2"><span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded">Active</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Curve</td>
                  <td className="px-4 py-2 text-gray-600">StableSwap & Tricrypto</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Coming Soon</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Balancer</td>
                  <td className="px-4 py-2 text-gray-600">Weighted & Composable pools</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Coming Soon</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            See <a href="/developers/integrations/allowed-pools" className="text-blue-600 hover:underline">Allowed LP Pools</a> for the complete list.
          </p>
        </section>

        <section id="deposit-process" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deposit Process</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 1: Approve LP Token</h3>
              <p className="text-gray-600 text-sm mb-2">
                Grant AMM Market permission to transfer your LP tokens. This is a one-time approval per token type.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                lpToken.approve(ammMarketAddress, amount)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 2: Deposit Collateral</h3>
              <p className="text-gray-600 text-sm mb-2">
                Call the deposit function with your LP token address and amount.
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded block overflow-x-auto">
                ammMarket.deposit(lpTokenAddress, amount, onBehalfOf)
              </code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Step 3: Confirm Transaction</h3>
              <p className="text-gray-600 text-sm">
                Sign the transaction in your wallet. Once confirmed, your LP tokens are deposited 
                and you'll see updated borrowing power in the dashboard.
              </p>
            </div>
          </div>
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
        pageSummary="How to supply supported LP tokens to the AMM Market as collateral."
        sectionColor="emerald"
      />
    </div>
  )
}
