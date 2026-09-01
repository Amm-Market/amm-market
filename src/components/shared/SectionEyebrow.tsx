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
  blue: "text-type-tertiary",
  emerald: "text-type-tertiary",
  violet: "text-type-tertiary",
  amber: "text-type-tertiary",
  cyan: "text-type-tertiary",
  rose: "text-type-tertiary",
  slate: "text-type-tertiary",
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
