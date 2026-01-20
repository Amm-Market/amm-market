"use client"

import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"

// Note: Metadata is defined in layout.tsx with title template
// Homepage uses the default title from the template

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col min-h-screen pt-20">
      <div className="flex-1 flex flex-col relative z-0">
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  )
}

