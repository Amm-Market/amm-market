import { cn } from "@/lib/utils"

interface SectionLeadProps {
  children: React.ReactNode
  variant?: "display" | "section" | "body"
  className?: string
}

const variantClasses = {
  display: "type-display-lead",
  section: "type-section-lead",
  body: "type-body-copy",
} as const

export function SectionLead({
  children,
  variant = "section",
  className = "",
}: SectionLeadProps) {
  return <p className={cn(variantClasses[variant], className)}>{children}</p>
}

export default SectionLead
