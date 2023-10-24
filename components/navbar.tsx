import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className='container flex justify-center items-center w-max'>
                <nav className="flex justify-center gap-5 mx-7 text-black text-xl font-amiko" >
                <Link href='/' className="hover:text-blue-500" >Inicio</Link>
                <Link href='/' className="hover:text-blue-500">Articulos</Link>
                <Link href='/' className="hover:text-blue-500">Nosotros</Link>
                <Link href='/contact-us' className="hover:text-blue-500">Contactanos</Link>
                </nav>
            </div>
        </>
    )
}
