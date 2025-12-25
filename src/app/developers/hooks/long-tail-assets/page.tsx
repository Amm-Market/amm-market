import { ArrowUpDown, Check, Coins, Gauge, GitCompare, Layers, Repeat, Wallet } from "lucide-react"

export default function LongTailAssetsPage() {
  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Hero Section */}
      <div className="mb-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-[center_top_-1px]"></div>
        <div className="relative">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bridging Familiarity and Efficiency in Uniswap Liquidity Provision
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            The Uniswap V2-on-V4 Hook offers a compelling solution, the best of both worlds, seamlessly blending the
            intuitive user experience of Uniswap V2 with the gas-optimized architecture of Uniswap v4.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-gray-700 mb-4">
          This innovative hook is particularly well-suited for long-tail tokens and liquid staking assets (e.g.,
          WBTC-USDC, ETH-USDT), reintroducing valuable features like fungible LP tokens, auto-compounding fees, and
          significant gas savings. This makes providing liquidity effortless for both newcomers and seasoned DeFi users.
        </p>
        <p className="text-gray-700 mb-4">
          While traditional Uniswap v4 pools prioritize capital efficiency, they lack fungible LP tokens – a cornerstone
          of Uniswap V2's composability within the broader DeFi ecosystem. This hook ingeniously restores the familiar
          V2-like liquidity management while capitalizing on V4's advanced gas optimizations.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits: The Best of Both Worlds</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Familiar and User-Friendly Liquidity Management:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Coins className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">Fungible ERC-20 LP Tokens</h4>
              </div>
              <p className="text-gray-600">
                Replaces Uniswap v4's NFT positions with standard ERC-20 LP tokens. This makes them easily tradable and
                seamlessly compatible with existing DeFi protocols for lending, staking, and yield farming.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Repeat className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">Auto-Compounding Fees</h4>
              </div>
              <p className="text-gray-600">
                Swap fees are automatically reinvested directly into the liquidity pool. This significantly boosts LP
                value over time without requiring manual claims or reinvestment transactions, simplifying the process
                for LPs.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Enhanced Gas Efficiency:</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-600">
              Leverages Uniswap v4's optimized infrastructure, including the singleton PoolManager and the flexible
              hooks architecture. This results in substantial reductions in gas costs for pool creation, swaps, and all
              liquidity management operations.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Seamless Integration within the DeFi Ecosystem:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <ArrowUpDown className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">Trade with Deep Liquidity</h4>
              </div>
              <p className="text-gray-600">
                The ERC-20 LP tokens remain liquid and fully usable across various Automated Market Makers (AMMs) and
                DeFi platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Wallet className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">Utilize LP Tokens as Collateral</h4>
              </div>
              <p className="text-gray-600">
                Users can now leverage their LP tokens as collateral for borrowing or seamlessly integrate them into
                various yield generation strategies, unlocking new possibilities within DeFi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works: A Simplified Workflow</h2>
        <p className="text-gray-700 mb-6">
          The Uniswap V2-on-V4 Hook simplifies the process of providing liquidity, offering a straightforward workflow
          for users:
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Step 1: Providing Liquidity - Effortless Participation
          </h3>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-blue-600 font-medium">1</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Token Deposit</h4>
                <p className="text-gray-600">
                  Users deposit their desired tokens (e.g., ETH and USDT) into the designated liquidity pool.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-blue-600 font-medium">2</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Automated Pool Balancing</h4>
                <p className="text-gray-600">
                  Dex Mini intelligently manages the pool by automatically swapping tokens as necessary to maintain the
                  correct ratio.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-blue-600 font-medium">3</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Instant LP Token Receipt & Fee Compounding</h4>
                <p className="text-gray-600">
                  Upon depositing, users immediately receive ERC-20 LP tokens representing their share of the pool.
                  Importantly, swap fees earned by the pool are automatically compounded, increasing the value of these
                  LP tokens without requiring any further action from the user.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Step 2: Lifecycle Management - Powered by V4 Hook Architecture
          </h3>
          <p className="text-gray-700 mb-4">
            The hook leverages the robust architecture of Uniswap v4 to automate liquidity management, swaps, and fee
            management through these key functions:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-3">Adding Liquidity:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <span className="font-medium">beforeAddLiquidity:</span> Temporarily locks the pool's state to prevent
                  conflicts during the liquidity addition process.
                </li>
                <li>
                  <span className="font-medium">afterAddLiquidity:</span> Mints the appropriate amount of LP tokens for
                  the user and updates the pool's virtual reserves.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-3">Swapping Tokens:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <span className="font-medium">beforeSwap:</span> Validates the swap inputs and captures the pool's
                  reserves before the swap occurs.
                </li>
                <li>
                  <span className="font-medium">afterSwap:</span> Automatically compounds the earned swap fees back into
                  the pool and updates the token balances.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-3">Removing Liquidity:</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <span className="font-medium">beforeRemoveLiquidity:</span> Calculates the exact amount of each token
                  owed to the LP based on their share of the pool.
                </li>
                <li>
                  <span className="font-medium">afterRemoveLiquidity:</span> Burns the user's LP tokens and updates the
                  pool's reserves accordingly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Considerations Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Important Considerations: Balancing Simplicity and Advanced Features
        </h2>
        <p className="text-gray-700 mb-4">
          While the Uniswap V2-on-V4 Hook offers significant advantages in simplicity and usability, it's important to
          acknowledge certain trade-offs:
        </p>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <GitCompare className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Lower Capital Efficiency</h4>
                <p className="text-gray-600">
                  This approach prioritizes user-friendliness over the highly concentrated liquidity offered by Uniswap
                  V3 and V4. This means that the same amount of capital might generate fewer fees compared to a
                  concentrated liquidity position.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Layers className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">State Management Complexity</h4>
                <p className="text-gray-600">
                  The hook requires careful tracking of virtual reserves to ensure accurate calculations and prevent
                  errors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Gauge className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Edge Cases and Risk Mitigation</h4>
                <p className="text-gray-600">
                  Additional safeguards are necessary to handle extreme market conditions, such as flash crashes, and
                  ensure the stability and security of the pool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Use Section */}
      <div className="bg-blue-50 p-8 rounded-xl mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Use This Hook?</h2>
        <p className="text-gray-700 mb-4">Ideal for projects that prioritize:</p>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="ml-3 text-gray-700">
              <span className="font-medium">User Experience:</span> A V2-style interface for liquidity providers.
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="ml-3 text-gray-700">
              <span className="font-medium">Cost Savings:</span> Lower gas fees using V4's optimized architecture.
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="ml-3 text-gray-700">
              <span className="font-medium">DeFi Composability:</span> LP tokens usable across lending, staking, and
              yield platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <p className="text-gray-700">
          The V2-on-V4 Hook delivers the best of both worlds—the simplicity of Uniswap V2 with the efficiency of Uniswap
          V4. It's a game-changer for long-tail tokens, liquid staking, and DeFi composability, offering
          auto-compounding rewards, reduced gas costs, and seamless LP management.
        </p>
        <p className="text-gray-700 mt-4">
          For developers and liquidity providers, this hook makes DeFi easier, more accessible, and more rewarding.
        </p>
      </div>
    </div>
  )
}

