import Image from "next/image"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export default function LeverageGlanceShowcaseSection() {
  return (
    <section className="deferred-viewport bg-inherit">
      <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
        <SectionEyebrow tone="rose">At a glance</SectionEyebrow>
        <SectionTitle className="md:whitespace-nowrap">
          Multiply your yield up to 10x.
        </SectionTitle>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] sm:aspect-[2/1] md:rounded-[1.6rem]">
        <Image
          src="/images/ways-to-use-avana.png"
          alt="Multiply your yield up to 10x product overview"
          fill
          sizes="(max-width: 1200px) 100vw, 1120px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
