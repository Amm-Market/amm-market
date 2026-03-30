import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "Smart Contract Architecture: Avana Technical Reference",
  description: "Deep technical reference for Avana's smart contract architecture—Hub and Spoke design, oracle integration, key functions, and integration patterns.",
}

const tableOfContents = [
  { id: "overview", title: "Architecture Overview" },
  { id: "hub-contract", title: "The Liquidity Hub" },
  { id: "spoke-contract", title: "The Avana Spoke" },
  { id: "oracle-system", title: "Oracle System" },
  { id: "key-functions", title: "Key Functions" },
  { id: "access-control", title: "Access Control & Permissions" },
  { id: "integration-points", title: "Integration Points" },
]

export default function SmartContractArchitecturePage() {
  return (
    <BlogPostLayout
      title="Smart Contract Architecture: Avana Technical Reference"
      date="January 21, 2026"
      description="Deep technical reference for Avana's smart contract architecture—Hub and Spoke design, oracle integration, key functions, and integration patterns."
      image="/images/blog/smart-contract-architecture.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "v1-1-release",
        title: "Avana v1.1: New Features and Improvements",
        date: "January 22, 2026",
      }}
      nextPost={{
        slug: "integration-guide",
        title: "Building on Avana: Integration Guide for Developers",
        date: "January 20, 2026",
      }}
    >
      <section id="overview" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Architecture Overview</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Avana is built on Aave v4&apos;s Hub and Spoke architecture, a modular design that separates 
          liquidity management from collateral-specific logic. This separation enables specialized markets 
          like LP-backed lending while maintaining deep, unified liquidity.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6 not-prose">
          <h3 className="font-semibold text-indigo-900 mb-3">Core Components</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-indigo-700 font-bold">H</span>
              </div>
              <p className="font-semibold text-gray-900">Liquidity Hub</p>
              <p className="text-gray-600 text-sm">Aggregates and manages pooled liquidity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-purple-700 font-bold">S</span>
              </div>
              <p className="font-semibold text-gray-900">AMM Spoke</p>
              <p className="text-gray-600 text-sm">Handles LP collateral and borrowing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-amber-700 font-bold">O</span>
              </div>
              <p className="font-semibold text-gray-900">Oracle System</p>
              <p className="text-gray-600 text-sm">Values LP positions in real-time</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 not-prose">
          <h3 className="font-semibold text-gray-900 mb-3">Data Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <p className="font-semibold">User deposits LP NFT</p>
            </div>
            <span className="text-gray-400">→</span>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <p className="font-semibold">Spoke values position</p>
            </div>
            <span className="text-gray-400">→</span>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <p className="font-semibold">Spoke requests from Hub</p>
            </div>
            <span className="text-gray-400">→</span>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <p className="font-semibold">User receives borrowed assets</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hub-contract" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">The Liquidity Hub</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The Liquidity Hub is the central contract that holds all borrowable assets (USDC, DAI, ETH, etc.). 
          It does not interact directly with users—instead, it extends credit lines to authorized Spokes.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Hub interface (simplified)</p>
          <p><span className="text-purple-400">interface</span> <span className="text-yellow-400">ILiquidityHub</span> {"{"}</p>
          <p className="pl-4 text-gray-400">// Spoke management</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">registerSpoke</span>(address spoke, uint256 creditLimit) <span className="text-purple-400">external</span>;</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">updateCreditLimit</span>(address spoke, uint256 newLimit) <span className="text-purple-400">external</span>;</p>
          <p className="mt-2 pl-4 text-gray-400">// Liquidity operations (called by Spokes)</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">drawLiquidity</span>(address asset, uint256 amount) <span className="text-purple-400">external</span>;</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">returnLiquidity</span>(address asset, uint256 amount) <span className="text-purple-400">external</span>;</p>
          <p className="mt-2 pl-4 text-gray-400">// View functions</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getAvailableLiquidity</span>(address asset) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getSpokeUtilization</span>(address spoke) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p>{"}"}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">Hub Responsibilities</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Hold and manage pooled liquidity</li>
              <li>• Track Spoke credit limits and utilization</li>
              <li>• Enforce global supply/borrow caps</li>
              <li>• Calculate interest rates based on utilization</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2">Security Properties</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Spoke isolation—one Spoke cannot drain another</li>
              <li>• Credit limits cap maximum exposure per Spoke</li>
              <li>• Reserve factors protect depositors</li>
              <li>• Emergency pause functionality</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="spoke-contract" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">The Avana Spoke</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The Avana Spoke is the user-facing contract that handles LP collateral. It accepts LP NFTs, 
          values them via oracles, and manages the borrowing lifecycle.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Spoke interface (simplified)</p>
          <p><span className="text-purple-400">interface</span> <span className="text-yellow-400">IAmmMarketSpoke</span> {"{"}</p>
          <p className="pl-4 text-gray-400">// Collateral management</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">depositPosition</span>(uint256 tokenId) <span className="text-purple-400">external</span>;</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">withdrawPosition</span>(uint256 tokenId) <span className="text-purple-400">external</span>;</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">collectFees</span>(uint256 tokenId) <span className="text-purple-400">external</span>;</p>
          <p className="mt-2 pl-4 text-gray-400">// Borrowing</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">borrow</span>(address asset, uint256 amount) <span className="text-purple-400">external</span>;</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">repay</span>(address asset, uint256 amount) <span className="text-purple-400">external</span>;</p>
          <p className="mt-2 pl-4 text-gray-400">// Liquidation</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">liquidate</span>(address user, uint256 tokenId, uint256 debtToCover) <span className="text-purple-400">external</span>;</p>
          <p className="mt-2 pl-4 text-gray-400">// View functions</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getPositionValue</span>(uint256 tokenId) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getHealthFactor</span>(address user) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getBorrowingCapacity</span>(address user) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p>{"}"}</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 not-prose">
          <h3 className="font-semibold text-amber-900 mb-2">Position Storage</h3>
          <p className="text-gray-700 mb-3">
            Each deposited LP position is tracked with comprehensive metadata:
          </p>
          <div className="bg-white rounded-lg p-4 font-mono text-sm">
            <p><span className="text-purple-600">struct</span> Position {"{"}</p>
            <p className="pl-4">uint256 tokenId;</p>
            <p className="pl-4">address owner;</p>
            <p className="pl-4">address pool;</p>
            <p className="pl-4">int24 tickLower;</p>
            <p className="pl-4">int24 tickUpper;</p>
            <p className="pl-4">uint128 liquidity;</p>
            <p className="pl-4">uint256 depositTimestamp;</p>
            <p>{"}"}</p>
          </div>
        </div>
      </section>

      <section id="oracle-system" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Oracle System</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          LP position valuation requires multiple data sources. The oracle system combines on-chain pool 
          math with external price feeds to produce accurate, manipulation-resistant valuations.
        </p>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Position Math</h3>
              <p className="text-gray-700 text-sm">
                Calculate token amounts from liquidity and tick range using Uniswap V3 math libraries. 
                This determines how much of each token the position represents at current price.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Price Feeds</h3>
              <p className="text-gray-700 text-sm">
                Fetch token prices from Chainlink oracles or pool TWAPs. Multiple sources are aggregated 
                with fallback logic for resilience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Collateral Factor</h3>
              <p className="text-gray-700 text-sm">
                Apply pool-specific collateral factors based on volatility, liquidity depth, and oracle 
                confidence. Higher risk pools have lower factors.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 not-prose font-mono text-sm overflow-x-auto">
          <p className="text-gray-400 mb-2">// Oracle interface</p>
          <p><span className="text-purple-400">interface</span> <span className="text-yellow-400">ILPOracle</span> {"{"}</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getPositionValue</span>(</p>
          <p className="pl-8">uint256 tokenId,</p>
          <p className="pl-8">address pool</p>
          <p className="pl-4">) <span className="text-purple-400">external view returns</span> (uint256 valueUSD);</p>
          <p className="mt-2 pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getCollateralFactor</span>(address pool) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-400">getLiquidationThreshold</span>(address pool) <span className="text-purple-400">external view returns</span> (uint256);</p>
          <p>{"}"}</p>
        </div>
      </section>

      <section id="key-functions" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Functions Deep Dive</h2>
        
        <div className="space-y-6 not-prose">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 font-mono">depositPosition(uint256 tokenId)</h3>
            <p className="text-gray-700 mb-3">
              Transfers an LP NFT to the Spoke and registers it as collateral for the caller.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Execution flow:</p>
              <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                <li>Verify caller owns the NFT</li>
                <li>Transfer NFT to Spoke contract</li>
                <li>Read position parameters from NFT manager</li>
                <li>Store position metadata</li>
                <li>Emit PositionDeposited event</li>
              </ol>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 font-mono">borrow(address asset, uint256 amount)</h3>
            <p className="text-gray-700 mb-3">
              Borrows assets against deposited collateral, drawing from the Hub.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Execution flow:</p>
              <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                <li>Calculate user&apos;s total collateral value</li>
                <li>Check borrowing capacity against requested amount</li>
                <li>Verify health factor remains above threshold</li>
                <li>Request liquidity from Hub</li>
                <li>Transfer borrowed asset to user</li>
                <li>Update debt accounting</li>
                <li>Emit Borrowed event</li>
              </ol>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 font-mono">liquidate(address user, uint256 tokenId, uint256 debtToCover)</h3>
            <p className="text-gray-700 mb-3">
              Allows liquidators to repay debt and receive collateral when health factor drops below 1.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Execution flow:</p>
              <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                <li>Verify user&apos;s health factor is below liquidation threshold</li>
                <li>Calculate collateral to seize (debt + liquidation bonus)</li>
                <li>Withdraw proportional liquidity from LP position</li>
                <li>Transfer underlying tokens to liquidator</li>
                <li>Repay debt to Hub</li>
                <li>Update position and debt state</li>
                <li>Emit Liquidated event</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="access-control" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Access Control &amp; Permissions</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Avana uses a role-based access control system for administrative functions while keeping 
          user-facing operations permissionless.
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">ADMIN_ROLE</h3>
            <p className="text-gray-600 text-sm mb-2">Governance multisig</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Update collateral factors</li>
              <li>• Add/remove supported pools</li>
              <li>• Adjust liquidation parameters</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">GUARDIAN_ROLE</h3>
            <p className="text-gray-600 text-sm mb-2">Emergency response</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Pause/unpause contracts</li>
              <li>• Emergency parameter updates</li>
              <li>• Circuit breaker activation</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">ORACLE_ROLE</h3>
            <p className="text-gray-600 text-sm mb-2">Price feed management</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Update oracle sources</li>
              <li>• Adjust TWAP windows</li>
              <li>• Configure fallback feeds</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">Permissionless</h3>
            <p className="text-gray-600 text-sm mb-2">Any user</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Deposit/withdraw positions</li>
              <li>• Borrow/repay</li>
              <li>• Collect fees</li>
              <li>• Liquidate unhealthy positions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="integration-points" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Integration Points</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          External protocols and applications can integrate with Avana at several levels.
        </p>

        <div className="bg-gray-900 text-white rounded-xl p-6 not-prose mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Direct contract calls</strong> — Interact with Spoke functions for custom strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Event indexing</strong> — Build analytics and dashboards from emitted events</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Oracle consumption</strong> — Use LP valuations in external protocols</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Liquidation bots</strong> — Monitor health factors and execute liquidations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">✓</span>
              <span><strong>Vault wrappers</strong> — Build automated strategy vaults on top of Avana</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg text-white not-prose">
          <h3 className="text-xl font-bold mb-3">Contract Addresses</h3>
          <p className="mb-4">
            All contracts are verified on Etherscan. See our documentation for deployed addresses 
            across supported networks (Ethereum, Arbitrum, Base).
          </p>
          <p className="text-indigo-200 text-sm">
            Full ABIs and integration examples available in our GitHub repository.
          </p>
        </div>
      </section>
    </BlogPostLayout>
  )
}
