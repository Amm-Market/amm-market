import { Umbrella, Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function InsurancePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Insurance Funds
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Dex Mini implements multiple insurance mechanisms to protect users against various risks in the DeFi
          ecosystem.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <Umbrella className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Insurance Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our multi-layered insurance approach is designed to provide comprehensive protection against various risks
              including smart contract vulnerabilities, oracle failures, and market volatility events.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Protocol Insurance Fund</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A dedicated fund that covers losses from smart contract exploits, oracle failures, or other technical issues
            within the protocol.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">Current size: $5.2M</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">Funded by 15% of protocol fees</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">Managed by a 4/7 multisig</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Liquidity Insurance Fund</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Protects against extreme market volatility and ensures there is always sufficient liquidity for users to
            exit positions.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">Current size: $3.8M</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">Funded by 10% of protocol fees</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">Automatically deployed during high volatility</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Insurance Coverage Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-600">
                  Risk Type
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-600">
                  Coverage Limit
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-600">
                  Claim Process
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Smart Contract Exploits</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Up to $2M per incident</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Automatic for verified incidents</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Oracle Failures</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Up to $1.5M per incident</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Governance review within 72 hours
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Market Volatility</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Up to $3M total</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Automatic liquidity provision</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Governance Attacks</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Up to $1M per incident</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Security council review</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg p-6">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-2">Important Notice</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While our insurance funds provide significant protection, they cannot guarantee coverage for all possible
              scenarios. Users should always exercise caution and understand the risks involved in DeFi activities.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For detailed information on coverage limitations and claim procedures, please refer to our{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Insurance Policy Documentation
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

