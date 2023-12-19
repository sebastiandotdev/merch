import FieldInput from '../../components/ui/field-input'
import FieldTitle from '../../components/ui/field-title'

export default function Login() {
  return (
    <section className='w-11/12 max-w-5xl mx-auto pt-4 mb-4'>
      <header className='px-10'>
        <h2 className='text-[4.8rem] font-amiko mb-[3rem]'>Login</h2>
      </header>
      <form action='#' className='px-10'>
        <div className='grid grid-cols-2 gap-[2rem] w-full'>
          <FieldTitle htmlFor='name'>
            <FieldInput type='text' placeholder='Jhon Doe' name='name' />
          </FieldTitle>
          <FieldTitle htmlFor='email'>
            <FieldInput
              type='email'
              placeholder='jhondoe@email.com'
              name='email'
            />
          </FieldTitle>
        </div>
        <div className='flex w-full'>
          <FieldTitle htmlFor='password'>
            <FieldInput type='password' placeholder='*******' name='password' />
          </FieldTitle>
        </div>

        <input
          type='submit'
          value='Sing In'
          className='bg-black text-white py-3 px-[3rem] min-h-[calc(4.5rem + 1px * 2)] hover:cursor-pointer hover:opacity-90'
        />
      </form>
    </section>
  )
}
