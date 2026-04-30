"use client"

import { useEffect, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const STEPS = [
  {
    id: "monitor",
    label: "Monitor",
    title: "Catch unhealthy positions before they turn into bad debt.",
    description:
      "Keep a live view of health factor, collateral composition, and price movement so the liquidator can react early.",
  },
  {
    id: "unwind",
    label: "Unwind",
    title: "Split the LP into the underlying legs and remove the position cleanly.",
    description:
      "LP liquidation is not a simple token seizure. The bot has to reconstruct the position, separate both sides, and unwind them in order.",
  },
  {
    id: "route",
    label: "Route",
    title: "Sell, swap, and repay through the best execution path.",
    description:
      "The liquidation desk routes the recovered assets into the debt asset, uses available liquidity, and settles the position atomically.",
  },
  {
    id: "collect",
    label: "Collect",
    title: "Take the incentive and move on to the next opportunity.",
    description:
      "Specialized bots and larger operations can earn liquidation premiums while supplying the coverage Avana needs.",
  },
] as const

function LiquidatorPreviewCard({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#efe8e3_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />
      <div className="absolute inset-6 rounded-[28px] border border-white/70 bg-white/45 sm:inset-10" />
      <div className="absolute inset-x-10 top-10 hidden h-px bg-gray-300/70 sm:block" />
      <div className="absolute inset-x-10 bottom-10 hidden h-px bg-gray-300/70 sm:block" />
      <div className="absolute inset-y-10 left-10 hidden w-px bg-gray-300/70 sm:block" />
      <div className="absolute inset-y-10 right-10 hidden w-px bg-gray-300/70 sm:block" />

      <div className="relative z-10 flex max-w-[440px] flex-col items-center px-6 text-center">
        <div className="rounded-full border border-gray-200 bg-white/85 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
          {label}
        </div>
        <p className="mt-4 text-[1.7rem] font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c] sm:text-[2.1rem]">
          {title}
        </p>
        <p className="mt-4 max-w-[26rem] text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function BusinessLiquidatorsShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index === STEPS.length - 1 ? 0 : index + 1))
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="deferred-viewport bg-inherit">
      <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8">
        <SectionEyebrow tone="rose">Execution flow</SectionEyebrow>
        <SectionTitle>Liquidators need a route, not a shortcut.</SectionTitle>
      </div>

      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Liquidation execution showcase"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== currentIndex}
              aria-describedby={`liquidator-slide-${step.id}`}
              className={index !== currentIndex ? "hidden" : ""}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[2/1]">
                <LiquidatorPreviewCard
                  label={step.label}
                  title={step.title}
                  description={step.description}
                />
                <div aria-hidden="true" className="absolute inset-x-4 bottom-4 h-px overflow-hidden bg-white/40 sm:hidden">
                  <div
                    key={`mobile-progress-${currentIndex}`}
                    className="h-full bg-white"
                    style={{
                      animation: "liquidator-progress 4.5s linear forwards",
                      transformOrigin: "left center",
                    }}
                  />
                </div>
              </div>

              <div
                id={`liquidator-slide-${step.id}`}
                className="border-t border-gray-200 bg-white p-4 sm:hidden"
              >
                <p className="text-base font-semibold text-offBlack sm:text-lg">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 sm:mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="mt-3 hidden h-px w-full overflow-hidden bg-gray-200 sm:block">
          <div
            key={currentIndex}
            className="h-full bg-gray-700"
            style={{
              animation: "liquidator-progress 4.5s linear forwards",
              transformOrigin: "left center",
            }}
          />
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STEPS.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className="min-w-[11rem] shrink-0 rounded-[1rem] border border-black/10 bg-gray-100 px-4 py-3 text-left text-black shadow-[0_2px_10px_rgba(17,17,17,0.04)] transition-all duration-300 hover:border-black/16 hover:bg-gray-50 hover:shadow-[0_10px_18px_rgba(17,17,17,0.07)] aria-current:border-black/18 aria-current:bg-white aria-current:shadow-[0_10px_22px_rgba(17,17,17,0.06)]"
            >
              <p className="text-sm font-semibold leading-snug">{step.label}</p>
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
          {STEPS.map((step, index) => (
            <button
              key={`${step.id}-dot`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${step.label}`}
              aria-current={currentIndex === index}
              className="h-2.5 w-2.5 rounded-full bg-black/18 transition-all aria-current:w-6 aria-current:bg-black/70"
            />
          ))}
        </div>

        <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-4">
          {STEPS.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className="flex flex-col text-left opacity-70 transition-opacity hover:opacity-100 aria-current:opacity-100"
            >
              <p className="text-base font-semibold text-offBlack">{step.label}</p>
              <p className="mt-1 text-sm text-gray-600">{step.description}</p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes liquidator-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}
