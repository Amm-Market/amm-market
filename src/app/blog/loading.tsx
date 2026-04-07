export default function BlogLoading() {
  return (
    <div className="site-content-shell py-12" aria-hidden="true">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="mx-auto h-12 w-64 rounded-2xl bg-gray-200 md:h-16" />
        <div className="mx-auto mt-8 h-12 w-full max-w-xl rounded-full bg-gray-100" />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-3 rounded-[1.1rem] p-1 sm:p-2">
            <div className="aspect-[4/5] w-full rounded-[1rem] border border-gray-200 bg-gray-100" />
            <div className="h-4 w-24 rounded-full bg-gray-200" />
            <div className="h-5 w-full rounded-full bg-gray-200" />
            <div className="h-5 w-5/6 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}
