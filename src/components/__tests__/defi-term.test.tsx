import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DeFiTerm, defiGlossary } from '../defi-term'

describe('DeFiTerm', () => {
  it('renders children text', () => {
    render(<DeFiTerm term="lp">LP Tokens</DeFiTerm>)
    expect(screen.getByText('LP Tokens')).toBeInTheDocument()
  })

  it('has tooltip trigger for known term', () => {
    render(<DeFiTerm term="ltv">LTV</DeFiTerm>)

    const trigger = screen.getByText('LTV')
    // The trigger should have cursor-help indicating it's hoverable
    expect(trigger).toHaveClass('cursor-help')
    expect(trigger).toHaveClass('border-dotted')
  })

  it('renders without tooltip for unknown term', () => {
    render(<DeFiTerm term="unknown-term">Unknown</DeFiTerm>)

    const element = screen.getByText('Unknown')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('SPAN')
    // Should not have dotted border since no tooltip
    expect(element).not.toHaveClass('border-dotted')
  })

  it('applies dotted border style for known terms', () => {
    render(<DeFiTerm term="collateral">Collateral</DeFiTerm>)

    const trigger = screen.getByText('Collateral')
    expect(trigger).toHaveClass('border-b', 'border-dotted', 'cursor-help')
  })

  it('applies custom className', () => {
    render(<DeFiTerm term="lp" className="custom-class">LP</DeFiTerm>)

    const trigger = screen.getByText('LP')
    expect(trigger).toHaveClass('custom-class')
  })

  it('handles case-insensitive term lookup', () => {
    render(<DeFiTerm term="LTV">LTV</DeFiTerm>)

    const trigger = screen.getByText('LTV')
    // Should have dotted border indicating it found the term
    expect(trigger).toHaveClass('border-dotted')
  })

  it('exports glossary for external use', () => {
    expect(defiGlossary).toBeDefined()
    expect(typeof defiGlossary).toBe('object')
    expect(defiGlossary.lp).toBeDefined()
    expect(defiGlossary.ltv).toBeDefined()
  })

  it('contains expected terms in glossary', () => {
    const expectedTerms = [
      'lp',
      'lp-tokens',
      'lp-position',
      'ltv',
      'liquidation',
      'collateral',
      'tvl',
      'apy',
      'apr',
      'health-factor',
      'amm',
      'dex',
      'oracle',
    ]

    expectedTerms.forEach((term) => {
      expect(defiGlossary[term]).toBeDefined()
    })
  })

  it('has hover transition styles', () => {
    render(<DeFiTerm term="amm">AMM</DeFiTerm>)

    const trigger = screen.getByText('AMM')
    expect(trigger).toHaveClass('hover:border-blue-500', 'hover:text-blue-600', 'transition-colors')
  })
})
