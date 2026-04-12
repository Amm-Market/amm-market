import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"
import type { ReactNode } from "react"

type ProductFeatureItem = {
  title: string
  description: string
}

type ProductFeatureScrollSectionProps = {
  eyebrow?: string
  eyebrowTone?: SectionEyebrowTone
  title: string
  items: readonly ProductFeatureItem[]
  panels?: ReactNode[]
}

export default function ProductFeatureScrollSection({
  eyebrow = "Key Features",
  eyebrowTone = "blue",
  title,
  items,
  panels,
}: ProductFeatureScrollSectionProps) {
  return (
    <section>
      <div className="mb-8 max-w-[650px] space-y-3 text-left">
        <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div className="relative mt-10 md:mt-16">
        <div className="overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid w-max grid-flow-col auto-cols-[19.75rem] gap-4 px-1 lg:auto-cols-[21.5rem] lg:gap-5">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="group flex h-[31.25rem] w-full snap-start flex-col overflow-hidden rounded-[26px] bg-gray-50 p-5 transition-transform duration-150 hover:scale-[1.01]"
              >
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="max-w-[14rem] text-[1.45rem] font-medium leading-[1.08] tracking-[-0.045em] text-[#18323c]">
                      {item.title}
                    </h3>
                    <p className="max-w-[16rem] text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm font-medium tracking-[0.16em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="relative z-0 mt-auto">
                  <div className="flex items-end justify-center">
                    {panels?.[index] ?? (
                      <div className="relative h-[18rem] w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(24,50,60,0.06),_transparent_55%)]" />
                        <div className="absolute inset-x-6 bottom-6 h-px bg-gray-200" />
                        <div className="absolute inset-x-10 bottom-10 h-px bg-gray-100" />
                        <div className="absolute inset-x-16 bottom-14 h-px bg-gray-100" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {panels && (
        <style>{`
          .pf-fade-in { animation: pf-fi 0.6s ease-out both; }
          @keyframes pf-fi { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
          .pf-slide-in { animation: pf-si 0.5s ease-out both; }
          @keyframes pf-si { from { opacity:0; transform:translateX(-14px); } to { opacity:1; transform:translateX(0); } }
          .pf-scale-in { animation: pf-sci 0.7s cubic-bezier(0.4,0,0.2,1) both; }
          @keyframes pf-sci { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
          .pf-line-draw { stroke-dasharray:500; stroke-dashoffset:500; animation: pf-ld 1.6s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
          @keyframes pf-ld { to { stroke-dashoffset:0; } }
          .pf-area-reveal { animation: pf-ar 0.8s ease-out 0.8s both; }
          @keyframes pf-ar { from { opacity:0; } to { opacity:1; } }
          .pf-bar-w { animation: pf-bw 1s cubic-bezier(0.4,0,0.2,1) both; width:0; }
          @keyframes pf-bw { to { width: var(--w); } }
          .pf-bar-h { animation: pf-bh 0.7s ease-out both; transform: scaleY(0); transform-origin: bottom; }
          @keyframes pf-bh { to { transform: scaleY(1); } }
          .pf-pulse { animation: pf-p 2s ease-in-out infinite; }
          @keyframes pf-p { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(1.8); } }
          .pf-ring { animation: pf-rd 1.4s cubic-bezier(0.4,0,0.2,1) both; }
          @keyframes pf-rd { from { stroke-dashoffset: var(--ring-total); } to { stroke-dashoffset: var(--ring-offset); } }

          /* Shared infinite animation classes for all product pages */
          .panel-ticker-v { animation: ptv 9s ease-in-out infinite; }
          @keyframes ptv { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

          .panel-ticker-v-fast { animation: ptvf 6s ease-in-out infinite; }
          @keyframes ptvf { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

          .panel-ticker-v-slow { animation: ptvs 12s ease-in-out infinite; }
          @keyframes ptvs { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-25%); } 66%,94% { transform:translateY(-50%); } 100% { transform:translateY(-75%); } }

          .panel-ticker-v-mon { animation: ptvm 10s ease-in-out infinite; }
          @keyframes ptvm { 0%,28% { transform:translateY(0); } 33%,61% { transform:translateY(-33.333%); } 66%,94% { transform:translateY(-66.666%); } }

          .panel-scroll-h { animation: psh 12s linear infinite; }
          @keyframes psh { from { transform:translateX(0); } to { transform:translateX(-50%); } }

          .panel-scroll-h-slow { animation: pshs 18s linear infinite; }
          @keyframes pshs { from { transform:translateX(0); } to { transform:translateX(-50%); } }

          .panel-scroll-h-chart { animation: pshc 15s linear infinite; }
          @keyframes pshc { from { transform:translateX(0); } to { transform:translateX(-50%); } }

          .panel-escalator { animation: pesc 16s linear infinite; }
          @keyframes pesc { from { transform:translateY(0); } to { transform:translateY(-50%); } }

          .panel-pulse { animation: pp 2s ease-in-out infinite; }
          @keyframes pp { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(1.6); } }

          .panel-breathe { animation: pb 3s ease-in-out infinite; }
          @keyframes pb { 0%,100% { opacity:1; } 50% { opacity:0.7; } }

          .panel-ring { animation: pr 3s ease-in-out infinite; }
          @keyframes pr { 0%,100% { opacity:1; } 50% { opacity:0.75; } }

          .panel-glow { animation: pg 2.5s ease-in-out infinite; }
          @keyframes pg { 0%,100% { box-shadow:0 0 0 0 rgba(16,185,129,0); } 50% { box-shadow:0 0 8px 2px rgba(16,185,129,0.25); } }

          .panel-bar-pulse { animation: pbp 3s ease-in-out infinite; transform-origin: left; }
          @keyframes pbp { 0%,100% { transform:scaleX(1); } 50% { transform:scaleX(0.6); } }
        `}</style>
      )}
    </section>
  )
}
