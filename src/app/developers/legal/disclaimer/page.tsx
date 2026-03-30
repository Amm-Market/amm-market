import type { Metadata } from "next"
import Link from "next/link"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "AMM Market legal disclaimer - general disclaimer, no financial advice, risks, warranties, and limitation of liability.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "general-disclaimer", title: "General Disclaimer" },
  { id: "no-financial-advice", title: "No Financial Advice" },
  { id: "risks", title: "Risks" },
  { id: "no-warranties", title: "No Warranties" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "related-policies", title: "Related Policies" },
]

export default function LegalDisclaimerPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Disclaimer</h1>
        <p className="text-lg text-gray-600 mb-8">
          Legal notices governing use of the protocol and documentation.
        </p>

        <p className="text-gray-600 text-sm border-l-4 border-amber-400 pl-3 mb-8">
          <strong>Important:</strong> Please read this disclaimer carefully before using 
          AMM Market. By using the protocol, you acknowledge that you have read, understood, 
          and agree to be bound by these terms. For complete terms, please review our{" "}
          <Link href="/terms" className="text-blue-600 underline hover:text-blue-700">Terms of Service</Link> and{" "}
          <Link href="/privacy" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</Link>.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This disclaimer supplements and should be read in conjunction with our full{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>. 
            The Terms of Service constitute a legally binding agreement between you and AMM Market 
            concerning your access to and use of the protocol and related services.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 text-sm">
              <strong>From our homepage:</strong> &quot;Borrowing against LP tokens involves risk, including 
              liquidation if market conditions move against your position. AMM Market does not custody 
              your funds, rehypothecate LP positions, or alter how your liquidity operates on underlying 
              AMMs. Only borrow amounts you are comfortable maintaining through market volatility.&quot;
            </p>
          </div>
        </section>

        <section id="general-disclaimer" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is an experimental decentralized finance protocol. The protocol is 
            provided &quot;as is&quot; without any representations or warranties of any kind, either 
            express or implied.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            As stated in our Terms of Service (Section 2): &quot;The AMM Market Protocol includes 
            functionality whereby certain open source smart contracts can receive and hold certain 
            digital currency or other crypto assets. There is a risk that the open source software, 
            including any upgrades, may introduce bugs, viruses, Trojan horses, or other vulnerabilities 
            or changes that could result in a partial or complete disruption of the protocol or loss, 
            damage, or destruction of your crypto assets.&quot;
          </p>
          <p className="text-gray-600 leading-relaxed">
            Any reliance you place on such information is strictly at your own risk. We will 
            not be liable for any loss or damage arising from the use of this protocol or 
            documentation.
          </p>
        </section>

        <section id="no-financial-advice" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Financial Advice</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As stated prominently in our Terms of Service: &quot;THE SERVICES INCLUDE, AMONG OTHER THINGS, 
            THE INFORMATIONAL RESOURCES, WHICH MAY PROVIDE INFORMATION RELATED TO AMM MARKET. AMM MARKET 
            IS NOT A BROKER, DEALER, EXCHANGE, INVESTMENT ADVISER, CUSTODIAN OR FINANCIAL SERVICE PROVIDER 
            OF ANY KIND. WE DO NOT HAVE A FIDUCIARY RELATIONSHIP WITH, OR OBLIGATION TO, YOU IN CONNECTION 
            WITH THE SERVICES.&quot;
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• This material is for informational purposes only</li>
              <li>• It is not an offer or solicitation to invest in, buy, or sell any interests or shares</li>
              <li>• It is not intended to provide accounting, legal, tax advice, or investment recommendations</li>
              <li>• We are not registered investment advisors or broker-dealers</li>
              <li>• We do not provide personalized financial recommendations</li>
              <li>• Past performance does not guarantee future results</li>
              <li>• You should consult qualified professionals before making financial decisions</li>
              <li>• Cryptocurrency investments are highly volatile and risky</li>
            </ul>
          </div>
        </section>

        <section id="risks" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Risks</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Section 8 of our Terms of Service outlines the risks associated with using AMM Market:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-2">Experimental Technology</h3>
              <p className="text-gray-600 text-sm">
                &quot;The Services may incorporate experimental and novel technology and the use of such 
                technology involves a high degree of risk. There are numerous reasons the Services or 
                underlying blockchain networks could fail in an unexpected way, resulting in the total 
                and absolute loss of any crypto assets held in your digital wallet.&quot;
              </p>
            </div>

            <div className="border-l-4 border-amber-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-2">Operational Challenges</h3>
              <p className="text-gray-600 text-sm">
                &quot;The Services and/or underlying blockchain networks may experience or be the subject 
                of cyber-attacks, unexpected surges in transaction volume, or other operational or 
                technical difficulties or vulnerabilities that may cause interruptions related to 
                your use of the Services.&quot;
              </p>
            </div>

            <div className="border-l-4 border-amber-400 pl-3">
              <h3 className="font-semibold text-gray-900 mb-2">Regulatory Uncertainty</h3>
              <p className="text-gray-600 text-sm">
                &quot;The Services, the AMM Market Protocol and/or any underlying blockchain networks may 
                not be available or appropriate for use in all jurisdictions and you may be subject 
                to legal and regulatory compliance obligations in connection with your use of the 
                Services in certain jurisdictions.&quot;
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">LP-Specific Risks</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Impermanent loss can reduce collateral value</li>
                <li>• Liquidation risk if market conditions move against your position</li>
                <li>• Underlying DEX smart contract risk</li>
                <li>• Concentrated liquidity positions can become worthless out of range</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="no-warranties" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Warranties</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As stated in Section 9.1 of our Terms of Service:
          </p>
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-300 text-sm">
              &quot;THE SERVICES ARE ISSUED ON AN &apos;AS-IS&apos; AND &apos;AS AVAILABLE&apos; BASIS AND AMM MARKET DOES NOT 
              MAKE ANY WARRANTIES WITH RESPECT TO SUCH &apos;AS-IS&apos; AND &apos;AS AVAILABLE&apos; BASIS OR OTHERWISE 
              IN CONNECTION WITH THE TERMS AND AMM MARKET HEREBY DISCLAIMS ANY AND ALL EXPRESS, IMPLIED 
              OR STATUTORY WARRANTIES AND CONDITIONS, INCLUDING ANY WARRANTIES OR CONDITIONS OF 
              NON-INFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, 
              ERROR-FREE OR UNINTERRUPTED OPERATION.&quot;
            </p>
          </div>
        </section>

        <section id="limitation-of-liability" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As stated in Section 9.2 of our Terms of Service:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <p className="text-gray-600 text-sm">
              &quot;IN NO EVENT SHALL AMM MARKET BE LIABLE TO YOU FOR ANY CONSEQUENTIAL, INDIRECT, INCIDENTAL 
              OR SPECIAL DAMAGES OF ANY TYPE OR NATURE HOWEVER ARISING, INCLUDING, WITHOUT LIMITATION, 
              EXEMPLARY OR PUNITIVE DAMAGES, LOST DATA, LOST PROFITS OR REVENUES OR DIMINUTION IN VALUE, 
              ARISING OUT OF OR RELATING TO THE SERVICES OR YOUR USE OF THE AMM MARKET PROTOCOL.&quot;
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This limitation applies regardless of the theory of liability (contract, tort, 
            strict liability, or otherwise) and even if we have been advised of the possibility 
            of such damages. Under no circumstances shall AMM Market&apos;s aggregate liability exceed 
            one-hundred U.S. dollars ($100.00).
          </p>
        </section>

        <section id="related-policies" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Policies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For complete legal information, please review the following documents:
          </p>
          
          <div className="space-y-3">
            <Link href="/terms" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50/50 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Terms of Service</h3>
              <p className="text-gray-600 text-sm">
                The complete legally binding agreement governing your use of AMM Market, including 
                eligibility, prohibited activities, intellectual property, dispute resolution, and more.
              </p>
            </Link>

            <Link href="/privacy" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50/50 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">
                How we collect, use, and protect your personal information, including data retention, 
                cookies, and your rights under GDPR, CCPA, and other privacy regulations.
              </p>
            </Link>

            <Link href="/developers/legal" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50/50 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Restricted Territories</h3>
              <p className="text-gray-600 text-sm">
                Current list of jurisdictions restricted from accessing AMM Market services.
              </p>
            </Link>
          </div>
        </section>

        <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 mt-8">
          <p className="text-gray-600 text-sm">
            <strong>Last Updated:</strong> January 2026
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This disclaimer may be updated from time to time. Continued use of the protocol 
            constitutes acceptance of any changes. Please refer to our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> for 
            the most current and complete legal terms.
          </p>
        </div>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Legal notices governing use of the protocol and documentation."
        sectionColor="slate"
      />
    </div>
  )
}
