import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left column with text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Have more questions?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Check out the Help & Support center for more information and detailed guides on Dex Mini.
            </p>
            <Link href="/research" className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium">
              Help & Support <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right column with decorative element */}
          <div className="flex-1">
            <div className="bg-blue-100 rounded-3xl p-8 relative overflow-hidden h-40 w-full">
              {/* Decorative circular elements resembling the Aave logo */}
              <div className="absolute right-0 top-0 h-64 w-64 bg-blue-300 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute right-16 top-16 h-16 w-16 bg-blue-200 rounded-full"></div>
              <div className="absolute right-40 top-16 h-16 w-16 bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

