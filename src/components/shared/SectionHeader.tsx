/**
 * SectionHeader - Reusable section header with title and description.
 * 
 * @description
 * Provides consistent styling for section headings throughout the landing page.
 * Supports optional description text below the main heading.
 */

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h2 className="type-marketing-section-title text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="type-marketing-section-lead text-gray-600">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
