import Link from "next/link"
import { ChevronRight, Shield, AlertTriangle, Search, Bug } from "lucide-react"

export default function SmartContractsPage() {
  return (
    <main className="flex-1 max-w-[800px] pl-8 pr-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/developers" className="hover:text-gray-900">
          Developers
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/developers/security" className="hover:text-gray-900">
          Security
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Smart Contracts</span>
      </div>

      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Security as a Cornerstone of Trust
      </h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          At Dex Mini, safeguarding our users and their assets is not just a feature – it's a fundamental principle.
          Each hook comes with a robust and multi-layered security framework, meticulously designed to preempt threats,
          mitigate vulnerabilities, and ensure the unwavering resilience of our platform.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-8">
          <p className="text-gray-800">
            DeFi's inherent advantages – self-custody, global accessibility, the elimination of intermediaries, and a
            focus on user privacy – also present unique security challenges. These benefits can be misused by bad actors
            seeking to conceal illicit activities, from digital asset theft to money laundering and fraud. While
            traditional security measures like KYC and AML are often inapplicable in the decentralized landscape, the
            transparency of on-chain activity provides opportunities to identify and address malicious behavior. Dex
            Mini leverages this transparency, employing a blend of advanced Web3 blockchain analytics, proactive
            security services, optional user account features, and diligent suspicious activity reporting. Our
            commitment to security is ongoing, with continuous evaluation and integration of emerging technologies.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Unwavering Commitment to Security</h2>
        <p className="mb-6">
          Dex Mini is committed to a robust security strategy, employing a multi-faceted approach to safeguard its users
          and the Ethereum ecosystem:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold">Rigorous Smart Contract Audits</h3>
            </div>
            <p className="text-gray-600">
              We are partnering with leading security firms for meticulous reviews and audits of our core contracts,
              ensuring their integrity.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Search className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold">Economic Security Stress Testing</h3>
            </div>
            <p className="text-gray-600">
              Dex Mini is developing a sophisticated simulation environment to stress-test its economic resilience as it
              scales to support more assets and higher transaction volumes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Bug className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold">Community-Driven Bug Bounty Program</h3>
            </div>
            <p className="text-gray-600">
              In collaboration with leading platforms, we will launch a comprehensive bug bounty program, inviting
              ethical hackers to identify and report vulnerabilities, further strengthening security.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important Note:</strong> While Dex Mini has benefited from these extensive security measures,
                the inherent nature of emerging technologies means that undiscovered vulnerabilities may still exist.
                The Dex Mini bug bounty program, driven by the community in collaboration with Immunefi, remains an
                integral part of our ongoing commitment to security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

