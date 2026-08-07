import Image from "next/image"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { withMarketingI18n } from "@/lib/content-i18n/with-marketing-i18n"

export default async function LeverageGlanceShowcaseSection() {
  return withMarketingI18n(['leverage-glance-showcase-section'], (
    <section className="deferred-viewport bg-inherit">
      <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
        <SectionEyebrow tone="rose">Core Product</SectionEyebrow>
        <SectionTitle className="md:whitespace-nowrap">
          Tools built to make looping easier for first-timers
        </SectionTitle>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] sm:aspect-[2/1] md:rounded-[1.6rem]">
        <Image
          src="/images/ways-to-use-avana.png"
          alt="Core product tools for first-time loopers"
          fill
          sizes="(max-width: 1200px) 100vw, 1120px"
          className="object-cover object-center"
        />
      </div>
    </section>
  ))
}
