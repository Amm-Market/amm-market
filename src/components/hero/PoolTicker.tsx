import { PoolCard } from "@/components/shared"
import { SectionHeader } from "@/components/shared"
import { pools } from "@/data/hero-data"

/**
 * PoolTicker - Animated pool cards showing supported LP positions.
 */
export function PoolTicker() {
  return (
    <div className="flex flex-col pt-16 md:pt-20 gap-8 md:gap-12 border-t border-gray-100" style={{ opacity: 1, transform: 'none' }}>
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="500+ Supported Pools"
          description="Access liquidity from 500+ pools across all integrated DEXs."
          className="max-w-[600px]"
        />
      </div>

      {/* LP Pool Ticker */}
      <div className="w-full flex flex-col gap-4 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        {/* Row 1 - scroll left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-scroll-left">
            {pools.slice(0, 6).map((pool, i) => (
              <PoolCard key={`r1-a-${i}`} pool={pool} />
            ))}
            {pools.slice(0, 6).map((pool, i) => (
              <PoolCard key={`r1-b-${i}`} pool={pool} />
            ))}
          </div>
        </div>
        {/* Row 2 - scroll right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            {pools.slice(6, 12).map((pool, i) => (
              <PoolCard key={`r2-a-${i}`} pool={pool} />
            ))}
            {pools.slice(6, 12).map((pool, i) => (
              <PoolCard key={`r2-b-${i}`} pool={pool} />
            ))}
          </div>
        </div>
        {/* Row 3 - scroll left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-scroll-left-slow">
            {pools.slice(12, 18).map((pool, i) => (
              <PoolCard key={`r3-a-${i}`} pool={pool} />
            ))}
            {pools.slice(12, 18).map((pool, i) => (
              <PoolCard key={`r3-b-${i}`} pool={pool} />
            ))}
          </div>
        </div>
        {/* Row 4 - scroll right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-scroll-right-slow">
            {pools.slice(18, 24).map((pool, i) => (
              <PoolCard key={`r4-a-${i}`} pool={pool} />
            ))}
            {pools.slice(18, 24).map((pool, i) => (
              <PoolCard key={`r4-b-${i}`} pool={pool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolTicker
