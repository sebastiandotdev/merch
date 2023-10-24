
export default function navbar() {
    return (
        <>
            <div className='container flex justify-center items-center w-max'>
                <nav className="flex justify-center gap-5 mx-7 text-black text-xl font-amiko" >
                <a href='/' className="hover:text-blue-500" >Inicio</a>
                <a href='/' className="hover:text-blue-500">Articulos</a>
                <a href='/' className="hover:text-blue-500">Nosotros</a>
                <a href='/' className="hover:text-blue-500">Contactanos</a>
                </nav>
            </div>
        </>
    )
}
