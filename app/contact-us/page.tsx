import FieldInput from '../../components/ui/field-input'
import FieldTitle from '../../components/ui/field-title'

export default function ContactUs() {
  return (
    <section className='w-11/12 max-w-5xl mx-auto pt-4'>
      <header className='lg:px-10'>
        <h2 className='text-[4.8rem]  mb-[3rem]'>Contact</h2>
      </header>
      <form action='#' className='px-10'>
        <div className='grid lg:grid-cols-2 gap-[2rem] w-full auto-cols-auto'>
          <FieldTitle htmlFor='name'>
            <FieldInput type='text' placeholder='Jhon Doe' name='name' />
          </FieldTitle>
          <FieldTitle htmlFor='email'>
            <FieldInput
              type='text'
              placeholder='jhondoe@email.com'
              name='name'
            />
          </FieldTitle>
        </div>
        <div className='flex w-full'>
          <FieldTitle htmlFor='phone'>
            <FieldInput type='text' placeholder='304192389102' name='phone' />
          </FieldTitle>
        </div>
        <div className='flex w-full'>
          <FieldTitle>
            <textarea
              rows={10}
              placeholder='Comment'
              name='message'
              className='w-full outline-none resize-none'
            />
          </FieldTitle>
        </div>
        <input
          type='submit'
          value='Send'
          className='bg-black text-white py-3 px-[3rem] min-h-[calc(4.5rem + 1px * 2)] hover:cursor-pointer hover:opacity-90 mb-4'
        />
      </form>
    </section>
  )
}
