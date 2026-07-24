import { cn } from "@/lib/utils"

interface FeatureCardTitleProps {
  children: React.ReactNode
  className?: string
  as?: "h3" | "h4" | "p"
}

export function FeatureCardTitle({
  children,
  className = "",
  as: Tag = "h3",
}: FeatureCardTitleProps) {
  return (
    <Tag
      className={cn(
        "feature-card-title text-[1.45rem] font-medium leading-[1.08] tracking-[-0.045em] text-[#18323c]",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

interface FeatureCardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function FeatureCardDescription({
  children,
  className = "",
}: FeatureCardDescriptionProps) {
  return (
    <p className={cn("feature-card-description text-[0.9375rem] leading-[1.65] text-gray-600", className)}>
      {children}
    </p>
  )
}

export default FeatureCardTitle
