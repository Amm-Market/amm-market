import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"
import PlatformPlaceholderPanel from "@/components/platform-placeholder-panel"

type PlatformFinancingCarouselItem = {
  title: string
  description: string
}

type PlatformFinancingCarouselSectionProps = {
  eyebrow: string
  eyebrowTone?: SectionEyebrowTone
  title: string
  items: readonly PlatformFinancingCarouselItem[]
}

export default function PlatformFinancingCarouselSection({
  eyebrow,
  eyebrowTone = "violet",
  title,
  items,
}: PlatformFinancingCarouselSectionProps) {
  return (
    <section>
      <div className="max-w-[42rem] space-y-3">
        <SectionEyebrow tone={eyebrowTone}>
          {eyebrow}
        </SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
      </div>

      <div className="relative mt-10 md:mt-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-white via-white/95 to-transparent lg:block" />
        <div className="snap-x snap-mandatory overflow-x-auto pb-2 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4 pr-12 md:gap-5 md:pr-20">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="group flex h-[33rem] w-[18.5rem] shrink-0 snap-start flex-col transition-transform duration-200 hover:-translate-y-1 md:h-[35rem] md:w-[20rem] lg:w-[21.5rem]"
              >
                <PlatformPlaceholderPanel
                  title={item.title}
                  variant={index}
                />

                <div className="mt-5 space-y-2">
                  <h3 className="text-[1.45rem] font-medium leading-[1.04] tracking-[-0.04em] text-[#18323c]">
                    {item.title}
                  </h3>
                  <p className="max-w-[16rem] text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
