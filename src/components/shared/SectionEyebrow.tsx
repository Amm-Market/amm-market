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
  blue: "text-blue-600",
  emerald: "text-emerald-600",
  violet: "text-violet-600",
  amber: "text-amber-600",
  cyan: "text-cyan-600",
  rose: "text-rose-600",
  slate: "text-slate-600",
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
