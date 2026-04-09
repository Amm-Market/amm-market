import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"

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

const slidePalettes = [
  {
    chip: "bg-white/80 text-slate-700",
  },
  {
    chip: "bg-white/80 text-slate-700",
  },
  {
    chip: "bg-white/80 text-slate-700",
  },
  {
    chip: "bg-white/80 text-slate-700",
  },
] as const

function BlogStylePlaceholder({
  title,
  palette,
  index,
}: {
  title: string
  palette: (typeof slidePalettes)[number]
  index: number
}) {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div
        aria-hidden="true"
        className="relative flex h-full w-full overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_34%),linear-gradient(145deg,#f8fafc_0%,#e2e8f0_42%,#cbd5e1_100%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),transparent_42%,rgba(15,23,42,0.18)_100%)]" />
        <div className="absolute -left-[12%] top-[12%] h-[42%] w-[42%] rounded-full border border-white/55" />
        <div className="absolute right-[-10%] top-[10%] h-[52%] w-[52%] rounded-full border border-slate-500/20" />
        <div className="absolute left-[18%] top-[24%] h-[28%] w-[28%] rounded-full bg-white/45 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.28),transparent_34%,transparent_60%,rgba(255,255,255,0.1)_100%)]" />

        <div className="relative z-20 mt-auto flex w-full flex-col items-start px-4 pb-4 text-left">
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] backdrop-blur-sm ${palette.chip}`}>
            Placeholder Image
          </span>
          <span className="mt-3 text-sm font-medium tracking-[-0.02em] text-white/92">
            {title}
          </span>
          <span className="mt-1 text-[0.78rem] leading-5 text-white/78">
            Preview {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
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
            {items.map((item, index) => {
              const palette = slidePalettes[index % slidePalettes.length]

              return (
                <article
                  key={item.title}
                  className="group flex h-[33rem] w-[18.5rem] shrink-0 snap-start flex-col transition-transform duration-200 hover:-translate-y-1 md:h-[35rem] md:w-[20rem] lg:w-[21.5rem]"
                >
                  <BlogStylePlaceholder title={item.title} palette={palette} index={index} />

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="text-[0.72rem] font-medium tracking-[0.3em] text-[#18323c]/35">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-[1.45rem] font-medium leading-[1.04] tracking-[-0.04em] text-[#18323c]">
                        {item.title}
                      </h3>
                      <p className="max-w-[16rem] text-sm leading-6 text-[#18323c]/68">{item.description}</p>
                    </div>
                    <div className="mt-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9dee8] bg-white text-[#18323c]/70 transition-colors duration-200 group-hover:bg-[#f5f7fa]">
                      <ArrowUpRightIcon />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
