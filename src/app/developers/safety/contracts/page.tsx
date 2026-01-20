import type { Metadata } from "next"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Smart Contract Security",
  description: "AMM Market smart contract security - security challenges, multi-layer security architecture, core contracts, trust boundaries, and audits.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "security-challenges", title: "Security Challenges" },
  { id: "multi-layer-security", title: "Multi-Layer Security" },
  { id: "core-contracts", title: "Core Contracts" },
  { id: "trust-boundaries", title: "Trust Boundaries" },
  { id: "audits", title: "Audits" },
]

export default function ContractsArchitecturePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contracts & Security</h1>
        <p className="text-lg text-gray-600 mb-8">
          Overview of smart contract security, trust boundaries, and audit considerations.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In AMM Markets, liquidity providers (LPs) can now use their LP tokens as collateral to 
            access loans, unlocking new capital efficiency in DeFi. With this innovation comes a 
            heightened responsibility to ensure the security of both user assets and the broader ecosystem.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Core Principle:</strong> Security is not just a feature—it is the foundation 
            of trust that enables users to confidently participate in these markets.
          </p>
        </section>

        <section id="security-challenges" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Challenges in DeFi</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            DeFi's core advantages—self-custody, global accessibility, the removal of intermediaries, 
            and user privacy—also introduce unique security challenges. These benefits can be misused 
            by bad actors for theft, fraud, or illicit activity.
          </p>
          
          <p className="text-gray-600 text-sm">
            <strong>On-Chain Transparency:</strong> While traditional safeguards like KYC and AML are often less applicable, the transparency 
            of on-chain transactions provides opportunities to monitor, identify, and mitigate malicious 
            behavior. AMM Markets leverage this transparency through advanced blockchain analytics, 
            proactive monitoring, and community-driven security initiatives.
          </p>
        </section>

        <section id="multi-layer-security" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Multi-Layered Security Approach</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To maintain the integrity of AMM Markets and the LP collateral ecosystem, several measures 
            are essential:
          </p>
          
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-900">Rigorous Smart Contract Audits</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Core protocols and collateral logic undergo thorough third-party audits to ensure 
                correctness, robustness, and resistance to exploits.
              </p>
            </li>

            <li>
              <span className="font-semibold text-gray-900">Economic Security Stress Testing</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Simulation environments are used to test the resilience of markets under extreme 
                conditions, including price volatility, liquidity shocks, and systemic stress.
              </p>
            </li>

            <li>
              <span className="font-semibold text-gray-900">Community-Driven Bug Bounty Programs</span>
              <p className="text-gray-600 text-sm mt-0.5">
                Ethical hackers and developers are incentivized to identify vulnerabilities, ensuring 
                continuous improvement and rapid mitigation of potential threats.
              </p>
            </li>
          </ul>

          <p className="mt-4 text-gray-500 text-sm">
            While no system can claim absolute invulnerability, the combination of transparency, 
            rigorous audits, economic simulations, and community engagement ensures that AMM Markets 
            remain a secure and trusted environment for liquidity providers and borrowers alike.
          </p>
        </section>

        <section id="core-contracts" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Contracts</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">AMMMarketSpoke</h3>
              <p className="text-gray-600 text-sm mb-2">
                Main entry point for user interactions. Handles deposits, withdrawals, and 
                coordinates with the Aave v4 Hub.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Upgradeable proxy pattern</li>
                <li>• Access control via roles</li>
                <li>• Pausable functionality</li>
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">LPCollateralManager</h3>
              <p className="text-gray-600 text-sm mb-2">
                Manages LP token custody, valuation, and collateral accounting.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Holds deposited LP tokens</li>
                <li>• Tracks user balances</li>
                <li>• Interfaces with oracle adapters</li>
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">LPOracleAdapter</h3>
              <p className="text-gray-600 text-sm mb-2">
                DEX-specific contracts that calculate LP token values from underlying prices.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Uniswap v3 adapter</li>
                <li>• Balancer adapter</li>
                <li>• Curve adapter (planned)</li>
              </ul>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">LiquidationManager</h3>
              <p className="text-gray-600 text-sm mb-2">
                Handles liquidation logic, bonus calculations, and collateral seizure.
              </p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Health factor validation</li>
                <li>• Close factor enforcement</li>
                <li>• Liquidation event emission</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="trust-boundaries" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trust Boundaries</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The protocol has clearly defined trust assumptions:
          </p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-3 py-1">
              <h3 className="font-semibold text-gray-900 mb-1">Trustless</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• User funds custody (held by smart contracts)</li>
                <li>• Liquidation execution (permissionless)</li>
                <li>• Interest calculations (on-chain math)</li>
              </ul>
            </div>
            <div className="border-l-4 border-amber-500 pl-3 py-1">
              <h3 className="font-semibold text-gray-900 mb-1">Semi-Trusted</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Oracle price feeds (Chainlink + TWAP)</li>
                <li>• Parameter updates (governance + timelock)</li>
                <li>• LP token whitelisting (governance)</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 pl-3 py-1">
              <h3 className="font-semibold text-gray-900 mb-1">Trusted</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Emergency pause (guardian multi-sig)</li>
                <li>• Contract upgrades (governance + timelock)</li>
                <li>• Initial parameter setting (team)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="audits" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Audits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Security audits performed on AMM Market contracts:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Auditor</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Scope</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Date</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Trail of Bits</td>
                  <td className="px-4 py-2 text-gray-600">Core contracts</td>
                  <td className="px-4 py-2 text-gray-600">Q2 2026</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Scheduled</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">OpenZeppelin</td>
                  <td className="px-4 py-2 text-gray-600">Oracle adapters</td>
                  <td className="px-4 py-2 text-gray-600">Q2 2026</td>
                  <td className="px-4 py-2"><span className="text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-0.5 rounded">Scheduled</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-medium">Spearbit</td>
                  <td className="px-4 py-2 text-gray-600">Full protocol</td>
                  <td className="px-4 py-2 text-gray-600">Q3 2026</td>
                  <td className="px-4 py-2"><span className="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">Planned</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-500 text-sm mt-3">
            Audit reports will be published upon completion.
          </p>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Overview of smart contract security, trust boundaries, and audit considerations."
        sectionColor="rose"
      />
    </div>
  )
}
