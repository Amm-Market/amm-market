import WebappHero from "@/components/webapp-hero"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import LogoMarquee from "@/components/logo-marquee"
import BuildTomorrowSection from "@/components/BuildTomorrowSection"
import { SectionEyebrow } from "@/components/shared"

// Note: Metadata is defined in layout.tsx with title template
// Homepage uses the default title from the template

export default function Home() {
  return (
    <>
      <WebappHero />
      <LogoMarquee />
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
              <div className="space-y-4">
                <SectionEyebrow>Avana Relaunch</SectionEyebrow>
                <h2 className="text-left text-[clamp(2.5rem,5vw,4.4rem)] font-medium leading-[0.97] tracking-[-0.055em] text-[#18323c] lg:text-[3.5rem]">
                  <span className="block lg:whitespace-nowrap">Deeper liquidity,</span>
                  <span className="block lg:whitespace-nowrap">precise borrowing.</span>
                </h2>
              </div>
              <div className="space-y-8 text-left text-[#39515b]">
                <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                  Avana turns active LP positions into productive collateral so liquidity providers can unlock capital without unwinding the pools that keep earning fees.
                </p>
                <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                  Built on Aave v4, the protocol is designed around live AMM exposure, position-aware valuation, and borrowing power that reflects how liquidity actually behaves onchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuildTomorrowSection />
      <div className="site-content-shell flex min-h-screen flex-col pt-20">
        <div className="flex-1 flex flex-col relative z-0">
          <HeroSection />
          <FeaturesSection />
        </div>
      </div>
    </>
  )
}
