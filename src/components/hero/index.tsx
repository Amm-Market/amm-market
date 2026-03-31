"use client"

/**
 * Hero Section - Composed Landing Page
 * 
 * @description
 * Main landing page component composed of smaller, focused sub-components.
 * Uses LazySection for below-fold content to improve initial load performance.
 */

import { LazySection } from "@/components/ui/lazy-section"
import { HeroHeader } from "./HeroHeader"
import { TrustedByMarquee } from "./TrustedByMarquee"
import { HowItWorks } from "./HowItWorks"
import { DashboardPreview } from "./DashboardPreview"
import { BorrowAcrossDexs } from "./BorrowAcrossDexs"
import { PoolTicker } from "./PoolTicker"
import { GetMoreSection } from "./GetMoreSection"
import { BorrowConfidence } from "./BorrowConfidence"
import { AboutAave } from "./AboutAave"
import { TestimonialCarousel } from "./TestimonialCarousel"
import { FAQSection } from "./FAQSection"

export function HeroSection() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Above the fold - critical content */}
      <HeroHeader />
      <TrustedByMarquee />

      {/* Divider */}
      <div className="border-b border-gray-200 mx-auto max-w-7xl px-6 lg:px-8"></div>

      {/* How It Works Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <HowItWorks />
      </div>

      {/* Dashboard Preview Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <DashboardPreview />
      </div>

      {/* Below the fold - lazy loaded sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <LazySection minHeight="400px">
          <BorrowAcrossDexs />
        </LazySection>

        <LazySection minHeight="500px">
          <PoolTicker />
        </LazySection>

        <LazySection minHeight="800px">
          <GetMoreSection />
        </LazySection>

        <LazySection minHeight="800px">
          <BorrowConfidence />
        </LazySection>

        <LazySection minHeight="300px">
          <AboutAave />
        </LazySection>

        <LazySection minHeight="400px">
          <TestimonialCarousel />
        </LazySection>

        <LazySection minHeight="500px">
          <FAQSection />
        </LazySection>
      </div>
    </div>
  )
}

export default HeroSection
