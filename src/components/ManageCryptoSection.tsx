import Image from "next/image"

/**
 * Manage crypto on your terms (Onchain) section.
 * Used on the webapp page before CTA.
 */
export default function ManageCryptoSection() {
  return (
    <section className="flex flex-col items-center p-[104px_24px_80px] md:p-[64px_56px_0px] lg:p-[120px_180px_80px]">
      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="h-[28px] w-auto">
          <Image
            alt="Onchain Logo"
            className="object-fill h-[28px] w-auto"
            loading="eager"
            src="https://mkt-static.crypto.com/onchain-logo.webp"
            width={120}
            height={28}
          />
        </div>
        <h2 className="type-display-title max-w-[327px] text-center text-[#061121] md:max-w-full" style={{ maxWidth: 600 }}>
          Manage crypto on your terms
        </h2>
        <div className="type-page-lead max-w-[295px] text-center text-[#565F76] md:max-w-[575px] lg:max-w-[550px]">
          <p>
            Take full control of your crypto and keys, with a non-custodial multi-chain wallet and a full suite of onchain services in one place.
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button type="button" className="onchain-qrcode-container" aria-label="Download Onchain">
          <div className="flex items-center justify-center bg-[#034481] text-white h-[44px] w-auto p-[10px_18px_10px_22px] rounded-[40px] cursor-pointer">
            <div className="flex items-center justify-center gap-2">
              <p className="text-[16px] font-semibold leading-[110%]">Download Onchain</p>
              <Image
                alt="Qrcode Icon"
                className="object-fill"
                loading="eager"
                src="https://mkt-static.crypto.com/qrcode-icon.svg"
                width={24}
                height={24}
              />
            </div>
          </div>
        </button>
        <a
          className="flex h-[44px] items-center justify-center gap-2 rounded-[888px] p-[10px_18px_10px_22px] bg-[rgba(17,153,250,0.10)] border border-[#002F61] text-[#00254F]"
          href="https://onchain.crypto.com/tokens?source=cdc-market"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[16px] font-semibold leading-[110%] whitespace-nowrap">Open Onchain Web</p>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5576 6.55859C13.8017 6.31452 14.1983 6.31452 14.4424 6.55859L19.4424 11.5586L19.5225 11.6572C19.6822 11.8998 19.6558 12.23 19.4424 12.4434L14.4424 17.4434C14.1984 17.6871 13.8016 17.6871 13.5576 17.4434C13.3136 17.1994 13.3138 16.8027 13.5576 16.5586L17.4902 12.626H5C4.65498 12.626 4.37525 12.3459 4.375 12.001C4.375 11.6558 4.65482 11.376 5 11.376H17.4902L13.5576 7.44336C13.3136 7.19936 13.3138 6.80269 13.5576 6.55859Z" fill="currentColor" />
          </svg>
        </a>
        <a
          href="https://chromewebstore.google.com/detail/cryptocom-onchain-extensi/hifafgmccdpekplomjjkcfgodnhcellj"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-center h-[44px] p-[10px_18px_10px_22px] gap-2 rounded-[888px] cursor-pointer onchain-cta-download-extension bg-[rgba(17,153,250,0.1)] border-[1px] border-[#002F61] min-w-[214px]">
            <p className="text-[16px] font-semibold leading-[110%] text-[#00254F] order-0 whitespace-nowrap">Chrome Extension</p>
            <Image
              alt="Chrome Dark"
              className="object-fill flex-shrink-0"
              loading="eager"
              src="https://mkt-static.crypto.com/chrome-dark.svg"
              width={24}
              height={24}
            />
          </div>
        </a>
      </div>
      <div className="mt-12 lg:mt-[56px]">
        <div className="relative hidden lg:flex w-[818px] h-[527px]">
          <div className="flex onchain-hero-center-phone absolute" style={{ width: 336, height: 526, left: 197, top: 0, zIndex: 2 }}>
            <div className="w-full h-full">
              <Image
                alt="Center"
                className="object-fill w-full h-full"
                loading="eager"
                src="https://mkt-static.crypto.com/center.webp"
                width={336}
                height={526}
              />
            </div>
          </div>
          <div className="flex onchain-hero-left1-phone absolute" style={{ width: 297, height: 493, left: 41, top: 30, zIndex: 1 }}>
            <div className="w-full h-full">
              <Image
                alt="Phone Left 1"
                className="object-fill w-full h-full"
                loading="eager"
                src="https://mkt-static.crypto.com/phone-left-1.webp"
                width={297}
                height={493}
              />
            </div>
          </div>
          <div className="flex onchain-hero-right1-phone absolute" style={{ width: 337, height: 491, left: 345, top: 30, zIndex: 1 }}>
            <div className="w-full h-full">
              <Image
                alt="Phone Right 1"
                className="object-fill w-full h-full"
                loading="eager"
                src="https://mkt-static.crypto.com/phone-right-1.webp"
                width={337}
                height={491}
              />
            </div>
          </div>
          <div className="flex onchain-hero-left2-phone absolute" style={{ width: 253, height: 440, left: -65, top: 71, zIndex: 0 }}>
            <div className="w-full h-full">
              <Image
                alt="Phone Left 2"
                className="object-fill w-full h-full"
                loading="eager"
                src="https://mkt-static.crypto.com/phone-left-2.webp"
                width={253}
                height={440}
              />
            </div>
          </div>
          <div className="flex onchain-hero-right2-phone absolute" style={{ width: 303, height: 438, left: 507, top: 71, zIndex: 0 }}>
            <div className="w-full h-full">
              <Image
                alt="Phone Right 2"
                className="object-fill w-full h-full"
                loading="eager"
                src="https://mkt-static.crypto.com/phone-right-2.webp"
                width={303}
                height={438}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-full md:w-[650px]">
          <div className="w-full h-auto aspect-[698/450]">
            <Image
              alt="Hero Phones"
              className="object-fill w-full h-auto aspect-[698/450]"
              loading="eager"
              src="https://mkt-static.crypto.com/hero-phones.webp"
              width={698}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
