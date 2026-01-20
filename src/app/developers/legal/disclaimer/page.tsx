"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "general-disclaimer", title: "General Disclaimer" },
  { id: "no-financial-advice", title: "No Financial Advice" },
  { id: "no-warranties", title: "No Warranties" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "jurisdiction", title: "Jurisdiction" },
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

        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-8">
          <p className="text-yellow-800 text-sm">
            <strong>Important:</strong> Please read this disclaimer carefully before using 
            AMM Market. By using the protocol, you acknowledge that you have read, understood, 
            and agree to be bound by these terms.
          </p>
        </div>

        <section id="general-disclaimer" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is an experimental decentralized finance protocol. The protocol is 
            provided "as is" without any representations or warranties of any kind, either 
            express or implied.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The information contained in this documentation is for general informational 
            purposes only. While we strive to keep the information up to date and correct, 
            we make no representations or warranties of any kind about the completeness, 
            accuracy, reliability, suitability, or availability of the information.
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
            Nothing in this documentation or the AMM Market protocol constitutes financial, 
            investment, legal, or tax advice. The content is provided for informational 
            purposes only.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• We are not registered investment advisors or broker-dealers</li>
              <li>• We do not provide personalized financial recommendations</li>
              <li>• Past performance does not guarantee future results</li>
              <li>• You should consult qualified professionals before making financial decisions</li>
              <li>• Cryptocurrency investments are highly volatile and risky</li>
            </ul>
          </div>
        </section>

        <section id="no-warranties" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Warranties</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            THE PROTOCOL IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY 
            KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT 
            LIMITED TO:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Warranties of merchantability</li>
              <li>• Fitness for a particular purpose</li>
              <li>• Non-infringement</li>
              <li>• Accuracy or completeness of information</li>
              <li>• Uninterrupted or error-free operation</li>
              <li>• Security or safety of funds</li>
              <li>• Compatibility with other software or systems</li>
            </ul>
          </div>
        </section>

        <section id="limitation-of-liability" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AMM MARKET, 
            ITS CONTRIBUTORS, DEVELOPERS, OR AFFILIATES BE LIABLE FOR ANY:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Direct, indirect, incidental, special, consequential, or punitive damages</li>
              <li>• Loss of profits, revenue, data, or use</li>
              <li>• Business interruption</li>
              <li>• Loss of cryptocurrency or digital assets</li>
              <li>• Damages arising from smart contract bugs or exploits</li>
              <li>• Damages arising from oracle failures or manipulation</li>
              <li>• Damages arising from third-party actions</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This limitation applies regardless of the theory of liability (contract, tort, 
            strict liability, or otherwise) and even if we have been advised of the possibility 
            of such damages.
          </p>
        </section>

        <section id="jurisdiction" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jurisdiction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AMM Market is a decentralized protocol that operates on public blockchain networks. 
            The protocol is not targeted at or intended for use by persons in jurisdictions 
            where such use would be prohibited or restricted.
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200 mb-4">
            <h3 className="font-semibold text-red-900 mb-2">Restricted Jurisdictions</h3>
            <p className="text-red-800 text-sm">
              The protocol is not available to persons or entities in the following jurisdictions:
            </p>
            <ul className="text-red-700 text-sm mt-2 space-y-1">
              <li>• United States (pending regulatory clarity)</li>
              <li>• Countries subject to OFAC sanctions</li>
              <li>• Any jurisdiction where use would violate local laws</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Users are solely responsible for ensuring their use of the protocol complies with 
            all applicable laws and regulations in their jurisdiction. By using the protocol, 
            you represent and warrant that you are not located in, under the control of, or a 
            national or resident of any restricted jurisdiction.
          </p>
        </section>

        <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 mt-8">
          <p className="text-gray-600 text-sm">
            <strong>Last Updated:</strong> January 2026
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This disclaimer may be updated from time to time. Continued use of the protocol 
            constitutes acceptance of any changes.
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
