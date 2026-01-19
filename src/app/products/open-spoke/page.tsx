"use client"
import Link from "next/link"
import WaitlistCTA from "@/components/waitlist-cta"

export default function OpenSpokePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Hero Section */}
          <section>
            <div className="max-w-[650px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Open Spoke</h1>
                  <p className="text-gray-500">Permissionless Cross-Chain Liquidity</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Open Spoke is our permissionless cross-chain liquidity protocol that enables seamless asset transfers
                and swaps across multiple blockchain networks without intermediaries or trusted bridges.
              </p>

              <div className="flex gap-3">
                <Link
                  href="/early-access"
                  className="inline-flex items-center px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                >
                  Get Early Access
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

          {/* Features */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Instant Finality</h3>
                </div>
                <p className="text-gray-600">
                  Achieve near-instant cross-chain transactions with our optimistic execution model backed by
                  EigenLayer's restaking security guarantees.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Trustless Security</h3>
                </div>
                <p className="text-gray-600">
                  No centralized bridges or multisigs. Security is derived from cryptographic proofs and
                  economic guarantees through staked collateral.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Unified Liquidity</h3>
                </div>
                <p className="text-gray-600">
                  Access deep liquidity pools across all supported chains through a single interface.
                  No more fragmented liquidity or slippage issues.
                </p>
              </div>
            </div>
          </section>

          {/* Supported Chains */}
          <section>
            <div className="max-w-[650px] mb-6">
              <h2 className="text-2xl font-bold">Supported Networks</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Ethereum", "Arbitrum", "Base", "Unichain"].map((chain) => (
                <div key={chain} className="p-4 border border-gray-200 rounded-xl text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-600">{chain[0]}</span>
                  </div>
                  <p className="font-medium text-gray-900">{chain}</p>
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
