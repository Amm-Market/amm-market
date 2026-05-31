import Link from "next/link"

const links = [
  { href: "/faq", label: "FAQ" },
  { href: "/lightpaper", label: "Lightpaper" },
]

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center bg-white px-6 py-16 text-[#0F1518] sm:px-8 sm:py-20">
      <section className="mx-auto w-full max-w-[760px]">
        <div className="py-14 text-center sm:py-18">
          <p className="mt-5 text-[4.5rem] font-semibold leading-none tracking-[-0.06em] text-[#01AACF] sm:text-[5.75rem]">
            404
          </p>

          <h1 className="mx-auto mt-6 max-w-[620px] text-[1.05rem] font-semibold leading-7 tracking-[-0.02em] text-[#0F1518]">
            This page isn&apos;t available.
          </h1>
          <p className="mx-auto mt-5 max-w-[440px] text-[1rem] leading-7 text-[#414347] sm:text-[1.05rem]">
            The address may be wrong or the page may have moved.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#01AACF] px-5 text-sm font-medium text-[#0F1518] transition hover:bg-[#00a0c2]"
            >
              Go to homepage
            </Link>

            <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-x-5 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#01AACF] underline underline-offset-4 transition hover:text-[#008fb0]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

      </section>
    </main>
  )
}
