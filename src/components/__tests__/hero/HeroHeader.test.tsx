import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HeroHeader } from '../../hero/HeroHeader'

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('HeroHeader', () => {
  it('renders main headline', () => {
    render(<HeroHeader />)
    expect(screen.getByText(/Borrow up to 80%/)).toBeInTheDocument()
    expect(screen.getByText(/against your LPs/)).toBeInTheDocument()
  })

  it('renders supporting text', () => {
    render(<HeroHeader />)
    expect(screen.getByText(/Get access to loans/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<HeroHeader />)
    const input = screen.getByPlaceholderText('satoshi@nakamoto.com')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders sign up button', () => {
    render(<HeroHeader />)
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument()
  })

  it('renders hero image', () => {
    render(<HeroHeader />)
    const image = screen.getByAltText('Avana app interface')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/images/homepage.png')
  })

  it('has h1 heading', () => {
    render(<HeroHeader />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('has responsive layout classes', () => {
    const { container } = render(<HeroHeader />)
    expect(container.querySelector('.flex-col.lg\\:flex-row')).toBeInTheDocument()
  })

  it('contains DeFiTerm components for education', () => {
    render(<HeroHeader />)
    // Check that LP positions and collateral are DeFiTerm wrapped
    expect(screen.getByText('LP positions')).toBeInTheDocument()
    expect(screen.getByText('collateral')).toBeInTheDocument()
  })
})
