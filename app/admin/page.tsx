'use client'

import { FormEvent, useState } from 'react'
import supabase from '../../lib/supabase'
import { v4 as uuidv4 } from 'uuid'
import Loading from '../loading'
import Messsage from '../../components/message'

export default function AdminPage() {
  const [image, setImage] = useState<File | null>(null)
  const [loadingAdmin, setLoadingAdmin] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const [messages, setMessage] = useState({
    message: '',
    description: '',
  })

  const onImageChange = (e: FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files[0]) {
      setImage(files[0])
    }
  }
  const create = async (e: FormEvent) => {
    e.preventDefault()
    setLoadingAdmin(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const entries = Object.fromEntries(formData.entries())

    if (!image) {
      alert('Please select an image')
      return
    }
    try {
      const { data, error } = await supabase.storage
        .from('merch-pet')
        .upload(`folder/${uuidv4()}`, image, {
          cacheControl: '3600',
          upsert: false,
        })
      if (error) {
        console.log(error)

        return
      }
      const { data: storage } = supabase.storage
        .from('merch-pet')
        .getPublicUrl(data.path)

      await supabase
        .from('merch')
        .insert([
          {
            title: entries.title,
            photo: storage.publicUrl,
            description: entries.description,
            price: entries.price,
          },
        ])
        .select('*')
      ;(e.target as HTMLFormElement).reset()
      setIsSave(true)
      setMessage({
        message: 'Successfully added',
        description: 'Product added successfully to the list of product',
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingAdmin(false)
    }
  }

  return (
    <section className='w-11/12 max-w-5xl mx-auto mt-12'>
      <h2 className='font-amiko text-5xl'>Welcome to page admin</h2>
      {loadingAdmin ? (
        <Loading />
      ) : (
        <form onSubmit={create} className='px-10 mt-6 mb-6'>
          <div className='grid grid-cols-2 gap-[2rem] w-full'>
            <label
              htmlFor='title'
              className='w-full border border-[#121212] mb-[2rem] p-3'
            >
              <input
                type='text'
                placeholder='Title'
                name='title'
                className='w-full outline-none'
              />
            </label>
            <label
              htmlFor='price'
              className='w-full border border-[#121212] mb-[2rem] p-3'
            >
              <input
                type='text'
                placeholder='Price'
                name='price'
                className='w-full outline-none'
              />
            </label>
          </div>
          <div className='flex w-full'>
            <label
              htmlFor='image'
              className='w-full border border-[#121212] mb-[2rem] p-3 flex-1'
            >
              <input
                type='file'
                placeholder='Phone number'
                name='image'
                className='w-full outline-none'
                onChange={onImageChange}
              />
            </label>
          </div>
          <div className='flex w-full'>
            <label
              htmlFor='description'
              className='w-full border border-[#121212] mb-[2rem] p-3 flex-1'
            >
              <textarea
                rows={10}
                placeholder='Description'
                name='description'
                className='w-full outline-none resize-none'
              />
            </label>
          </div>
          <input
            type='submit'
            value='Save'
            className='bg-black text-white py-3 px-[3rem] min-h-[calc(4.5rem + 1px * 2)] hover:cursor-pointer hover:opacity-90'
          />
        </form>
      )}
      {isSave ? (
        <Messsage
          message={messages.message}
          description={messages.description}
        />
      ) : (
        ''
      )}
    </section>
  )
}
