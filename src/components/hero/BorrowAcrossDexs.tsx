import { SectionHeader } from "@/components/shared"

/**
 * BorrowAcrossDexs - DEX integration grid showing supported exchanges.
 */
export function BorrowAcrossDexs() {
  return (
    <div className="flex flex-col pt-16 md:pt-20 gap-8 md:gap-12" style={{ opacity: 1, transform: 'none' }}>
      <SectionHeader
        title="Borrow Across DEXs"
        description="We integrate with the leading decentralized exchanges in DeFi."
      />
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
          <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-2 text-center rounded-lg h-[150px] sm:h-auto">
            <div className="flex size-full flex-col items-center justify-center bg-white border border-blue-200 rounded-md">
              <h4 className="text-base font-medium leading-normal text-blue-600 md:text-lg">
                <div className="flex items-center text-[32px] font-bold text-gray-900 md:text-[48px]">
                  12+
                </div>
                <span>DEX Integrations</span>
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
  )
}

export default BorrowAcrossDexs
