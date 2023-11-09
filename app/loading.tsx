export default function Loading() {
  return (
    <div className='relative h-screen grid place-items-center'>
      <div className='absolute inset-0 bg-gray-400 opacity-50 h-full' />
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
    </div>
  )
}
