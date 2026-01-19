"use client"
import Link from "next/link"
import WaitlistCTA from "@/components/waitlist-cta"

export default function WebappPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Hero Section */}
          <section>
            <div className="max-w-[650px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-400 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Webapp</h1>
                  <p className="text-gray-500">Your Gateway to DeFi</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                The Dex Mini Webapp is a beautifully designed, intuitive interface that brings all our DeFi
                products together in one seamless experience. Swap, earn, borrow, and manage your portfolio
                with ease.
              </p>

              <div className="flex gap-3">
                <Link
                  href="/early-access"
                  className="inline-flex items-center px-5 py-2.5 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-lg transition-colors"
                >
                  Launch App
                </Link>
                <Link
                  href="/developers"
                  className="inline-flex items-center px-5 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  View Docs
                </Link>
              </div>
            </div>
          </section>

          {/* App Preview */}
          <section>
            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-semibold text-gray-900">Swap</span>
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>You pay</span>
                      <span>Balance: 1,234.56</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <input type="text" value="1,000" readOnly className="bg-transparent text-2xl font-semibold w-24 outline-none" />
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">USDC</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>You receive</span>
                      <span>Balance: 0.42</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <input type="text" value="0.385" readOnly className="bg-transparent text-2xl font-semibold w-24 outline-none" />
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border">
                        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                        <span className="font-medium">ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-xl transition-colors">
                  Connect Wallet
                </button>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">One-Click Actions</h3>
                </div>
                <p className="text-gray-600">
                  Complex DeFi strategies simplified into single transactions. Zap into LP positions, 
                  leverage trade, or compound rewards with one click.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Portfolio Dashboard</h3>
                </div>
                <p className="text-gray-600">
                  Track all your positions, earnings, and performance metrics in real-time. 
                  Visualize your DeFi portfolio across all supported chains.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-fuchsia-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-fuchsia-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Built-in Security</h3>
                </div>
                <p className="text-gray-600">
                  Transaction simulation, approval management, and risk warnings help you 
                  avoid costly mistakes and malicious contracts.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Mobile Responsive</h3>
                </div>
                <p className="text-gray-600">
                  Full functionality on any device. Manage your DeFi positions on the go with 
                  our mobile-optimized interface.
                </p>
              </div>
            </div>
          </section>

          {/* Supported Wallets */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Supported Wallets</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["MetaMask", "Rainbow", "Coinbase", "WalletConnect"].map((wallet) => (
                <div key={wallet} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-600">{wallet[0]}</span>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">{wallet}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <WaitlistCTA />
        </div>
      </main>
    </div>
  )
}
