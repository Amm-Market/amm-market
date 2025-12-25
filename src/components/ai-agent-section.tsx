export default function AiAgentSection() {
  return (
    <div className="pb-16 md:pb-32 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div className="relative">
        <div className="flex items-center justify-center w-[260px] mx-auto">
          <div className="relative w-[240px] h-[480px]">
            {/* Mobile phone frame */}
            <div className="absolute inset-0 bg-gray-800 rounded-[28px] shadow-xl overflow-hidden border-[8px] border-gray-800">
              {/* Phone screen */}
              <div className="h-full w-full bg-gray-100 rounded-[20px] overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="h-4 w-full bg-gray-200 flex justify-between items-center px-3">
                  <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
                </div>
                {/* Content area */}
                <div className="flex-1 bg-gradient-to-b from-blue-50 to-white p-2 flex flex-col gap-2">
                  {/* App header */}
                  <div className="h-6 bg-white rounded-lg shadow-sm flex items-center px-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-1"></div>
                    <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                  {/* Content blocks */}
                  <div className="h-14 bg-white rounded-lg shadow-sm p-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-3/4 h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-1/2 h-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-14 bg-white rounded-lg shadow-sm p-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-2/3 h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-14 bg-white rounded-lg shadow-sm p-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-4/5 h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-2/5 h-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                {/* Navigation bar */}
                <div className="h-8 bg-white border-t border-gray-200 flex justify-around items-center px-3">
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-b-lg"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-emerald-500 text-sm">Experience AI that anticipates your needs.</p>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Mini AI Agent turns your investment ideas into real-time actions</h2>
          <p className="text-gray-600 text-sm">
            providing data-driven insights and automated trade execution to capture optimal yield opportunities.
          </p>
        </div>

        <ul className="flex flex-col gap-2 mt-1 mb-4">
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.875 5.625L8.125 14.375L3.75 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-900 text-sm">Assessing your requests with advanced analysis.</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.875 5.625L8.125 14.375L3.75 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-900 text-sm">Effortlessly browsing the web for relevant data and trends.</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.875 5.625L8.125 14.375L3.75 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-900 text-sm">Perform complex DeFi activities unlocking superior returns.</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4 text-emerald-500">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.875 5.625L8.125 14.375L3.75 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-900 text-sm">Leveraging contextual memory for precise, tailored decisions.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

