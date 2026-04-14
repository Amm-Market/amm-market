import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"

type ProductStorySectionProps = {
  eyebrow?: string
  eyebrowTone?: SectionEyebrowTone
  titleLines: [string, string]
  paragraphs: readonly string[]
  withTopDivider?: boolean
}

export default function ProductStorySection({
  eyebrow = "Avana Relaunch",
  eyebrowTone = "blue",
  titleLines,
  paragraphs,
  withTopDivider = false,
}: ProductStorySectionProps) {
  return (
    <section className={`bg-white pt-8 pb-16 md:pt-10 md:pb-20 2xl:pt-9 2xl:pb-18 ${withTopDivider ? "border-t border-gray-200" : ""}`}>
      <div className="site-content-shell">
        <div className="mx-auto w-full max-w-[76rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] md:gap-8 lg:gap-10 xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]">
            <div className="space-y-4">
              <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow>
              <SectionTitle className="max-w-[15ch] text-[clamp(2.4rem,4.2vw,4rem)] leading-[0.98] lg:text-[3.25rem]">
                <span className="block">{titleLines[0]}</span>
                <span className="block">{titleLines[1]}</span>
              </SectionTitle>
            </div>
            <div className="space-y-6 pt-1 text-left text-[#39515b]">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[40rem] text-[1rem] leading-[1.62] tracking-[-0.02em] lg:text-[1.08rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
