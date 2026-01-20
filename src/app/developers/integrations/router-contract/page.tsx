"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "core-role", title: "Core Role" },
  { id: "key-functionalities", title: "Key Functionalities" },
  { id: "how-it-works", title: "How It Works" },
  { id: "operations", title: "Supported Operations" },
  { id: "security", title: "Security & Efficiency" },
  { id: "contract-addresses", title: "Contract Addresses" },
]

export default function RouterContractPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Router Contract</h1>
        <p className="text-lg text-gray-600 mb-8">
          The central engine for managing liquidity, swaps, collateral, and liquidations across multiple DEXes.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AMM Market Router Contract is the central engine for managing liquidity, swaps, collateral, 
            and liquidations across multiple DEXes and AMM pools. It provides a single, atomic interface 
            for interacting with ERC-20 and NFT LP tokens, abstracting the complexities of different 
            protocols while maintaining security, efficiency, and consistency.
          </p>
        </section>

        <section id="core-role" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Role in AMM Market</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The router serves as the unifying layer between users, liquidity pools, and the AMM Market 
            Spoke logic. It ensures that operations such as depositing LP tokens, swapping underlying 
            assets, refinancing positions, or executing liquidations occur in a reliable and atomic manner.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Multi-DEX Integration</h3>
            <p className="text-blue-800 text-sm">
              By integrating with multiple DEXes—Uniswap V2/V3, Balancer, Curve, SushiSwap, Camelot, 
              Kyber, Trader Joe, Aerodrome, PancakeSwap, and others—the router allows developers and 
              integrators to manage liquidity and collateral without needing to implement custom adapters 
              for each protocol.
            </p>
          </div>
        </section>

        <section id="key-functionalities" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Functionalities</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Liquidity Migration</h3>
              <p className="text-gray-600 text-sm">
                Users can move LP tokens or collateral between pools and protocols. The router handles 
                withdrawals from the source pool, applies any protocol fees, and deposits the liquidity 
                into the destination pool. All operations are atomic.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Swaps</h3>
              <p className="text-gray-600 text-sm">
                The router enables token swaps across supported DEXes. For ERC-20 LPs, it can swap 
                underlying tokens to rebalance positions. For Uniswap V3 NFT LPs, it can execute swaps 
                while respecting tick ranges and position liquidity.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Liquidation Execution</h3>
              <p className="text-gray-600 text-sm">
                During liquidations, the router coordinates asset transfers from the undercollateralized 
                position to the protocol or keeper, performs swaps if necessary, and ensures all steps 
                comply with health factor and collateral rules defined in the Spoke.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Collateral Management</h3>
              <p className="text-gray-600 text-sm">
                The router can handle refinancing or rebalancing positions by withdrawing, converting, 
                and redepositing LP tokens while preserving accrued fees and protocol accounting. It 
                abstracts complex multi-step interactions into a single contract call.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How the Router Works</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">1. Register Adapters</h3>
              <p className="text-purple-800 text-sm">
                Each supported DEX or protocol implements a protocol-specific adapter. These adapters 
                expose standardized functions for liquidity withdrawal, deposits, and swaps, which the 
                router calls to interact with the protocol safely.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">2. Initiate Operation</h3>
              <p className="text-blue-800 text-sm">
                Users specify the action (swap, migration, or liquidation), the source and destination 
                pools, the LP token or asset amounts, and any parameters such as slippage limits or tick ranges.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">3. Atomic Execution</h3>
              <p className="text-green-800 text-sm mb-2">
                The router executes the full operation in a single transaction:
              </p>
              <ul className="text-green-800 text-sm space-y-1 ml-4">
                <li>• Withdraws from the source pool via the adapter</li>
                <li>• Applies fees and validates balances</li>
                <li>• Executes swaps or conversions if required</li>
                <li>• Deposits liquidity into the target pool</li>
                <li>• Updates collateral accounting in the AMM Market Spoke</li>
              </ul>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">4. Finalization</h3>
              <p className="text-amber-800 text-sm">
                The user receives the updated position, and any protocol fees are sent to the designated 
                recipient. The router ensures that all steps succeed or fail together, eliminating partial executions.
              </p>
            </div>
          </div>
        </section>

        <section id="operations" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Operations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Deposit & Borrow</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Accept ERC-20 and NFT LPs as collateral</li>
                <li>• Calculate max borrowable using LTV and IL risk</li>
                <li>• Cross-DEX aggregation in unified transaction</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Swap & Rebalance</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Convert assets while preserving LP ownership</li>
                <li>• Adjust tick ranges for NFT positions</li>
                <li>• Atomic operations prevent slippage risks</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Position Migration</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Move LP tokens between pools/DEXes</li>
                <li>• Preserve collateral status during migration</li>
                <li>• Automatic fee harvesting during migration</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Liquidation Support</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Automatic liquidation execution</li>
                <li>• Multi-DEX liquidation handling</li>
                <li>• Keeper integration for timely liquidations</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Fee & Reward Management</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Claim accrued fees from LP positions</li>
                <li>• Apply reward tokens during swaps/rollovers</li>
                <li>• Track fees separately from principal</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Complex Strategies</h3>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Rollover positions in single atomic tx</li>
                <li>• Automated rebalancing for safe LTV</li>
                <li>• Batch operations for gas efficiency</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="security" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security & Efficiency</h2>
          
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-1">Atomic Transactions</h3>
              <p className="text-green-800 text-sm">
                Prevents partial fund movements or errors during multi-step operations.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">Reentrancy Protection</h3>
              <p className="text-blue-800 text-sm">
                Ensures safety against common attack vectors in DeFi.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-1">Adapter Abstraction</h3>
              <p className="text-purple-800 text-sm">
                Isolates protocol-specific logic, enabling safe integration with hundreds of pools 
                and multiple DEXes.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-1">Capital Efficiency</h3>
              <p className="text-amber-800 text-sm">
                Automatically handles token conversions (ETH/WETH or others) to maximize efficiency 
                and minimize unnecessary swaps.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Developer Notes</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• The router is DEX-agnostic: adding a new protocol requires implementing a standard adapter</li>
              <li>• Supports hundreds of pools, including ERC-20 and NFT LP tokens</li>
              <li>• Enables complex operations in a single contract call, reducing gas and simplifying integration</li>
              <li>• Works in concert with AMM Market Spoke logic, enforcing health factors, LTVs, and liquidation thresholds</li>
            </ul>
          </div>
        </section>

        <section id="contract-addresses" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contract Addresses</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <h3 className="font-semibold text-green-900">Base Sepolia (Testnet)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Router</span>
                  <code className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-mono">
                    0x1234...5678
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">AMM Market Spoke</span>
                  <code className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-mono">
                    0xabcd...ef01
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Oracle Adapter</span>
                  <code className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-mono">
                    0x2345...6789
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <h3 className="font-semibold text-blue-900">Unichain Sepolia (Testnet)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Router</span>
                  <code className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono">
                    0x3456...7890
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">AMM Market Spoke</span>
                  <code className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono">
                    0xbcde...f012
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <h3 className="font-semibold text-gray-700">Base Mainnet</h3>
              </div>
              <p className="text-gray-500 text-sm">Coming Q3 2026</p>
            </div>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="The central engine for managing liquidity, swaps, collateral, and liquidations across multiple DEXes."
        sectionColor="cyan"
      />
    </div>
  )
}
