import React from 'react'

interface PropLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ children, ...props }: PropLabel) {
  return (
    <label {...props} className='w-full border border-[#121212] mb-[2rem] p-3'>
      {children}
    </label>
  )
}
