import { SectionHeader } from "@/components/shared"

/**
 * BorrowConfidence - Security cards showing risk management features.
 */
export function BorrowConfidence() {
  return (
    <div className="pt-16 md:pt-20 border-t border-gray-100">
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="Borrow with Confidence"
          description="Every component is designed with trust and safety as the foundation."
          className="max-w-[600px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-y-10 gap-x-5 mt-10 md:mt-16">
        {/* Card 1 - LP-aware risk models - Concentric Rings */}
        <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
          <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Concentric rings */}
              <div className="relative w-[180px] h-[180px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-spin-slow"></div>
                {/* Middle ring */}
                <div className="absolute inset-[20px] rounded-full border-2 border-blue-300 animate-spin-slow-reverse"></div>
                {/* Inner ring */}
                <div className="absolute inset-[40px] rounded-full border-2 border-blue-400 animate-spin-slow"></div>
                {/* Center shield icon */}
                <div className="absolute inset-[55px] rounded-full bg-blue-500 flex items-center justify-center animate-pulse-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* Stats at bottom */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
              <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white border border-gray-200">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Pool Depth</span>
                <span className="text-sm font-semibold text-blue-600">$24.5M</span>
              </div>
              <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white border border-gray-200">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Volatility</span>
                <span className="text-sm font-semibold text-green-600">Low</span>
              </div>
              <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white border border-gray-200">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Oracle</span>
                <span className="text-sm font-semibold text-blue-600">98/100</span>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold mt-5 text-center text-gray-900">LP-aware risk models</div>
          <div className="text-base text-gray-600 text-center mt-2">Track pool composition, volatility, and oracle quality.</div>
        </div>

        {/* Card 2 - Price-range aware oracles - Chart with range bands */}
        <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
          <div className="relative rounded-[20px] overflow-hidden w-full h-[340px] bg-gray-50">
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[260px]">
              {/* LIVE badge */}
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-100 border border-blue-200 w-fit mx-auto mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider">Live</span>
              </div>
              {/* Price display */}
              <div className="text-center mb-3">
                <span className="text-3xl font-bold text-blue-600 animate-pulse-soft">$1,847.52</span>
                <div className="text-xs text-gray-500 mt-1">ETH / USD</div>
              </div>
              {/* Chart area */}
              <div className="relative w-full h-[100px] bg-white rounded-lg border border-gray-200 p-2">
                {/* Safe range band */}
                <div className="absolute top-[30%] left-2 right-2 h-[40%] bg-blue-50 border-y border-blue-200"></div>
                {/* Stylized line chart */}
                <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <path className="animate-draw-line" d="M0,60 Q30,50 60,55 T120,35 T180,40 T240,25 T300,30" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  {/* Current price dot */}
                  <circle cx="240" cy="25" r="5" fill="#3b82f6" className="animate-pulse" />
                  <circle cx="240" cy="25" r="2" fill="white" />
                </svg>
              </div>
              {/* Range labels */}
              <div className="flex justify-between w-full mt-2 px-1">
                <div className="text-xs text-gray-500">$1,720</div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-100">
                  <span className="text-xs text-green-700 font-medium">In Range</span>
                </div>
                <div className="text-xs text-gray-500">$1,950</div>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Price-range aware oracles</div>
          <div className="text-base text-gray-600 text-center mt-2">Industry-leading security protects your investments.</div>
        </div>

        {/* Card 3 - Per-position health checks - Circular gauge */}
        <div className="flex-1 max-w-[400px] mx-auto lg:mx-0">
          <div className="relative overflow-hidden rounded-[20px] w-full h-[340px] bg-gray-50">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Circular gauge */}
              <div className="relative w-[160px] h-[160px]">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background arc */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" strokeDasharray="198 66" />
                  {/* Blue arc - 92% filled */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeDasharray="182 82" />
                </svg>
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600 animate-pulse-soft">92%</span>
                  <span className="text-xs text-green-600 font-medium">Healthy</span>
                </div>
              </div>
              {/* Status indicators */}
              <div className="flex gap-3 mt-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-700">LTV 75%</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-700">Buffer 42%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold mt-5 text-center text-gray-900">Per-position health checks</div>
          <div className="text-base text-gray-600 text-center mt-2">Dynamically adjust loan-to-value ratios and liquidation thresholds.</div>
        </div>
      </div>
    </div>
  )
}

export default BorrowConfidence
