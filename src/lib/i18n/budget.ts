export const uiBudgets = {
  navItem: 14,
  ctaShort: 12,
  ctaLong: 18,
  megaMenuLabel: 28,
  megaMenuDescription: 100,
  footerSection: 14,
  docsSidebarItem: 24,
} as const

export function exceedsBudget(value: string, budget: number): boolean {
  return [...value].length > budget
}
