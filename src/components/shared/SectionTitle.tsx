import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3"
  variant?: "display" | "index" | "section"
}

const variantClasses = {
  display: "type-display-title",
  index: "type-index-title",
  section: "type-section-title",
} as const

export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
  variant = "section",
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "site-section-title text-left text-foreground",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default SectionTitle
