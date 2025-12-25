import { Check } from "lucide-react"

export interface ProtocolCardProps {
  name: string
  shortName: string
  category: string
  purpose: string
  useCases: string[]
  features: string[]
  bgColor: string
  textColor: string
}

export function ProtocolCard({
  name,
  shortName,
  category,
  purpose,
  useCases,
  features,
  bgColor,
  textColor,
}: ProtocolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center mr-3`}>
            <span className={`font-bold ${textColor}`}>{shortName}</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{name}</h3>
            <span className={`text-xs px-2 py-1 ${bgColor} ${textColor} rounded-full`}>{category}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{purpose}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Use Cases:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => {
            let bgClass = "bg-green-100 text-green-700"
            if (feature === "Withdraw" || feature === "Unstake" || feature === "Repay") {
              bgClass = "bg-red-100 text-red-700"
            } else if (feature === "Swap") {
              bgClass = "bg-purple-100 text-purple-700"
            } else if (feature === "Rewards") {
              bgClass = "bg-yellow-100 text-yellow-700"
            } else if (feature === "Borrow") {
              bgClass = "bg-blue-100 text-blue-700"
            }

            return (
              <span key={index} className={`text-xs px-2 py-1 ${bgClass} rounded-full`}>
                {feature}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

