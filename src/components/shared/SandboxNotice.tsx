const SANDBOX_NOTICE =
  "Sandbox data shown for preview only. APYs, prices, and returns are illustrative and may differ from live market conditions."

export function SandboxNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-start gap-2.5 text-xs font-medium leading-5 text-[#44546a] md:text-sm ${className}`.trim()}>
      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#01AACF] text-sm leading-none text-white">
        !
      </span>
      <span className="max-w-[1000px]">{SANDBOX_NOTICE}</span>
    </p>
  )
}
