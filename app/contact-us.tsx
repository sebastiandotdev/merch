export default function contact() {
    return (
        <>
            <section className='w-full flex  justify-center items-center  '>
                <form action=''>
                    <div className='container w-max border-2 border-black py-8 px-8'>
                        <h1 className='text-3xl mb-5 text-center'>
                            {' '}
                            Información Personal
                        </h1>
                        <div className='flex gap-3 mb-4'>
                            <label htmlFor='name'>Nombre:</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Escribe tu nombre'
                                className=' border-2 border-black rounded px-2'
                                required
                            />
                        </div>
                    
                        <div className='flex gap-3 mb-4'>
                            <label htmlFor='tel'>Teléfono:</label>
                            <input
                                type='tel'
                                name='tel'
                                pattern='[0-9]{9}'
                                placeholder='Dejanos tu numero de telefono'
                                className='border-2 border-black rounded px-2'
                                required
                            />
                        </div>
                        
                        <div className='flex gap-3 mb-4'>
                            <label htmlFor='message'>Mensaje:</label>
                            <textarea
                                name=''
                                id=''
                                placeholder='Dejanos tu mensaje o sugerencia'
                                className='border-2 border-black rounded px-2'
                                cols={22}
                                required
                                defaultValue='Borra este mensaje'
                            ></textarea>
                        </div>
                    
                        <div className="flex justify-center mb-4">
                        <button
                            type='submit'
                            className='rounded border-2 bg-blue-700 text-white p-4 flex mb-3 '
                        >
                            Enviar datos
                        </button>
                        </div>
                        <h3>Dejanos tus datos para comunicarnos contigo!</h3>
                    </div>
                </form>
            </section>
        </>
    )
}
