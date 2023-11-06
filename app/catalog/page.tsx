import GetMerchs from '../get-merchs'

export default function PageCatalog() {
  return (
    <section className='w-11/12 max-w-5xl mx-auto mt-12'>
      <h2 className='text-4xl font-amiko mb-12'>Products</h2>
      <header className='flex justify-between items-center mb-12'>
        <nav className='flex items-center'>
          <h5 className='font-amiko text-md text-zinc-600'>Filter: </h5>
        </nav>
        <nav className='flex items-center'>
          <h5 className='font-amiko text-md text-zinc-600'>Sort by: </h5>
        </nav>
      </header>
      <section className='grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10'>
        <GetMerchs />
      </section>
    </section>
  )
}
