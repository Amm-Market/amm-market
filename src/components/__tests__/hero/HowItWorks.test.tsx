import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HowItWorks } from '../../hero/HowItWorks'

describe('HowItWorks', () => {
  it('renders section header', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How borrowing works')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Get liquidity from your LP positions/)).toBeInTheDocument()
  })

  it('renders step 1', () => {
    render(<HowItWorks />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Deposit your LP position')).toBeInTheDocument()
  })

  it('renders step 2', () => {
    render(<HowItWorks />)
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Receive your loan instantly')).toBeInTheDocument()
  })

  it('renders step 3', () => {
    render(<HowItWorks />)
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Repay on your timeline')).toBeInTheDocument()
  })

  it('has 3-column grid on desktop', () => {
    const { container } = render(<HowItWorks />)
    expect(container.querySelector('.grid-cols-1.md\\:grid-cols-3')).toBeInTheDocument()
  })

  it('step cards have proper styling', () => {
    const { container } = render(<HowItWorks />)
    const cards = container.querySelectorAll('.bg-gray-50.rounded-2xl')
    expect(cards.length).toBe(3)
  })

  it('includes DeFiTerm components for education', () => {
    render(<HowItWorks />)
    // Check for DeFi terms in the content
    expect(screen.getByText(/LP tokens/)).toBeInTheDocument()
    expect(screen.getByText(/DEX/)).toBeInTheDocument()
  })
})
