import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liquidators - Avana",
  description: "Placeholder page for Avana liquidators.",
}

export default function LiquidatorsPage() {
  return (
    <main className="bg-white">
      <section className="py-24">
        <div className="site-content-shell">
          <h1 className="text-[2.5rem] font-[560] tracking-[-0.06em] text-gray-950 sm:text-[3.25rem]">
            Liquidators
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Coming soon.
          </p>
        </div>
      </section>
    </main>
  )
}
