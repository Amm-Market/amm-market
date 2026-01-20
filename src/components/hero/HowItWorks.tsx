import { DeFiTerm } from "@/components/defi-term"
import { SectionHeader } from "@/components/shared"

/**
 * HowItWorks - 3-step process explaining how borrowing works.
 */
export function HowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-0 py-16 md:py-24">
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="How borrowing works"
          description="Get liquidity from your LP positions in three simple steps."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-16">
        {/* Step 1 */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <span className="text-5xl md:text-6xl font-bold text-gray-300">1</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
            Deposit your LP position
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            Deposit your <DeFiTerm term="lp-tokens">LP tokens</DeFiTerm> from any supported <DeFiTerm term="dex">DEX</DeFiTerm>. Your position stays active and continues earning trading fees.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <span className="text-5xl md:text-6xl font-bold text-gray-300">2</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
            Receive your loan instantly
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            USDC will be deposited into your wallet. Borrow up to 80% of your LP value based on pool risk parameters.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <span className="text-5xl md:text-6xl font-bold text-gray-300">3</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
            Repay on your timeline
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            There are no repayment schedules or deadlines. Your <DeFiTerm term="ltv">loan-to-value ratio</DeFiTerm> must remain under the <DeFiTerm term="liquidation-threshold">liquidation threshold</DeFiTerm> to avoid automatic <DeFiTerm term="liquidation">liquidation</DeFiTerm>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
