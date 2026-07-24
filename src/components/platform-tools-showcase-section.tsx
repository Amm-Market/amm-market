import Image from "next/image"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export default function PlatformToolsShowcaseSection() {
  return (
    <section
      data-section="platform-tools-showcase"
      data-theme="beige"
      className="w-full bg-inherit"
    >
      <div className="mb-6 flex max-w-[600px] flex-col gap-2 sm:mb-8 md:max-w-none">
        <SectionEyebrow tone="violet">Credit line tools</SectionEyebrow>
        <SectionTitle>
          <span className="lg:whitespace-nowrap">Go global. We’ll handle the complexity.</span>
        </SectionTitle>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] sm:aspect-[2/1] md:rounded-[1.6rem]">
        <Image
          src="/images/ways-to-use-avana.png"
          alt="Credit line tools product overview"
          fill
          sizes="(max-width: 1200px) 100vw, 1120px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
