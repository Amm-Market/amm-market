"use client"

import dynamic from "next/dynamic"
import { LazySection } from "@/components/ui/lazy-section"

const TradeMarketShowcase = dynamic(
  () => import("@/components/trade-market-showcase"),
  { ssr: false }
)

export default function DeferredTradeMarketShowcase() {
  return (
    <LazySection rootMargin="400px" minHeight="420px">
      <TradeMarketShowcase />
    </LazySection>
  )
}
