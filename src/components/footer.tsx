/**
 * Footer - The site-wide footer component.
 * 
 * @description
 * Renders the page footer with:
 * - Logo linking to homepage
 * - Navigation links organized in responsive columns
 * - Legal links (Privacy, Terms)
 * - Legal disclosure text moved out of the CTA area
 * 
 * @layout
 * - Mobile: 2-column grid with a compact footer link set
 * - Tablet/Desktop: Auto + 1fr with a 4-column nested grid for links
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
}

const footerDisclosure = [
  "Borrowing against LP tokens involves risk, including liquidation if market conditions move against your position. Avana does not custody your funds, rehypothecate LP positions, or alter how your liquidity operates on underlying AMMs. Loan terms, interest rates, and collateral values are enforced on-chain using transparent oracle systems and automated risk parameters. You remain in full control of your position at all times and can repay or adjust collateral whenever you choose. Only borrow amounts you are comfortable maintaining through market volatility.",
  "This material is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, (ii) intended to provide accounting, legal, or tax advice, or investment recommendations or (iii) an official statement of Avana. Consult your advisors before making any investment decision. No representation or warranty is made, expressed or implied with respect to the accuracy of the information or to the future performance of any digital asset, financial instrument or other market or economic measure. Avana may have financial interests in, or relationships with, some of the entities and/or publications discussed or referenced in the materials. Avana does not endorse or approve links or third-party websites that may be provided in the materials.",
] as const

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
      { href: siteRoutes.about, label: "About" },
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
  {
    title: "Legal",
    links: [
      { href: siteRoutes.privacy, label: "Privacy" },
      { href: siteRoutes.terms, label: "Terms" },
    ],
  },
] as const

export default function Footer(): React.JSX.Element {
  return (
    <footer className="site-content-shell">
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-gray-200/50 pt-12 pb-6 sm:grid-cols-3 md:grid-cols-[auto_1fr] md:gap-x-12 lg:gap-x-16">
        {/* Logo */}
        <Link href={siteRoutes.home} className="col-span-2 size-fit sm:col-span-3 md:col-span-1">
          <Image src={WORDMARK_PATH} alt={`${SITE_NAME} wordmark`} width={174} height={32} className="h-[18px] w-[98px]" />
        </Link>

        {/* Links Grid */}
        <div className="ml-auto contents md:grid md:w-[820px] md:grid-cols-5 md:gap-x-8 md:gap-y-10">
          {footerSections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-4 text-sm font-medium text-gray-900"
            >
              <span>{section.title}</span>
              <div className="flex flex-col opacity-70 gap-2">
                {section.links.map((link) => (
                  <Link
                    key={`${section.title}-${link.label}-${link.href}`}
                    href={link.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 border-t border-gray-200/50 pt-6 text-xs leading-5 text-gray-500 sm:col-span-3 md:col-span-2">
          <div className="space-y-3">
            {footerDisclosure.map((paragraph, index) => (
              <p key={`footer-disclosure-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
