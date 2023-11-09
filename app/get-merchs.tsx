import { Data } from '../lib/types'
import CardBuy from '../components/card-buy'
import supabase from '../lib/supabase'
import { Suspense } from 'react'
import Loading from './loading'

export default async function GetMerchs() {
  const getMerchs = async () => {
    try {
      const { data } = await supabase.from('merch').select('*')

      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
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
