'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { CartContextType, Children, Data, Increment } from '../lib/types'

const initialCartContext: CartContextType = {
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearLocalStorage: () => {},
  setIsSave: () => {},
  messages: {
    message: '',
    description: '',
  },
  isSave: false,
  isSuccessfuly: false,
  isClear: false,
}
const Context = createContext<CartContextType>(initialCartContext)

const useCart = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

function CartContext({ children }: Children) {
  const [cart, setCart] = useState<Data[]>([])
  const [messages, setMessage] = useState({
    message: '',
    description: '',
  })
  const [isSave, setIsSave] = useState(false)
  const [isSuccessfuly, setIsSuccesfuly] = useState(false)
  const [isClear, setIsClear] = useState(false)
  const [localStorageProducts, setLocalStorageProducts] = useState<Data[]>([])

  const addProduct = (product: Data, increment: Increment) => {
    const existingProducts = JSON.parse(
      localStorage.getItem('products') || '[]',
    ) as Data[]

    const productExists = existingProducts.some(
      (p: Data) => p.id === product.id,
    )
    if (!productExists) {
      existingProducts.push({ ...product, ...increment })
      localStorage.setItem('products', JSON.stringify(existingProducts))
      setCart(existingProducts)

      setMessage({
        message: 'Successfully added',
        description: 'The product has been added to the cart',
      })
      setIsSuccesfuly(true)
      setIsSave(true)
      setLocalStorageProducts(existingProducts)
    }
  }
  useEffect(() => {
    const existingProducts = JSON.parse(
      localStorage.getItem('products') || '[]',
    ) as Data[]
    setCart(existingProducts)
  }, [localStorageProducts])

  const removeProduct = (productId: number) => {
    const existingProducts = JSON.parse(
      localStorage.getItem('products') || '[]',
    ) as Data[]

    const productExists = existingProducts.some((p: Data) => p.id === productId)
    if (productExists) {
      const newProducts = existingProducts.filter(
        (p: Data) => p.id !== productId,
      )
      localStorage.setItem('products', JSON.stringify(newProducts))
      setCart(newProducts)
      setMessage({
        message: 'Successfully removed',
        description: 'The product has been removed from the cart',
      })
      setIsSuccesfuly(true)
      setIsSave(true)
      setLocalStorageProducts(newProducts)
    }
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('products')
    setMessage({
      message: 'Successfully removed',
      description: 'The product has been removed from the cart',
    })
    setIsClear(true)
  }

  return (
    <Context.Provider
      value={{
        cart,
        messages,
        isSave,
        isSuccessfuly,
        isClear,
        addProduct,
        removeProduct,
        setIsSave,
        clearLocalStorage,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { CartContext, useCart }
