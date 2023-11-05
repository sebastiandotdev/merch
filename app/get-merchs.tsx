'use client'

import { Fragment, useEffect, useState } from 'react'
import { Data } from '../lib/types'
import CardBuy from '../components/card-buy'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function GetMerchs() {
  const supabase = createClientComponentClient()

  const [merchs, setMerchs] = useState<Data[] | null>([])
  useEffect(() => {
    const getMerchs = async () => {
      try {
        const { data } = await supabase.from('merch').select('*')
        setMerchs(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error
      }
    }
    getMerchs()
  }, [])
  return (
    <Fragment>
      {merchs?.map((merch) => (
        <CardBuy
          key={merch.id}
          name={merch.title}
          image={merch.photo}
          price={merch.price}
          description={merch.description}
        />
      ))}
    </Fragment>
  )
}
