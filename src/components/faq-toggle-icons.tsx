/**
 * Plus/minus control for FAQ rows.
 * Relies on a parent with `group` + `data-state="open|closed"` (Radix AccordionTrigger).
 */
export function FaqToggleIcons() {
  return (
    <span
      className="relative ml-auto inline-flex h-6 w-6 shrink-0 items-center justify-center text-gray-600"
      aria-hidden="true"
    >
      {/* Plus — visible when closed */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute inset-0 transition-opacity duration-150 group-data-[state=open]:opacity-0"
      >
        <path
          d="M12 5V19M19 12H5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
      {/* Minus — visible when open */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute inset-0 opacity-0 transition-opacity duration-150 group-data-[state=open]:opacity-100"
      >
        <path
          d="M19 12H5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  )
}

export default FaqToggleIcons
