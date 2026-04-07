"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const FEATURE_DURATION = 10000

const featureHighlights = [
  {
    label: "Isolated Spoke markets",
    description:
      "Each Spoke market isolates LP-specific valuation, risk controls, and liquidation logic, so stress in one venue or pool design cannot cascade across the rest of the protocol or compromise unrelated positions.",
    href: "/lightpaper#protocol-architecture",
    linkLabel: "Protocol Architecture",
  },
  {
    label: "Dual-oracle pricing",
    description:
      "Chainlink feeds and AMM TWAP pricing must agree within tolerance before any loan action is confirmed, reducing exposure to flash-loan manipulation, transient price distortion, or a single toxic oracle read.",
    href: "/lightpaper#risk-management",
    linkLabel: "Risk Management",
  },
  {
    label: "Always overcollateralized",
    description:
      "Every loan remains overcollateralized through conservative borrowing limits, adaptive loan-to-value thresholds, and live health monitoring that surfaces risk before it has room to compound.",
    href: "/lightpaper#risk-management",
    linkLabel: "Risk Management",
  },
  {
    label: "Borrower-protective liquidation",
    description:
      "Liquidation is designed to unwind positions with controlled execution: uncollected fees are applied first, principal is only unwound as needed, and any surplus value is returned to the borrower.",
    href: "/lightpaper#liquidation-mechanism",
    linkLabel: "Liquidation Mechanism",
  },
]

export default function HomepageTestimonialSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()

    const progressInterval = window.setInterval(() => {
      const elapsed = Date.now() - startTime
      const nextProgress = Math.min((elapsed / FEATURE_DURATION) * 100, 100)
      setProgress(nextProgress)

      if (nextProgress >= 100) {
        window.clearInterval(progressInterval)
        setIsAnimating(true)
        window.setTimeout(() => {
          setProgress(0)
          setCurrentFeature((previous) => (previous + 1) % featureHighlights.length)
          setIsAnimating(false)
        }, 300)
      }
    }, 200)

    return () => window.clearInterval(progressInterval)
  }, [currentFeature])

  const handleFeatureChange = (index: number) => {
    if (index === currentFeature) {
      return
    }

    setIsAnimating(true)
    window.setTimeout(() => {
      setProgress(0)
      setCurrentFeature(index)
      setIsAnimating(false)
    }, 300)
  }

  const feature = featureHighlights[currentFeature]

  return (
    <div className="py-8 md:py-10">
      <div className="mb-8 space-y-3 md:mb-10">
        <SectionEyebrow>Borrow with confidence</SectionEyebrow>
        <SectionTitle>Protection built into every loan.</SectionTitle>
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
                <div
                  className={`h-full bg-gray-900 transition-none ${currentFeature === index ? "" : "w-0"}`}
                  style={{ width: currentFeature === index ? `${progress}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-3/5 lg:pl-12 pt-8 lg:pt-0 flex flex-col justify-center">
          <div className={`min-h-[200px] md:min-h-[180px] transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <p className="max-w-[39rem] text-[1rem] leading-[1.55] text-gray-900 md:text-[1.18rem] lg:text-[1.35rem]">
              {feature.description}
            </p>
            <div className="mt-6 flex justify-end">
              <Link
                href={feature.href}
                aria-label={`Open ${feature.linkLabel} in the lightpaper`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M5.25 12.75 12.75 5.25M7 5.25h5.75V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
