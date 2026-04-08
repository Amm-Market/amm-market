import { SectionEyebrow, SectionTitle } from "@/components/shared"

type BorrowUseCase = {
  title: string
  description: string
}

const BORROW_USE_CASES: readonly BorrowUseCase[] = [
  {
    title: "Treasury Financing Without Exits",
    description:
      "DAOs and treasuries can borrow against LP positions to fund grants, operations, or runway without selling core liquidity or giving up fee flow.",
  },
  {
    title: "Leveraged Liquidity Expansion",
    description:
      "LPs can use existing positions as collateral to borrow more assets, add liquidity, and grow fee exposure from the same capital base.",
  },
  {
    title: "Trading and Hedging Liquidity",
    description:
      "Traders and market makers can borrow against LP collateral to rebalance inventory, hedge risk, or move on short-notice opportunities without pulling liquidity.",
  },
  {
    title: "Credit Across Ecosystems",
    description:
      "Users can keep LP collateral in one venue and borrow for deployment across other protocols, strategies, or chains, turning LP positions into reusable credit.",
  },
] as const

function BorrowUseCaseCard({ title, description }: BorrowUseCase) {
  return (
    <article className="w-full max-w-[27rem] rounded-[22px] bg-gray-50 p-5 ring-1 ring-gray-200/70 md:p-6">
      <div className="min-w-0">
        <h3 className="max-w-[22rem] text-[1.45rem] font-medium leading-[1.08] tracking-[-0.045em] text-[#18323c]">
          {title}
        </h3>
        <p className="mt-3 max-w-[24rem] text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </article>
  )
}

export function BorrowUseCasesSection() {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="max-w-[22rem] space-y-4">
            <SectionEyebrow tone="blue">Use Cases</SectionEyebrow>
            <SectionTitle className="max-w-none leading-[0.96]">
              <span className="block whitespace-nowrap">Borrowed liquidity</span>
              <span className="block whitespace-nowrap">use cases.</span>
            </SectionTitle>
          </div>
        </div>

        <div className="flex flex-col items-end gap-5 md:gap-6 lg:gap-7">
          {BORROW_USE_CASES.map((useCase) => (
            <BorrowUseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BorrowUseCasesSection
