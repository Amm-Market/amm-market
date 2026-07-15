"use client"

import type { ComponentPropsWithoutRef } from "react"
import { useSectionActivity } from "@/components/ui/use-section-activity"

type PerformanceSectionProps = ComponentPropsWithoutRef<"section"> & {
  rootMargin?: string
}

export function PerformanceSection({
  rootMargin,
  ...props
}: PerformanceSectionProps) {
  const { ref, isActive } = useSectionActivity<HTMLElement>(rootMargin)

  return (
    <section
      {...props}
      ref={ref}
      data-performance-active={isActive ? "true" : "false"}
    />
  )
}
