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

export function GitHub(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1989_191)'>
        <path
          d='M7.00001 0C3.13391 0 0 3.21295 0 7.17755C0 10.3482 2.0055 13.0388 4.7873 13.9875C5.1373 14.0534 5.26471 13.832 5.26471 13.6414C5.26471 13.4716 5.25912 13.0195 5.25561 12.4212C3.3082 12.8547 2.8973 11.4589 2.8973 11.4589C2.5795 10.6291 2.1203 10.4084 2.1203 10.4084C1.48471 9.96418 2.16861 9.97279 2.16861 9.97279C2.87071 10.0229 3.24032 10.7122 3.24032 10.7122C3.86472 11.8085 4.87903 11.4918 5.27732 11.3084C5.34171 10.8448 5.52232 10.5288 5.72251 10.3497C4.16851 10.1684 2.534 9.55218 2.534 6.80211C2.534 6.01893 2.807 5.37764 3.2543 4.87605C3.1822 4.69476 2.94211 3.96463 3.32289 2.97722C3.32289 2.97722 3.91089 2.78376 5.24789 3.71238C5.77305 3.55992 6.37629 3.47184 6.99948 3.4709C7.59448 3.47377 8.19351 3.5533 8.7528 3.71238C10.0891 2.78376 10.6757 2.97649 10.6757 2.97649C11.0579 3.9646 10.8171 4.69475 10.7457 4.87603C11.1937 5.3776 11.4653 6.0189 11.4653 6.80208C11.4653 9.55931 9.82799 10.1662 8.26908 10.3439C8.52037 10.5653 8.74368 11.0031 8.74368 11.6731C8.74368 12.6318 8.73529 13.4064 8.73529 13.6414C8.73529 13.8335 8.86129 14.057 9.21689 13.9868C12.0205 13.0032 14 10.3285 14 7.18046C14 7.17943 14 7.17841 14 7.17738C14 3.21278 10.8654 0 7.00001 0Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1989_191'>
          <rect width='14' height='14' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Nextjs() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-nextjs'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993'></path>
      <path d='M15 12v-3'></path>
    </svg>
  )
}
