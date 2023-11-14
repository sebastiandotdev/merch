'use client'

import { useEffect, useState } from 'react'
import { IconCart } from './icons'
import PanelBuy from './panel-buy'
import { useCart } from '../app/Provider'

export default function Cart() {
  const [openPanel, setOpenPanel] = useState(false)
  const { cart } = useCart()

  useEffect(() => {}, [cart])

  return (
    <div role='tooltip'>
      <PanelBuy open={openPanel} setOpen={setOpenPanel} products={cart} />
      <button
        className='flex gap-2 items-center border-2 border-gray-800 rounded-full px-5 py-1 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300'
        id='total'
        onClick={() => setOpenPanel(true)}
      >
        <IconCart />
        {cart.length}
      </button>
      <dialog className='bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full'></dialog>
    </div>
  )
}
