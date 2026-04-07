interface SectionEyebrowProps {
  children: React.ReactNode
  className?: string
}

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <span
      className={`inline-flex text-[0.98rem] font-semibold tracking-[-0.02em] text-[#3f6cff] ${className}`}
    >
      {children}
    </span>
  )
}

export default SectionEyebrow
