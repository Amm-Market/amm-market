import Image from "next/image"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

/**
 * BuildTomorrowSection — Ways to use Avana with product visual.
 */
export function BuildTomorrowSection() {
  return (
    <section
      data-section="ways-to-use-avana"
      className="w-full bg-inherit site-section-gap"
    >
      <div className="site-content-shell">
        <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
          <SectionEyebrow tone="violet">Meet Avana</SectionEyebrow>
          <SectionTitle>
            <span className="block md:hidden">The Aave v4 Spoke</span>
            <span className="block md:hidden">for LP-backed loans</span>
            <span className="hidden md:block">The Aave v4 Spoke for LP-backed loans</span>
          </SectionTitle>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] sm:aspect-[2/1] md:rounded-[1.6rem]">
          <Image
            src="/images/ways-to-use-avana.png"
            alt="Borrow, lend, and multiply product overview"
            fill
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 md:mt-32 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] 2xl:mt-28">
          <div className="space-y-4">
            <SectionEyebrow tone="violet">Ways to use Avana</SectionEyebrow>
            <SectionTitle>
              <span className="block lg:hidden">Borrow, Lend, or Multiply</span>
              <span className="hidden lg:block lg:whitespace-nowrap">Borrow, Lend,</span>
              <span className="hidden lg:block lg:whitespace-nowrap">or Multiply</span>
            </SectionTitle>
          </div>
          <div className="text-left text-[#39515b]">
            <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
              In 2021, <strong className="font-semibold text-[#111111]">Aave</strong> launched{" "}
              <strong className="font-semibold text-[#111111]">AMM Market</strong> and proved{" "}
              <strong className="font-semibold text-[#111111]">LP positions</strong> could serve as collateral,
              but it was built for the simpler DEXs of that era.{" "}
              <strong className="font-semibold text-[#111111]">Avana</strong>{" "}picks up where that left off,
              designed for today&apos;s DEXs and LP types, treating each position as{" "}
              <strong className="font-semibold text-[#111111]">collateral</strong> shaped by dual oracles and
              stronger risk controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildTomorrowSection
