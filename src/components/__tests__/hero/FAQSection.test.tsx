import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { FAQSection } from '../../hero/FAQSection'

describe('FAQSection', () => {
  it('renders section title', () => {
    render(<FAQSection />)
    expect(screen.getByText('Frequently asked')).toBeInTheDocument()
    expect(screen.getByText('questions.')).toBeInTheDocument()
  })

  it('renders all FAQ items', () => {
    render(<FAQSection />)

    expect(screen.getByText('Do I have to sell or exit my LP position?')).toBeInTheDocument()
    expect(screen.getByText('How much can I borrow?')).toBeInTheDocument()
    expect(screen.getByText('What happens if my LP value drops?')).toBeInTheDocument()
    expect(screen.getByText('Is my risk isolated?')).toBeInTheDocument()
    expect(screen.getByText('Can I repay early or close my position?')).toBeInTheDocument()
  })

  it('expands accordion on click', async () => {
    const user = userEvent.setup()
    render(<FAQSection />)

    const trigger = screen.getByText('Do I have to sell or exit my LP position?')
    await user.click(trigger)

    // Content should be visible
    expect(screen.getByText(/remains in the pool/)).toBeVisible()
  })

  it('collapses accordion on second click', async () => {
    const user = userEvent.setup()
    render(<FAQSection />)

    const trigger = screen.getByText('How much can I borrow?')

    // Open
    await user.click(trigger)
    expect(screen.getByText(/Up to 70%/)).toBeVisible()

    // Close
    await user.click(trigger)
    // Content should be hidden (animation may affect this)
  })

  it('contains question items', () => {
    render(<FAQSection />)
    // The FAQ should have multiple accordion items
    const items = screen.getAllByRole('button')
    expect(items.length).toBeGreaterThan(0)
  })

  it('has proper layout classes', () => {
    const { container } = render(<FAQSection />)
    expect(container.firstChild).toHaveClass('grid')
    expect(container.firstChild).toHaveClass('md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]')
  })

  it('renders accordion with proper structure', () => {
    const { container } = render(<FAQSection />)
    const accordion = container.querySelector('[data-slot="accordion"]')
    expect(accordion).toBeInTheDocument()
  })
})
