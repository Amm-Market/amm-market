"use client"

import Link from "next/link"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "access-restrictions", title: "Access Restrictions" },
  { id: "restricted-jurisdictions", title: "Restricted Jurisdictions" },
  { id: "compliance", title: "Compliance" },
  { id: "related-policies", title: "Related Policies" },
]

const restrictedJurisdictions = [
  { country: "Iran", reason: "OFAC sanctions" },
  { country: "North Korea", reason: "OFAC sanctions" },
  { country: "Russia", reason: "OFAC sanctions" },
  { country: "Syria", reason: "OFAC sanctions" },
  { country: "Ukraine (Crimea, Donetsk, and Luhansk regions)", reason: "OFAC sanctions" },
  { country: "United States of America", reason: "Pending regulatory clarity" },
]

export default function SecurityDisclosuresPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Restricted Territories</h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is maintained to reflect the most current list of Restricted Jurisdictions for the AMM Market domain.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In accordance with our <Link href="/terms" className="text-blue-600 hover:underline">Terms of Use</Link>, 
            access to the AMM Market website and its associated services is restricted for individuals or entities 
            in certain jurisdictions. This page provides the current list of restricted territories and explains 
            the access restrictions in place.
          </p>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800 text-sm">
              <strong>Important:</strong> Any attempt to access the AMM Market platform from a Restricted 
              Jurisdiction will result in immediate redirection to the Terms of Use and a denial of access.
            </p>
          </div>
        </section>

        <section id="access-restrictions" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Access Restrictions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Access to the AMM Market website and its associated services is restricted for individuals or 
            entities who:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• <strong>Reside within</strong> any of the Restricted Jurisdictions</li>
                <li>• <strong>Are citizens of</strong> any of the Restricted Jurisdictions</li>
                <li>• <strong>Are physically located within</strong> any of the Restricted Jurisdictions</li>
                <li>• <strong>Are incorporated within</strong> any of the Restricted Jurisdictions</li>
                <li>• <strong>Maintain a registered office within</strong> any of the Restricted Jurisdictions</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mt-4">
            These restrictions are defined in AMM Market's <Link href="/terms" className="text-blue-600 hover:underline">Terms of Use</Link> and 
            are enforced to comply with applicable laws and regulations.
          </p>
        </section>

        <section id="restricted-jurisdictions" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Restricted Jurisdictions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The following jurisdictions are currently restricted from accessing AMM Market services:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Jurisdiction</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {restrictedJurisdictions.map((item) => (
                  <tr key={item.country}>
                    <td className="px-4 py-2 text-gray-900 font-medium">{item.country}</td>
                    <td className="px-4 py-2 text-gray-600">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> This list may be updated from time to time in response to changes in 
              applicable laws, regulations, or sanctions programs. Users are responsible for ensuring their 
              continued compliance with these restrictions.
            </p>
          </div>
        </section>

        <section id="compliance" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As stated in our Terms of Use (Section 1.2), you may not access or use the Services if you are:
          </p>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• The subject of any sanctions administered or enforced by the U.S. Department of the 
                Treasury's Office of Foreign Assets Control (OFAC), the U.S. Department of State, or any 
                other governmental authority with jurisdiction</li>
              <li>• Identified on the Denied Persons, Entity, or Unverified Lists of the U.S. Department 
                of Commerce's Bureau of Industry and Security</li>
              <li>• Located, organized, or resident in a country or territory that is, or whose government 
                is, the subject of economic sanctions</li>
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed mt-4">
            Users are solely responsible for ensuring their use of the protocol complies with all applicable 
            laws and regulations in their jurisdiction.
          </p>
        </section>

        <section id="related-policies" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Policies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For complete information about your rights and obligations when using AMM Market, please review:
          </p>
          
          <div className="space-y-3">
            <Link href="/terms" className="block p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-blue-900 mb-1">Terms of Service</h3>
              <p className="text-blue-800 text-sm">
                Complete terms and conditions governing your use of AMM Market services, including 
                eligibility requirements, prohibited activities, and dispute resolution.
              </p>
            </Link>

            <Link href="/privacy" className="block p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
              <h3 className="font-semibold text-purple-900 mb-1">Privacy Policy</h3>
              <p className="text-purple-800 text-sm">
                Information about how we collect, use, and protect your personal information when 
                you use our services.
              </p>
            </Link>

            <Link href="/developers/legal/disclaimer" className="block p-4 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors">
              <h3 className="font-semibold text-amber-900 mb-1">Legal Disclaimer</h3>
              <p className="text-amber-800 text-sm">
                Important disclaimers regarding risks, warranties, and liability limitations.
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Restricted territories and access restrictions for AMM Market services."
        sectionColor="slate"
      />
    </div>
  )
}
