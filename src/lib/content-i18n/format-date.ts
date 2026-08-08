/** Format an English content date ("July 24, 2026") in the target locale. */
export function formatContentDate(date: string, locale: string): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  try {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(parsed)
  } catch {
    return date
  }
}
