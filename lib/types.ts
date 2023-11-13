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

export type Param = { params: ParamValue }
