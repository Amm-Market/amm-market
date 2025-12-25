"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AiAgentSection from "@/components/ai-agent-section"
import UniswapHooksSection from "@/components/uniswap-hooks-section"
import FeaturesSection from "@/components/features-section"
import DevelopersSection from "@/components/developers-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="home" />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col min-h-screen pt-20">
        <main className="flex-1 flex flex-col relative z-0">
          <HeroSection />
          <AiAgentSection />
          <UniswapHooksSection />
          <FeaturesSection />
          <DevelopersSection />
        </main>
      </div>

      {/* Full-width CTA section outside the container */}
      <CTASection />

      <Footer />
    </div>
  )
}

