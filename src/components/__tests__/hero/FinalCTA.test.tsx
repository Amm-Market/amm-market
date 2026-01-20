import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FinalCTA } from '../../hero/FinalCTA'

describe('FinalCTA', () => {
  it('renders call-to-action heading', () => {
    render(<FinalCTA />)
    expect(screen.getByText("Ready to unlock your LP's potential?")).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<FinalCTA />)
    expect(screen.getByText(/Join the waitlist/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<FinalCTA />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders join waitlist button', () => {
    render(<FinalCTA />)
    const button = screen.getByRole('button', { name: 'Join waitlist' })
    expect(button).toBeInTheDocument()
  })

  it('has form element', () => {
    const { container } = render(<FinalCTA />)
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
  })

  it('renders disclaimer section', () => {
    render(<FinalCTA />)
    expect(screen.getByText(/Borrowing against LP tokens involves risk/)).toBeInTheDocument()
  })

  it('disclaimer mentions key risks', () => {
    render(<FinalCTA />)
    const disclaimer = screen.getByText(/liquidation/)
    expect(disclaimer).toBeInTheDocument()
  })

  it('has proper section styling', () => {
    const { container } = render(<FinalCTA />)
    expect(container.querySelector('.border-t.border-gray-100')).toBeInTheDocument()
  })

  it('disclaimer section has separate border', () => {
    const { container } = render(<FinalCTA />)
    const disclaimerSection = container.querySelector('.border-t.border-gray-200')
    expect(disclaimerSection).toBeInTheDocument()
  })

  it('input has proper focus styles', () => {
    render(<FinalCTA />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toHaveClass('focus:ring-2', 'focus:ring-blue-500')
  })
})
