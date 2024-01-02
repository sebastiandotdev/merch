import React from 'react'

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Input) {
  return <input {...props} className='w-full outline-none' />
}
