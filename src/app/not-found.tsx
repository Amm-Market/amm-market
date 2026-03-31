import Link from "next/link"

const lightpaperQuestions = [
  {
    href: "/lightpaper#protocol-overview",
    label: "How does LP collateral borrowing work?",
  },
  {
    href: "/lightpaper#risk-management",
    label: "How is risk managed for LP positions?",
  },
  {
    href: "/lightpaper#market-opportunity",
    label: "What market opportunity is Avana targeting?",
  },
]

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_22%),radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(135deg,#050505_0%,#111111_48%,#020202_100%)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.1),transparent_18%),radial-gradient(circle_at_72%_62%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[16%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[-15%] top-[32%] h-[240px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_62%)] opacity-35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-2rem] h-64 bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_28px)] opacity-25"
        />

        <div className="mx-auto grid max-w-[1200px] gap-7 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-10 lg:pb-24 lg:pt-28">
          <div className="relative z-10 order-2 mx-auto flex max-w-xl flex-col items-center text-center lg:order-1 lg:mx-0 lg:items-start lg:text-left">
            <p className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 lg:block">
              Error 404
            </p>
            <h1
              aria-label="That page doesn't exist."
              className="mt-0 text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.07em] text-white sm:text-[3.15rem] lg:mt-5 lg:text-[3.75rem]"
            >
              That page
              <br />
              doesn&apos;t exist.
            </h1>
            <p className="mt-4 max-w-[18rem] text-[0.92rem] font-medium leading-6 tracking-[-0.02em] text-white/78 sm:max-w-md sm:text-[0.98rem] sm:leading-7 lg:mt-5 lg:text-[1.05rem]">
              But the answer you&apos;re looking for might. Search our FAQ or jump straight into the Avana Lightpaper.
            </p>

            <form action="/faq" method="get" className="mt-5 flex w-full max-w-[28rem] gap-2.5 lg:mt-8">
              <label htmlFor="not-found-search" className="sr-only">
                Search the FAQ
              </label>
              <input
                id="not-found-search"
                name="q"
                type="search"
                placeholder="What can we help you find?"
                className="h-12 min-w-0 flex-1 rounded-[8px] border border-white/20 bg-white px-4 text-[0.98rem] text-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.12)] outline-none transition placeholder:text-gray-400 focus:border-white/40 focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-[8px] bg-[#414347] px-5 text-[0.98rem] font-medium text-white transition hover:bg-[#2f3134] sm:px-6"
              >
                Search
              </button>
            </form>
          </div>

          <div className="relative z-10 order-1 flex items-center justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[460px] sm:max-w-[420px] lg:max-w-[520px]">
              <div className="flex items-center justify-center text-[clamp(6.1rem,31vw,9.8rem)] font-semibold leading-none tracking-[-0.08em] text-white/18 sm:text-[clamp(6rem,22vw,11rem)] lg:text-[clamp(7rem,22vw,13rem)]">
                <span>4</span>
                <div className="relative mx-[-0.04em] flex h-[0.98em] w-[0.98em] items-center justify-center">
                  <div className="absolute inset-[8%] rounded-full border border-dashed border-white/45" />
                  <div className="absolute inset-[8%] rounded-full [background:conic-gradient(from_25deg,rgba(255,255,255,0.98)_0_28%,rgba(255,255,255,0.2)_28%_62%,rgba(255,255,255,0.98)_62%_78%,rgba(255,255,255,0.18)_78%_100%)]" />
                  <div className="absolute inset-[30%] rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />
                  <span className="relative z-10 text-[0.36em] font-medium text-white/72">?</span>
                </div>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 py-12 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.95fr)] lg:items-start lg:gap-14">
          <div className="mx-auto flex max-w-[18rem] flex-col items-center text-center sm:max-w-sm lg:mx-0 lg:items-start lg:text-left">
            <h2 className="text-[1.72rem] font-semibold leading-[1.04] tracking-[-0.05em] text-black sm:text-[2.8rem]">
              Your questions,
              <br />
              answered
            </h2>
            <p className="mt-4 max-w-[17rem] text-[0.95rem] leading-6 text-[#414347] sm:mt-5 sm:max-w-sm sm:text-[1rem] sm:leading-7">
              Explore the sections of our Lightpaper that explain how Avana works, how risk is managed, and why the
              LP collateral opportunity matters.
            </p>
            <Link
              href="/lightpaper"
              className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-medium text-[#414347] underline decoration-[#414347]/35 underline-offset-4 transition hover:text-black hover:decoration-black sm:mt-6 sm:text-[1rem]"
            >
              Go to Avana&apos;s Lightpaper
            </Link>
          </div>

          <div className="space-y-3">
            {lightpaperQuestions.map((question) => (
              <Link
                key={question.href}
                href={question.href}
                className="group flex items-center justify-between gap-3 rounded-[8px] border border-[#d6dade] bg-[#eaeced] px-4 py-3.5 transition hover:border-[#bfc5ca] hover:bg-[#e2e5e7] sm:gap-4 sm:px-5 sm:py-4"
              >
                <span className="text-[0.98rem] font-medium leading-6 text-black sm:text-[1.05rem] sm:leading-7">{question.label}</span>
                <span className="shrink-0 text-black transition-transform group-hover:translate-x-0.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    <path d="M12 6L18 12L12 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
