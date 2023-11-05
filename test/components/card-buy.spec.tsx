import CardBuy from '../../components/card-buy'
import { render, screen } from '@testing-library/react'

test('should have text nodes defined', () => {
  const DOM = render(<CardBuy />)
  expect(DOM.baseElement.TEXT_NODE).toBeGreaterThan(0)
  expect(DOM.baseElement.TEXT_NODE).not.toBeLessThan(0)
})

test('should image defined', () => {
  render(<CardBuy />)
  const cardLinkBuy = screen.queryByRole('link') as HTMLLinkElement
  expect(cardLinkBuy.textContent?.length).toBeGreaterThan(0)
})

test('should have styles class', () => {
  render(<CardBuy />)
  const cardLinkBuy = screen.queryByRole('link') as HTMLLinkElement
  expect(cardLinkBuy.className).toContain('group')
  expect(cardLinkBuy.className).not.toContain('hover:opacity-75')
})

test('should have atributtes href', () => {
  render(<CardBuy />)
  const cardLinkBuy = screen.queryByRole('link') as HTMLLinkElement
  expect(cardLinkBuy.href).toContain('#')
  expect(cardLinkBuy.href).toBeDefined()
})
