export function Cart() {
  return (
    <div>
      <button className='flex gap-2 items-center border-2 border-gray-800 rounded-full px-5 py-2 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300'>
        <IconCart />
      </button>
      <dialog
        className={`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full`}
      ></dialog>
    </div>
  )
}
export function IconCart({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={Math.round((15 / 16) * size)}
      height={size}
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask id='path-1-inside-1_1601_8161' fill='white'>
        <rect x='0.919922' y='3.9663' width='14.08' height='12.0337' rx='1' />
      </mask>
      <rect
        x='0.919922'
        y='3.9663'
        width='14.08'
        height='12.0337'
        rx='1'
        stroke='currentColor'
        strokeWidth='3.2'
        mask='url(#path-1-inside-1_1601_8161)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.5599 7.60279V3.6C11.5599 1.61177 9.94809 -3.8147e-06 7.95986 -3.8147e-06C5.97164 -3.8147e-06 4.35986 1.61177 4.35986 3.59999V7.60279H5.95986V3.59999C5.95986 2.49543 6.85529 1.6 7.95986 1.6C9.06443 1.6 9.95986 2.49543 9.95986 3.6V7.60279H11.5599Z'
        fill='currentColor'
      />
    </svg>
  )
}
