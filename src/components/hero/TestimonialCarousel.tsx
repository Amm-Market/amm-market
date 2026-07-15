"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useSectionActivity } from "@/components/ui/use-section-activity"
import { testimonials } from "@/data/hero-data"

const TESTIMONIAL_DURATION = 6000
const TRANSITION_DURATION = 300

/**
 * TestimonialCarousel - Auto-advancing testimonial carousel with progress bars.
 */
export function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const transitionTimerRef = useRef<number | null>(null)
  const { ref, isActive } = useSectionActivity<HTMLDivElement>()

  useEffect(() => {
    if (!isActive) return

    const advanceTimer = window.setTimeout(() => {
      setIsAnimating(true)
      transitionTimerRef.current = window.setTimeout(() => {
        setCurrentTestimonial((previous) => (previous + 1) % testimonials.length)
        setIsAnimating(false)
        transitionTimerRef.current = null
      }, TRANSITION_DURATION)
    }, TESTIMONIAL_DURATION)

    return () => {
      window.clearTimeout(advanceTimer)
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current)
        transitionTimerRef.current = null
      }
    }
  }, [currentTestimonial, isActive])

  const handleTestimonialChange = (idx: number) => {
    if (idx === currentTestimonial) return

    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current)
    }

    setIsAnimating(true)
    transitionTimerRef.current = window.setTimeout(() => {
      setCurrentTestimonial(idx)
      setIsAnimating(false)
      transitionTimerRef.current = null
    }, TRANSITION_DURATION)
  }

  const testimonial = testimonials[currentTestimonial]

  return (
    <div
      ref={ref}
      data-performance-active={isActive ? "true" : "false"}
      className="py-16 md:py-20 border-t border-gray-100"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left: Protocol list */}
        <div className="lg:w-2/5 lg:border-r border-gray-200 lg:pr-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              onClick={() => handleTestimonialChange(idx)}
              onKeyDown={(e) => e.key === 'Enter' && handleTestimonialChange(idx)}
              className="cursor-pointer py-4 border-b border-gray-100 last:border-b-0"
              role="button"
              tabIndex={0}
              aria-label={`View testimonial from ${t.author}`}
              aria-pressed={currentTestimonial === idx}
            >
              <div className="flex justify-between items-center">
                <span className={`text-base transition-all duration-300 ${currentTestimonial === idx ? "font-semibold text-gray-900" : "text-gray-500"}`}>
                  {t.protocol}
                </span>
                <span className={`text-sm transition-all duration-300 ${currentTestimonial === idx ? "text-blue-600 font-medium" : "text-gray-400"}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="h-0.5 mt-3 w-full bg-gray-200 overflow-hidden">
                {currentTestimonial === idx ? (
                  <div
                    key={`testimonial-progress-${currentTestimonial}`}
                    className="h-full origin-left bg-blue-600 testimonial-progress"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Quote content */}
        <div className="lg:w-3/5 lg:pl-12 pt-8 lg:pt-0 flex flex-col">
          <div className={`min-h-[200px] md:min-h-[180px] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed">
              &ldquo;{testimonial.quote} <span className="font-semibold">{testimonial.highlight}</span>&rdquo;
            </blockquote>
          </div>
          <div className={`flex items-center gap-3 mt-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.title}</p>
            </div>
          </div>
          {/* Pagination dots */}
          <div className="flex gap-2 mt-8 justify-end">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleTestimonialChange(idx)}
                className={`w-3 h-3 transition-colors duration-300 ${currentTestimonial === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-progress {
          animation: testimonial-progress ${TESTIMONIAL_DURATION}ms linear forwards;
        }

        @keyframes testimonial-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  )
}

export default TestimonialCarousel
