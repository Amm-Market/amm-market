import { Shield, MapPin, AlertTriangle } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Restricted Territories
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          This page is maintained to reflect the most current list of Restricted Jurisdictions for the Dex Mini domain
          (Dexmini.com).
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Access Restrictions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In accordance with our Terms of Use, access to the Dex Mini website and its associated services is
              restricted for individuals or entities who:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
              <li>Reside within</li>
              <li>Are citizens of</li>
              <li>Are physically located within</li>
              <li>Are incorporated within</li>
              <li>Maintain a registered office within</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              any of the Restricted Jurisdictions as defined in Dex Mini's Terms of Use. Any attempt to access the Dex
              Mini platform from a Restricted Jurisdiction will result in immediate redirection to the Terms of Use and
              a denial of access.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-red-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Current Restricted Jurisdictions:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Iran",
            "North Korea",
            "Russia",
            "Syria",
            "Ukraine (Crimea, Donetsk, and Luhansk regions)",
            "United States of America",
          ].map((country, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center"
            >
              <AlertTriangle className="h-4 w-4 text-amber-500 mr-3 flex-shrink-0" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">{country}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg p-6">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-2">Important Notice</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This list is subject to change based on regulatory developments and Dex Mini's compliance policies. Users
              are responsible for ensuring their compliance with these restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

