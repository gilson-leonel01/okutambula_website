export function Separator() {
    return(
        <section
            className="relative p-8 mt-12 h-64 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-4">
                    Encontre a sua casa dos sonhos
                </h2>
                <p className="text-lg text-center max-w-2xl">
                    Descubra as melhores oportunidades imobiliárias em Angola
                </p>
            </div>
        </section>
    );
}