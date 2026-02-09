/**
 * HomeHero - Full-bleed gradient hero component for the home page.
 *
 * @description
 * A visually striking hero section with:
 * - Gradient background (dark blue to light gray)
 * - "Simplifying DeFi Investing for Everyone" headline
 * - Hero image
 * - 4-card feature grid (Oracleless Lending, Leverage, Security, Refinance)
 * - Bottom gradient fade
 */

import { Zap, Cpu, Lock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Flexible Pool Support",
    description: "Supports governance, staking, and long-tail pools with automatic health monitoring.",
  },
  {
    icon: Cpu,
    title: "On-Demand Capital",
    description: "Access borrowing power instantly. Interest accrues seamlessly while positions stay open.",
  },
  {
    icon: Lock,
    title: "Automated Risk Management",
    description: "The system monitors position health and manages risk so you don't have to.",
  },
  {
    icon: Sparkles,
    title: "Fully Flexible Repayment",
    description: "Repay on your terms—no fixed schedules, no penalties, complete control.",
  },
]

export default function HomeHero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(rgb(0, 22, 90) 0%, rgb(39, 61, 93) 32.21%, rgb(163, 179, 202) 65.87%, rgb(255, 255, 255) 100%)",
      }}
    >
      {/* Main content */}
      <section className="pb-12 sm:pb-16 md:pb-32 pt-[64px] sm:pt-[80px] md:pt-[120px]">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-0">
          {/* Heading row */}
          <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:grid md:grid-cols-2 md:gap-12 md:items-center text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug sm:leading-tight">
              Your Liquidity Pools<br />Command Center
            </h2>
            <p className="text-sm sm:text-base md:max-w-sm md:ml-auto text-gray-300 leading-relaxed">
              Deposit any pool, borrow up to 80% against it, track health, collect your trading fees, and manage your LP risk with zero friction.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:-mx-8">
            <div className="relative">
              <img
                alt="AMM Market web app interface"
                loading="lazy"
                width={1024}
                height={612}
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
                src="https://studio.uxpincdn.com/studio/wp-content/uploads/2024/01/drive-web-app-1024x612.png.webp"
              />
            </div>
          </div>

          {/* Feature cards */}
          <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8 bg-white/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 shrink-0 text-gray-900" />
                    <h3 className="text-sm font-medium text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom gradient fade */}
      <div
        className="absolute z-20 right-0 bottom-0 left-0 h-[140px]"
        style={{
          background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 60%)",
        }}
      />
    </div>
  )
}
