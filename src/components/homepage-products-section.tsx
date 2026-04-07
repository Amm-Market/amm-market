import Link from "next/link"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { siteRoutes } from "@/lib/site"

type ProductVariant = "borrow" | "invest" | "earn"

interface ProductCard {
  id: ProductVariant
  href: string
  title: string
  lead: string
  tail: string
}

const PRODUCT_CARDS: ProductCard[] = [
  {
    id: "borrow",
    href: siteRoutes.borrow,
    title: "Borrow",
    lead: "Borrow against your LP position",
    tail: "as collateral at 5.5% APR.",
  },
  {
    id: "invest",
    href: siteRoutes.invest,
    title: "Invest",
    lead: "Put every idle dollar to work",
    tail: "across saving, investing, and borrowing.",
  },
  {
    id: "earn",
    href: siteRoutes.earn,
    title: "Earn",
    lead: "Stay liquid while earning 5% APY",
    tail: "on cash you have not invested yet.",
  },
]

function ProductVisual({ variant }: { variant: ProductVariant }) {
  if (variant === "borrow") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute right-2 top-2 rounded-full bg-white px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-[#18323c] shadow-sm">
          5.5% APR
        </div>
        <div className="absolute left-5 top-4 flex items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2994a] text-lg font-semibold text-white shadow-sm">
            B
          </span>
          <span className="text-xl font-medium text-[#2b2f33]">&rsaquo;</span>
          <div className="flex -space-x-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-50 bg-[#3b82f6] text-sm font-semibold text-white shadow-sm">
              $
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-50 bg-[#53c28b] text-sm font-semibold text-white shadow-sm">
              T
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-50 bg-[#2b2b33] text-sm font-semibold text-white shadow-sm">
              LP
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-50 bg-[#d6d8dd] text-sm font-semibold text-[#4f46e5] shadow-sm">
              ■
            </span>
          </div>
        </div>
        <div className="absolute right-6 bottom-8 flex flex-col items-end gap-2">
          <div className="h-2 w-28 rounded-full bg-black/8" />
          <div className="h-2 w-20 rounded-full bg-black/7" />
          <div className="h-2 w-24 rounded-full bg-black/6" />
        </div>
      </div>
    )
  }

  if (variant === "invest") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-2 top-2 rounded-full bg-white px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-[#18323c] shadow-sm">
          Grow capital
        </div>
        <div className="absolute inset-x-5 top-8 h-[92px] rounded-[22px] border border-gray-200 bg-white shadow-sm">
          <div className="absolute inset-x-5 top-5 h-px bg-gray-200" />
          <div className="absolute left-[22%] top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute left-[44%] top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute left-[66%] top-0 bottom-0 w-px bg-gray-200" />
          <span className="absolute left-[16%] top-[54%] h-3 w-3 rounded-full bg-[#7b7f85]" />
          <span className="absolute left-[37%] top-[30%] h-3 w-3 rounded-full bg-[#7b7f85]" />
          <span className="absolute left-[58%] top-[45%] h-3 w-3 rounded-full bg-[#3f6cff]" />
          <span className="absolute left-[80%] top-[22%] h-3 w-3 rounded-full bg-[#7b7f85]" />
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-end gap-3">
          <div className="h-16 flex-1 rounded-t-[18px] bg-white shadow-sm" />
          <div className="h-24 flex-1 rounded-t-[18px] bg-[#f1f3f7] shadow-sm" />
          <div className="h-32 flex-1 rounded-t-[18px] bg-[#e4e9f5] shadow-sm" />
          <div className="h-40 flex-1 rounded-t-[18px] bg-[#d8e3fb] shadow-sm" />
        </div>
      </div>
    )
  }

  if (variant === "earn") {
    return (
      <div className="relative h-full w-full">
        <div className="absolute left-4 bottom-4 rounded-full bg-[#18323c] px-3 py-1 text-[0.72rem] font-medium tracking-[0.16em] text-white shadow-sm">
          5% APY
        </div>
        <div className="absolute right-4 top-4 rounded-2xl bg-white p-3 shadow-sm">
          <div className="relative h-12 w-12 rounded-full border border-[#0048ba]/18">
            <div className="absolute inset-3 rounded-full border border-[#0048ba]/14" />
            <div className="absolute inset-5 rounded-full bg-[#0048ba]/10" />
          </div>
        </div>
        <svg
          viewBox="0 0 320 160"
          aria-hidden="true"
          className="absolute inset-x-4 bottom-3 h-[120px] w-[calc(100%-2rem)]"
        >
          <path
            d="M0 120 C60 116 120 108 170 96 C220 84 268 58 320 26"
            fill="none"
            stroke="#2b2f33"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path d="M206 0 V124" fill="none" stroke="#9cc2ff" strokeWidth="1.4" />
          <circle cx="206" cy="78" r="7" fill="#5ea0ff" stroke="white" strokeWidth="3" />
          <text x="176" y="48" fill="#5ea0ff" fontSize="18" fontWeight="600">
            $5,792
          </text>
        </svg>
      </div>
    )
  }

  return null
}

export default function HomepageProductsSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="site-content-shell">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <SectionEyebrow>Avana Products</SectionEyebrow>
            <SectionTitle>
              <span className="block lg:whitespace-nowrap">One protocol,</span>
              <span className="block lg:whitespace-nowrap">three product paths.</span>
            </SectionTitle>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {PRODUCT_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-gray-50 transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ea0ff] focus-visible:ring-offset-2"
                aria-label={`${card.title}: ${card.lead} ${card.tail}`}
              >
                <div className="relative min-h-[12rem] overflow-hidden p-4 sm:min-h-[12.5rem] sm:p-5">
                  <div className="relative mt-2 h-28 sm:h-32">
                    <ProductVisual variant={card.id} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-end gap-2 p-4 sm:p-5">
                  <h3 className="text-[1.16rem] font-bold uppercase tracking-[0.14em] text-[#161616] sm:text-[1.24rem]">
                    {card.title}
                  </h3>
                  <p className="max-w-[24rem] text-[clamp(0.95rem,1.1vw,1rem)] font-medium leading-[1.18] tracking-[-0.04em] text-[#1f2328]">
                    <span className="text-[#161616]">{card.lead}</span>
                    <span className="text-black/38"> {card.tail}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
