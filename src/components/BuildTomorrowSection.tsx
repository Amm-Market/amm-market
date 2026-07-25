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
          <SectionEyebrow tone="violet">Ways to use Avana</SectionEyebrow>
          <SectionTitle>
            <span className="block lg:whitespace-nowrap">Borrow, Lend, or Multiply</span>
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
      </div>
    </section>
  )
}

export default BuildTomorrowSection
