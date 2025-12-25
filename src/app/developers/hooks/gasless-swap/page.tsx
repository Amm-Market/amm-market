import { Zap, Shield, DollarSign, Cpu, Lock, AlertTriangle } from "lucide-react"

export default function GaslessSwapPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Secure, MEV-Resistant Swaps with Profit Sharing</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          The Gasless Swap Hook revolutionizes Uniswap V4 trading by enabling gasless, MEV-resistant swaps that reward
          users instead of extractors.
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <p className="text-gray-700 mb-6 text-lg">
          This innovation leverages off-chain signature authorization with on-chain execution, eliminating gas fees
          while incorporating powerful safeguards against exploitation. Key security features include dynamic balance
          enforcement, per-token insurance reserves, governance timelocks, anti-replay protection, and granular
          role-based access controls.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Zero Gas Fees</h3>
            <p className="text-gray-600">
              Users can execute swaps without incurring any transaction costs, making DeFi more accessible.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <DollarSign className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Zero Slippage</h3>
            <p className="text-gray-600">
              Trades are executed precisely at the target price, eliminating the risk of unfavorable price changes.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 flex flex-col items-center text-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Zero MEV Exploitation</h3>
            <p className="text-gray-600">
              Competitive bidding mechanisms redistribute value to traders, effectively preventing Miner Extractable
              Value (MEV) exploitation and ensuring fairer trades.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Works</h2>
        <p className="text-gray-700 mb-6">
          The Dex Mini Gasless Swap Hook reimagines order execution as a competitive auction designed to benefit users.
          Instead of relying on traditional transaction processing, Gasless Swap broadcasts swap orders to a
          decentralized network of specialized searchers (automated market makers). These searchers then engage in a
          competitive bidding process to fulfill the swap request:
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
              1
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-800">User Order Submission</h3>
              <p className="text-gray-600">
                Users initiate swaps by submitting orders with signed parameters, including the desired price, amount,
                and order expiration. This process is entirely gas-free.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
              2
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-800">Searcher Competition</h3>
              <p className="text-gray-600">
                A network of automated market makers (searchers) actively monitors the order broadcast. They compete to
                execute the swap in the most efficient manner.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
              3
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-800">Winning Execution</h3>
              <p className="text-gray-600">
                The searcher who offers the best execution fulfills the swap on-chain. This includes forwarding any ETH
                tips and importantly, any surplus value generated from the competitive bidding process directly to the
                user.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Robust Security and Risk Mitigation</h2>

        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <Cpu className="h-6 w-6 text-blue-600 mr-3" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">BalanceDelta Validation</h3>
              <p className="text-gray-600">
                This crucial mechanism enforces strict asset flow constraints, effectively preventing manipulation and
                ensuring the integrity of the swap.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <Lock className="h-6 w-6 text-blue-600 mr-3" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Governance Timelock (48-Hour Delay)</h3>
              <p className="text-gray-600">
                All protocol updates are subject to a 48-hour timelock, providing the community with ample opportunity
                for review and ensuring transparent governance.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Signature Protection (EIP-712, Nonce Enforcement)</h3>
              <p className="text-gray-600">
                Utilizing industry-standard signature protocols, the system prevents order duplication, front-running,
                and unauthorized execution, safeguarding user funds and intent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* User Protection */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">User Protection & Profit Mechanisms</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Price Warning System</h3>
            <p className="text-gray-600">
              Alerts users if orders deviate significantly from market rates, reducing accidental losses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Guaranteed ETH Tips</h3>
            <p className="text-gray-600">
              Searchers must attach an ETH tip to execute orders, ensuring traders always gain value.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Surplus Redistribution</h3>
            <p className="text-gray-600">
              In high-competition auctions, searchers may bid beyond the required tip to prioritize order fulfillment.
              This results in a "surplus" – additional ETH earned by users – creating scenarios where traders profit
              from the swap process itself.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
        <p className="text-gray-700 text-lg">
          By decentralizing MEV redistribution and removing friction costs, the Gasless Swap Hook shifts DeFi toward a
          fairer, more efficient trading model where users—not bots—capture the value of their trades.
        </p>
      </div>

      {/* Warning */}
      <div className="flex items-start bg-yellow-50 p-4 rounded-lg border border-yellow-100">
        <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Note:</span> While the Gasless Swap Hook provides significant protection
          against MEV and other exploits, all DeFi activities carry inherent risks. Always conduct your own research and
          only use funds you can afford to lose.
        </p>
      </div>
    </div>
  )
}

