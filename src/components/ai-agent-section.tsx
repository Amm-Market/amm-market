import PhoneMockup from "./phone-mockup"
import CheckIcon from "./check-icon"

export default function AiAgentSection() {
  return (
    <div className="pb-16 md:pb-32 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <PhoneMockup />

      <div className="flex flex-col gap-3">
        <p className="text-emerald-500 text-xs sm:text-sm">Experience AI that anticipates your needs.</p>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-tight">Mini AI Agent turns your investment ideas into real-time actions</h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            providing data-driven insights and automated trade execution to capture optimal yield opportunities.
          </p>
        </div>

        <ul className="flex flex-col gap-2 mt-1 mb-4">
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Assessing your requests with advanced analysis.</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Effortlessly browsing the web for relevant data and trends.</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Perform complex DeFi activities unlocking superior returns.</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <CheckIcon />
            </div>
            <span className="text-gray-900 text-xs sm:text-sm">Leveraging contextual memory for precise, tailored decisions.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

