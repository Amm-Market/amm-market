/**
 * PoolCard - Displays a liquidity pool with token pair, DEX, and TVL.
 * 
 * @description
 * Reusable card component for displaying LP pool information in tickers and lists.
 * Shows dual token icons, trading pair symbols, DEX name, and Total Value Locked.
 */

export interface Pool {
  token0: { symbol: string; color: string }
  token1: { symbol: string; color: string }
  dex: string
  tvl: string
}

interface PoolCardProps {
  pool: Pool
}

export function PoolCard({ pool }: PoolCardProps) {
  return (
    <div className="flex-shrink-0 box-border flex flex-row items-center justify-center gap-3 no-underline bg-white hover:bg-gray-50 rounded-lg border border-solid border-gray-200 h-[66px] shadow-sm hover:shadow-md transition duration-150 ease-out px-3 py-2.5">
      <div className="flex flex-col items-start justify-center gap-0.5">
        <div className="flex flex-row items-center gap-1.5">
          {/* Dual token icons */}
          <div className="relative flex items-center flex-shrink-0">
            <div
              className="w-6 h-6 rounded-full border-2 border-white z-10"
              style={{ backgroundColor: pool.token0.color }}
              aria-label={`${pool.token0.symbol} token`}
            />
            <div
              className="w-6 h-6 rounded-full border-2 border-white -ml-2"
              style={{ backgroundColor: pool.token1.color }}
              aria-label={`${pool.token1.symbol} token`}
            />
          </div>
          <span className="whitespace-nowrap">
            <span className="mr-1 text-gray-900 text-sm font-medium">
              {pool.token0.symbol} / {pool.token1.symbol}
            </span>
            <span className="text-gray-500 text-sm">{pool.dex}</span>
          </span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className="text-gray-600 text-sm">TVL</span>
          <span className="text-gray-900 text-sm font-medium">{pool.tvl}</span>
        </div>
      </div>
    </div>
  )
}

export default PoolCard
