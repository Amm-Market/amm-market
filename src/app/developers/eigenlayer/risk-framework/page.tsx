import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Shield, Activity, LineChart, BarChart4, ArrowDownToLine, Zap } from "lucide-react"

export default function RiskFrameworkPage() {
  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fortifying Dex Mini with Advanced Risk Management
          </h1>

          <p className="text-lg text-gray-200 mb-6">
            Dex Mini prioritizes the security and resilience of its protocol by employing a comprehensive risk
            assessment framework, leveraging EigenLayer AVS. This dynamic system meticulously analyzes token risk across
            multiple dimensions, from individual asset metrics to broader protocol vulnerabilities. It conducts detailed
            scenario analyses, including liquidations-at-risk assessments, to proactively identify and mitigate
            potential issues.
          </p>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/30 mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-white">Institutional-Grade Risk Management</h2>
            <p className="text-gray-200">
              Recognizing the need for granular control, Dex Mini's risk engine takes a multi-faceted approach:
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>
                  <strong className="text-white">DeFi Analysis:</strong> Mitigates impermanent loss, slippage, and
                  market manipulation risks.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>
                  <strong className="text-white">Wash Trading Detection:</strong> Identifies patterns of wash trading
                  and automatically adjusts exposure.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-white">Core Functionalities</h2>

        <Tabs defaultValue="monitoring" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="storage">Data Storage</TabsTrigger>
            <TabsTrigger value="watchtower">Watchtower</TabsTrigger>
            <TabsTrigger value="analysis">Risk Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring" className="space-y-4">
            <Card className="border-blue-500/30 bg-gradient-to-r from-blue-950/30 to-blue-900/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Activity className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">AVS Monitoring & Validation</h3>
                </div>
                <p className="text-gray-300 mb-4">Real-time insights into protocol health.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Badge className="bg-blue-600 mr-2 mt-1">1</Badge>
                    <span>
                      <strong className="text-white">Real-Time Event Tracking:</strong> Monitors on-chain contract
                      events (Mint, Burn, Swap) for live updates.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-blue-600 mr-2 mt-1">2</Badge>
                    <span>
                      <strong className="text-white">Data Cross-Verification:</strong> Ensures accuracy by
                      cross-checking information from DeFiLlama, Dune Analytics, and on-chain logs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-blue-600 mr-2 mt-1">3</Badge>
                    <span>
                      <strong className="text-white">Anomaly Detection:</strong> Flags discrepancies like sudden APY
                      spikes, triggering additional validation layers to prevent faulty migrations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-blue-600 mr-2 mt-1">4</Badge>
                    <span>
                      <strong className="text-white">User Notifications:</strong> Alerts users to sudden changes in
                      liquidity conditions, enhancing transparency and risk management.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storage" className="space-y-4">
            <Card className="border-purple-500/30 bg-gradient-to-r from-purple-950/30 to-purple-900/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <ArrowDownToLine className="text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Data Storage via EigenLayer DA</h3>
                </div>
                <p className="text-gray-300 mb-4">Comprehensive logging for transparency and auditability.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Badge className="bg-purple-600 mr-2 mt-1">1</Badge>
                    <span>
                      <strong className="text-white">Comprehensive Logging:</strong> Records every liquidity migration
                      for full transparency and tracking.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-purple-600 mr-2 mt-1">2</Badge>
                    <span>
                      <strong className="text-white">Execution Monitoring:</strong> Continuously tracks execution
                      success and error rates, providing real-time transaction feedback.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-purple-600 mr-2 mt-1">3</Badge>
                    <span>
                      <strong className="text-white">Auditability:</strong> Stored data is accessible for audits and
                      displayed on user portfolio pages, ensuring traceability and accountability.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="watchtower" className="space-y-4">
            <Card className="border-green-500/30 bg-gradient-to-r from-green-950/30 to-green-900/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Shield className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Watchtower Functionality</h3>
                </div>
                <p className="text-gray-300 mb-4">Proactive identification of potential threats.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Badge className="bg-green-600 mr-2 mt-1">1</Badge>
                    <span>
                      <strong className="text-white">Blockchain Data Scanning:</strong> Uses AI to scan data from
                      sources like The Graph and DeFiLlama, identifying relevant smart contracts, pools, or protocols.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-600 mr-2 mt-1">2</Badge>
                    <span>
                      <strong className="text-white">Customizable Monitoring:</strong> Enables users to set AI-based
                      alerts for liquidity pools, positions, or contracts, with notifications for rug pulls, liquidation
                      risks, and contract upgrades.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-600 mr-2 mt-1">3</Badge>
                    <span>
                      <strong className="text-white">Decentralized Verification:</strong> Integrates with EigenLayer AVS
                      to verify security alerts in a decentralized manner.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="bg-green-600 mr-2 mt-1">4</Badge>
                    <span>
                      <strong className="text-white">Future Automation:</strong> Envisions automated actions (swaps,
                      withdrawals, hedging) based on predefined conditions, with AI guidance as the initial focus.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-amber-500/30 bg-gradient-to-r from-amber-950/30 to-amber-900/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <LineChart className="text-amber-500 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-white">Price Monitoring</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong className="text-white">Price Triggers:</strong> Market-specific thresholds trigger
                      protective actions
                    </li>
                    <li>
                      <strong className="text-white">Scenario Analysis:</strong> Simulates various price shock scenarios
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/30 bg-gradient-to-r from-red-950/30 to-red-900/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <BarChart4 className="text-red-500 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-white">Loan Analysis</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong className="text-white">Detailed Overview:</strong> Filterable view of loan status
                    </li>
                    <li>
                      <strong className="text-white">Visual Metrics:</strong> Bar plots for key risk indicators
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 to-indigo-900/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <Zap className="text-indigo-500 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-white">Volatility Analysis</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong className="text-white">Token Price Trends:</strong> Time series plots of prices
                    </li>
                    <li>
                      <strong className="text-white">Realized Volatility:</strong> Quantifies price fluctuations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 to-cyan-900/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <Activity className="text-cyan-500 mr-2" size={20} />
                    <h3 className="text-lg font-semibold text-white">Liquidity Risk</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong className="text-white">Price Impact:</strong> Tracks percentage impact for trades
                    </li>
                    <li>
                      <strong className="text-white">Risk Mitigation:</strong> Insurance funds and proactive measures
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-500/30">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-red-500 mr-3" size={24} />
            <h3 className="text-xl font-semibold text-white">Potential Shortfall Scenarios</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Badge className="bg-red-600 mr-2 mt-1">1</Badge>
              <span>
                <strong className="text-white">Smart Contract Exploits:</strong> Although rigorously audited, residual
                risk remains.
              </span>
            </li>
            <li className="flex items-start">
              <Badge className="bg-red-600 mr-2 mt-1">2</Badge>
              <span>
                <strong className="text-white">Liquidation Failures:</strong> Can occur due to insufficient collateral
                liquidity or process inefficiencies.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

