"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { homepageTestimonials } from "@/data/homepage"

const TESTIMONIAL_DURATION = 6000

/**
 * HomepageTestimonialSection - Rotating testimonial island for the homepage.
 */
export default function HomepageTestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()

    const progressInterval = window.setInterval(() => {
      const elapsed = Date.now() - startTime
      const nextProgress = Math.min((elapsed / TESTIMONIAL_DURATION) * 100, 100)
      setProgress(nextProgress)

      if (nextProgress >= 100) {
        window.clearInterval(progressInterval)
        setIsAnimating(true)
        window.setTimeout(() => {
          setProgress(0)
          setCurrentTestimonial((previous) => (previous + 1) % homepageTestimonials.length)
          setIsAnimating(false)
        }, 300)
      }
    }, 200)

    return () => window.clearInterval(progressInterval)
  }, [currentTestimonial])

  const handleTestimonialChange = (index: number) => {
    if (index === currentTestimonial) {
      return
    }

    setIsAnimating(true)
    window.setTimeout(() => {
      setProgress(0)
      setCurrentTestimonial(index)
      setIsAnimating(false)
    }, 300)
  }

  const testimonial = homepageTestimonials[currentTestimonial]

  return (
    <div className="py-16 md:py-20 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 lg:border-r border-gray-200 lg:pr-8">
          {homepageTestimonials.map((entry, index) => (
            <div
              key={entry.author}
              onClick={() => handleTestimonialChange(index)}
              onKeyDown={(event) => event.key === "Enter" && handleTestimonialChange(index)}
              className="cursor-pointer py-4 border-b border-gray-100 last:border-b-0"
              role="button"
              tabIndex={0}
              aria-label={`View testimonial from ${entry.author}`}
              aria-selected={currentTestimonial === index}
            >
              <div className="flex justify-between items-center">
                <span className={`text-base transition-all duration-300 ${currentTestimonial === index ? "font-semibold text-gray-900" : "text-gray-500"}`}>
                  {entry.protocol}
                </span>
                <span className={`text-sm transition-all duration-300 ${currentTestimonial === index ? "text-blue-600 font-medium" : "text-gray-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="h-0.5 mt-3 w-full bg-gray-200 overflow-hidden">
                <div
                  className={`h-full bg-blue-600 transition-none ${currentTestimonial === index ? "" : "w-0"}`}
                  style={{ width: currentTestimonial === index ? `${progress}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-3/5 lg:pl-12 pt-8 lg:pt-0 flex flex-col">
          <div className={`min-h-[200px] md:min-h-[180px] transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed">
              &ldquo;{testimonial.quote} <span className="font-semibold">{testimonial.highlight}</span>&rdquo;
            </blockquote>
          </div>
          <div className={`flex items-center gap-3 mt-8 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={48}
              height={48}
              className="rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.title}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-8 justify-end">
            {homepageTestimonials.map((entry, index) => (
              <button
                key={entry.author}
                onClick={() => handleTestimonialChange(index)}
                className={`w-3 h-3 transition-colors duration-300 ${currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
