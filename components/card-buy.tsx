import Image from 'next/image'
import Link from 'next/link'
import { IconCart } from './icons'
import { CardBuyProps } from '../lib/types'

export default function CardBuy({
  id,
  name,
  image,
  price,
  description,
}: CardBuyProps) {
  return (
    <Link
      href={`/product-pet/${name.toLowerCase().replace(/ /g, '-')}-${id}`}
      className='group'
    >
      <header className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative'>
        <aside className='w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.6)] opacity-0 hover:opacity-90 transition-opacity z-10 absolute duration-500'>
          <IconCart size={30} />
        </aside>
        <Image
          src={image}
          alt='example'
          width={401}
          height={401}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </header>
      <div className='mt-4 flex justify-between'>
        <div className='container px-0.5'>
          <h3 className='text-md text-gray-700 font-amiko'>{name}</h3>
          <p className='mt-1 text-sm text-gray-500 font-amiko'>{description}</p>
        </div>
        <p className='text-md font-medium text-gray-900 font-amiko'>
          ${price.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}
