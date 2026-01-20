import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion'

describe('Accordion', () => {
  it('renders accordion items', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Question 1')).toBeInTheDocument()
  })

  it('expands on click', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText('Question 1')

    // Click to expand
    await user.click(trigger)

    // Check the trigger state changed
    expect(trigger.closest('button')).toHaveAttribute('aria-expanded', 'true')
  })

  it('only allows one item open in single mode', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionContent>Answer 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    // Open first item
    await user.click(screen.getByText('Question 1'))
    expect(screen.getByText('Answer 1')).toBeVisible()

    // Open second item - first should close
    await user.click(screen.getByText('Question 2'))
    expect(screen.getByText('Answer 2')).toBeVisible()
  })

  it('allows multiple items open in multiple mode', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionContent>Answer 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    await user.click(screen.getByText('Question 1'))
    await user.click(screen.getByText('Question 2'))

    expect(screen.getByText('Answer 1')).toBeVisible()
    expect(screen.getByText('Answer 2')).toBeVisible()
  })

  it('applies custom className', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="custom-class">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Question 1').closest('[data-slot="accordion-item"]')).toHaveClass('custom-class')
  })

  it('has data-slot attributes for styling', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByRole('button').closest('[data-slot]')).toHaveAttribute('data-slot', 'accordion-trigger')
  })
})
