"use client"
import Link from "next/link"
import Header from "@/components/header"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="research" />

      <main className="flex-1 pt-8 pb-16">
        <div className="max-w-[650px] mx-auto px-4 sm:px-6 space-y-16">
          {/* About Section */}
          <section>
            <h1 className="text-4xl font-bold mb-4">Say hello to Dex Mini</h1>
            <p className="text-gray-700 mb-4">
              Dex Mini Protocol is building a comprehensive suite of DeFi tools, seamlessly integrating advanced
              liquidity management, versatile lending markets, and strategic leverage opportunities.
            </p>

            <p className="text-gray-700 mb-4">
              Our groundbreaking "Money Legos" approach leverages multiple Uniswap v4 hooks as the core liquidity
              backbone, integrates Across Bridge for seamless interoperability, and employs EigenLayer for advanced risk
              analytics and dynamic risk management. This powerful combination creates a completely new unimaginary DeFi
              platform that reduces risk, and enhances capital efficiency—making Dex Mini the clear choice for both new
              beginner retail and institutional investors seeking optimized returns and sustainable yield generation.
            </p>

            <div className="my-10">
              <h3 className="text-sm text-gray-500 mb-4">Powered By</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <img src="/images/unichain-logo.svg" alt="Unichain" className="h-10 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="/images/eigenlayer-logo.png" alt="Eigenlayer" className="h-16 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg"
                    alt="Chainlink"
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Medical Imaging Section */}
          <section>
            <h2 className="text-4xl font-bold mb-6">Flagship Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Visage 7 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-600">
                      <path
                        fill="currentColor"
                        d="M21 16V4H3v12h18m0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18M5 6h14v8H5V6z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Swap</h3>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                      View Code →
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700">
                  Execute gasless trades with zero fees, slippage, and MEV exposure. Our hook combines limit order
                  functionality with Toxic MEV filtering, fostering a sustainable ecosystem where traders, liquidity
                  providers, and searchers all benefit.
                </p>
              </div>

              {/* Falcon MD */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600">
                      <path
                        fill="currentColor"
                        d="M15.5 14l5 5-1.5 1.5-5-5v-.79l-.27-.28A6.471 6.471 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3 6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79m-6 0C12 14 14 12 14 9.5S12 5 9.5 5 5 7 5 9.5 7 14 9.5 14"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Earn</h3>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                      View Code →
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700">
                  Maximize returns by providing liquidity to Uniswap pools. Our dynamic fee hook adjusts swap fees in
                  real-time based on market volatility and conditions, ensuring optimal performance.
                </p>
              </div>

              {/* MIM */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-600">
                      <path
                        fill="currentColor"
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Automate</h3>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                      View Code →
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700">
                  Enjoy fully automated liquidity management. Our hook automatically sets, rebalances, and compounds
                  your positions, reinvesting accrued LP fees effortlessly for compounded yields.
                </p>
              </div>

              {/* OsiriX MD */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Mitigate</h3>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                      View Code →
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700">
                  Safeguard your investments with our MEV Hook. It optimizes liquidity by enforcing cooldown periods,
                  protecting against front-running, sandwich attacks, and rapid-swap exploits.
                </p>
              </div>

              {/* New Card 5 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600">
                      <path
                        fill="currentColor"
                        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m11 8a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6m-2 0v6h-4v-6h4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Borrow</h3>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                      View Code →
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700">
                  Strategically select a price range for your collateral to earn Uniswap trading fees, transforming your
                  debt into a dynamic, income-generating asset.
                </p>
              </div>

              {/* New Card 6 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-600">
                      <path
                        fill="currentColor"
                        d="M6.5 10h-2v7h2v-7m6 0h-2v7h2v-7m8.5 9H2v2h19v-2m-2.5-9h-2v7h2v-7m-7-6.74V1h-2v2.26A8 8 0 0 0 2.5 11h19a8 8 0 0 0-6.5-7.74Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Bridge</h3>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                      View Code →
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700">
                  Trade with leverage in a single click. Our hook allows you to long or short assets with up to 10x
                  leverage, using Just-In-Time loans and automated risk management.
                </p>
              </div>
            </div>
          </section>

          {/* Protocol Vision Section */}
          <section>
            <h2 className="text-4xl font-bold mb-6">Protocol Vision</h2>
            <p className="text-gray-700 mb-4">
              While decentralized finance promises open, permissionless access to financial markets, it's still held
              back by fragmented liquidity, high transaction costs, and persistent risks like MEV-driven front-running.
              These challenges disproportionately impact investors across Unichain, Ethereum, Arbitrum, and
              Base—resulting in capital inefficiencies, delayed settlements, and reduced profits.
            </p>
            <p className="text-gray-700 mb-4">
              Dex Mini's vision is to eliminate these barriers by creating permissionless products built on an
              intelligent framework that unifies liquidity pools into a single, optimized ecosystem. We believe access
              to powerful financial tools shouldn't be reserved for a select few—it should be available to everyone.
              This philosophy drives everything we do at Dex Mini.
            </p>
            <p className="text-gray-700 mb-4">
              Leveraging the cutting-edge capabilities of Uniswap V4 hooks, Dex Mini seamlessly integrates a
              high-performance liquidity layer, lending markets, leverage engine, risk management system, and smart
              router contract. The result is a frictionless and efficient DeFi experience—from our user-friendly dApp to
              our easily accessible smart contracts.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is clear: to simplify the crypto industry by empowering users with the tools to overcome DeFi
              challenges. By reimagining liquidity management and capital efficiency, we are paving the way for a more
              sustainable, scalable, and profitable DeFi ecosystem.
            </p>
          </section>

          {/* Career Section */}
          <section>
            <h2 className="text-4xl font-bold mb-6">Career</h2>
            <p className="text-gray-700 mb-4">
              At Dex Mini, our culture thrives on meritocracy and is fueled by innovation. We celebrate individuals who
              take ownership, tackling complex challenges with determination and creativity. With a bold vision and a
              deep passion for Uniswap, we are dedicated to developing transformative Uniswap hook products that drive
              efficiency in DeFi markets. Join us as we shape the future of Uniswap and leave a lasting impact on the
              DeFi ecosystem.
            </p>
            <p className="text-gray-700 mb-4">
              While we don't have open roles at the moment, we're always reviewing applications from talented
              developers. If you're interested, don't hesitate to reach out to us on Twitter for more information.
            </p>
          </section>

          {/* Engage Section */}
          <section>
            <h2 className="text-4xl font-bold mb-6">Engage with Dex Mini</h2>
            <p className="text-gray-700 mb-4">
              For media inquiries and interview requests, please email{" "}
              <Link href="mailto:contact@dexmini.com" className="text-blue-600 hover:text-blue-800">
                contact@dexmini.com
              </Link>
            </p>
            <p className="text-gray-700 mb-6">You can also engage with us on social media.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="http://twitter.com/_dexmini"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
                    <path
                      fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Twitter</div>
                  <div className="text-sm text-gray-500">@_dexmini</div>
                </div>
              </Link>

              <Link
                href="http://twitter.com/_josuempia"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
                    <path
                      fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Core Dev</div>
                  <div className="text-sm text-gray-500">@_josuempia</div>
                </div>
              </Link>

              <Link
                href="http://t.me/dexmini"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
                    <path
                      fill="currentColor"
                      d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Telegram</div>
                  <div className="text-sm text-gray-500">t.me/dexmini</div>
                </div>
              </Link>

              <Link
                href="http://discord.gg/dexmini"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-500">
                    <path
                      fill="currentColor"
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Discord</div>
                  <div className="text-sm text-gray-500">discord.gg/dexmini</div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

