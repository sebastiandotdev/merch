'use client'

import { Suspense, useEffect, useState } from 'react'
import { Data } from '../lib/types'
import supabase from '../lib/supabase'
import Loading from './loading'
import CardBuy from '../components/card-buy'

export default function Postgres() {
  const [merchs, setMerchs] = useState<Data[]>([])

  useEffect(() => {
    const getMerchs = async () => {
      try {
        const { data } = await supabase.from('merch').select('*')

        setMerchs(data as Data[])
      } catch (error) {
        throw error
      }
    }
    getMerchs()
  }, [])

  return (
    <>
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
    </>
  )
}
