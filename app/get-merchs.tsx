import { Data } from '../lib/types'
import CardBuy from '../components/card-buy'
import { Suspense } from 'react'
import Loading from './loading'
import { getMerchs } from '../lib/utils'

export default async function GetMerchs() {
  const merchs = (await getMerchs()) as Data[]
  return (
    <Suspense fallback={<Loading />}>
      {merchs.map((merch) => (
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
