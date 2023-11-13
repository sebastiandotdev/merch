'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { Data } from '../lib/types'

type CartContextType = {
  cart: Data[]
  addProduct: (product: Data) => void
  removeProduct: (productId: string) => void
}

const initialCartContext: CartContextType = {
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
}
const Context = createContext<CartContextType>(initialCartContext)

const useCart = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

function CartContext({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Data[]>([])

  const addProduct = (product: Data) => {}

  const removeProduct = (productId: string) => {}

  return (
    <Context.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { CartContext, useCart }
