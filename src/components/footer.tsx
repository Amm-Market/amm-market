import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto w-full max-w-5xl">
      <div className="mx-4 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-gray-200/50 pt-12 pb-6 sm:mx-6 sm:grid-cols-3 md:grid-cols-[auto_1fr]">
        {/* Logo */}
        <Link href="/" className="col-span-2 size-fit sm:col-span-3 md:col-span-2">
          <Image src="/aave-logo.svg" alt="Aave Logo" width={100} height={32} className="h-[18px] w-auto" />
        </Link>

        {/* Links Grid */}
        <div className="ml-auto contents md:grid md:w-[500px] md:grid-cols-3 md:gap-x-8">
          <div className="flex flex-col text-sm font-medium text-gray-900 gap-4">
            <span>Products</span>
            <div className="flex flex-col opacity-70 gap-2">
              <Link href="/lightpaper" className="hover:text-blue-600 transition-colors">
                Lightpaper
              </Link>
              <Link href="/early-access" className="hover:text-blue-600 transition-colors">
                Early Access
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-sm font-medium text-gray-900 gap-4">
            <span>Resources</span>
            <div className="flex flex-col opacity-70 gap-2">
              <Link href="/research" className="hover:text-blue-600 transition-colors">
                Research
              </Link>
              <Link href="/community" className="hover:text-blue-600 transition-colors">
                Community
              </Link>
              <Link href="/brand" className="hover:text-blue-600 transition-colors">
                Brand
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-sm font-medium text-gray-900 gap-4">
            <span>Developers</span>
            <div className="flex flex-col opacity-70 gap-2">
              <Link href="/developers" className="hover:text-blue-600 transition-colors">
                Documentation
              </Link>
              <Link href="/developers/hooks" className="hover:text-blue-600 transition-colors">
                Hooks
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">© {currentYear}. Designed with love.</p>
          <div className="flex items-center justify-between gap-2 sm:flex-row-reverse">
            <div className="flex items-center gap-2">
              <Link
                href="https://twitter.com/aaveaave"
                target="_blank"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-[26px] rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100"
              >
                <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link
                href="https://discord.gg/aave"
                target="_blank"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-[26px] rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100"
              >
                <Discord className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link
                href="https://github.com/aave"
                target="_blank"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-[26px] rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100"
              >
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
            </div>
            <div className="flex items-center text-xs text-gray-500 gap-2">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

