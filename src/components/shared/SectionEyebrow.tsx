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
  blue: "text-type-accent",
  emerald: "text-type-accent",
  violet: "text-type-accent",
  amber: "text-type-accent",
  cyan: "text-type-accent",
  rose: "text-type-accent",
  slate: "text-type-accent",
}

export function SectionEyebrow({ children, className = "", tone = "blue" }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "type-eyebrow inline-flex",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default SectionEyebrow
