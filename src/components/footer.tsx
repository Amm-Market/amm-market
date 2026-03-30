/**
 * Footer - The site-wide footer component.
 * 
 * @description
 * Renders the page footer with:
 * - Logo linking to homepage
 * - Navigation links organized in three columns (Products, Resources, Developers)
 * - Social media links (Twitter, Discord, GitHub)
 * - Legal links (Privacy, Terms)
 * - Copyright notice with dynamic year
 * 
 * @layout
 * - Mobile: 2-column grid
 * - Tablet: 3-column grid  
 * - Desktop: Auto + 1fr with 3-column nested grid for links
 * 
 * @example
 * // Used in root layout
 * <Footer />
 * 
 * @see src/app/layout.tsx - Where this component is rendered
 */
import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"
import { SITE_NAME, WORDMARK_PATH, siteRoutes } from "@/lib/site"
const footerSections = [
  {
    title: "Products",
    links: [
      { href: siteRoutes.lightpaper, label: "Lightpaper" },
      { href: siteRoutes.earlyAccess, label: "Early Access" },
      { href: siteRoutes.launchApp, label: "Launch App" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: siteRoutes.blog, label: "Blog" },
      { href: siteRoutes.faq, label: "FAQ" },
      { href: siteRoutes.brand, label: "Brand" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: siteRoutes.developers, label: "Documentation" },
      { href: siteRoutes.developersIntro, label: "Introduction" },
    ],
  },
] as const

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto w-full max-w-5xl">
      <div className="mx-4 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-gray-200/50 pt-12 pb-6 sm:mx-6 sm:grid-cols-3 md:grid-cols-[auto_1fr]">
        {/* Logo */}
        <Link href={siteRoutes.home} className="col-span-2 size-fit sm:col-span-3 md:col-span-2">
          <Image src={WORDMARK_PATH} alt={`${SITE_NAME} wordmark`} width={174} height={32} className="h-[18px] w-[98px]" />
        </Link>

        {/* Links Grid */}
        <div className="ml-auto contents md:grid md:w-[500px] md:grid-cols-3 md:gap-x-8">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col text-sm font-medium text-gray-900 gap-4">
              <span>{section.title}</span>
              <div className="flex flex-col opacity-70 gap-2">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {currentYear}. Designed with love.
          </p>
          <div className="flex items-center justify-between gap-2 sm:flex-row-reverse">
            <div className="flex items-center gap-2">
              <Link
                href="https://twitter.com/dexmini"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Avana on X"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-[26px] rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100"
              >
                <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link
                href="https://discord.gg/aave"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Avana on Discord"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-[26px] rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100"
              >
                <Discord className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link
                href="https://github.com/aave"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Avana on GitHub"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none size-[26px] rounded-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100"
              >
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              </Link>
            </div>
            <div className="flex items-center text-xs text-gray-500 gap-2">
              <Link href={siteRoutes.privacy} className="hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href={siteRoutes.terms} className="hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
