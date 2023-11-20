import { Data } from '../lib/types'
import CardBuy from '../components/card-buy'
import { Suspense } from 'react'
import Loading from './loading'
import supabase from '../lib/supabase'

const getMerchs = async () => {
  try {
    const { data } = await supabase.from('merch').select('*')

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

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
