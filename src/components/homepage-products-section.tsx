import { SectionEyebrow, SectionTitle } from "@/components/shared"

type ProductVariant = "borrow" | "invest" | "earn" | "platform"

interface ProductCard {
  id: ProductVariant
  number: string
  badge: string
  title: string
  description: string
  note: string
}

const PRODUCT_CARDS: ProductCard[] = [
  {
    id: "borrow",
    number: "01",
    badge: "LP collateral",
    title: "Borrow",
    description: "Borrow against your LP position as collateral at 5.5% APR.",
    note: "Keep LP capital active while unlocking liquidity without unwinding the pool.",
  },
  {
    id: "invest",
    number: "02",
    badge: "Compounding",
    title: "Invest",
    description:
      "Give all your money a place to grow, whether you are saving it, investing it, or just trying to borrow against it.",
    note: "Built to route idle capital into a clearer growth path.",
  },
  {
    id: "earn",
    number: "03",
    badge: "Passive yield",
    title: "Earn",
    description: "Stay liquid while you earn 5% APY on your uninvested cash.",
    note: "Let balances compound without leaving the protocol flow.",
  },
  {
    id: "platform",
    number: "04",
    badge: "Self-custody",
    title: "Platform",
    description: "No KYC, ultra secure, fully self-custodial.",
    note: "Own the position, control the workflow, and keep custody onchain.",
  },
]

function ProductVisual({ variant }: { variant: ProductVariant }) {
  if (variant === "borrow") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-[#0048ba]/10 blur-3xl" />
        <div className="absolute right-2 top-2 rounded-full bg-white/85 px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-[#18323c] shadow-sm backdrop-blur">
          5.5% APR
        </div>
        <div className="absolute left-5 bottom-5 flex gap-3">
          <div className="h-28 w-20 rotate-[-5deg] rounded-[22px] border border-[#d7dfef] bg-white shadow-[0_12px_24px_rgba(24,50,60,0.1)]" />
          <div className="h-32 w-20 rotate-[2deg] rounded-[22px] border border-[#d7dfef] bg-[#fbfcff] shadow-[0_12px_24px_rgba(24,50,60,0.1)]" />
          <div className="h-36 w-20 rotate-[7deg] rounded-[22px] border border-[#d7dfef] bg-[#eef3ff] shadow-[0_12px_24px_rgba(24,50,60,0.1)]" />
        </div>
        <div className="absolute right-6 bottom-8 flex flex-col items-end gap-2">
          <div className="h-2 w-28 rounded-full bg-[#0048ba]/12" />
          <div className="h-2 w-20 rounded-full bg-[#0048ba]/10" />
          <div className="h-2 w-24 rounded-full bg-[#0048ba]/8" />
        </div>
      </div>
    )
  }

  if (variant === "invest") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-[#7fb38e]/12 blur-3xl" />
        <div className="absolute left-2 top-2 rounded-full bg-white/85 px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-[#18323c] shadow-sm backdrop-blur">
          Grow capital
        </div>
        <div className="absolute right-6 top-8 h-20 w-20 rounded-full border border-[#0048ba]/16 bg-white/70 shadow-sm" />
        <div className="absolute inset-x-6 bottom-6 flex items-end gap-3">
          <div className="h-16 flex-1 rounded-t-[18px] bg-white shadow-[0_12px_24px_rgba(24,50,60,0.08)]" />
          <div className="h-24 flex-1 rounded-t-[18px] bg-[#eef2f7] shadow-[0_12px_24px_rgba(24,50,60,0.08)]" />
          <div className="h-32 flex-1 rounded-t-[18px] bg-[#dfe8ff] shadow-[0_12px_24px_rgba(24,50,60,0.08)]" />
          <div className="h-40 flex-1 rounded-t-[18px] bg-[#0048ba] shadow-[0_12px_24px_rgba(24,50,60,0.14)]" />
        </div>
      </div>
    )
  }

  if (variant === "earn") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-[#77b8d7]/14 blur-3xl" />
        <div className="absolute left-4 bottom-4 rounded-full bg-[#18323c] px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-white shadow-sm">
          5% APY
        </div>
        <div className="absolute right-4 top-4 rounded-2xl bg-white/80 p-3 shadow-sm backdrop-blur">
          <div className="relative h-12 w-12 rounded-full border border-[#0048ba]/18">
            <div className="absolute inset-3 rounded-full border border-[#0048ba]/14" />
            <div className="absolute inset-5 rounded-full bg-[#0048ba]/10" />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0048ba]/18 bg-white/70 shadow-[0_14px_30px_rgba(24,50,60,0.08)]">
          <div className="absolute inset-4 rounded-full border border-[#0048ba]/12" />
          <div className="absolute inset-8 rounded-full bg-[#0048ba]/8" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-[#414347]/10 blur-3xl" />
      <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-[#18323c] shadow-sm backdrop-blur">
        No KYC
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-36 w-36">
          <div className="absolute inset-0 rounded-[30px] border border-[#d7dfef] bg-white/80 shadow-[0_18px_40px_rgba(24,50,60,0.08)]" />
          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#18323c]">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white">
              Secure
            </span>
          </div>
          <span className="absolute left-5 top-5 h-3 w-3 rounded-full bg-[#0048ba]" />
          <span className="absolute right-5 top-8 h-3 w-3 rounded-full bg-[#0048ba]/70" />
          <span className="absolute left-6 bottom-8 h-3 w-3 rounded-full bg-[#0048ba]/50" />
          <span className="absolute right-6 bottom-6 h-3 w-3 rounded-full bg-[#0048ba]/30" />
          <span className="absolute left-1/2 top-7 h-20 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(0,72,186,0.22)_0%,rgba(0,72,186,0)_100%)]" />
          <span className="absolute left-1/2 bottom-7 h-16 w-px -translate-x-1/2 bg-[linear-gradient(0deg,rgba(0,72,186,0.22)_0%,rgba(0,72,186,0)_100%)]" />
        </div>
      </div>
    </div>
  )
}

export default function HomepageProductsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-content-shell">
        <div className="space-y-8 sm:space-y-10">
          <div className="grid gap-4 md:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] md:items-end md:gap-8">
            <div className="space-y-4">
              <SectionEyebrow>Avana Products</SectionEyebrow>
              <SectionTitle>
                <span className="block lg:whitespace-nowrap">One protocol,</span>
                <span className="block lg:whitespace-nowrap">four product paths.</span>
              </SectionTitle>
            </div>
            <p className="max-w-[36rem] text-[1.08rem] leading-[1.65] tracking-[-0.02em] text-[#39515b] md:justify-self-end lg:text-[1.14rem]">
              Borrow, invest, earn, and operate on a platform built for LP-backed capital.
              Each product keeps liquidity productive without asking users to leave the strategy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {PRODUCT_CARDS.map((card) => (
              <article
                key={card.id}
                className="group overflow-hidden rounded-[30px] border border-black/6 bg-[#fcfcfb] shadow-[0_18px_50px_rgba(24,50,60,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div
                  className="relative min-h-[14rem] overflow-hidden p-5 sm:p-6"
                  style={{
                    backgroundImage:
                      card.id === "borrow"
                        ? "linear-gradient(135deg, rgba(63,108,255,0.12) 0%, rgba(255,255,255,0.96) 50%, rgba(63,108,255,0.06) 100%)"
                        : card.id === "invest"
                          ? "linear-gradient(135deg, rgba(127,179,142,0.12) 0%, rgba(255,255,255,0.96) 50%, rgba(127,179,142,0.06) 100%)"
                          : card.id === "earn"
                            ? "linear-gradient(135deg, rgba(119,184,215,0.14) 0%, rgba(255,255,255,0.96) 50%, rgba(119,184,215,0.06) 100%)"
                            : "linear-gradient(135deg, rgba(65,67,71,0.1) 0%, rgba(255,255,255,0.96) 50%, rgba(65,67,71,0.05) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      backgroundImage:
                        card.id === "borrow"
                          ? "radial-gradient(circle at 90% 10%, rgba(0,72,186,0.12) 0%, transparent 45%)"
                          : card.id === "invest"
                            ? "radial-gradient(circle at 90% 10%, rgba(127,179,142,0.12) 0%, transparent 45%)"
                            : card.id === "earn"
                              ? "radial-gradient(circle at 90% 10%, rgba(119,184,215,0.12) 0%, transparent 45%)"
                              : "radial-gradient(circle at 90% 10%, rgba(65,67,71,0.12) 0%, transparent 45%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-full bg-white/85 px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-black/55 shadow-sm backdrop-blur">
                      {card.badge}
                    </span>
                    <span className="text-[0.72rem] font-medium tracking-[0.18em] text-black/34">
                      {card.number}
                    </span>
                  </div>

                  <div className="relative mt-5 h-36 sm:h-40">
                    <ProductVisual variant={card.id} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div className="space-y-3">
                    <h3 className="text-[clamp(1.8rem,2.5vw,2.35rem)] font-medium tracking-[-0.05em] text-[#18323c]">
                      {card.title}
                    </h3>
                    <p className="max-w-[24rem] text-[1rem] leading-[1.7] tracking-[-0.02em] text-[#41515b]">
                      {card.description}
                    </p>
                  </div>
                  <p className="text-[0.94rem] font-medium leading-[1.55] tracking-[-0.02em] text-black/50">
                    {card.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
