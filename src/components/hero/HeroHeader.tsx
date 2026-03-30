import Image from "next/image"
import { DeFiTerm } from "@/components/defi-term"

/**
 * HeroHeader - Main hero section with headline, supporting text, and email CTA.
 */
export function HeroHeader() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-8 md:pt-6 md:pb-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        {/* Left Column - Hero Image */}
        <div className="flex-1 mb-10 lg:mb-0 order-2 lg:order-1 lg:flex-[1.1]">
          <div className="relative w-full max-w-[700px] lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
            <Image
              src="/images/homepage.png"
              alt="AMM Market app interface"
              width={1400}
              height={1400}
              className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
              priority
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex-1 text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
          {/* Headline */}
          <h1 className="type-display-title text-gray-900 mb-4 md:mb-6">
            <span className="lg:whitespace-nowrap">Borrow up to 80%</span>
            <br />
            <span className="lg:whitespace-nowrap">against your LPs</span>
          </h1>

          {/* Supporting Text */}
          <p className="type-page-lead text-gray-600 max-w-lg mx-auto lg:mx-0 mb-6">
            Get access to loans by using your <DeFiTerm term="lp-position">LP positions</DeFiTerm> as <DeFiTerm term="collateral">collateral</DeFiTerm>.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            />
            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap text-base">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHeader
