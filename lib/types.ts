import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type Data = {
  id: number
  title: string
  description: string
  price: number
  photo: string
  incrementPrice: number
  incrementProduct: number
}

export type PanelBuyProps = {
  open: boolean
  setOpen: (open: boolean) => void
  products: Data[]
}

type ParamValue = { id: number }

export type Increment = { incrementPrice: number; incrementProduct: number }

export type CartContextType = {
  cart: Data[]
  addProduct: (product: Data, increment: Increment) => void
  removeProduct: (productId: number) => void
  setIsSave: Dispatch<SetStateAction<boolean>>
  clearLocalStorage: () => void
  messages: {
    message: string
    description: string
  }
  isSave: boolean
  isSuccessfuly: boolean
  isClear: boolean
}
export type Children = { children: ReactNode }
export type Param = { params: ParamValue }
