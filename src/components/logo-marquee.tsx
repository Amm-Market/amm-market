/**
 * LogoMarquee - Scrolling logo strip for homepage (after hero).
 * 
 * Uses CSS marquee animation with duplicate content for seamless loop.
 * Gradient fades on left/right edges.
 */

import Image from "next/image"

const logos = [
  { name: "Uniswap", src: "https://cryptologos.cc/logos/uniswap-uni-logo.png", href: "https://uniswap.org" },
  { name: "Aave", src: "https://cryptologos.cc/logos/aave-aave-logo.png", href: "https://aave.com" },
  { name: "Curve", src: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png", href: "https://curve.fi" },
  { name: "Compound", src: "https://cryptologos.cc/logos/compound-comp-logo.png", href: "https://compound.finance" },
  { name: "Balancer", src: "https://cryptologos.cc/logos/balancer-bal-logo.png", href: "https://balancer.fi" },
  { name: "MakerDAO", src: "https://cryptologos.cc/logos/maker-mkr-logo.png", href: "https://makerdao.com" },
]

const LogoSet = () => (
  <>
    {logos.map((logo) => (
      <a
        key={logo.name}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
      >
        <Image
          src={logo.src}
          alt={logo.name}
          width={71}
          height={71}
          className="w-full h-auto object-contain"
        />
      </a>
    ))}
  </>
)

export function LogoMarquee() {
  return (
    <section className="overflow-hidden relative py-6 mt-8 md:mt-0 bg-white">
      <div className="w-full max-w-7xl mx-auto relative overflow-hidden">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bg-gradient-to-r from-white to-transparent z-10 w-10 lg:w-20 h-full"></div>
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bg-gradient-to-l from-white to-transparent z-10 w-10 lg:w-20 h-full"></div>
        
        <div className="scale-95">
          <div className="flex animate-marquee">
            {/* First set */}
            <div className="flex items-center justify-center gap-20 px-10 flex-shrink-0">
              <LogoSet />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center justify-center gap-20 px-10 flex-shrink-0">
              <LogoSet />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
