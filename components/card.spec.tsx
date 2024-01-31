import Card from './card'
import { render, screen } from '@testing-library/react'

test('should have text nodes defined', () => {
  const DOM = render(<Card />)
  expect(DOM.baseElement.TEXT_NODE).toBeGreaterThan(0)
  expect(DOM.baseElement.TEXT_NODE).not.toBeLessThan(0)
})

test('should have div nodes defined', () => {
  const DOM = render(<Card />)
  DOM.baseElement.childNodes.forEach((nodes) => {
    expect(nodes.nodeName.toLowerCase()).toBe('div')
  })
})

test('should return tag anchor', () => {
  render(<Card />)
  const cardLink = screen.queryByRole('link') as HTMLAnchorElement

  expect(cardLink.tagName.toLowerCase()).toBe('a')
})
