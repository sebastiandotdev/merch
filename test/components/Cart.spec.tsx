import Cart from '../../components/cart'
import { screen, render } from '@testing-library/react'

test('should have a number greater than or equal to 0 of elements defined ', () => {
  render(<Cart />)
  const cart = screen.queryByRole('tooltip') as HTMLDivElement

  const buttonCart = cart.querySelector('#total') as HTMLButtonElement
  expect(buttonCart.textContent).toBeDefined()
  expect(buttonCart.textContent).not.toBeNull()
  expect(buttonCart.textContent).not.toBeUndefined()
  expect(buttonCart.textContent).not.toBe('')
})
