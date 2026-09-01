interface DeveloperDocSectionHeaderProps {
  title: string
  description?: string
}

export function DeveloperDocSectionHeader({
  title,
  description,
}: DeveloperDocSectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="type-doc-section-title">{title}</h2>
      {description ? (
        <p className="type-doc-body mt-3 max-w-3xl">{description}</p>
      ) : null}
    </div>
  )
}
