"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "known-risks", title: "Known Risks" },
  { id: "security-assumptions", title: "Security Assumptions" },
  { id: "bug-bounty", title: "Bug Bounty" },
  { id: "responsible-disclosure", title: "Responsible Disclosure" },
]

export default function SecurityDisclosuresPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Security Disclosures</h1>
        <p className="text-lg text-gray-600 mb-8">
          Known risks, assumptions, and security-related disclosures relevant to protocol use.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is experimental software. While we take security seriously and have 
            implemented multiple safeguards, users should understand the risks involved in 
            using decentralized finance protocols.
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800 text-sm">
              <strong>Warning:</strong> Do not deposit funds you cannot afford to lose. 
              Smart contract risk, oracle risk, and market risk can result in partial or 
              total loss of deposited assets.
            </p>
          </div>
        </section>

        <section id="known-risks" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Known Risks</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Smart Contract Risk</h3>
              <p className="text-gray-600 text-sm mb-2">
                Despite audits, smart contracts may contain undiscovered vulnerabilities.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Code bugs could lead to loss of funds</li>
                <li>• Upgrade mechanisms introduce additional risk</li>
                <li>• Dependencies on external contracts (Aave v4, DEXes)</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Oracle Risk</h3>
              <p className="text-gray-600 text-sm mb-2">
                Price feeds may be manipulated or fail, leading to incorrect valuations.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Oracle manipulation could trigger unfair liquidations</li>
                <li>• Stale prices during network congestion</li>
                <li>• LP valuation complexity introduces additional attack surface</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Liquidation Risk</h3>
              <p className="text-gray-600 text-sm mb-2">
                Positions can be liquidated during market volatility.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Rapid price movements may not allow time to react</li>
                <li>• Network congestion can delay transactions</li>
                <li>• Liquidation penalties result in loss of collateral</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">LP-Specific Risks</h3>
              <p className="text-gray-600 text-sm mb-2">
                Risks unique to using LP tokens as collateral.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Impermanent loss can reduce collateral value</li>
                <li>• Underlying DEX smart contract risk</li>
                <li>• Concentrated liquidity positions can become worthless out of range</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Regulatory Risk</h3>
              <p className="text-gray-600 text-sm mb-2">
                DeFi protocols face evolving regulatory landscape.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Regulatory actions could restrict access</li>
                <li>• Tax treatment varies by jurisdiction</li>
                <li>• Compliance requirements may change</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="security-assumptions" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Assumptions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The protocol's security relies on these assumptions:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">Ethereum Security</h3>
              <p className="text-blue-800 text-sm">
                The underlying blockchain remains secure and censorship-resistant.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">Oracle Integrity</h3>
              <p className="text-blue-800 text-sm">
                Chainlink and other oracle providers continue to operate correctly.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">Governance Honesty</h3>
              <p className="text-blue-800 text-sm">
                Governance participants act in good faith and don't pass malicious proposals.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-1">DEX Integrity</h3>
              <p className="text-blue-800 text-sm">
                Integrated DEXes (Uniswap, Aerodrome) remain secure and operational.
              </p>
            </div>
          </div>
        </section>

        <section id="bug-bounty" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bug Bounty</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We offer rewards for responsibly disclosed vulnerabilities:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Severity</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Reward</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-red-600 font-medium">Critical</td>
                  <td className="px-4 py-2 text-gray-600">Up to $100,000</td>
                  <td className="px-4 py-2 text-gray-600">Direct fund theft, oracle manipulation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-orange-600 font-medium">High</td>
                  <td className="px-4 py-2 text-gray-600">Up to $25,000</td>
                  <td className="px-4 py-2 text-gray-600">Unfair liquidations, interest manipulation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-yellow-600 font-medium">Medium</td>
                  <td className="px-4 py-2 text-gray-600">Up to $5,000</td>
                  <td className="px-4 py-2 text-gray-600">Griefing attacks, DoS vectors</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-blue-600 font-medium">Low</td>
                  <td className="px-4 py-2 text-gray-600">Up to $1,000</td>
                  <td className="px-4 py-2 text-gray-600">Minor issues, gas optimizations</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Bug bounty program details at <a href="#" className="text-blue-600 hover:underline">immunefi.com/bounty/ammmarket</a>
          </p>
        </section>

        <section id="responsible-disclosure" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsible Disclosure</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you discover a vulnerability:
          </p>
          
          <ol className="space-y-2 text-gray-600 list-decimal list-inside mb-4">
            <li>Do NOT disclose publicly</li>
            <li>Email <a href="mailto:security@ammmarket.finance" className="text-blue-600 hover:underline">security@ammmarket.finance</a></li>
            <li>Include detailed reproduction steps</li>
            <li>Allow 90 days for fix before public disclosure</li>
          </ol>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800 text-sm">
              <strong>Safe Harbor:</strong> Security researchers acting in good faith will not 
              face legal action for responsible disclosure.
            </p>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Known risks, assumptions, and security-related disclosures relevant to protocol use."
        sectionColor="slate"
      />
    </div>
  )
}
