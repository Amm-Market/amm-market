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
      className={`text-left text-[clamp(2.5rem,5vw,4.4rem)] font-medium leading-[0.97] tracking-[-0.055em] text-[#18323c] lg:text-[3.5rem] ${className}`}
    >
      {children}
    </Tag>
  )
}

export default SectionTitle
