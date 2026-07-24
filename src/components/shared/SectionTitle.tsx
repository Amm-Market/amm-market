import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "site-section-title text-left text-[clamp(2.5rem,5vw,4.4rem)] font-normal leading-[0.97] tracking-[-0.055em] text-black lg:text-[3.5rem]",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default SectionTitle
