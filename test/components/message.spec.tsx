import Messsage from '../../components/message'
import { render, screen } from '@testing-library/react'

test('should render message', () => {
  render(
    <Messsage
      message='Successfully added'
      description='The product has been added to the cart'
    />,
  )
  const message = screen.getByText(/Successfully added/i)
  expect(message).toBeTruthy()
})

test('should render description', () => {
  render(
    <Messsage
      message='Successfully added'
      description='The product has been added to the cart'
    />,
  )
  const message = screen.getByText(/The product has been added to the cart/i)
  expect(message).toBeTruthy()
})
