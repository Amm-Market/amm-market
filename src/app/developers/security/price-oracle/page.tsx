import { ArrowRightLeftIcon as ArrowsRightLeftIcon, ShieldCheckIcon, ScaleIcon } from "lucide-react"

export default function PriceOraclePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Fortifying Dex Mini with Chainlink and Uniswap Oracles
      </h1>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-6 rounded-lg mb-8 border border-purple-100 dark:border-purple-900">
        <p className="text-lg">
          Oracles are the bedrock of secure leverage, lending, and borrowing markets, providing crucial real-time
          pricing data for timely identification and liquidation of undercollateralized positions. Without reliable
          oracles, protocols face significant risks of bad debt and user fund loss. Integrating robust oracle solutions
          allows protocols to bolster their security and potentially offer more competitive loan-to-value (LTV) ratios.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Dual Oracle System</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600 dark:text-blue-400"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Uniswap TWAP</h3>
            </div>
            <p>
              Dex Mini leverages Uniswap's Time-Weighted Average Price (TWAP) with three distinct checkpoints. This
              multi-layered approach provides reliable on-chain pricing data while significantly reducing the risk of
              manipulation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600 dark:text-blue-400"
                >
                  <path
                    d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Chainlink Price Feed</h3>
            </div>
            <p>
              Chainlink's decentralized oracle network provides an additional layer of verification, cross-referencing
              Uniswap's TWAP to ensure price accuracy and detect potential market anomalies or manipulation attempts.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Dex Mini's Oracle Integration</h2>
        <p className="mb-6">
          Dex Mini's hooks leverage a resilient oracle system that combines the strengths of Uniswap and Chainlink to
          deliver highly accurate and dependable pricing data. A dual-check mechanism minimizes the risk of price
          manipulation, ensuring more reliable and secure operations. Specifically, the protocol incorporates three
          distinct Time-Weighted Average Price (TWAP) checkpoints from Uniswap and cross-references them with
          Chainlink's price feed. This layered approach verifies that the current Uniswap price remains within an
          acceptable range, indicating it has not been manipulated.
        </p>
        <p className="mb-6">
          The comprehensive oracle system ensures that Dex Mini's hooks can confidently rely on the most up-to-date and
          accurate DeFi prices for liquidation purposes. Such a robust system enhances security, minimizes the risk of
          price manipulation, and provides users with a more transparent and trustworthy borrowing experience.
        </p>
        <p>
          Uniswap's multi-layered security framework and sophisticated data aggregation methods contribute to dependable
          pricing, significantly reducing manipulation risk and safeguarding user funds. To further strengthen security,
          Dex Mini implements additional safeguards against price tick manipulation, particularly for less liquid
          assets. Dynamic open interest caps, intelligently adjusted based on liquidity, market basis, and leverage,
          help limit exposure and mitigate manipulation risks.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <ArrowsRightLeftIcon className="mr-2 text-blue-500" />
          Chainlink and Uniswap TWAP Integration
        </h2>
        <p className="mb-4">Dex Mini employs a sophisticated process for selecting the most reliable price:</p>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>
            <strong>On-Chain TWAP Retrieval:</strong> The protocol fetches the Time-Weighted Average Price directly from
            Uniswap on-chain.
          </li>
          <li>
            <strong>Cross-Verification with Chainlink:</strong> The on-chain TWAP is then compared against the price
            provided by Chainlink.
          </li>
        </ol>

        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <ScaleIcon className="mr-2 text-blue-500" />
          Dynamic Oracle Selection
        </h3>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-900">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <h4 className="font-medium">Normal Market Conditions</h4>
              </div>
              <p className="text-sm">
                If the TWAP falls within predefined parameters compared to the Chainlink price, the on-chain TWAP from
                Uniswap is used.
              </p>
            </div>

            <div className="flex items-center justify-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <h4 className="font-medium">Market Anomaly Detected</h4>
              </div>
              <p className="text-sm">
                If the TWAP deviates significantly from the Chainlink price, indicating a potential market anomaly or
                manipulation, the protocol defaults to using the Chainlink price.
              </p>
            </div>
          </div>
        </div>

        <p>
          This approach ensures that the Uniswap v4 price (on-chain pricing) is utilized in most stable market
          conditions. However, in the event of a significant market fluctuation or potential manipulation, the protocol
          intelligently switches to the Chainlink price, a widely trusted and robust oracle. This safeguards the
          protocol from incurring bad debt and ensures that liquidations on Dex Mini can occur reliably, based on the
          most accurate information available.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900 flex items-start">
        <ShieldCheckIcon className="text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Enhanced Security and Reliability</h3>
          <p>
            By implementing this dual-oracle system, Dex Mini achieves a higher level of security and reliability for
            its lending and borrowing operations. This approach minimizes the risk of price manipulation attacks,
            ensures accurate liquidations, and provides users with a more transparent and trustworthy borrowing
            experience.
          </p>
        </div>
      </div>
    </div>
  )
}

