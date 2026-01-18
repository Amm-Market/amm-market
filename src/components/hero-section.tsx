"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Playfair_Display } from "next/font/google"
import { TrendingUp, Zap, Blocks, Coins, ChevronLeft, ChevronRight } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-playfair"
})

const testimonials = [
  {
    quote: "Using LP tokens as collateral is a natural step",
    highlight: "toward composable, efficient, and scalable decentralized finance.",
    ending: "",
    author: "Vitalik Buterin – Ethereum",
    image: "https://i.pravatar.cc/435?img=1"
  },
  {
    quote: "Enabling LP tokens to be used as collateral",
    highlight: "unlocks new avenues for liquidity and capital efficiency.",
    ending: "",
    author: "Stani Kulechov – Aave",
    image: "https://i.pravatar.cc/435?img=2"
  },
  {
    quote: "LP tokens aren't just positions—they're assets.",
    highlight: "Unlocking their potential as collateral will change how people use DeFi.",
    ending: "",
    author: "Andre Cronje – Yearn Finance",
    image: "https://i.pravatar.cc/435?img=3"
  },
  {
    quote: "Tokenized positions, like LP tokens, can serve as powerful collateral,",
    highlight: "creating more flexible and efficient lending markets.",
    ending: "",
    author: "Marcus – Balancer",
    image: "https://i.pravatar.cc/435?img=4"
  },
  {
    quote: "LP tokens are the backbone of capital-efficient DeFi strategies,",
    highlight: "allowing users to do more with the liquidity they already provide.",
    ending: "",
    author: "Robert Leshner – Compound Finance",
    image: "https://i.pravatar.cc/435?img=5"
  }
]

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentTestimonial]
  return (
    <section className="pb-12 md:pb-16">
      {/* Hero Section - Phone Left, Text Right (Coinbase style) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-8 md:pt-6 md:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column - Hero Image */}
          <div className="flex-1 mb-10 lg:mb-0 order-2 lg:order-1 lg:flex-[1.1]">
            <div className="relative w-full max-w-[700px] lg:max-w-[650px] xl:max-w-[700px] mx-auto lg:mx-0">
              <Image
                src="/images/Hero__4_.png"
                alt="Momo app interface"
                width={1400}
                height={1400}
                className="w-full h-auto rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.15] text-gray-900 mb-4 md:mb-6">
              <span className="lg:whitespace-nowrap">Borrow up to 80%</span>
              <br />
              <span className="lg:whitespace-nowrap">against your LPs</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
              Get access to loans by using your LP positions as collateral.
            </p>

            {/* Email CTA */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap text-base">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Trusted by top teams Section - inside hero */}
        <div className="flex flex-col items-center pt-8 gap-4 sm:flex-row sm:pt-12 sm:gap-8">
          <h3 className="flex-shrink-0 text-sm font-medium text-gray-500">Trusted by top teams at</h3>
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="flex animate-marquee">
              <div className="flex items-center gap-8 px-4">
                {/* Jupiter */}
                <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="114" height="41" viewBox="0 0 114 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33398 28.457C10.443 29.9994 11.8654 31.2901 13.5082 32.2442C15.1508 33.1985 16.9768 33.7946 18.8659 33.9936C17.8941 32.5309 16.4811 31.1852 14.7172 30.1607C12.9534 29.1362 11.0854 28.5766 9.33398 28.457Z" fill="#646871" />
                    <path d="M17.0889 26.08C13.6907 24.1057 10.0126 23.6027 7.38086 24.4915C7.63487 25.3312 7.96991 26.144 8.38131 26.919C10.6678 26.866 13.1644 27.487 15.4873 28.8363C17.8105 30.1855 19.5871 32.0477 20.6744 34.0607C21.5518 34.0337 22.4246 33.922 23.2804 33.727C22.7483 31.0009 20.4863 28.0547 17.0889 26.08Z" fill="#646871" />
                    <path d="M46.8005 11.342H49.9235V21.7615C49.9235 22.7247 49.707 23.5613 49.2741 24.2716C48.846 24.9818 48.25 25.5291 47.4864 25.9133C46.7227 26.2977 45.8349 26.4898 44.8231 26.4898C43.9232 26.4898 43.106 26.3317 42.3715 26.0155C41.6418 25.6944 41.0629 25.208 40.6349 24.5562C40.2068 23.8995 39.9952 23.0749 40.0001 22.0826H43.1448C43.1547 22.4767 43.2349 22.8147 43.3857 23.0969C43.5413 23.3741 43.7529 23.5882 44.0205 23.739C44.2929 23.8848 44.614 23.9578 44.9836 23.9578C45.3729 23.9578 45.7011 23.8751 45.9687 23.7097C46.2411 23.5395 46.4478 23.2914 46.5889 22.9655C46.73 22.6396 46.8005 22.2382 46.8005 21.7615V11.342Z" fill="#646871" />
                  </svg>
                </a>
                {/* Bybit */}
                <a href="https://bybit.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="87" height="41" viewBox="0 0 87 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.418 26.2178V9.12109H60.8545V26.2178H57.418Z" fill="#646871" />
                    <path d="M17.3672 31.2959H10V14.1992H17.071C20.5075 14.1992 22.5099 16.0721 22.5099 19.0018C22.5099 20.8982 21.2239 22.1237 20.3338 22.5318C21.3963 23.0118 22.7563 24.0921 22.7563 26.3743C22.7563 29.5669 20.5075 31.2959 17.3672 31.2959ZM16.799 17.1773H13.4365V21.1153H16.799C18.2574 21.1153 19.0734 20.3227 19.0734 19.1456C19.0734 17.9698 18.2574 17.1773 16.799 17.1773ZM17.0212 24.1169H13.4365V28.3191H17.0212C18.5792 28.3191 19.3198 27.3592 19.3198 26.2056C19.3198 25.0534 18.5778 24.1169 17.0212 24.1169Z" fill="#646871" />
                    <path d="M33.2382 24.2843V31.2959H29.8259V24.2843L24.5352 14.1992H28.2679L31.5563 21.0904L34.7949 14.1992H38.5277L33.2382 24.2843Z" fill="#646871" />
                  </svg>
                </a>
                {/* Drift */}
                <a href="https://drift.trade" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="92" height="41" viewBox="0 0 92 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.1274 13.3111H44.9942C46.2458 13.3111 47.3766 13.6098 48.3864 14.2071C49.4105 14.7902 50.214 15.6365 50.7971 16.7459C51.3945 17.8552 51.6932 19.1566 51.6932 20.65C51.6932 22.2429 51.4016 23.6154 50.8185 24.7674C50.2353 25.9052 49.4317 26.7728 48.4077 27.3702C47.398 27.9533 46.2601 28.2449 44.9942 28.2449H39.1274V13.3111ZM44.6957 25.7061C45.8477 25.7061 46.8006 25.2795 47.5544 24.4261C48.3082 23.5728 48.6851 22.3141 48.6851 20.65C48.6851 19.626 48.5073 18.7513 48.1518 18.0259C47.7961 17.3006 47.3126 16.7601 46.701 16.4045C46.1037 16.0347 45.4352 15.8498 44.6957 15.8498H42.0929V25.7061H44.6957Z" fill="#646871" />
                    <path d="M58.2963 19.7998C57.699 19.7998 57.2226 20.0487 56.8669 20.5465C56.5114 21.0442 56.3336 21.6274 56.3336 22.2958V28.2481H53.5815V17.4957H56.3336V18.9038C56.547 18.4486 56.8385 18.1002 57.2083 17.8584C57.5781 17.6166 58.0118 17.4957 58.5096 17.4957H59.8323V19.7998H58.2963Z" fill="#646871" />
                  </svg>
                </a>
                {/* Crypto.com */}
                <a href="https://crypto.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="144" height="41" viewBox="0 0 144 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.369 26.654C38.5419 26.654 36.4526 24.4395 36.4526 21.7194C36.4526 18.9993 38.5419 16.7305 41.3865 16.7305C43.1882 16.7305 44.3046 17.3972 45.1871 18.37L43.8366 19.8282C43.1699 19.1262 42.4679 18.6399 41.369 18.6399C39.7837 18.6399 38.6313 20.0087 38.6313 21.6835C38.6313 23.3941 39.8021 24.7629 41.4767 24.7629C42.5037 24.7629 43.2601 24.2766 43.9445 23.5746L45.259 24.8707C44.323 25.9153 43.2241 26.654 41.369 26.654Z" fill="#646871" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M49.3945 26.6513H47.2158V16.746H49.3945V19.0692C49.9887 17.6461 51.0875 16.6734 52.7623 16.746V19.0516H52.6361C50.7274 19.0516 49.3945 20.2943 49.3945 22.8155V26.6513Z" fill="#646871" />
                  </svg>
                </a>
                {/* Backpack */}
                <a href="https://backpack.app" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="128" height="41" viewBox="0 0 128 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.813 10.7152C18.6853 10.7152 19.5036 10.8321 20.2611 11.049C19.5194 9.32038 17.9795 8.82812 16.2656 8.82812C14.5483 8.82812 13.0056 9.32231 12.2656 11.0592C13.0176 10.8347 13.8324 10.7152 14.7017 10.7152H17.813ZM14.5022 12.4507C10.36 12.4507 8 15.7093 8 19.7289V23.8581C8 24.2601 8.33579 24.5781 8.75 24.5781H23.75C24.1642 24.5781 24.5 24.2601 24.5 23.8581V19.7289C24.5 15.7093 21.7556 12.4507 17.6135 12.4507H14.5022ZM16.2441 19.7647C17.6939 19.7647 18.8691 18.5894 18.8691 17.1397C18.8691 15.6899 17.6939 14.5147 16.2441 14.5147C14.7944 14.5147 13.6191 15.6899 13.6191 17.1397C13.6191 18.5894 14.7944 19.7647 16.2441 19.7647ZM8 27.0051C8 26.6033 8.33579 26.2773 8.75 26.2773H23.75C24.1642 26.2773 24.5 26.6033 24.5 27.0051V31.3721C24.5 32.1761 23.8284 32.8278 23 32.8278H9.5C8.67157 32.8278 8 32.1761 8 31.3721V27.0051Z" fill="#646871" />
                    <path d="M32.8887 27.7393V14.4883H38.4914C39.4045 14.4883 40.1871 14.6424 40.8393 14.9507C41.4914 15.259 41.9895 15.7037 42.3334 16.2847C42.6772 16.8539 42.8491 17.5476 42.8491 18.3658C42.8491 18.9468 42.6891 19.5041 42.3689 20.0377C42.0487 20.5594 41.5211 20.9982 40.7859 21.3539V20.0021C41.4855 20.2748 42.025 20.6009 42.4045 20.9804C42.784 21.3598 43.0448 21.7748 43.1871 22.2254C43.3294 22.6642 43.4005 23.1266 43.4005 23.6128C43.4005 24.9172 42.9677 25.931 42.1021 26.6543C41.2365 27.3776 40.033 27.7393 38.4914 27.7393H32.8887Z" fill="#646871" />
                  </svg>
                </a>
                {/* MoonPay */}
                <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="140" height="41" viewBox="0 0 140 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.2249 14.0266H34.4359L39.905 22.3921L45.417 14.0266H48.6254V29.715H45.4495V18.9562L40.9021 25.8982H38.9625L34.4151 18.9562V29.7228H31.2379L31.2249 14.0266Z" fill="#646871" />
                    <path d="M23.9215 16.8346C24.7711 16.8346 25.5858 16.4971 26.1865 15.8964C26.7872 15.2956 27.1247 14.4809 27.1247 13.6314C27.1247 12.7818 26.7872 11.9671 26.1865 11.3664C25.5858 10.7656 24.7711 10.4282 23.9215 10.4282C23.072 10.4282 22.2572 10.7656 21.6565 11.3664C21.0558 11.9671 20.7183 12.7818 20.7183 13.6314C20.7183 14.4809 21.0558 15.2956 21.6565 15.8964C22.2572 16.4971 23.072 16.8346 23.9215 16.8346Z" fill="#646871" />
                  </svg>
                </a>
                {/* Helius */}
                <a href="https://www.helius.dev" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="133" height="41" viewBox="0 0 133 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.0608 14.9531V20.9903H52.1276V15.3029H55.3478V28.8407H52.1282V23.8685H45.0608V28.8407H41.8406V15.8249L45.0608 14.9531ZM61.178 25.9607H71.0294L70.1594 28.8389H57.9596V15.3005H71.0312L70.1612 18.1793H61.1798V20.6387H69.551V23.5169H61.1798V25.9601L61.178 25.9607ZM76.1978 15.3017V25.9607H85.7006L84.8306 28.8389H72.9782V15.3005H76.1978V15.3017ZM90.3134 15.3017V28.8395H87.0938V15.3011H90.3134V15.3017Z" fill="#646871" />
                  </svg>
                </a>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 px-4">
                {/* Jupiter */}
                <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="114" height="41" viewBox="0 0 114 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33398 28.457C10.443 29.9994 11.8654 31.2901 13.5082 32.2442C15.1508 33.1985 16.9768 33.7946 18.8659 33.9936C17.8941 32.5309 16.4811 31.1852 14.7172 30.1607C12.9534 29.1362 11.0854 28.5766 9.33398 28.457Z" fill="#646871" />
                    <path d="M17.0889 26.08C13.6907 24.1057 10.0126 23.6027 7.38086 24.4915C7.63487 25.3312 7.96991 26.144 8.38131 26.919C10.6678 26.866 13.1644 27.487 15.4873 28.8363C17.8105 30.1855 19.5871 32.0477 20.6744 34.0607C21.5518 34.0337 22.4246 33.922 23.2804 33.727C22.7483 31.0009 20.4863 28.0547 17.0889 26.08Z" fill="#646871" />
                    <path d="M46.8005 11.342H49.9235V21.7615C49.9235 22.7247 49.707 23.5613 49.2741 24.2716C48.846 24.9818 48.25 25.5291 47.4864 25.9133C46.7227 26.2977 45.8349 26.4898 44.8231 26.4898C43.9232 26.4898 43.106 26.3317 42.3715 26.0155C41.6418 25.6944 41.0629 25.208 40.6349 24.5562C40.2068 23.8995 39.9952 23.0749 40.0001 22.0826H43.1448C43.1547 22.4767 43.2349 22.8147 43.3857 23.0969C43.5413 23.3741 43.7529 23.5882 44.0205 23.739C44.2929 23.8848 44.614 23.9578 44.9836 23.9578C45.3729 23.9578 45.7011 23.8751 45.9687 23.7097C46.2411 23.5395 46.4478 23.2914 46.5889 22.9655C46.73 22.6396 46.8005 22.2382 46.8005 21.7615V11.342Z" fill="#646871" />
                  </svg>
                </a>
                {/* Bybit */}
                <a href="https://bybit.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="87" height="41" viewBox="0 0 87 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.418 26.2178V9.12109H60.8545V26.2178H57.418Z" fill="#646871" />
                    <path d="M17.3672 31.2959H10V14.1992H17.071C20.5075 14.1992 22.5099 16.0721 22.5099 19.0018C22.5099 20.8982 21.2239 22.1237 20.3338 22.5318C21.3963 23.0118 22.7563 24.0921 22.7563 26.3743C22.7563 29.5669 20.5075 31.2959 17.3672 31.2959ZM16.799 17.1773H13.4365V21.1153H16.799C18.2574 21.1153 19.0734 20.3227 19.0734 19.1456C19.0734 17.9698 18.2574 17.1773 16.799 17.1773ZM17.0212 24.1169H13.4365V28.3191H17.0212C18.5792 28.3191 19.3198 27.3592 19.3198 26.2056C19.3198 25.0534 18.5778 24.1169 17.0212 24.1169Z" fill="#646871" />
                    <path d="M33.2382 24.2843V31.2959H29.8259V24.2843L24.5352 14.1992H28.2679L31.5563 21.0904L34.7949 14.1992H38.5277L33.2382 24.2843Z" fill="#646871" />
                  </svg>
                </a>
                {/* Drift */}
                <a href="https://drift.trade" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="92" height="41" viewBox="0 0 92 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.1274 13.3111H44.9942C46.2458 13.3111 47.3766 13.6098 48.3864 14.2071C49.4105 14.7902 50.214 15.6365 50.7971 16.7459C51.3945 17.8552 51.6932 19.1566 51.6932 20.65C51.6932 22.2429 51.4016 23.6154 50.8185 24.7674C50.2353 25.9052 49.4317 26.7728 48.4077 27.3702C47.398 27.9533 46.2601 28.2449 44.9942 28.2449H39.1274V13.3111ZM44.6957 25.7061C45.8477 25.7061 46.8006 25.2795 47.5544 24.4261C48.3082 23.5728 48.6851 22.3141 48.6851 20.65C48.6851 19.626 48.5073 18.7513 48.1518 18.0259C47.7961 17.3006 47.3126 16.7601 46.701 16.4045C46.1037 16.0347 45.4352 15.8498 44.6957 15.8498H42.0929V25.7061H44.6957Z" fill="#646871" />
                    <path d="M58.2963 19.7998C57.699 19.7998 57.2226 20.0487 56.8669 20.5465C56.5114 21.0442 56.3336 21.6274 56.3336 22.2958V28.2481H53.5815V17.4957H56.3336V18.9038C56.547 18.4486 56.8385 18.1002 57.2083 17.8584C57.5781 17.6166 58.0118 17.4957 58.5096 17.4957H59.8323V19.7998H58.2963Z" fill="#646871" />
                  </svg>
                </a>
                {/* Crypto.com */}
                <a href="https://crypto.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="144" height="41" viewBox="0 0 144 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.369 26.654C38.5419 26.654 36.4526 24.4395 36.4526 21.7194C36.4526 18.9993 38.5419 16.7305 41.3865 16.7305C43.1882 16.7305 44.3046 17.3972 45.1871 18.37L43.8366 19.8282C43.1699 19.1262 42.4679 18.6399 41.369 18.6399C39.7837 18.6399 38.6313 20.0087 38.6313 21.6835C38.6313 23.3941 39.8021 24.7629 41.4767 24.7629C42.5037 24.7629 43.2601 24.2766 43.9445 23.5746L45.259 24.8707C44.323 25.9153 43.2241 26.654 41.369 26.654Z" fill="#646871" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M49.3945 26.6513H47.2158V16.746H49.3945V19.0692C49.9887 17.6461 51.0875 16.6734 52.7623 16.746V19.0516H52.6361C50.7274 19.0516 49.3945 20.2943 49.3945 22.8155V26.6513Z" fill="#646871" />
                  </svg>
                </a>
                {/* Backpack */}
                <a href="https://backpack.app" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="128" height="41" viewBox="0 0 128 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.813 10.7152C18.6853 10.7152 19.5036 10.8321 20.2611 11.049C19.5194 9.32038 17.9795 8.82812 16.2656 8.82812C14.5483 8.82812 13.0056 9.32231 12.2656 11.0592C13.0176 10.8347 13.8324 10.7152 14.7017 10.7152H17.813ZM14.5022 12.4507C10.36 12.4507 8 15.7093 8 19.7289V23.8581C8 24.2601 8.33579 24.5781 8.75 24.5781H23.75C24.1642 24.5781 24.5 24.2601 24.5 23.8581V19.7289C24.5 15.7093 21.7556 12.4507 17.6135 12.4507H14.5022ZM16.2441 19.7647C17.6939 19.7647 18.8691 18.5894 18.8691 17.1397C18.8691 15.6899 17.6939 14.5147 16.2441 14.5147C14.7944 14.5147 13.6191 15.6899 13.6191 17.1397C13.6191 18.5894 14.7944 19.7647 16.2441 19.7647ZM8 27.0051C8 26.6033 8.33579 26.2773 8.75 26.2773H23.75C24.1642 26.2773 24.5 26.6033 24.5 27.0051V31.3721C24.5 32.1761 23.8284 32.8278 23 32.8278H9.5C8.67157 32.8278 8 32.1761 8 31.3721V27.0051Z" fill="#646871" />
                    <path d="M32.8887 27.7393V14.4883H38.4914C39.4045 14.4883 40.1871 14.6424 40.8393 14.9507C41.4914 15.259 41.9895 15.7037 42.3334 16.2847C42.6772 16.8539 42.8491 17.5476 42.8491 18.3658C42.8491 18.9468 42.6891 19.5041 42.3689 20.0377C42.0487 20.5594 41.5211 20.9982 40.7859 21.3539V20.0021C41.4855 20.2748 42.025 20.6009 42.4045 20.9804C42.784 21.3598 43.0448 21.7748 43.1871 22.2254C43.3294 22.6642 43.4005 23.1266 43.4005 23.6128C43.4005 24.9172 42.9677 25.931 42.1021 26.6543C41.2365 27.3776 40.033 27.7393 38.4914 27.7393H32.8887Z" fill="#646871" />
                  </svg>
                </a>
                {/* MoonPay */}
                <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="140" height="41" viewBox="0 0 140 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.2249 14.0266H34.4359L39.905 22.3921L45.417 14.0266H48.6254V29.715H45.4495V18.9562L40.9021 25.8982H38.9625L34.4151 18.9562V29.7228H31.2379L31.2249 14.0266Z" fill="#646871" />
                    <path d="M23.9215 16.8346C24.7711 16.8346 25.5858 16.4971 26.1865 15.8964C26.7872 15.2956 27.1247 14.4809 27.1247 13.6314C27.1247 12.7818 26.7872 11.9671 26.1865 11.3664C25.5858 10.7656 24.7711 10.4282 23.9215 10.4282C23.072 10.4282 22.2572 10.7656 21.6565 11.3664C21.0558 11.9671 20.7183 12.7818 20.7183 13.6314C20.7183 14.4809 21.0558 15.2956 21.6565 15.8964C22.2572 16.4971 23.072 16.8346 23.9215 16.8346Z" fill="#646871" />
                  </svg>
                </a>
                {/* Helius */}
                <a href="https://www.helius.dev" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="133" height="41" viewBox="0 0 133 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.0608 14.9531V20.9903H52.1276V15.3029H55.3478V28.8407H52.1282V23.8685H45.0608V28.8407H41.8406V15.8249L45.0608 14.9531ZM61.178 25.9607H71.0294L70.1594 28.8389H57.9596V15.3005H71.0312L70.1612 18.1793H61.1798V20.6387H69.551V23.5169H61.1798V25.9601L61.178 25.9607ZM76.1978 15.3017V25.9607H85.7006L84.8306 28.8389H72.9782V15.3005H76.1978V15.3017ZM90.3134 15.3017V28.8395H87.0938V15.3011H90.3134V15.3017Z" fill="#646871" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-transparent to-white"></div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200"></div>

      {/* AMM Market Reimagined Section */}
      <div className="mx-auto max-w-5xl px-6 lg:px-0 py-16 md:py-24">
        <h2
          className="max-w-[800px] text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.5] text-gray-900 animate-fade-in"
          style={{ animationFillMode: 'both' }}
        >
          <span className="text-gray-400">Aave first introduced AMM Markets in 2020.</span>{" "}
          Now we're relaunching it on Aave v4, bigger, bolder, and designed for the entire DeFi liquidity. Any LP position, across any DEX and any pool, can now serve as collateral to unlock a credit line.{" "}
          <span className="text-gray-400">Seamless access to capital while keeping your positions fully active.</span>
        </h2>
      </div>

      {/* Existing Content */}
      <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">

        {/* Partner Revenue Section */}
        <div className="flex flex-col pb-[50px] pt-24 md:pt-32 gap-8 md:gap-12" style={{ opacity: 1, transform: 'none' }}>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Borrow From Any Pool
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Unlock liquidity from a wide range of supported LP pools.
            </p>
          </div>
          <div className="flex flex-1 items-stretch gap-2 flex-col sm:flex-row">
            <div className="grid w-full flex-1 grid-cols-3 gap-2">
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#111727]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#FFFFFF]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#000827]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[linear-gradient(45deg,#FC6901_0%,#F3B900_100%)]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#000000]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#F5F5F5]"></div>
              </div>
            </div>
            <div className="flex w-full flex-1">
              <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#FFE5AE] to-[#FFD069] p-2 text-center rounded-lg h-[150px] sm:h-auto">
                <div className="flex size-full flex-col items-center justify-center bg-[#FFC547] rounded-md">
                  <h4 className="text-base font-medium leading-normal text-yellow-600 md:text-lg">
                    <span>Over</span>
                    <div className="flex items-center text-[32px] font-bold text-gray-900 md:gap-1 md:text-[56px]">
                      <svg width="40" height="75" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-[75px]">
                        <path d="M10.2927 18.5664C9.54631 24.3143 14.1566 29.6482 14.1566 29.6482C14.1566 29.6482 19.9771 25.6628 20.7233 19.9149C21.4699 14.1669 16.8597 8.83301 16.8597 8.83301C16.8597 8.83301 11.0391 12.8184 10.2927 18.5664Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M4.82219 37.8831C7.25837 43.1446 14.0075 45.2096 14.0075 45.2096C14.0075 45.2096 16.8065 38.7434 14.3705 33.4818C11.9343 28.22 5.18525 26.1553 5.18525 26.1553C5.18525 26.1553 2.38602 32.6212 4.82219 37.8831Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M19.2649 58.4754C19.2649 58.4754 12.3428 59.8568 7.69438 56.3806C3.04603 52.9048 2.43164 45.888 2.43164 45.888C2.43164 45.888 9.35376 44.5069 14.0023 47.9827C18.6506 51.4589 19.2649 58.4754 19.2649 58.4754ZM19.2649 58.4754H30.4586C34.3114 58.4754 37.4348 61.5988 37.4348 65.4516C37.4348 69.3044 34.3114 72.4278 30.4586 72.4278H23.4348" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M26.1663 5.81449C21.9295 9.77977 22.0926 16.8214 22.0926 16.8214C22.0926 16.8214 29.1252 17.4341 33.3619 13.4688C37.5987 9.50352 37.4352 2.46187 37.4352 2.46187C37.4352 2.46187 30.403 1.84923 26.1663 5.81449Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                      </svg>
                      $5M
                      <svg width="40" height="75" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-[75px]">
                        <path d="M30.0794 18.5664C30.8258 24.3143 26.2154 29.6482 26.2154 29.6482C26.2154 29.6482 20.3949 25.6628 19.6487 19.9149C18.9022 14.1669 23.5124 8.83301 23.5124 8.83301C23.5124 8.83301 29.333 12.8184 30.0794 18.5664Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M35.5499 37.8831C33.1137 43.1446 26.3645 45.2096 26.3645 45.2096C26.3645 45.2096 23.5656 38.7434 26.0016 33.4818C28.4378 28.22 35.1868 26.1553 35.1868 26.1553C35.1868 26.1553 37.9861 32.6212 35.5499 37.8831Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                        <path d="M21.1072 58.4754C21.1072 58.4754 28.0293 59.8568 32.6777 56.3806C37.326 52.9048 37.9404 45.888 37.9404 45.888C37.9404 45.888 31.0183 44.5069 26.3698 47.9827C21.7214 51.4589 21.1072 58.4754 21.1072 58.4754ZM21.1072 58.4754H9.9135C6.0607 58.4754 2.9373 61.5988 2.9373 65.4516C2.9373 69.3044 6.0607 72.4278 9.9135 72.4278H16.9373" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M14.2058 5.81449C18.4425 9.77977 18.2794 16.8214 18.2794 16.8214C18.2794 16.8214 11.2469 17.4341 7.01015 13.4688C2.7734 9.50352 2.93685 2.46187 2.93685 2.46187C2.93685 2.46187 9.96905 1.84923 14.2058 5.81449Z" stroke="black" strokeWidth="4" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <span>in partner revenue</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid w-full flex-1 grid-cols-3 gap-2">
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#7D00FF]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#000000]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#F3EFCD]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#061121]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[linear-gradient(90deg,#E35930_-6.83%,#E84125_100%)]"></div>
              </div>
              <div className="aspect-square border border-gray-200 bg-white p-1 rounded-lg md:p-1.5">
                <div className="flex size-full items-center justify-center border border-gray-200 rounded-md [&>svg]:size-3/5 bg-[#F1F7FF]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stake Growth Section */}
        <div className="flex flex-col pt-24 md:pt-32 gap-8 md:gap-12" style={{ opacity: 1, transform: 'none' }}>
          <div className="flex flex-col gap-6">
            <div className="flex max-w-[600px] flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Borrow Across DEXs</h2>
              <p className="text-sm md:text-base text-gray-600">
                Momo unlocks $25B of previously locked Liquidity Pools positions and puts them to work via Aave-Spokes rails.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-3 md:gap-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full max-w-[400px] self-center overflow-hidden border border-gray-200 rounded-lg sm:max-w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-4xl">🔄</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-900">Uniswap – Top DEX Liquidity</span>
                <span className="text-sm md:text-base text-gray-600">Uniswap remains one of the largest liquidity hubs in DeFi, with over $3.9B locked in LP positions across its pools.</span>
              </div>
              <Link
                href="https://sanctum.so/blog/jupsol-solana-liquid-staking-jupiter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                How JupSOL grew to 5M SOL
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full max-w-[400px] self-center overflow-hidden border border-gray-200 rounded-lg sm:max-w-full bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-4xl">⚖️</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-900">Balancer – Multi‑Asset LP Capital</span>
                <span className="text-sm md:text-base text-gray-600">Balancer’s multi‑asset pools hold hundreds of millions in locked capital, now unleashed to fuel productive LP strategies.</span>
              </div>
              <Link
                href="https://sanctum.so/blog/inf-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                Learn more about INF
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full max-w-[400px] self-center overflow-hidden border border-gray-200 rounded-lg sm:max-w-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-4xl">📈</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-semibold text-gray-900">Curve – Deep Stablecoin Pools</span>
                <span className="text-sm md:text-base text-gray-600">Curve’s stablecoin‑focused pools hold over $2.1B in liquidity, making it one of the most capital‑efficient markets in DeFi.</span>
              </div>
              <Link
                href="https://solana.org/delegation-program"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm md:text-base text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                Learn more about SFDP
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-8 md:flex-row md:gap-12">
          {/* Left Column: Title & Description */}
          <div className="top-0 flex flex-1 flex-col pt-24 gap-4 md:sticky md:self-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                Borrow with Confidence
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Tap into Solana's native revenue streams: inflation, MEV, block rewards, and staking rewards every epoch.
              </p>
            </div>
          </div>

          {/* Right Column: Reward Cards */}
          <div className="grid w-full sm:grid-cols-2 sm:gap-6 md:max-w-[480px] md:grid-cols-1 md:gap-0 md:pt-24">

            {/* Inflation Rewards */}
            <div className="flex flex-row border-b border-gray-200 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Secure and Seamless</span>
                <span className="text-sm md:text-base text-gray-600">Momo dynamically tracks pool composition and volatility to adjust loan-to-value ratios appropriately.</span>
              </div>
            </div>

            {/* MEV Rewards */}
            <div className="flex flex-row border-b border-gray-200 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-6 sm:pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-yellow-100">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Up to 10X Leverage</span>
                <span className="text-sm md:text-base text-gray-600">Increase your exposure by effectively trading on margin with borrowed capital.</span>
              </div>
            </div>

            {/* Block Rewards */}
            <div className="flex flex-row border-b border-gray-200 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-6 sm:pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-green-100">
                <Blocks className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Trading Fees</span>
                <span className="text-sm md:text-base text-gray-600">Set your collateral's price range and earn trading fees while you borrow.</span>
              </div>
            </div>

            {/* Staking Rewards */}
            <div className="flex flex-row border-b-0 pb-6 gap-3 sm:flex-col md:flex-row md:px-3 pt-6 sm:pt-0">
              <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-md bg-purple-100">
                <Coins className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm md:text-base font-semibold text-gray-900">Instant Refinance</span>
                <span className="text-sm md:text-base text-gray-600">Switch positions to take advantage of rates, liquidations and more.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Built by Design Section */}
        <div className="space-y-6 md:space-y-8 pt-12 md:pt-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Trust Built by Design
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Every component is designed with trust and safety as the foundation.
            </p>
          </div>
          <div className="block">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Reliable price integrity */}
              <div className="w-full lg:w-[275px] xl:w-[353px] bg-white rounded-xl shadow-[6px_8px_0.6px_0_rgba(0,0,0,0.15)] overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                <div className="xl:pt-9 xl:px-9 pt-6 px-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="block">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        Reliable Price
                      </h3>
                    </div>
                    <div className="block">
                      <p className="text-sm md:text-base text-gray-600">
                        Chainlink's decentralized oracle network delivers accurate, tamper-resistant pricing for LP collateral.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] mt-4">
                    <Image
                      fill
                      alt="Reliable price integrity visualization"
                      src="https://via.placeholder.com/288x216?text=Reliable+Price+Integrity"
                      className="object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Secure at every layer */}
              <div className="w-full lg:w-[275px] xl:w-[353px] bg-white rounded-xl shadow-[6px_8px_0.6px_0_rgba(0,0,0,0.15)] overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                <div className="xl:pt-9 xl:px-9 pt-6 px-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="block">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        Secure Deposit
                      </h3>
                    </div>
                    <div className="block">
                      <p className="text-sm md:text-base text-gray-600">
                        Multiple layers of protocol-level security protect LP positions, from risk controls to battle-tested smart contract architecture.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] mt-4">
                    <Image
                      fill
                      alt="Secure at every layer visualization"
                      src="https://via.placeholder.com/288x216?text=Secure+at+Every+Layer"
                      className="object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Built on trusted foundations */}
              <div className="w-full lg:w-[275px] xl:w-[353px] bg-white rounded-xl shadow-[6px_8px_0.6px_0_rgba(0,0,0,0.15)] overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                <div className="xl:pt-9 xl:px-9 pt-6 px-6 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="block">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        Built on Trust
                      </h3>
                    </div>
                    <div className="block">
                      <p className="text-sm md:text-base text-gray-600">
                        Built on Aave v4—one of DeFi's most tested and trusted frameworks—designed to support advanced collateral types.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] mt-4">
                    <Image
                      fill
                      alt="Built on trusted foundations visualization"
                      src="https://via.placeholder.com/288x216?text=Built+on+Trusted+Foundations"
                      className="object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col items-center gap-14 lg:gap-20 pt-12 md:pt-16 pb-6">
          <div className="flex flex-col gap-2 w-full px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              What DeFi Leaders Say
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Hear from the community building the future of decentralized finance.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 max-w-[870px] xl:max-w-[1100px] mx-auto justify-items-center lg:justify-items-start gap-y-6 sm:gap-y-12 min-h-[490px] xl:min-h-[405px] w-full px-6">
            <div className="flex flex-col text-gray-900 gap-8 md:gap-10 order-last lg:order-first justify-between w-full">
              <div style={{ opacity: 1 }} className="transition-opacity duration-300">
                <div className="space-y-6">
                  <div className="block">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-900">
                      "{testimonial.quote}{testimonial.highlight && <span className="font-semibold"> {testimonial.highlight}</span>}{testimonial.ending}"
                    </p>
                  </div>
                  <div className="block">
                    <p className="text-xs md:text-sm leading-tight font-semibold tracking-wider uppercase text-gray-600">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 mx-auto md:mx-0">
                <button
                  aria-label="Previous testimonial"
                  onClick={prevTestimonial}
                  className="bg-purple-100 text-blue-600 rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-purple-200 transition-colors"
                  type="button"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={nextTestimonial}
                  className="bg-purple-100 text-blue-600 rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-purple-200 transition-colors"
                  type="button"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="lg:justify-self-end w-full flex justify-center lg:justify-end">
              <div style={{ opacity: 1 }} className="transition-opacity duration-300">
                <div className="relative w-full max-w-[435px] aspect-square">
                  <Image
                    width={435}
                    height={435}
                    alt="Image of a client"
                    src={testimonial.image}
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col pt-24 md:pt-32 gap-8 sm:pb-24 md:flex-row md:gap-12" style={{ opacity: 1, transform: 'none' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 md:pt-8 md:flex-shrink-0 md:w-[300px]">
            Frequently asked questions.
          </h3>
          <div className="md:w-[600px] md:flex-shrink-0">
            <Accordion type="single" collapsible orientation="vertical" className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  What is Momo's LP token lending?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Momo allows you to use your Liquidity Pool (LP) tokens from Uniswap, Balancer, and Curve as collateral to borrow funds at competitive rates, while still earning trading fees from your LP positions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  What are the borrowing costs and loan-to-value ratios?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  You can borrow up to 70% of your LP portfolio value at 5% APR. Loan-to-value ratios are dynamically adjusted based on pool composition and volatility to ensure security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  How quickly can I borrow against my LP positions?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Once you connect your wallet and deposit LP tokens, you can borrow funds instantly. The process is seamless and requires no waiting periods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  Is it safe to use LP tokens as collateral?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Yes. Momo is built on Aave v4, one of DeFi's most tested and trusted frameworks. We use Chainlink oracles for reliable price feeds and implement multiple layers of protocol-level security to protect your positions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
                <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                  Can I still earn trading fees while borrowing?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                  >
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="currentColor"
                    className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                  >
                    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 pt-2">
                  Absolutely. Your LP tokens remain in their original pools, so you continue earning trading fees while using them as collateral. This allows you to maximize capital efficiency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

