/**
 * FinalCTA - Final call-to-action with email signup and disclaimer.
 */
export function FinalCTA() {
  return (
    <>
      {/* Final CTA Section */}
      <div className="py-16 md:py-20 border-t border-gray-100">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Ready to unlock your LP&apos;s potential?
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg">
            Join the waitlist and be first to access LP-backed borrowing on Aave v4.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-12 md:py-16 border-t border-gray-200">
        <div className="space-y-4 text-xs text-gray-500">
          <p>
            Borrowing against LP tokens involves risk, including liquidation if market conditions move against your position. Amm Market does not custody your funds, rehypothecate LP positions, or alter how your liquidity operates on underlying AMMs. Loan terms, interest rates, and collateral values are enforced on-chain using transparent oracle systems and automated risk parameters. You remain in full control of your position at all times and can repay or adjust collateral whenever you choose. Only borrow amounts you are comfortable maintaining through market volatility.
          </p>
          <p>
            This material is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations or (iii) an official statement of Coinbase. Consult your advisors before making any investment decision. No representation or warranty is made, expressed or implied with respect to the accuracy of the information or to the future performance of any digital asset, financial instrument or other market or economic measure. Coinbase may have financial interests in, or relationships with, some of the entities and/or publications discussed or referenced in the materials. Coinbase does not endorse or approve links or third-party websites that may be provided in the materials.
          </p>
        </div>
      </div>
    </>
  )
}

export default FinalCTA
