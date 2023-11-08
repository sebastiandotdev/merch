export type Data = {
  id: number
  title: string
  description: string
  price: number
  photo: string
}

type ParamValue = { id: number }

export type Param = { params: ParamValue }
