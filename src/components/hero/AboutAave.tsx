import { DeFiTerm } from "@/components/defi-term"

/**
 * AboutAave - Information section about Aave v4.
 */
export function AboutAave() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-16 md:pt-20 items-center border-t border-gray-100">
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          More about Aave v4
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-lg">
          Aave v4 is a next-generation DeFi lending protocol featuring a <DeFiTerm term="hub">Hub</DeFiTerm>-and-<DeFiTerm term="spoke">Spoke</DeFiTerm> architecture that enables cross-chain liquidity and modular risk management. Amm Market leverages Aave v4&apos;s infrastructure to provide secure, permissionless borrowing against <DeFiTerm term="lp-position">LP positions</DeFiTerm>. All loan terms, <DeFiTerm term="liquidation">liquidations</DeFiTerm>, and interest rates are enforced on-chain through battle-tested smart contracts and transparent <DeFiTerm term="oracle">oracle</DeFiTerm> systems.
        </p>
        <a
          href="https://docs.aave.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Learn more
        </a>
      </div>
      <div className="flex-shrink-0">
        <div className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-2xl border border-gray-200 flex items-center justify-center bg-white">
          <div className="flex items-center gap-3">
            <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z" fill="#B6509E" />
              <path d="M186.7 168.5c-7.5 0-14.2-4.3-17.4-11l-25.9-56.8c-1.4-3.1-4.5-5.1-7.9-5.1h-14.9c-3.4 0-6.5 2-7.9 5.1l-25.9 56.8c-3.2 6.7-9.9 11-17.4 11-10.6 0-19.2-8.6-19.2-19.2 0-2.9.7-5.8 2-8.4l38.3-83.8c5.7-12.5 18.2-20.5 32-20.5h23.2c13.8 0 26.3 8 32 20.5l38.3 83.8c1.3 2.6 2 5.5 2 8.4 0 10.6-8.6 19.2-19.2 19.2z" fill="white" />
            </svg>
            <span className="text-2xl md:text-3xl font-semibold text-gray-900">Aave</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAave
