'use client'

import { useEffect, useState } from 'react'
import { Data } from '../lib/types'
import CardBuy from '../components/card-buy'

export default function GetMerchs() {
  const [merchs, setMerchs] = useState<Data[]>([])
  useEffect(() => {
    const getMerchs = async () => {
      try {
        const res = await fetch('https://merch-inky.vercel.app/api')
        const json = await res.json()

        console.log(json.data)

        setMerchs(json.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error
      }
    }
    getMerchs()
  }, [])
  return (
    <>
      {merchs.map((merch) => (
        <CardBuy
          key={merch.id}
          name={merch.title}
          image={merch.photo}
          price={merch.price}
          description={merch.description}
        />
      ))}
    </>
  )
}
