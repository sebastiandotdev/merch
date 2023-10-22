export default function HomePage() {
    return (
        <>
        <section className="h-[50vh] lg:h-screen bg-hero-pattern bg-cover bg-no-repeat relative flex items-start lg:items-center justify-start">
        <div className="bg-gray-400 opacity-30 lg:h-full w-full absolute"></div>
        <article className="p-6 z-50 w-max">
        <h2 className="font-amiko text-5xl py-8 whitespace-pre-wrap font-semibold">Browse our latest products</h2>
        <a href="#" className="border-2 lg:border-zinc-800 lg:hover:border-zinc-950 py-2 px-6 hover:cursor-pointer hover:transition-colors text-lg border-zinc-950">Shop all</a>
        </article>
        </section>
        <section className='w-11/12 max-w-5xl mx-auto mt-28'>
            <h2>merch</h2>
        </section>
        </>
    )
}
