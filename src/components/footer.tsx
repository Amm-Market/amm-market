/**
 * Footer - The site-wide footer component.
 * 
 * @description
 * Renders the page footer with:
 * - Logo linking to homepage
 * - Brand description and social links
 * - Navigation links organized in responsive columns
 * - Legal disclosure text moved out of the CTA area
 * 
 * @layout
 * - Mobile: stacked brand block with a compact 3-column link grid
 * - Tablet/Desktop: wide brand block with a 3-column nested grid for links
 * 
 * @example
 * // Used in root layout
 * <Footer />
 * 
 * @see src/app/layout.tsx - Where this component is rendered
 */
import Link from "next/link"
import Image from "next/image"
import { SITE_NAME, WORDMARK_PATH, siteRoutes } from "@/lib/site"

interface FooterLink {
  href: string
  label: string
}

interface FooterSection {
  title: string
  links: readonly FooterLink[]
  className?: string
}

interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
}

const footerDisclosure = [
  "Borrowing against LP tokens involves risk, including liquidation if market conditions move against your position. Avana does not custody your funds, rehypothecate LP positions, or alter how your liquidity operates on underlying AMMs. Loan terms, interest rates, and collateral values are enforced on-chain using transparent oracle systems and automated risk parameters. You remain in full control of your position at all times and can repay or adjust collateral whenever you choose. Only borrow amounts you are comfortable maintaining through market volatility.",
  "This material is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations or (iii) an official statement of Avana. Consult your advisors before making any investment decision. No representation or warranty is made, expressed or implied with respect to the accuracy of the information or to the future performance of any digital asset, financial instrument or other market or economic measure. Avana may have financial interests in, or relationships with, some of the entities and/or publications discussed or referenced in the materials. Avana does not endorse or approve links or third-party websites that may be provided in the materials.",
] as const

const socialLinks: readonly SocialLink[] = [
  {
    href: "https://twitter.com/dexmini",
    label: "Avana on Twitter",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5">
        <path
          d="M4 4L20 20M20 4L4 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://github.com/aave",
    label: "Avana on GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.57 9.57 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.69.9.69 1.82v2.7c0 .26.18.57.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
  },
  {
    href: "https://t.me/dexmini",
    label: "Avana on Telegram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5">
        <path
          fill="currentColor"
          d="M21.6 4.8 18.5 20c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8L18 7.6c.4-.3-.1-.5-.6-.2L7 14.2l-4.7-1.5c-1-.3-1-.9.2-1.3L20 4.2c.9-.3 1.5.2 1.2.6Z"
        />
      </svg>
    ),
  },
  {
    href: "https://governance.aave.com",
    label: "Avana on Discourse",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5">
        <path
          fill="currentColor"
          d="M12 3.75a8.25 8.25 0 0 0-7.67 11.3l-1.1 4.2 4.12-1.2A8.25 8.25 0 1 0 12 3.75Zm0 2.1a6.15 6.15 0 0 1 5.8 8.2l-.14.38.58 2.2-2.16-.63-.33.18A6.15 6.15 0 1 1 12 5.85Zm-2.6 6.1a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm5.2 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm-2.6 3.55c1.14 0 2.2-.45 2.98-1.26l-1.02-.99a2.72 2.72 0 0 1-3.92 0l-1.02.99A4.16 4.16 0 0 0 12 15.5Z"
        />
      </svg>
    ),
  },
]

const footerSections: readonly FooterSection[] = [
  {
    title: "Explore",
    links: [
      { href: siteRoutes.borrow, label: "Borrow" },
      { href: siteRoutes.invest, label: "Invest" },
      { href: siteRoutes.earn, label: "Earn" },
      { href: siteRoutes.platform, label: "Platform" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: siteRoutes.about, label: "About" },
      { href: siteRoutes.blog, label: "Blog" },
      { href: siteRoutes.faq, label: "FAQ" },
      { href: siteRoutes.brand, label: "Brand" },
    ],
  },
  {
    title: "Docs",
    links: [
      { href: siteRoutes.developers, label: "Developers" },
      { href: siteRoutes.lightpaper, label: "Lightpaper" },
      { href: siteRoutes.privacy, label: "Privacy" },
      { href: siteRoutes.terms, label: "Terms" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://twitter.com/dexmini", label: "Twitter" },
      { href: "https://github.com/aave", label: "GitHub" },
      { href: "https://t.me/dexmini", label: "Telegram" },
      { href: "https://governance.aave.com", label: "Discourse" },
    ],
    className: "lg:hidden",
  },
] as const

export default function Footer(): React.JSX.Element {
  return (
    <footer className="site-content-shell">
      <div className="border-t border-gray-200/50 pt-12 pb-6">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[minmax(16rem,1.2fr)_minmax(0,1fr)] lg:gap-x-8 xl:gap-x-10">
          {/* Logo */}
          <div className="space-y-5 lg:max-w-sm">
            <Link href={siteRoutes.home} prefetch={false} className="size-fit">
              <Image src={WORDMARK_PATH} alt={`${SITE_NAME} wordmark`} width={174} height={32} className="h-[18px] w-[98px]" />
            </Link>
            <p className="max-w-sm text-[1.02rem] font-normal leading-7 tracking-[-0.02em] text-gray-700">
              Avana is an LP-collateral protocol on Aave v4 that helps liquidity providers borrow against active positions while staying in the pool.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-gray-900 transition hover:border-black/20 hover:bg-black/[0.03]"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:justify-self-center lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 xl:gap-x-8">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className={`flex flex-col gap-4 text-sm font-normal text-gray-900 ${section.className ?? ""}`}
              >
                <span className="font-medium">{section.title}</span>
                <div className="flex flex-col opacity-70 gap-2">
                  {section.links.map((link) => (
                    <Link
                      key={`${section.title}-${link.label}-${link.href}`}
                      href={link.href}
                      prefetch={false}
                      className="transition-colors hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200/50 pt-6 text-xs leading-5 text-gray-500 lg:col-span-2">
            <div className="space-y-3">
              {footerDisclosure.map((paragraph, index) => (
                <p key={`footer-disclosure-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
