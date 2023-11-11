import PanelBuy from '../../components/panel-buy'
import { render, screen } from '@testing-library/react'
import { Data } from '../../lib/types'

const products: Data[] = [
  {
    id: 1,
    title: 'Dog',
    photo: '/assets/dog.jpg',
    price: 100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'Cat',
    photo: '/assets/cat.jpg',
    price: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]
test('render title panel component', () => {
  const setOpen = vi.fn()
  render(<PanelBuy open={true} setOpen={setOpen} products={products} />)
  const linkElement = screen.getByText(/Shopping cart/i)

  expect(linkElement.tagName.toLowerCase()).toBe('h2')
  expect(linkElement.textContent).toBeDefined()
})

test('render close button', () => {
  const setOpen = vi.fn()
  render(<PanelBuy open={true} setOpen={setOpen} products={products} />)
  const linkElement = screen.getByText(/Close panel/i)

  expect(linkElement.tagName.toLowerCase()).toBe('span')
  expect(linkElement.textContent).toBeDefined()
})

test('should have a button remove', () => {
  const setOpen = vi.fn()
  render(<PanelBuy open={true} setOpen={setOpen} products={products} />)
  const linkElement = screen.getAllByText(/Remove/i)

  linkElement.map((btnElement) => {
    expect(btnElement.tagName.toLowerCase()).toBe('button')
    expect(btnElement.textContent).toBeDefined()
    expect(btnElement.classList.contains('hover:text-red-500')).toBeTruthy()
  })
})
