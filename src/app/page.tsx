import WebappHero from "@/components/webapp-hero"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import LogoMarquee from "@/components/logo-marquee"
import BuildTomorrowSection from "@/components/BuildTomorrowSection"

// Note: Metadata is defined in layout.tsx with title template
// Homepage uses the default title from the template

export default function Home() {
  return (
    <>
      <WebappHero />
      <LogoMarquee />
      <section className="mt-16 mb-6 px-4 sm:px-6 sm:mt-24 sm:mb-8 lg:mt-36 lg:mb-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 className="type-marketing-section-title mx-auto w-full max-w-full text-center text-offBlack sm:max-w-[42rem] lg:max-w-[54rem]">
            Aave first introduced Avana in 2020.
            <br className="sm:hidden" />
            Now we're relaunching it on Aave v4, bigger, bolder, and designed for the entire DeFi liquidity.
          </h2>
        </div>
      </section>
      <BuildTomorrowSection />
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col min-h-screen pt-20">
        <div className="flex-1 flex flex-col relative z-0">
          <HeroSection />
          <FeaturesSection />
        </div>
      </div>
    </>
  )
}
