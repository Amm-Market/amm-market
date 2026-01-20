import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WaitlistCTA from '../waitlist-cta'

describe('WaitlistCTA', () => {
  it('renders the heading', () => {
    render(<WaitlistCTA />)
    expect(screen.getByText("Ready to unlock your LP's potential?")).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<WaitlistCTA />)
    expect(screen.getByText(/Join the waitlist/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<WaitlistCTA />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders submit button', () => {
    render(<WaitlistCTA />)
    const button = screen.getByRole('button', { name: 'Join waitlist' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('has proper form structure', () => {
    const { container } = render(<WaitlistCTA />)
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    const { container } = render(<WaitlistCTA />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('py-16', 'md:py-20', 'border-t', 'border-gray-100')
  })

  it('heading has responsive text sizes', () => {
    render(<WaitlistCTA />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-2xl', 'sm:text-3xl', 'md:text-4xl')
  })

  it('button has hover styling', () => {
    render(<WaitlistCTA />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('hover:bg-gray-800', 'transition-colors')
  })

  it('input has focus styling', () => {
    render(<WaitlistCTA />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toHaveClass('focus:ring-2', 'focus:ring-blue-500')
  })

  it('form has responsive layout', () => {
    const { container } = render(<WaitlistCTA />)
    const form = container.querySelector('form')
    expect(form).toHaveClass('flex', 'flex-col', 'sm:flex-row')
  })
})
