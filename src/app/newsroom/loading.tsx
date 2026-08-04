export default function BlogLoading() {
  return (
    <div className="site-content-shell py-12" aria-hidden="true">
      <section className="flex justify-center pb-10 pt-4 md:pb-12 md:pt-8">
        <div className="flex w-full max-w-4xl animate-pulse flex-col items-center text-center">
          <div className="h-14 w-64 rounded-3xl bg-gray-200 md:h-20 md:w-80" />
          <div className="mt-8 h-12 w-full max-w-xl rounded-full bg-gray-100 md:mt-10" />
        </div>
      </section>

      <section className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="rounded-[1.1rem] p-1 sm:p-2">
              <div className="flex animate-pulse flex-col gap-3">
                <div className="aspect-[4/5] w-full rounded-[1rem] border border-slate-200/90 bg-gray-100 shadow-[0_14px_30px_rgba(15,23,42,0.04)]" />
                <div className="h-4 w-28 rounded-full bg-gray-200" />
                <div className="h-5 w-5/6 rounded-full bg-gray-200" />
                <div className="h-5 w-3/4 rounded-full bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
