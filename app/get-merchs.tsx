import { Data } from '../lib/types'
import CardBuy from '../components/card-buy'
import { Suspense } from 'react'
import Loading from './loading'

type Props = {
  data: Data[]
}

export default async function GetMerchs({ data }: Props) {
  return (
    <Suspense fallback={<Loading />}>
      {data.map((merch) => (
        <CardBuy
          key={merch.id}
          id={merch.id}
          name={merch.title}
          image={merch.photo}
          price={merch.price}
          description={merch.description}
        />
      ))}
    </Suspense>
  )
}
