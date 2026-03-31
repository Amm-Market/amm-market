"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDES = [
  {
    id: "collateral",
    title: "Use your LP as collateral",
    description:
      "Deposit your LP tokens from any supported DEX. Your position stays active and keeps earning fees while you borrow against it.",
  },
  {
    id: "borrow",
    title: "Borrow across DeFi",
    description:
      "Access liquidity from 500+ pools across Uniswap, Curve, Aerodrome and more. One place to put your idle LP to work.",
  },
  {
    id: "aave-v4",
    title: "Built on Aave v4",
    description:
      "Permissionless, on-chain, and designed for the entire DeFi liquidity. No repayment schedules—just keep your LTV under the threshold.",
  },
] as const

/**
 * BuildTomorrowSection - 3-slide carousel (no heading).
 * Accessible carousel with prev/next and slide captions.
 */
export function BuildTomorrowSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1))
  }

  const goNext = () => {
    setCurrentIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1))
  }

  return (
    <section
      data-section="slideshow-module-record"
      data-id="theme-switcher"
      data-theme="beige"
      data-apply-globally="true"
      className="w-full bg-inherit"
    >
      <div className="site-content-shell pt-2 sm:pt-4">
        {/* Carousel */}
        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 sm:rounded-xl">
            {SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-hidden={idx !== currentIndex}
                aria-describedby={`slide-desc-${slide.id}`}
                className={idx !== currentIndex ? "hidden" : ""}
              >
                {/* Placeholder: portrait on mobile, landscape on desktop */}
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-gray-200 to-gray-300 sm:aspect-[2/1]" />
                <div
                  id={`slide-desc-${slide.id}`}
                  className="border-t border-gray-200 bg-white p-4 sm:p-6"
                >
                  <p className="text-base font-semibold text-offBlack sm:text-lg">
                    {slide.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600 sm:mt-2">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Caption tabs (desktop only) */}
          <div className="mt-6 hidden gap-4 sm:flex">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-current={currentIndex === idx}
                className="flex flex-1 flex-col text-left opacity-70 transition-opacity hover:opacity-100 aria-current:opacity-100"
              >
                <p className="text-base font-semibold text-offBlack">
                  {slide.title}
                </p>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {slide.description}
                </p>
              </button>
            ))}
          </div>

          {/* Prev/Next + counter: single row, touch-friendly on mobile */}
          <div className="mt-5 flex items-center justify-between gap-4 sm:mt-6">
            <span className="min-w-[2.5rem] text-sm tabular-nums text-gray-600">
              {currentIndex + 1} / {SLIDES.length}
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Back"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors active:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Forward"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors active:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildTomorrowSection
