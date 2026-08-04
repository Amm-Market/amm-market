import Image from "next/image"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export default function BorrowPowerSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
        <div className="space-y-4">
          <SectionEyebrow tone="blue">Borrow Power</SectionEyebrow>
          <SectionTitle className="max-w-[14ch]">
            Aggregate LP collateral for more credit.
          </SectionTitle>
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
