import { SectionEyebrow, SectionTitle } from "@/components/shared"

type ProductStorySectionProps = {
  eyebrow?: string
  titleLines: [string, string]
  paragraphs: [string, string]
}

export default function ProductStorySection({
  eyebrow = "Avana Relaunch",
  titleLines,
  paragraphs,
}: ProductStorySectionProps) {
  return (
    <section className="bg-white pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="site-content-shell">
        <div className="mx-auto w-full max-w-[76rem]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,29rem)_minmax(0,1fr)] md:gap-10 lg:gap-12 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
            <div className="space-y-4">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <SectionTitle>
                <span className="block lg:whitespace-nowrap">{titleLines[0]}</span>
                <span className="block lg:whitespace-nowrap">{titleLines[1]}</span>
              </SectionTitle>
            </div>
            <div className="space-y-8 text-left text-[#39515b]">
              <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                {paragraphs[0]}
              </p>
              <p className="max-w-[42rem] text-[1.08rem] leading-[1.6] tracking-[-0.02em] lg:text-[1.18rem]">
                {paragraphs[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
