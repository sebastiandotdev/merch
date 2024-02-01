'use client'

import Image from 'next/image'
import { Add, Minus } from '../../../components/icons'
import { Data } from '../../../lib/types'
import { useEffect, useState } from 'react'
import { useCart } from '../../Provider'

export default function Product({ product }: { product: Data }) {
  const [increment, setIncrement] = useState({
    incrementPrice: product.price,
    incrementProduct: 1,
  })
  const { addProduct, isSave, setIsSave, cart } = useCart()

  const incrementPrice = () => {
    setIncrement({
      incrementPrice: increment.incrementPrice + product.price,
      incrementProduct: increment.incrementProduct + 1,
    })
  }
  const decrementPrice = () => {
    if (increment.incrementPrice > product.price) {
      setIncrement({
        incrementPrice: increment.incrementPrice - product.price,
        incrementProduct: increment.incrementProduct - 1,
      })
    }
  }
  useEffect(() => {
    setIsSave(isProductInCart(product.id))
  }, [product.id, cart])

  const isProductInCart = (productId: number): boolean => {
    return cart.some((p) => p.id === productId)
  }
  return (
    <>
      <figure className='overflow-hidden py-4'>
        <Image
          src={product.photo}
          alt='Example Product By ID'
          className='object-cover aspect-square'
          width={400}
          height={400}
        />
      </figure>
      <aside className='py-4 w-full px-6 lg:px-20 sticky top-0'>
        <h5 className='uppercase text-gray-400 font-amiko lg:text-start text-center'>
          Pet land
        </h5>
        <h2 className='uppercase font-amiko text-4xl pt-4 lg:text-start text-center'>
          {product.title}
        </h2>

        <p className='font-amiko uppercase text-2xl py-6 lg:text-start text-center'>
          ${increment.incrementPrice.toLocaleString()} COP
        </p>
        <div className='border border-black p-2 flex items-center justify-between max-w-[10rem] lg:text-start text-center mx-auto lg:mx-0'>
          <button
            className='text-xl cursor-pointer'
            onClick={decrementPrice}
            style={{
              color:
                increment.incrementPrice === product.price ? '#ccc' : '#000',
              cursor:
                increment.incrementPrice === product.price
                  ? 'not-allowed'
                  : 'pointer',
            }}
            disabled={increment.incrementPrice === product.price}
          >
            <Minus />
          </button>
          <small className='font-amiko text-xl uppercase'>
            {increment.incrementProduct}
          </small>
          <button className='text-xl cursor-pointer' onClick={incrementPrice}>
            <Add />
          </button>
        </div>
        <div className='py-6'>
          <button
            type='button'
            data-ripple-light='true'
            className='py-3 bg-blue-500 block w-full mt-4 text-white font-amiko cursor-pointer hover:opacity-90'
            style={{
              backgroundColor: isSave ? '#ccc' : '#3b82f6',
              cursor: isSave ? 'not-allowed' : 'pointer',
            }}
            onClick={() => addProduct(product, increment)}
            disabled={isSave}
          >
            Add to cart
          </button>
        </div>
      </aside>
    </>
  )
}
