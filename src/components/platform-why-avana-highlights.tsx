"use client"

import { useEffect, useState } from "react"

type PlatformWhyAvanaHighlightsProps = {
  items: readonly {
    title: string
    description: string
  }[]
}

const ROTATION_MS = 4500

export default function PlatformWhyAvanaHighlights({
  items,
}: PlatformWhyAvanaHighlightsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index === items.length - 1 ? 0 : index + 1))
    }, ROTATION_MS)

    return () => window.clearInterval(intervalId)
  }, [items.length])

  return (
    <div className="w-full">
      <div
        className="relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 md:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Why Avana highlights"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {items.map((item, index) => (
            <div
              key={item.title}
              role="group"
              aria-roledescription="slide"
              aria-hidden={index !== currentIndex}
              className={index !== currentIndex ? "hidden" : ""}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[linear-gradient(180deg,#f7f4ee_0%,#efebe4_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />
                <div className="absolute inset-6 rounded-[28px] border border-white/70 bg-white/45" />
                <div className="absolute inset-x-10 top-10 h-px bg-gray-300/70" />
                <div className="absolute inset-x-10 bottom-10 h-px bg-gray-300/70" />
                <div className="absolute inset-y-10 left-10 w-px bg-gray-300/70" />
                <div className="absolute inset-y-10 right-10 w-px bg-gray-300/70" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="rounded-full border border-gray-200 bg-white/85 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
                    Why Avana
                  </div>
                  <p className="mt-4 text-[1.7rem] font-normal leading-[1.02] tracking-[-0.05em] text-[#18323c]">
                    {item.title}
                  </p>
                </div>

                <div aria-hidden="true" className="absolute inset-x-4 bottom-4 h-px overflow-hidden bg-white/40">
                  <div
                    key={`why-avana-progress-${currentIndex}`}
                    className="h-full bg-white"
                    style={{
                      animation: "why-avana-progress 4.5s linear forwards",
                      transformOrigin: "left center",
                    }}
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 bg-white p-4">
                <p className="text-base font-semibold text-offBlack sm:text-lg">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 sm:mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={currentIndex === index}
              className="min-w-[11rem] shrink-0 rounded-[1rem] border px-4 py-3 text-left text-black transition-all duration-300 aria-current:border-black/18 aria-current:bg-white aria-current:shadow-[0_10px_22px_rgba(17,17,17,0.06)] border-black/10 bg-gray-100 shadow-[0_2px_10px_rgba(17,17,17,0.04)] hover:border-black/16 hover:bg-gray-50 hover:shadow-[0_10px_18px_rgba(17,17,17,0.07)]"
            >
              <p className="text-sm font-semibold leading-snug">
                {item.title}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={`${item.title}-dot`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${item.title}`}
              aria-current={currentIndex === index}
              className="h-2.5 w-2.5 rounded-full bg-black/18 transition-all aria-current:w-6 aria-current:bg-black/70"
            />
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-4 lg:gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-2.5 pt-1 sm:pt-2">
            <p className="text-[17px] font-semibold leading-normal tracking-[-0.01em] text-gray-900 lg:text-[19px]">
              {item.title}
            </p>
            <p className="text-[15px] font-normal leading-[1.6] text-gray-600 lg:text-[16px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes why-avana-progress {
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
