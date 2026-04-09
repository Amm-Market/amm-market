"use client"

import { useEffect, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const SLIDES = [
  {
    id: "borrow",
    title: "BORROW",
    description: "Borrow against your LP position as collateral at 5.5% APR.",
  },
  {
    id: "invest",
    title: "INVEST",
    description: "Put every idle dollar to work across saving, investing, and borrowing.",
  },
  {
    id: "leverage",
    title: "PERPS",
    description: "Use LP collateral to open managed leverage or perps exposure without fully exiting your liquidity.",
  },
] as const

/**
 * BuildTomorrowSection - 3-slide carousel (no heading).
 * Accessible carousel with prev/next and slide captions.
 */
export function BuildTomorrowSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1))
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      data-section="slideshow-module-record"
      data-id="theme-switcher"
      data-theme="beige"
      data-apply-globally="true"
      className="w-full bg-inherit pb-16 md:pb-20"
    >
      <div className="site-content-shell">
        <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
          <SectionEyebrow tone="violet">Ways to use Avana</SectionEyebrow>
          <SectionTitle className="md:whitespace-nowrap">
            Borrow, Invest, or Trade Perps
          </SectionTitle>
        </div>

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
                <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-gray-200 to-gray-300 sm:aspect-[2/1]">
                  <div aria-hidden="true" className="absolute inset-x-4 bottom-4 h-px overflow-hidden bg-white/40 sm:hidden">
                    <div
                      key={`mobile-progress-${currentIndex}`}
                      className="h-full bg-white"
                      style={{ animation: "build-tomorrow-progress 4.5s linear forwards", transformOrigin: "left center" }}
                    />
                  </div>
                </div>
                <div
                  id={`slide-desc-${slide.id}`}
                  className="border-t border-gray-200 bg-white p-4 sm:hidden"
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

          <div aria-hidden="true" className="mt-3 hidden h-px w-full overflow-hidden bg-gray-200 sm:block">
            <div
              key={currentIndex}
              className="h-full bg-gray-700"
              style={{ animation: "build-tomorrow-progress 4.5s linear forwards", transformOrigin: "left center" }}
            />
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

        </div>
      </div>

      <style jsx>{`
        @keyframes build-tomorrow-progress {
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

export default BuildTomorrowSection
