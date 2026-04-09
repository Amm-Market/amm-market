"use client"

import Image from "next/image"
import { useId, useMemo, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

const AVANA_APY = 12
const FLUID_APY = 3.5
const MIN_MONTHS = 1
const MAX_MONTHS = 24
const DEFAULT_MONTHS = 12
const DEFAULT_DEPOSIT = "5000"

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})

const integerFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})

function parseDeposit(value: string) {
  const digitsOnly = value.replace(/[^\d]/g, "")
  if (!digitsOnly) {
    return 0
  }

  return Number(digitsOnly)
}

function calculateAccruedInterest(principal: number, apy: number, months: number) {
  if (principal <= 0) {
    return 0
  }

  const monthlyRate = apy / 100 / 12
  return principal * (Math.pow(1 + monthlyRate, months) - 1)
}

function formatDepositInput(value: string) {
  if (!value) {
    return ""
  }

  return integerFormatter.format(Number(value))
}

export default function InvestGrowthCalculatorSection() {
  const inputId = useId()
  const rangeId = useId()
  const [depositInput, setDepositInput] = useState(DEFAULT_DEPOSIT)
  const [months, setMonths] = useState(DEFAULT_MONTHS)

  const principal = parseDeposit(depositInput)

  const { avanaInterest, avanaTotal, fluidInterest, fluidTotal } = useMemo(() => {
    const accruedAtAvana = calculateAccruedInterest(principal, AVANA_APY, months)
    const accruedAtFluid = calculateAccruedInterest(principal, FLUID_APY, months)

    return {
      avanaInterest: accruedAtAvana,
      avanaTotal: principal + accruedAtAvana,
      fluidInterest: accruedAtFluid,
      fluidTotal: principal + accruedAtFluid,
    }
  }, [months, principal])

  const thumbPosition = ((months - MIN_MONTHS) / (MAX_MONTHS - MIN_MONTHS)) * 100
  const depositInputDisplay = formatDepositInput(depositInput)
  const projectedValueDisplay = currencyFormatter.format(avanaTotal)
  const fluidValueDisplay = currencyFormatter.format(fluidTotal)
  const depositInputSize =
    depositInputDisplay.length > 13
      ? "text-[1.2rem] md:text-[1.5rem]"
      : "text-[1.5rem] md:text-[1.7rem]"
  const projectedValueSize =
    projectedValueDisplay.length > 18
      ? "text-[clamp(2.7rem,10vw,4.8rem)] md:text-[clamp(2.1rem,3.5vw,3.25rem)]"
      : projectedValueDisplay.length > 14
        ? "text-[clamp(2.2rem,5.8vw,4.35rem)] md:text-[clamp(2.3rem,4vw,3.9rem)]"
        : "text-[clamp(2.7rem,7vw,5.2rem)] md:text-[clamp(2.7rem,4.8vw,4.8rem)]"
  const fluidValueSize =
    fluidValueDisplay.length > 14
      ? "text-[clamp(1.4rem,4vw,1.9rem)] md:text-[clamp(1.35rem,2.4vw,1.8rem)]"
      : "text-[clamp(1.65rem,4.5vw,2.35rem)] md:text-[clamp(1.55rem,2.6vw,2.1rem)]"

  return (
    <section>
      <div className="space-y-6 lg:space-y-10">
        <div className="space-y-3">
          <SectionEyebrow tone="emerald">Growth Calculator</SectionEyebrow>
          <SectionTitle className="max-w-none whitespace-nowrap text-[clamp(1.9rem,7vw,4rem)] leading-[0.96]">
            See your cash grow.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <div className="space-y-6 lg:space-y-8 lg:pt-4">
            <div className="flex items-center justify-between gap-6 border-b border-gray-200 pb-4 lg:pb-6">
              <p className="text-sm font-semibold tracking-[-0.03em] text-[#728196]">
                Avana APY
              </p>
              <div className="inline-flex items-center rounded-full bg-[#eef4ff] px-4 py-2 text-[#1f3d88] ring-1 ring-[#d7e4ff]">
                <span className="text-[1.15rem] font-semibold tracking-[-0.04em] md:text-[1.35rem]">
                  12.0%
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <label htmlFor={inputId} className="block text-[1.2rem] font-semibold tracking-[-0.03em] text-[#203650]">
                Initial Deposit
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[1.6rem] tracking-[-0.04em] text-[#395273]">
                  $
                </span>
                <input
                  id={inputId}
                  type="text"
                  inputMode="numeric"
                  value={depositInputDisplay}
                  onChange={(event) => setDepositInput(event.target.value.replace(/[^\d]/g, ""))}
                  className={`h-14 w-full rounded-[20px] border border-gray-200 bg-white pl-11 pr-5 tracking-[-0.05em] text-[#163042] outline-none transition focus:border-[#8b98a7] md:h-16 ${depositInputSize}`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <label htmlFor={rangeId} className="block text-[1.2rem] font-semibold tracking-[-0.03em] text-[#203650]">
                  Time Period (months)
                </label>
                <p className="text-sm text-[#728196]">
                  {months} month{months === 1 ? "" : "s"}
                </p>
              </div>

              <div className="relative px-1 pb-8 md:pb-10">
                <input
                  id={rangeId}
                  type="range"
                  min={MIN_MONTHS}
                  max={MAX_MONTHS}
                  value={months}
                  onChange={(event) => setMonths(Number(event.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#163042]"
                />
                <div
                  className="absolute top-6 -translate-x-1/2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-center text-[#163042] shadow-sm md:top-8 md:px-4 md:py-2"
                  style={{ left: `calc(${thumbPosition}% * 0.96 + 2%)` }}
                >
                  <div className="text-[0.92rem] font-semibold leading-none tracking-[-0.03em] md:text-[1rem]">
                    {months} months
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5 md:p-8">
            <div className="space-y-5 md:space-y-7">
              <div className="sm:hidden">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600/75">
                      Projected Value
                    </p>
                    <p className="text-[2.35rem] whitespace-nowrap leading-[0.9] tracking-[-0.08em] text-emerald-700">
                      {projectedValueDisplay}
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8b98a7]">
                      Avana Interest
                    </p>
                    <p className="text-[1.05rem] font-semibold tracking-[-0.04em] text-[#163042]">
                      {currencyFormatter.format(avanaInterest)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden space-y-4 sm:block">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600/75">
                  Projected Value
                </p>
                <p className={`${projectedValueSize} max-w-full whitespace-nowrap leading-[0.88] tracking-[-0.09em] text-emerald-700`}>
                  {projectedValueDisplay}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm text-[#728196]">
                    Avana Interest
                  </p>
                  <p className="text-[1.2rem] font-semibold tracking-[-0.04em] text-[#163042]">
                    {currencyFormatter.format(avanaInterest)}
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-4 sm:hidden">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Fluid Logo.svg"
                      alt="Fluid"
                      width={2617}
                      height={800}
                      className="h-auto w-[3.8rem] max-w-full object-contain"
                    />
                    <p className="text-[1rem] font-semibold tracking-[-0.04em] text-[#163042]">
                      3.5% APY
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8b98a7]">
                        Fluid Interest
                      </p>
                      <p className="text-[1.1rem] font-semibold tracking-[-0.04em] text-[#163042]">
                        {currencyFormatter.format(fluidInterest)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-rose-500/80">
                        Fluid Value
                      </p>
                      <p className="text-[1.15rem] font-semibold tracking-[-0.05em] text-rose-700">
                        {fluidValueDisplay}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="hidden gap-5 border-t border-gray-200 pt-5 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div className="space-y-4">
                  <Image
                    src="/Fluid Logo.svg"
                    alt="Fluid"
                    width={2617}
                    height={800}
                    className="h-auto w-[5.5rem] max-w-full object-contain md:w-[6.25rem]"
                  />
                  <p className="text-[1.25rem] font-semibold tracking-[-0.04em] text-[#163042]">
                    3.5% APY
                  </p>
                </div>

                <div className="space-y-2 sm:text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-rose-500/80">
                    Fluid Value
                  </p>
                  <p className={`${fluidValueSize} max-w-full font-semibold tracking-[-0.05em] text-rose-700 [overflow-wrap:anywhere]`}>
                    {fluidValueDisplay}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-6 text-[#8b98a7]">
                Illustration only. These sample figures assume monthly compounding on a single deposit and are not live quotes or guaranteed returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
