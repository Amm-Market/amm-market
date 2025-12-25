export default function DevelopersSection() {
  return (
    <div className="py-6 md:py-8 relative overflow-hidden rounded-2xl">
      {/* Background image with blue overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-400"
          style={{
            backgroundImage: 'url("https://www.muravie.com/wp-content/uploads/aktarim/LSS0055.jpg")',
            filter: "blur(8px)",
            transform: "scale(1.1)", // Prevents blur from showing edges
          }}
          onError={(e) => {
            // Fallback to solid color if image fails to load
            e.currentTarget.style.backgroundImage = "none"
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-500 bg-opacity-70"></div>
      </div>

      {/* White card content */}
      <div className="relative z-10 mx-8 my-8 bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">Launch v4 on Mini</h2>

            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              Our platform is open to all sizes of developers, from solo-coders to a group of hackers to globally-scaled
              teams to build extensible Uniswap v4 hooks on top of Dex Mini Protocol.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-blue-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-blue-500 font-medium">Comprehensive Documentation</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-blue-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-blue-500 font-medium">Pre-built Templates & Examples</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-blue-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-blue-500 font-medium">Developer Support Community</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-blue-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-blue-500 font-medium">Seamless Deployment Tools</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="mt-8 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                {/* Code editor */}
                <div className="bg-white p-6">
                  <div className="font-mono text-sm">
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">1</div>
                      <div>{"import { PoolManager } from '@uniswap/v4-sdk'"}</div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">2</div>
                      <div></div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">3</div>
                      <div></div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">4</div>
                      <div className="flex items-center">
                        <span className="text-red-500 mr-2">Anomaly detected</span>
                        <div className="h-2 w-24 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">5</div>
                      <div></div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">6</div>
                      <div></div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 w-8 text-right pr-2">7</div>
                      <div className="h-2 w-16 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Alert box */}
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 ml-16">
                    <p className="text-sm text-gray-700">A security issue has been detected in your code.</p>
                    <div className="flex justify-end mt-2">
                      <button className="bg-blue-500 text-white text-xs px-3 py-0.5 rounded">remove it</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

