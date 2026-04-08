"use client"

import { DeFiTerm } from "@/components/defi-term"
import { SectionTitle } from "@/components/shared"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { ReactNode } from "react"

interface HomepageFaqItem {
  value: string
  question: string
  answer: ReactNode
}

const homepageFaqItems: HomepageFaqItem[] = [
  {
    value: "item-1",
    question: "Do I have to sell or exit my LP position?",
    answer: (
      <>
        No. Your <DeFiTerm term="lp">LP</DeFiTerm> remains in the pool and continues earning trading fees.
        {" "}Avana uses your LP shares as <DeFiTerm term="collateral">collateral</DeFiTerm> without removing liquidity.
      </>
    ),
  },
  {
    value: "item-2",
    question: "How much can I borrow?",
    answer: (
      <>
        Up to 70% of your LP&apos;s value, depending on pool type, volatility, and{" "}
        <DeFiTerm term="oracle">oracle</DeFiTerm> confidence. No minimum amounts. Higher-quality collateral
        unlocks more borrowing room.
      </>
    ),
  },
  {
    value: "item-3",
    question: "What happens if my LP value drops?",
    answer: (
      <>
        If your <DeFiTerm term="ltv">loan-to-value ratio</DeFiTerm> exceeds the{" "}
        <DeFiTerm term="liquidation-threshold">liquidation threshold</DeFiTerm>, part of your position may
        be <DeFiTerm term="liquidation">liquidated</DeFiTerm> to maintain system solvency.
      </>
    ),
  },
  {
    value: "item-4",
    question: "Is my risk isolated?",
    answer: (
      <>
        Yes. Each <DeFiTerm term="lp-position">LP position</DeFiTerm> is managed independently with isolated
        risk. System-wide safety is enforced through Aave v4&apos;s <DeFiTerm term="hub">Hub</DeFiTerm>-and-
        <DeFiTerm term="spoke">Spoke</DeFiTerm> architecture.
      </>
    ),
  },
  {
    value: "item-5",
    question: "Can I repay early or close my position?",
    answer: (
      <>
        Yes. <DeFiTerm term="repay">Repay</DeFiTerm> anytime, reduce your{" "}
        <DeFiTerm term="borrow">borrow</DeFiTerm>, or <DeFiTerm term="withdraw">withdraw</DeFiTerm> your LP
        once debt is cleared.
      </>
    ),
  },
]

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

/**
 * HomepageFaqSection - Homepage FAQ using the product-page FAQ layout directly.
 */
export default function HomepageFaqSection() {
  return (
    <div className="grid grid-cols-1 gap-8 pb-4 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] md:gap-6 md:pb-0 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-8">
      <div className="space-y-3 md:max-w-[25rem] md:pt-2">
        <SectionTitle as="h3" className="max-w-none leading-[0.96]">
          <span className="block whitespace-nowrap">Frequently asked</span>
          <span className="block whitespace-nowrap">questions.</span>
        </SectionTitle>
      </div>
      <div className="min-w-0 md:pl-16 lg:pl-24 xl:pl-28">
        <Accordion type="single" collapsible orientation="vertical" className="w-full">
          {homepageFaqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
              <AccordionTrigger className="type-accordion-question group gap-4 p-0 text-left text-gray-900 hover:underline [&>svg.size-4]:hidden">
                {item.question}
                <PlusIcon />
                <MinusIcon />
              </AccordionTrigger>
              <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
