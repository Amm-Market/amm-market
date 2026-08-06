import Image from "next/image"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export default function BorrowPowerSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
        <div className="space-y-4">
          <SectionEyebrow tone="blue">Borrow Power</SectionEyebrow>
          <SectionTitle className="max-w-[14ch]">
            Aggregate collateral for more credit
          </SectionTitle>

          <ol className="mt-7 grid max-w-[32rem] gap-4 text-[0.98rem] leading-[1.55] tracking-[-0.01em] text-[#111111]/80 md:text-[1.04rem]">
            <li className="flex gap-3">
              <span className="mt-0.5 font-semibold text-[#01AACF]">1.</span>
              <span>
                Stack borrowing power across multiple
                <br />
                supported LP positions in one market.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 font-semibold text-[#01AACF]">2.</span>
              <span>
                Track each position’s health alongside
                <br />
                your total account credit.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 font-semibold text-[#01AACF]">3.</span>
              <span>
                Add or adjust collateral as market
                <br />
                conditions and capacity change.
              </span>
            </li>
          </ol>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[36rem] lg:max-w-[40rem] xl:max-w-[42rem]">
            <Image
              src="/images/avana-combine-coins.png"
              alt="Avana combine LP positions illustration"
              width={1024}
              height={1024}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 52vw, 672px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
