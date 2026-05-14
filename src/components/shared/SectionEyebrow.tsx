import { cn } from "@/lib/utils"

export type SectionEyebrowTone =
  | "blue"
  | "emerald"
  | "violet"
  | "amber"
  | "cyan"
  | "rose"
  | "slate"

interface SectionEyebrowProps {
  children: React.ReactNode
  className?: string
  tone?: SectionEyebrowTone
}

const toneClasses: Record<SectionEyebrowTone, string> = {
  blue: "text-[#01AACF]",
  emerald: "text-[#01AACF]",
  violet: "text-[#01AACF]",
  amber: "text-[#01AACF]",
  cyan: "text-[#01AACF]",
  rose: "text-[#01AACF]",
  slate: "text-[#01AACF]",
}

export function SectionEyebrow({ children, className = "", tone = "blue" }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex text-[0.98rem] font-semibold tracking-[-0.02em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default SectionEyebrow
