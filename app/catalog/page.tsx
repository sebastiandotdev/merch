import { Data } from '../../lib/types'
import { getMerchs } from '../../lib/utils'
import GetMerchs from '../get-merchs'

export default async function PageCatalog() {
  const merchs = (await getMerchs()) as Data[]
  return (
    <section className='w-11/12 max-w-5xl mx-auto mt-12'>
      <h2 className='text-4xl font-amiko mb-12'>Products</h2>
      <header className='flex justify-between items-center mb-12'>
        <nav className='flex items-center'>
          <h5 className='font-amiko text-md text-zinc-600'>Filter: </h5>
        </nav>
        <nav className='flex items-center gap-x-4'>
          <select
            name='#'
            id='#'
            className='outline-none -mt-2 border-none rounded-md'
          >
            <optgroup
              label='Sort By'
              className='font-amiko font-light border-none outline-none'
            >
              <option value='opcion1'>Alphabetically, A-Z</option>
              <option value='opcion2'>Alphabetically, Z-A</option>
            </optgroup>
          </select>
          <small className='font-amiko text-md text-zinc-600'>
            {merchs.length > 0 ? merchs.length : 0} products
          </small>
        </nav>
      </header>
      <section className='grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10'>
        <GetMerchs />
      </section>
    </section>
  )
}
