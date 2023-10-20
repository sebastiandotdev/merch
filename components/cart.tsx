import { IconCart } from './icons'

export function Cart() {
  return (
    <div>
      <button className='flex gap-2 items-center border-2 border-gray-800 rounded-full px-5 py-1 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300'>
        <IconCart />0
      </button>
      <dialog
        className={`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full`}
      ></dialog>
    </div>
  )
}
