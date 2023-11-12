export type Data = {
  id: number
  title: string
  description: string
  price: number
  photo: string
  incrementPrice: number
  incrementProduct: number
}

type ParamValue = { id: number }

export type Param = { params: ParamValue }
