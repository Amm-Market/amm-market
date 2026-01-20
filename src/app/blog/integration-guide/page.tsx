import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "Building on AMM Market: Integration Guide for Developers",
  description: "A comprehensive guide to integrating with AMM Market—SDK setup, core functions, event handling, and best practices for building on LP collateral infrastructure.",
}

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "getting-started", title: "Getting Started" },
  { id: "core-sdk", title: "Core SDK Overview" },
  { id: "depositing-lp", title: "Depositing LP Positions" },
  { id: "borrowing", title: "Borrowing Against Collateral" },
  { id: "health-monitoring", title: "Health Monitoring" },
  { id: "fee-collection", title: "Fee Collection" },
  { id: "events-indexing", title: "Events & Indexing" },
  { id: "best-practices", title: "Best Practices" },
]

export default function IntegrationGuidePage() {
  return (
    <BlogPostLayout
      title="Building on AMM Market: Integration Guide for Developers"
      date="January 20, 2026"
      description="A comprehensive guide to integrating with AMM Market—SDK setup, core functions, event handling, and best practices for building on LP collateral infrastructure."
      image="/images/blog/integration-guide.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "smart-contract-architecture",
        title: "Smart Contract Architecture: AMM Market Technical Reference",
        date: "January 21, 2026",
      }}
      nextPost={{
        slug: "lp-collateral-guide",
        title: "Beginner's Guide to LP Collateral: Risks and Rewards",
        date: "January 19, 2026",
      }}
    >
      <section id="introduction" className="mb-12 scroll-mt-24">
        <p className="text-gray-700 leading-relaxed mb-6">
          AMM Market provides a robust infrastructure for LP-backed lending, and integrating with it opens up 
          powerful capabilities for DeFi applications. Whether you&apos;re building a portfolio tracker, an automated 
          strategy vault, or a custom frontend, this guide covers everything you need to get started.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 not-prose">
          <h3 className="font-semibold text-indigo-900 mb-2">What You Can Build</h3>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">•</span>
              <span>Automated LP management vaults with borrowing strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">•</span>
              <span>Portfolio dashboards showing LP collateral health</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">•</span>
              <span>Liquidation bots and monitoring services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">•</span>
              <span>Custom frontends for specific LP strategies</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="getting-started" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Getting Started</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The AMM Market SDK is available as an npm package. Install it alongside ethers.js or viem for 
          blockchain interactions.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2"># Install the SDK</p>
          <p>npm install @amm-market/sdk ethers</p>
          <p className="text-gray-400 mt-4 mb-2"># Or with yarn</p>
          <p>yarn add @amm-market/sdk ethers</p>
        </div>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Initialize the client</p>
          <p><span className="text-purple-400">import</span> {"{"} AmmMarketClient {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@amm-market/sdk&apos;</span></p>
          <p className="mt-2"><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-400">AmmMarketClient</span>({"{"}</p>
          <p className="pl-4">provider: ethersProvider,</p>
          <p className="pl-4">chainId: <span className="text-blue-400">1</span>, <span className="text-gray-400">// Ethereum mainnet</span></p>
          <p className="pl-4">spokeAddress: <span className="text-green-400">&apos;0x...&apos;</span></p>
          <p>{"}"})</p>
        </div>
      </section>

      <section id="core-sdk" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Core SDK Overview</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The SDK exposes several key modules for interacting with AMM Market contracts.
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2 font-mono">client.positions</h3>
            <p className="text-gray-600 text-sm">
              Query and manage LP positions—deposit, withdraw, and check collateral status.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2 font-mono">client.borrow</h3>
            <p className="text-gray-600 text-sm">
              Borrow against collateral, repay debt, and query outstanding balances.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold text-purple-900 mb-2 font-mono">client.oracle</h3>
            <p className="text-gray-600 text-sm">
              Fetch real-time LP valuations, price feeds, and collateral factors.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-semibold text-amber-900 mb-2 font-mono">client.health</h3>
            <p className="text-gray-600 text-sm">
              Calculate health factors, liquidation thresholds, and risk metrics.
            </p>
          </div>
        </div>
      </section>

      <section id="depositing-lp" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Depositing LP Positions</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          LP positions (NFTs for Uniswap V3/V4) are deposited into the Spoke contract. The SDK handles 
          approval and transfer in a single flow.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Deposit a Uniswap V3 LP NFT</p>
          <p><span className="text-purple-400">const</span> tokenId = <span className="text-blue-400">12345</span></p>
          <p className="mt-2"><span className="text-gray-400">// Check if approval is needed</span></p>
          <p><span className="text-purple-400">const</span> needsApproval = <span className="text-purple-400">await</span> client.positions.<span className="text-yellow-400">needsApproval</span>(tokenId)</p>
          <p className="mt-2"><span className="text-purple-400">if</span> (needsApproval) {"{"}</p>
          <p className="pl-4"><span className="text-purple-400">await</span> client.positions.<span className="text-yellow-400">approve</span>(tokenId)</p>
          <p>{"}"}</p>
          <p className="mt-2"><span className="text-gray-400">// Deposit the position</span></p>
          <p><span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> client.positions.<span className="text-yellow-400">deposit</span>(tokenId)</p>
          <p><span className="text-purple-400">await</span> tx.<span className="text-yellow-400">wait</span>()</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6 not-prose">
          <h3 className="font-semibold text-amber-900 mb-2">Important: Position Ownership</h3>
          <p className="text-gray-700">
            After deposit, the LP NFT is held by the Spoke contract. The depositor retains economic ownership 
            and can withdraw at any time (subject to debt repayment). The position continues earning fees 
            while deposited.
          </p>
        </div>
      </section>

      <section id="borrowing" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Borrowing Against Collateral</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Once an LP position is deposited, you can borrow supported assets up to the position&apos;s borrowing capacity.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Check borrowing capacity</p>
          <p><span className="text-purple-400">const</span> capacity = <span className="text-purple-400">await</span> client.borrow.<span className="text-yellow-400">getCapacity</span>(userAddress)</p>
          <p>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;Max borrow:&apos;</span>, capacity.maxBorrow)</p>
          <p>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;Available assets:&apos;</span>, capacity.assets)</p>
          <p className="mt-4 text-gray-400">// Borrow USDC</p>
          <p><span className="text-purple-400">const</span> amount = ethers.utils.<span className="text-yellow-400">parseUnits</span>(<span className="text-green-400">&apos;1000&apos;</span>, <span className="text-blue-400">6</span>) <span className="text-gray-400">// 1000 USDC</span></p>
          <p><span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> client.borrow.<span className="text-yellow-400">borrow</span>(USDC_ADDRESS, amount)</p>
          <p><span className="text-purple-400">await</span> tx.<span className="text-yellow-400">wait</span>()</p>
        </div>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Repay debt</p>
          <p><span className="text-purple-400">const</span> debt = <span className="text-purple-400">await</span> client.borrow.<span className="text-yellow-400">getDebt</span>(userAddress, USDC_ADDRESS)</p>
          <p className="mt-2"><span className="text-gray-400">// Repay full amount</span></p>
          <p><span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> client.borrow.<span className="text-yellow-400">repay</span>(USDC_ADDRESS, debt.total)</p>
        </div>
      </section>

      <section id="health-monitoring" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Health Monitoring</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Monitoring position health is critical for avoiding liquidations. The SDK provides real-time health 
          factor calculations.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Get health factor</p>
          <p><span className="text-purple-400">const</span> health = <span className="text-purple-400">await</span> client.health.<span className="text-yellow-400">getHealthFactor</span>(userAddress)</p>
          <p className="mt-2">console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;Health factor:&apos;</span>, health.factor) <span className="text-gray-400">// e.g., 1.45</span></p>
          <p>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;Liquidation threshold:&apos;</span>, health.liquidationThreshold)</p>
          <p>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;At risk:&apos;</span>, health.factor {"<"} <span className="text-blue-400">1.1</span>)</p>
        </div>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
            <div className="flex-shrink-0 w-16 text-center">
              <span className="text-green-600 font-bold text-lg">&gt; 1.5</span>
            </div>
            <div>
              <h3 className="font-semibold text-green-900">Healthy</h3>
              <p className="text-gray-600 text-sm">Position has comfortable margin. Safe for most strategies.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
            <div className="flex-shrink-0 w-16 text-center">
              <span className="text-amber-600 font-bold text-lg">1.1–1.5</span>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900">Caution</h3>
              <p className="text-gray-600 text-sm">Monitor closely. Consider reducing debt or adding collateral.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
            <div className="flex-shrink-0 w-16 text-center">
              <span className="text-red-600 font-bold text-lg">&lt; 1.1</span>
            </div>
            <div>
              <h3 className="font-semibold text-red-900">At Risk</h3>
              <p className="text-gray-600 text-sm">Liquidation imminent. Take immediate action.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fee-collection" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Fee Collection</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          LP positions continue earning trading fees while deposited. Fees can be collected without 
          affecting the loan or withdrawing the position.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Check accrued fees</p>
          <p><span className="text-purple-400">const</span> fees = <span className="text-purple-400">await</span> client.positions.<span className="text-yellow-400">getAccruedFees</span>(tokenId)</p>
          <p>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;Token0 fees:&apos;</span>, fees.amount0)</p>
          <p>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;Token1 fees:&apos;</span>, fees.amount1)</p>
          <p className="mt-4 text-gray-400">// Collect fees</p>
          <p><span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> client.positions.<span className="text-yellow-400">collectFees</span>(tokenId)</p>
        </div>
      </section>

      <section id="events-indexing" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Events &amp; Indexing</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          AMM Market emits events for all key actions. These can be indexed for building dashboards, 
          analytics, or notification systems.
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 font-mono text-sm">PositionDeposited</h3>
            <p className="text-gray-600 text-xs">Emitted when LP NFT is deposited as collateral</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 font-mono text-sm">PositionWithdrawn</h3>
            <p className="text-gray-600 text-xs">Emitted when LP NFT is withdrawn</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 font-mono text-sm">Borrowed</h3>
            <p className="text-gray-600 text-xs">Emitted when user borrows against collateral</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 font-mono text-sm">Repaid</h3>
            <p className="text-gray-600 text-xs">Emitted when debt is repaid</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 font-mono text-sm">Liquidated</h3>
            <p className="text-gray-600 text-xs">Emitted when position is liquidated</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2 font-mono text-sm">FeesCollected</h3>
            <p className="text-gray-600 text-xs">Emitted when trading fees are claimed</p>
          </div>
        </div>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Listen for events</p>
          <p>client.<span className="text-yellow-400">on</span>(<span className="text-green-400">&apos;Borrowed&apos;</span>, (event) =&gt; {"{"}</p>
          <p className="pl-4">console.<span className="text-yellow-400">log</span>(<span className="text-green-400">&apos;New borrow:&apos;</span>, event.user, event.amount)</p>
          <p>{"}"})</p>
        </div>
      </section>

      <section id="best-practices" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Best Practices</h2>
        
        <div className="bg-gray-900 text-white rounded-xl p-6 not-prose mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Always simulate transactions</strong> before executing to catch errors early</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Cache oracle prices</strong> with short TTLs to reduce RPC calls</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Use multicall</strong> for batching read operations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Implement retry logic</strong> with exponential backoff for failed transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Monitor gas prices</strong> and set appropriate limits for time-sensitive operations</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Ready to Build?</h3>
          <p>
            Check out our GitHub repository for full SDK documentation, example integrations, and 
            starter templates. Join our Discord for developer support and to share what you&apos;re building.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  )
}
