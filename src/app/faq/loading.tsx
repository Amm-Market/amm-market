export default function FaqLoading() {
  return (
    <div className="site-content-shell py-10 lg:py-14" aria-hidden="true">
      <div className="mx-auto max-w-4xl animate-pulse text-center">
        <div className="mx-auto h-12 w-72 rounded-2xl bg-gray-200 md:h-16" />
        <div className="mx-auto mt-8 h-12 w-full max-w-md rounded-full bg-gray-100" />
      </div>

      <div className="mt-12 flex gap-3 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-36 w-[12rem] shrink-0 rounded-[1rem] border border-gray-200 bg-gray-50"
          />
        ))}
      </div>

      <div className="mt-10 animate-pulse space-y-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <div className="h-6 w-11/12 rounded-full bg-gray-200" />
            <div className="mt-4 h-4 w-10/12 rounded-full bg-gray-200" />
            <div className="mt-2 h-4 w-8/12 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}
