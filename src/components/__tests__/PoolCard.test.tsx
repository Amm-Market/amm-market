import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PoolCard, type Pool } from '../shared/PoolCard'

describe('PoolCard', () => {
  const mockPool: Pool = {
    token0: { symbol: 'ETH', color: '#627EEA' },
    token1: { symbol: 'USDC', color: '#2775CA' },
    dex: 'Uniswap v3',
    tvl: '$245.8M',
  }

  it('renders token pair symbols', () => {
    render(<PoolCard pool={mockPool} />)
    expect(screen.getByText('ETH / USDC')).toBeInTheDocument()
  })

  it('renders DEX name', () => {
    render(<PoolCard pool={mockPool} />)
    expect(screen.getByText('Uniswap v3')).toBeInTheDocument()
  })

  it('renders TVL value', () => {
    render(<PoolCard pool={mockPool} />)
    expect(screen.getByText('$245.8M')).toBeInTheDocument()
  })

  it('renders TVL label', () => {
    render(<PoolCard pool={mockPool} />)
    expect(screen.getByText('TVL')).toBeInTheDocument()
  })

  it('renders token icons with correct colors', () => {
    render(<PoolCard pool={mockPool} />)
    
    const token0Icon = screen.getByLabelText('ETH token')
    const token1Icon = screen.getByLabelText('USDC token')

    expect(token0Icon).toHaveStyle({ backgroundColor: '#627EEA' })
    expect(token1Icon).toHaveStyle({ backgroundColor: '#2775CA' })
  })

  it('renders different pool data correctly', () => {
    const altPool: Pool = {
      token0: { symbol: 'WBTC', color: '#F7931A' },
      token1: { symbol: 'DAI', color: '#F5AC37' },
      dex: 'Curve',
      tvl: '$100M',
    }

    render(<PoolCard pool={altPool} />)

    expect(screen.getByText('WBTC / DAI')).toBeInTheDocument()
    expect(screen.getByText('Curve')).toBeInTheDocument()
    expect(screen.getByText('$100M')).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    const { container } = render(<PoolCard pool={mockPool} />)
    const card = container.firstChild as HTMLElement

    expect(card).toHaveClass('bg-white', 'rounded-lg', 'border', 'shadow-sm')
  })

  it('has hover styles', () => {
    const { container } = render(<PoolCard pool={mockPool} />)
    const card = container.firstChild as HTMLElement

    expect(card).toHaveClass('hover:bg-gray-50', 'hover:shadow-md')
  })
})
