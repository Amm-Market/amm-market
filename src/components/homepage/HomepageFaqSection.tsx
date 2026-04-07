"use client"

import { DeFiTerm } from "@/components/defi-term"
import { SectionEyebrow, SectionTitle } from "@/components/shared"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

/**
 * HomepageFaqSection - Interactive FAQ accordion for the homepage.
 */
export default function HomepageFaqSection() {
  return (
    <div className="flex flex-col gap-8 pb-4 md:flex-row md:gap-12 md:pb-0" style={{ opacity: 1, transform: "none" }}>
      <div className="space-y-3 md:pt-2 md:flex-shrink-0 md:w-[300px]">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <SectionTitle as="h3">
          Frequently asked questions.
        </SectionTitle>
      </div>
      <div className="md:w-[600px] md:flex-shrink-0">
        <Accordion type="single" collapsible orientation="vertical" className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
            <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
              Do I have to sell or exit my LP position?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
                <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
              No. Your <DeFiTerm term="lp">LP</DeFiTerm> remains in the pool and continues earning trading fees. Avana uses your LP shares as <DeFiTerm term="collateral">collateral</DeFiTerm> without removing liquidity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
            <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
              How much can I borrow?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
                <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
              Up to 70% of your LP&apos;s value, depending on pool type, volatility, and <DeFiTerm term="oracle">oracle</DeFiTerm> confidence. No minimum amounts. Higher-quality collateral unlocks more borrowing room.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
            <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
              What happens if my LP value drops?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
                <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
              If your <DeFiTerm term="ltv">loan-to-value ratio</DeFiTerm> exceeds the <DeFiTerm term="liquidation-threshold">liquidation threshold</DeFiTerm>, part of your position may be <DeFiTerm term="liquidation">liquidated</DeFiTerm> to maintain system solvency.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
            <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
              Is my risk isolated?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
                <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
              Yes. Each <DeFiTerm term="lp-position">LP position</DeFiTerm> is managed independently with isolated risk. System-wide safety is enforced through Aave v4&apos;s <DeFiTerm term="hub">Hub</DeFiTerm>-and-<DeFiTerm term="spoke">Spoke</DeFiTerm> architecture.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
            <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
              Can I repay early or close my position?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
                <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
              Yes. <DeFiTerm term="repay">Repay</DeFiTerm> anytime, reduce your <DeFiTerm term="borrow">borrow</DeFiTerm>, or <DeFiTerm term="withdraw">withdraw</DeFiTerm> your LP once debt is cleared.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
