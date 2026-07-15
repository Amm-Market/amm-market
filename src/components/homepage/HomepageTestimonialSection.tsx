"use client"

import { useEffect, useRef, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { useSectionActivity } from "@/components/ui/use-section-activity"

const FEATURE_DURATION = 10000
const TRANSITION_DURATION = 300

const featureHighlights = [
  {
    label: "Isolated Spoke markets",
    description:
      "Each Spoke market isolates LP-specific valuation, risk controls, and liquidation logic, so stress in one venue or pool design cannot cascade across the rest of the protocol or compromise unrelated positions.",
  },
  {
    label: "Dual-oracle pricing",
    description:
      "Chainlink feeds and AMM TWAP pricing must agree within tolerance before any loan action is confirmed, reducing exposure to flash-loan manipulation, transient price distortion, or a single toxic oracle read.",
  },
  {
    label: "Always overcollateralized",
    description:
      "Every loan remains overcollateralized through conservative borrowing limits, adaptive loan-to-value thresholds, and live health monitoring that surfaces risk before it has room to compound.",
  },
  {
    label: "Borrower-protective liquidation",
    description:
      "Liquidation is designed to unwind positions with controlled execution: uncollected fees are applied first, principal is only unwound as needed, and any surplus value is returned to the borrower.",
  },
]

export default function HomepageTestimonialSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const transitionTimerRef = useRef<number | null>(null)
  const { ref, isActive } = useSectionActivity<HTMLDivElement>()

  useEffect(() => {
    if (!isActive) return

    let transitionTimer: number | undefined

    const advanceTimer = window.setTimeout(() => {
      setIsAnimating(true)
      transitionTimer = window.setTimeout(() => {
        setCurrentFeature((previous) => (previous + 1) % featureHighlights.length)
        setIsAnimating(false)
      }, TRANSITION_DURATION)
    }, FEATURE_DURATION)

    return () => {
      window.clearTimeout(advanceTimer)
      if (transitionTimer) {
        window.clearTimeout(transitionTimer)
      }
    }
  }, [currentFeature, isActive])

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current)
      }
    }
  }, [])

  const handleFeatureChange = (index: number) => {
    if (index === currentFeature) {
      return
    }

    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current)
    }

    setIsAnimating(true)
    transitionTimerRef.current = window.setTimeout(() => {
      setCurrentFeature(index)
      setIsAnimating(false)
      transitionTimerRef.current = null
    }, TRANSITION_DURATION)
  }

  const feature = featureHighlights[currentFeature]
  return (
    <div
      ref={ref}
      data-performance-active={isActive ? "true" : "false"}
    >
      <div className="mb-8 space-y-3 md:mb-10">
        <SectionEyebrow tone="rose">Borrow with Confidence</SectionEyebrow>
        <SectionTitle>Keep your money safe as it grows.</SectionTitle>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 lg:border-r border-gray-200 lg:pr-8">
          {featureHighlights.map((entry, index) => (
            <div
              key={entry.label}
              onClick={() => handleFeatureChange(index)}
              onKeyDown={(event) => event.key === "Enter" && handleFeatureChange(index)}
              className="cursor-pointer py-4 border-b border-gray-100 last:border-b-0"
              role="button"
              tabIndex={0}
              aria-label={`View ${entry.label}`}
              aria-pressed={currentFeature === index}
            >
              <div className="flex justify-between items-center gap-6">
                <span className={`text-base transition-all duration-300 ${currentFeature === index ? "font-semibold text-gray-900" : "text-gray-500"}`}>
                  {entry.label}
                </span>
                <span className={`text-sm transition-all duration-300 ${currentFeature === index ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="h-0.5 mt-3 w-full bg-gray-200 overflow-hidden">
                {currentFeature === index ? (
                  <div
                    key={`progress-${currentFeature}`}
                    className="h-full bg-gray-900"
                    style={{
                      animation: `feature-highlight-progress ${FEATURE_DURATION}ms linear forwards`,
                      transformOrigin: "left center",
                    }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-3/5 lg:pl-12 pt-8 lg:pt-0 flex flex-col justify-center">
          <div className={`min-h-[200px] md:min-h-[180px] transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <p className="max-w-[39rem] text-[1rem] leading-[1.55] text-gray-900 md:text-[1.18rem] lg:text-[1.35rem]">
              {feature.description}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes feature-highlight-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  )
}
