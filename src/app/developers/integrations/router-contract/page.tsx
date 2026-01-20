"use client"

import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "contract-addresses", title: "Contract Addresses" },
  { id: "core-functions", title: "Core Functions" },
  { id: "events", title: "Events" },
  { id: "integration-example", title: "Integration Example" },
]

export default function RouterContractPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-12">
      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Router Contract</h1>
        <p className="text-lg text-gray-600 mb-8">
          Contract responsible for interacting with DEX liquidity and handling LP operations.
        </p>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AMM Market Router is the main entry point for user interactions. It handles 
            deposits, withdrawals, borrows, repayments, and liquidations. The router coordinates 
            with the Aave v4 Hub and DEX-specific adapters.
          </p>
        </section>

        <section id="contract-addresses" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contract Addresses</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <h3 className="font-semibold text-green-900">Base Sepolia (Testnet)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Router</span>
                  <code className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-mono">
                    0x1234...5678
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">AMM Market Spoke</span>
                  <code className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-mono">
                    0xabcd...ef01
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Oracle Adapter</span>
                  <code className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-mono">
                    0x2345...6789
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <h3 className="font-semibold text-blue-900">Unichain Sepolia (Testnet)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Router</span>
                  <code className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono">
                    0x3456...7890
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">AMM Market Spoke</span>
                  <code className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono">
                    0xbcde...f012
                  </code>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <h3 className="font-semibold text-gray-700">Base Mainnet</h3>
              </div>
              <p className="text-gray-500 text-sm">Coming Q3 2026</p>
            </div>
          </div>
        </section>

        <section id="core-functions" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Functions</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">deposit</h3>
              <p className="text-gray-600 text-sm mb-2">Deposit LP tokens as collateral.</p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  function deposit(<br/>
                  &nbsp;&nbsp;address lpToken,<br/>
                  &nbsp;&nbsp;uint256 amount,<br/>
                  &nbsp;&nbsp;address onBehalfOf<br/>
                  ) external;
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">withdraw</h3>
              <p className="text-gray-600 text-sm mb-2">Withdraw LP tokens from collateral.</p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  function withdraw(<br/>
                  &nbsp;&nbsp;address lpToken,<br/>
                  &nbsp;&nbsp;uint256 amount,<br/>
                  &nbsp;&nbsp;address to<br/>
                  ) external returns (uint256);
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">borrow</h3>
              <p className="text-gray-600 text-sm mb-2">Borrow assets against LP collateral.</p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  function borrow(<br/>
                  &nbsp;&nbsp;address asset,<br/>
                  &nbsp;&nbsp;uint256 amount,<br/>
                  &nbsp;&nbsp;uint256 interestRateMode,<br/>
                  &nbsp;&nbsp;address onBehalfOf<br/>
                  ) external;
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">repay</h3>
              <p className="text-gray-600 text-sm mb-2">Repay borrowed assets.</p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  function repay(<br/>
                  &nbsp;&nbsp;address asset,<br/>
                  &nbsp;&nbsp;uint256 amount,<br/>
                  &nbsp;&nbsp;uint256 interestRateMode,<br/>
                  &nbsp;&nbsp;address onBehalfOf<br/>
                  ) external returns (uint256);
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">liquidationCall</h3>
              <p className="text-gray-600 text-sm mb-2">Liquidate an underwater position.</p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  function liquidationCall(<br/>
                  &nbsp;&nbsp;address collateralAsset,<br/>
                  &nbsp;&nbsp;address debtAsset,<br/>
                  &nbsp;&nbsp;address user,<br/>
                  &nbsp;&nbsp;uint256 debtToCover,<br/>
                  &nbsp;&nbsp;bool receiveAToken<br/>
                  ) external;
                </code>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">getUserHealthFactor</h3>
              <p className="text-gray-600 text-sm mb-2">Query a user's current health factor.</p>
              <div className="p-3 bg-gray-900 rounded">
                <code className="text-green-400 text-xs">
                  function getUserHealthFactor(<br/>
                  &nbsp;&nbsp;address user<br/>
                  ) external view returns (uint256);
                </code>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Events</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Event</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Deposit</td>
                  <td className="px-4 py-2 text-gray-600">LP tokens deposited as collateral</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Withdraw</td>
                  <td className="px-4 py-2 text-gray-600">LP tokens withdrawn from collateral</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Borrow</td>
                  <td className="px-4 py-2 text-gray-600">Assets borrowed against collateral</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">Repay</td>
                  <td className="px-4 py-2 text-gray-600">Debt repaid</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-900 font-mono text-xs">LiquidationCall</td>
                  <td className="px-4 py-2 text-gray-600">Position liquidated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="integration-example" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Integration Example</h2>
          
          <div className="p-4 bg-gray-900 rounded-lg">
            <code className="text-green-400 text-xs whitespace-pre">
{`// Example: Deposit LP and Borrow USDC
import { ethers } from "ethers";

const router = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer);
const lpToken = new ethers.Contract(LP_TOKEN_ADDRESS, ERC20_ABI, signer);

// 1. Approve LP token
await lpToken.approve(ROUTER_ADDRESS, depositAmount);

// 2. Deposit LP as collateral
await router.deposit(LP_TOKEN_ADDRESS, depositAmount, userAddress);

// 3. Borrow USDC (variable rate = 2)
await router.borrow(USDC_ADDRESS, borrowAmount, 2, userAddress);

// 4. Check health factor
const hf = await router.getUserHealthFactor(userAddress);
console.log("Health Factor:", ethers.formatUnits(hf, 18));`}
            </code>
          </div>
        </section>
      </div>

      {/* Right scroll-spy sidebar */}
      <ScrollSpySidebar 
        sections={sections} 
        pageSummary="Contract responsible for interacting with DEX liquidity and handling LP operations."
        sectionColor="cyan"
      />
    </div>
  )
}
