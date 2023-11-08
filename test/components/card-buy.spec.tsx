import CardBuy from '../../components/card-buy'
import { render, screen } from '@testing-library/react'

const merch = {
  id: '1',
  name: 'Camiseta',
  price: 59.9,
  image: '/images/camiseta.png',
  description: 'Camiseta branca de algodão',
}
test('should have text nodes defined', () => {
  const DOM = render(
    <CardBuy
      key={merch.id}
      name={merch.name}
      description={merch.image}
      image={merch.image}
      price={merch.price}
    />,
  )
  expect(DOM.baseElement.TEXT_NODE).toBeGreaterThan(0)
  expect(DOM.baseElement.TEXT_NODE).not.toBeLessThan(0)
})

test('should image defined', () => {
  render(
    <CardBuy
      key={merch.id}
      name={merch.name}
      description={merch.image}
      image={merch.image}
      price={merch.price}
    />,
  )
  const cardLinkBuy = screen.queryByRole('link') as HTMLLinkElement
  expect(cardLinkBuy.textContent?.length).toBeGreaterThan(0)
})

test('should have styles class', () => {
  render(
    <CardBuy
      key={merch.id}
      name={merch.name}
      description={merch.image}
      image={merch.image}
      price={merch.price}
    />,
  )
  const cardLinkBuy = screen.queryByRole('link') as HTMLLinkElement
  expect(cardLinkBuy.className).toContain('group')
  expect(cardLinkBuy.className).not.toContain('hover:opacity-75')
})

test('should have atributtes href', () => {
  render(
    <CardBuy
      key={merch.id}
      name={merch.name}
      description={merch.image}
      image={merch.image}
      price={merch.price}
    />,
  )
  const cardLinkBuy = screen.queryByRole('link') as HTMLLinkElement
  expect(cardLinkBuy.href).toContain('product-pet')
  expect(cardLinkBuy.href).toBeDefined()
})

test('should have atributtes src', () => {
  render(
    <CardBuy
      key={merch.id}
      name={merch.name}
      description={merch.image}
      image={merch.image}
      price={merch.price}
    />,
  )
  const cardLinkBuy = screen.queryByRole('img') as HTMLImageElement
  expect(cardLinkBuy.src).toBeDefined()
  expect(cardLinkBuy.src).not.toBeUndefined()
})
