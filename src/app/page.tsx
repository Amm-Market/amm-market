import WebappHero from "@/components/webapp-hero"
import HeroSection from "@/components/hero-section"
import LogoMarquee from "@/components/logo-marquee"
import BuildTomorrowSection from "@/components/BuildTomorrowSection"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { LazySection } from "@/components/ui/lazy-section"

// Note: Metadata is defined in layout.tsx with title template
// Homepage uses the default title from the template

function DeferredHomepageSectionsFallback() {
  return (
    <div className="site-content-shell pb-16 md:pb-20">
      <div
        aria-hidden="true"
        className="rounded-[28px] border border-gray-200 bg-gray-50 p-6 md:p-8"
      >
        <div className="animate-pulse space-y-4">
          <div className="h-3 w-28 rounded-full bg-gray-200" />
          <div className="h-10 w-72 max-w-full rounded-2xl bg-gray-200" />
          <div className="h-4 w-[92%] rounded-full bg-gray-200" />
          <div className="h-4 w-[78%] rounded-full bg-gray-200" />
          <div className="h-4 w-[64%] rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <WebappHero />
      <LogoMarquee />
      <section className="bg-white pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="site-content-shell">
          <div className="mx-auto w-full max-w-[76rem]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
              <div className="space-y-4">
                <SectionEyebrow>Avana Relaunch</SectionEyebrow>
                <SectionTitle>
                  <span className="block lg:whitespace-nowrap">Deeper liquidity,</span>
                  <span className="block lg:whitespace-nowrap">precise borrowing.</span>
                </SectionTitle>
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
      <LazySection
        rootMargin="320px"
        minHeight="640px"
        fallback={<DeferredHomepageSectionsFallback />}
      >
        <HeroSection />
      </LazySection>
    </>
  )
}
