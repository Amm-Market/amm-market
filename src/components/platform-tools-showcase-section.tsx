"use client"

import { useEffect, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const SLIDES = [
  {
    id: "rewards",
    title: "Calculate your rewards",
    description:
      "Portfolio growth charts over time, based on different staking scenarios and the effect of compounding rewards.",
  },
  {
    id: "portfolio",
    title: "Manage your portfolio",
    description:
      "Clear trackers for your rewards and staking balance with one consolidated view.",
  },
  {
    id: "volatility",
    title: "Navigate market volatility",
    description:
      "Mini comes fully equipped with must-have advanced trading tools and features, addressing all your trading needs in one place.",
  },
  {
    id: "mobile",
    title: "Mobile-first design",
    description:
      "Get access to the tools and alerts you need to trade on the go.",
  },
] as const

function PlaceholderImage({
  title,
}: {
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

      <div className="relative z-10 flex max-w-[420px] flex-col items-center px-6 text-center">
        <div className="rounded-full border border-gray-200 bg-white/85 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
          Placeholder image
        </div>
        <p className="mt-4 text-[1.7rem] font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c] sm:text-[2.2rem]">
          {title}
        </p>
      </div>
    </div>
  )
}

export default function PlatformToolsShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index === SLIDES.length - 1 ? 0 : index + 1))
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      data-section="platform-tools-showcase"
      data-theme="beige"
      className="w-full bg-inherit"
    >
      <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8">
        <SectionEyebrow tone="violet">Platform Tools</SectionEyebrow>
        <SectionTitle>
          Everything you need
          <br />
          in one place.
        </SectionTitle>
      </div>

      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Platform tools showcase"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 sm:rounded-xl">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== currentIndex}
              aria-describedby={`platform-tools-slide-${slide.id}`}
              className={index !== currentIndex ? "hidden" : ""}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[2/1]">
                <PlaceholderImage title={slide.title} />
                <div aria-hidden="true" className="absolute inset-x-4 bottom-4 h-px overflow-hidden bg-white/40 sm:hidden">
                  <div
                    key={`mobile-progress-${currentIndex}`}
                    className="h-full bg-white"
                    style={{ animation: "platform-tools-progress 4.5s linear forwards", transformOrigin: "left center" }}
                  />
                </div>
              </div>

              <div
                id={`platform-tools-slide-${slide.id}`}
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
            style={{ animation: "platform-tools-progress 4.5s linear forwards", transformOrigin: "left center" }}
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className="flex flex-col text-left opacity-70 transition-opacity hover:opacity-100 aria-current:opacity-100"
            >
              <p className="text-base font-semibold text-offBlack">
                {slide.title}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {slide.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes platform-tools-progress {
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
