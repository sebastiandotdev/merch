'use client'

import { useEffect, useState } from 'react'
import { Data } from '../lib/types'
import supabase from '../lib/supabase'
import GetMerchs from './get-merchs'

export default function Postgres() {
  const [merchs, setMerchs] = useState<Data[]>([])
  useEffect(() => {
    const getMerchs = async () => {
      try {
        const { data } = await supabase.from('merch').select('*')

        setMerchs(data as Data[])
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error
      }
    }
    getMerchs()
  }, [])

  return (
    <>
      <GetMerchs data={merchs} />
    </>
  )
}
