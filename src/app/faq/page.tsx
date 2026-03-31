import FaqPageClient from "@/app/faq/faq-page-client"

export default async function FaqPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>
}) {
  const resolvedSearchParams = (await searchParams) ?? {}
  const initialSearchTerm = resolvedSearchParams.q?.trim() ?? ""

  return <FaqPageClient initialSearchTerm={initialSearchTerm} />
}
