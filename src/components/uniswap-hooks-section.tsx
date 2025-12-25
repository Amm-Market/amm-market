import PhoneMockup from "./phone-mockup"
import CheckIcon from "./check-icon"

export default function UniswapHooksSection() {
  return (
    <div className="pb-16 md:pb-32 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div className="flex flex-col gap-3">
        <p className="text-emerald-500 text-xs sm:text-sm">Unlock the full potential of Uniswap Hooks</p>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-tight">Broaden your exposure</h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Access hundreds of Hooks pools across multiple networks in one place and earn industry-leading returns plus
            exclusive rewards.
          </p>
        </div>

        <ul className="flex flex-col gap-2 mt-1 mb-4">
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Multi-Network Support</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Industry-Leading Returns</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Exclusive Rewards</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Simplified Portfolio Management</span>
          </li>
        </ul>
      </div>

      <PhoneMockup />
    </div>
  )
}

