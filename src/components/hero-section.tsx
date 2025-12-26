import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-playfair"
})

export default function HeroSection() {
  return (
    <section className="pb-16 md:pb-32">
      {/* New Promotional Banner Section */}
      <div className="mb-8 md:mb-12">
        <div className="mx-auto max-w-5xl space-y-6 px-6 lg:px-0 text-center">
          {/* Headline */}
          <h1 className={`${playfairDisplay.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.9] text-gray-900 font-normal mb-8 md:mb-12`}>
            Borrow up to <span className="font-black">70%</span>
            <br />
            of your LP portfolio
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get access to funds at 5% APR by using your LP positions as collateral.
            <br />
            Keep earning trading fees while your assets remain productive.
          </p>

          {/* Testnet Live Logo Section */}
          <div className="mt-8 md:mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
              <p className="text-xs sm:text-sm text-gray-500">Testnet Live with:</p>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 md:gap-8">
                <img
                  src="https://raw.githubusercontent.com/Uniswap/brand-kit/main/logo/logo.svg"
                  alt="Uniswap"
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <img
                  src="https://raw.githubusercontent.com/balancer-labs/frontend-v2/master/public/logo.svg"
                  alt="Balancer"
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <img
                  src="https://curve.fi/logo.svg"
                  alt="Curve"
                  className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Content */}
      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <Image
              alt="Drive web app interface"
              width={1024}
              height={612}
              className="w-full h-full object-cover rounded-xl"
              src="https://studio.uxpincdn.com/studio/wp-content/uploads/2024/01/drive-web-app-1024x612.png.webp"
              priority
              onError={(e) => {
                // Fallback handling
                e.currentTarget.style.display = "none"
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap size-4"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              <h3 className="text-sm font-medium">Oracleless Lending</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Set your collateral's price range and earn trading fees while you borrow.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cpu size-4"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
              <h3 className="text-sm font-medium">Up to 10X Leverage</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Increase your exposure by effectively trading on margin with borrowed capital.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock size-4"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <h3 className="text-sm font-medium">Secure and Seamless</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Integrated MEV protection and auto-compounding for worry-free gains.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles size-4"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              <h3 className="text-sm font-medium">Instant Refinance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Switch positions to take advantage of rates, liquidations and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

