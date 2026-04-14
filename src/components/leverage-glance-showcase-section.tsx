"use client"

import { useEffect, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const TABS = [
  {
    id: "collateral",
    label: "Collateral",
    title: "Supported LP positions stay at the center of the trade.",
    description:
      "Use supported AMM positions as collateral to unlock leverage and perps exposure without leaving your base liquidity behind.",
  },
  {
    id: "execution",
    label: "Execution",
    title: "Borrow, deploy, and track the leverage flow in one system.",
    description:
      "Avana abstracts the borrow and routing flow so users see one coherent position instead of several disconnected steps.",
  },
  {
    id: "controls",
    label: "Controls",
    title: "Reduce, close, or repay with fast unwind paths when needed.",
    description:
      "Track collateral, debt, leverage, and health in one dashboard with direct actions to manage exposure as conditions change.",
  },
] as const

function PlaceholderImage({
  label,
  title,
}: {
  label: string
  title: string
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#efebe4_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />
      <div className="absolute inset-6 rounded-[28px] border border-white/70 bg-white/45 sm:inset-10" />
      <div className="absolute inset-x-10 top-10 hidden h-px bg-gray-300/70 sm:block" />
      <div className="absolute inset-x-10 bottom-10 hidden h-px bg-gray-300/70 sm:block" />
      <div className="absolute inset-y-10 left-10 hidden w-px bg-gray-300/70 sm:block" />
      <div className="absolute inset-y-10 right-10 hidden w-px bg-gray-300/70 sm:block" />

      <div className="absolute inset-x-16 top-[38%] hidden h-px bg-gray-300/55 sm:block">
        <div className="h-full bg-gray-400/85" style={{ animation: "leverage-glance-line 4.5s ease-in-out infinite" }} />
      </div>

      <div className="relative z-10 flex max-w-[440px] flex-col items-center px-6 text-center">
        <div className="rounded-full border border-gray-200 bg-white/85 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
          {label}
        </div>
        <p className="mt-4 text-[1.7rem] font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c] sm:text-[2.2rem]">
          {title}
        </p>
      </div>
    </div>
  )
}

export default function LeverageGlanceShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index === TABS.length - 1 ? 0 : index + 1))
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="deferred-viewport bg-inherit">
      <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8">
        <SectionEyebrow tone="rose">At a glance</SectionEyebrow>
        <SectionTitle className="md:whitespace-nowrap">
          Trade up to 25X Leverage
        </SectionTitle>
      </div>

      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Leverage position overview"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {TABS.map((tab, index) => (
            <div
              key={tab.id}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== currentIndex}
              aria-describedby={`leverage-glance-slide-${tab.id}`}
              className={index !== currentIndex ? "hidden" : ""}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[2/1]">
                <PlaceholderImage label={tab.label} title={tab.title} />
                <div aria-hidden="true" className="absolute inset-x-4 bottom-4 h-px overflow-hidden bg-white/40 sm:hidden">
                  <div
                    key={`mobile-progress-${currentIndex}`}
                    className="h-full bg-white"
                    style={{ animation: "leverage-glance-progress 4.5s linear forwards", transformOrigin: "left center" }}
                  />
                </div>
              </div>

              <div
                id={`leverage-glance-slide-${tab.id}`}
                className="border-t border-gray-200 bg-white p-4 sm:hidden"
              >
                <p className="text-base font-semibold text-offBlack sm:text-lg">{tab.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 sm:mt-2">{tab.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="mt-3 hidden h-px w-full overflow-hidden bg-gray-200 sm:block">
          <div
            key={currentIndex}
            className="h-full bg-gray-700"
            style={{ animation: "leverage-glance-progress 4.5s linear forwards", transformOrigin: "left center" }}
          />
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className="shrink-0 border-b border-transparent px-1 py-2 text-left text-black/65 transition-colors duration-300 hover:text-black aria-current:border-black aria-current:text-black"
            >
              <p className="text-sm font-semibold leading-snug">{tab.label}</p>
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
          {TABS.map((tab, index) => (
            <button
              key={`${tab.id}-dot`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${tab.label}`}
              aria-current={currentIndex === index}
              className="h-2.5 w-2.5 rounded-full bg-black/18 transition-all aria-current:w-6 aria-current:bg-black/70"
            />
          ))}
        </div>

        <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-3">
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className="border-b border-transparent pb-3 text-left text-black/65 transition-colors duration-300 hover:text-black aria-current:border-black aria-current:text-black"
            >
              <p className="text-base font-semibold text-offBlack">{tab.label}</p>
              <p className="mt-1 text-sm text-gray-600">{tab.description}</p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes leverage-glance-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes leverage-glance-line {
          0% {
            transform: scaleX(0.3);
            transform-origin: left center;
            opacity: 0.35;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left center;
            opacity: 1;
          }
          100% {
            transform: scaleX(0.3);
            transform-origin: right center;
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  )
}
