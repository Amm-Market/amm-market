import { DeFiTerm } from "@/components/defi-term"
import { SectionHeader } from "@/components/shared"

/**
 * GetMoreSection - Benefits cards showing LP advantages.
 */
export function GetMoreSection() {
  return (
    <div className="pt-16 md:pt-20 border-t border-gray-100">
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="Get more out of your LPs"
          description="Maximize capital efficiency while keeping your positions active."
          className="max-w-[600px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-y-10 gap-x-5 mt-10 md:mt-16">
        {/* Card 1 - Borrow Amount */}
        <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
          <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
            <div className="absolute top-[50px] left-1/2 animate-float px-8 py-5 text-center text-5xl font-bold rounded-full bg-blue-500 text-white">
              80%
            </div>
            <div className="absolute bottom-[46px] text-sm font-medium left-1/2 -translate-x-1/2">
              <span className="flex gap-2 items-center text-blue-600">
                <DeFiTerm term="ltv">LTV Ratio</DeFiTerm>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" viewBox="0 0 16 17" className="w-5 h-5">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.333 8.783h9.334m0 0-4-4m4 4-4 4"></path>
                </svg>
              </span>
            </div>
            {/* Gauge marks */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[394px]">
              <div className="relative">
                {[50, 55, 60, 65, 70, 75, 80].map((val, idx) => (
                  <div key={val} className="absolute top-0 left-0 flex justify-start w-full animate-pulse-soft" style={{ rotate: `${18 + idx * 16}deg`, animationDelay: `${idx * 0.1}s` }}>
                    <span className="text-[10px] font-semibold w-8 text-right">{val}</span>
                    <div className="bg-blue-400 w-[30px] h-[14px] rounded-full ml-1.5 mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Maximize your capital</div>
          <div className="text-base text-gray-600 text-center mt-2">Borrow up to 80% of your LP value</div>
        </div>

        {/* Card 2 - Earnings */}
        <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
          <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
            <div className="absolute top-[50px] left-1/2 animate-float w-[243px] h-[240px] bg-white rounded-[10px] border border-gray-200">
              <div className="flex justify-center items-center gap-1 px-2 py-1 w-fit mx-auto mt-9 rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                </svg>
                <span className="text-[10px] font-semibold">Trading Fees</span>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-5xl font-bold text-blue-600 animate-pulse-soft">+12.4%</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                <span className="text-gray-500 text-xs"><DeFiTerm term="apy">APY</DeFiTerm></span>
                <div className="w-10 h-0.5 rounded bg-blue-300"></div>
                <div className="flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 16 16" className="fill-white text-white">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 9 7-7c.15-.15.4.01.33.21L8.77 6.4a.2.2 0 0 0 .19.27h3.9a.2.2 0 0 1 .14.34l-7 7c-.15.15-.4-.01-.33-.21l1.58-4.2a.2.2 0 0 0-.19-.27H3.15a.2.2 0 0 1-.14-.34"></path>
                  </svg>
                </div>
                <div className="w-3.5 h-0.5 rounded bg-blue-300"></div>
                <span className="text-gray-500 text-xs">Earned</span>
              </div>
              <div className="mx-auto mt-6 w-36 border px-4 py-1 border-blue-300 rounded-full text-center">
                <span className="text-sm font-medium text-blue-600">Keep Earning</span>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Keep earning fees</div>
          <div className="text-base text-gray-600 text-center mt-2">Your LP stays active while you borrow</div>
        </div>

        {/* Card 3 - Use Cases */}
        <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
          <div className="relative overflow-hidden rounded-[20px] w-full h-[340px] bg-gray-50">
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: '0s' }}>
                <div className="flex items-center justify-center w-11 h-11">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">Leverage trading</span>
              </div>
              <div className="flex gap-3 w-[300px] px-4 py-3 bg-blue-500 text-white rounded-lg shadow-sm items-center animate-float-simple" style={{ animationDelay: '0.15s' }}>
                <div className="flex items-center justify-center w-11 h-11">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">Yield farming</span>
              </div>
              <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center justify-center w-11 h-11">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10v7.4a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 17.4V10m20 0V6.6A1.6 1.6 0 0 0 20.4 5H3.6A1.6 1.6 0 0 0 2 6.6V10m20 0H2m4 5h3"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">Pay off debt</span>
              </div>
              <div className="flex gap-3 w-[280px] px-4 py-3 bg-white rounded-lg border border-gray-200 items-center animate-float-simple" style={{ animationDelay: '0.45s' }}>
                <div className="flex items-center justify-center w-11 h-11">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18M7 16l4-4 4 4 5-6"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">New positions</span>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Unlock new strategies</div>
          <div className="text-base text-gray-600 text-center mt-2">Use borrowed funds however you want</div>
        </div>
      </div>
    </div>
  )
}

export default GetMoreSection
