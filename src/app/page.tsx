"use client"

import WebappHero from "@/components/webapp-hero"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import LogoMarquee from "@/components/logo-marquee"

// Note: Metadata is defined in layout.tsx with title template
// Homepage uses the default title from the template

export default function Home() {
  return (
    <>
      <WebappHero />
      <LogoMarquee />
      <section className="mt-16 mb-12 px-4 sm:px-6 sm:mt-24 lg:mt-36 lg:mb-[6.5rem]">
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 className="mx-auto w-full max-w-full text-center text-base leading-snug text-offBlack sm:max-w-[42rem] sm:text-2xl lg:max-w-[54rem] lg:text-[2.25rem] lg:leading-tight xl:text-4xl">
            Aave first introduced AMM Markets in 2020.
            <br className="sm:hidden" />
            Now we're relaunching it on Aave v4, bigger, bolder, and designed for the entire DeFi liquidity.
          </h2>
        </div>
      </section>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col min-h-screen pt-20">
        <div className="flex-1 flex flex-col relative z-0">
          <HeroSection />
          <FeaturesSection />
        </div>
      </div>
    </>
  )
}

