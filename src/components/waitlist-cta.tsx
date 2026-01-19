export default function WaitlistCTA() {
  return (
    <div className="py-16 md:py-20 border-t border-gray-100">
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Ready to unlock your LP's potential?
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-lg">
          Join the waitlist and be first to access LP-backed borrowing on Aave v4.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Join waitlist
          </button>
        </form>
      </div>
    </div>
  )
}
