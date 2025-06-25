// 'use client'
// import { gsap } from 'gsap';
// import { useEffect } from 'react';
//
// export function Hero() {
//     useEffect(() => {
//         gsap.fromTo(
//             '.stat',
//             { innerText: 0 },
//             {
//                 innerText: 10000,
//                 duration: 2,
//                 snap: { innerText: 1 },
//                 onUpdate: function () {
//                     this.targets()[0].innerText = Math.ceil(this.targets()[0].innerText).toLocaleString() + '+';
//                 },
//             }
//         );
//     }, []);
//
//     return (
//         <section id="services" className="flex justify-between items-start gap-8 max-w-7xl mx-auto px-4">
//             <div className="flex-1 pl-8">
//                 <div className="flex flex-col">
//                     <h1 className="text-4xl font-bold leading-tight">
//                         Venda, compre ou alugue
//                         <br />
//                         a sua casa de forma fácil.
//                     </h1>
//                     <p className="mt-4 text-base">
//                         Okutambula uma ótima plataforma que te possibilita vender, comprar
//                         <br />
//                         e alugar casa de forma mais fácil e eficaz tudo em uma única plataforma.
//                     </p>
//                     <p className="mt-4 text-base">
//                         Com uma interface intuitiva e recursos que facilitam a negociação, ela conecta proprietários,
//                         compradores e vendedores de forma rápida e segura, transformando a experiência no mercado imobiliário.
//                     </p>
//                 </div>
//
//                 <div className="flex gap-4 -ml-6 mt-4">
//                     <div className="flex items-center">
//                         <hr className="rotate-90 w-12 bg-black" />
//                         <div className="text-start">
//                             <p className="text-xl font-bold stat">0</p>
//                             <p>Propriedades disponíveis</p>
//                         </div>
//                     </div>
//
//                     <div className="flex items-center">
//                         <hr className="rotate-90 w-12 bg-black" />
//                         <div className="text-start">
//                             <p className="text-xl font-bold stat">0</p>
//                             <p>Vendedores disponíveis</p>
//                         </div>
//                     </div>
//
//                     <div className="flex items-center">
//                         <hr className="rotate-90 w-12 bg-black" />
//                         <div className="text-start">
//                             <p className="text-xl font-bold stat">0</p>
//                             <p>Compradores disponíveis</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="flex-shrink-0">
//                 <div className="bg-gray-400 p-6 rounded-3xl w-[540px] h-[280px] relative overflow-hidden">
//                     <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl w-40 h-32 shadow-lg">
//                         <div className="flex items-start gap-2">
//                             <div className="min-w-0 flex-1">
//                                 <h4 className="font-bold text-xl text-black mb-1">
//                                     Facilidade
//                                 </h4>
//                                 <p className="text-sm text-gray-600 leading-tight">
//                                     Realize transações imobiliárias de forma simples, sem complicações.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-2xl w-40 h-32 shadow-lg">
//                         <div className="flex items-start gap-2">
//                             <div className="min-w-0 flex-1">
//                                 <h4 className="font-bold text-xl text-black mb-1">
//                                     Eficiência
//                                 </h4>
//                                 <p className="text-sm text-gray-600 leading-tight">
//                                     Negocie com rapidez e segurança, com processos simplificados.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="absolute top-4 right-4 bg-white p-3 rounded-2xl w-40 h-32 shadow-lg">
//                         <div className="flex items-start gap-2">
//                             <div className="min-w-0 flex-1">
//                                 <h4 className="font-bold text-xl text-black mb-1">
//                                     Dinamismo
//                                 </h4>
//                                 <p className="text-sm text-gray-600 leading-tight">
//                                     Acesso a uma vasta oferta de imóveis atualizados constantemente.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client'
import { gsap } from 'gsap';
import { useEffect } from 'react';

export function Hero() {
    useEffect(() => {
        gsap.fromTo(
            '.stat',
            { innerText: 0 },
            {
                innerText: 10000,
                duration: 2,
                snap: { innerText: 1 },
                onUpdate: function () {
                    this.targets()[0].innerText = Math.ceil(this.targets()[0].innerText).toLocaleString() + '+';
                },
            }
        );
    }, []);

    return (
        <section id="services" className="w-full px-4 py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
                    <div className="flex-1 lg:pl-8">
                        <div className="flex flex-col">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                Venda, compre ou alugue
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                a sua casa de forma fácil.
                            </h1>

                            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                                Okutambula uma ótima plataforma que te possibilita vender, comprar
                                <br className="hidden lg:block" />
                                <span className="lg:hidden"> </span>
                                e alugar casa de forma mais fácil e eficaz tudo em uma única plataforma.
                            </p>

                            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                                Com uma interface intuitiva e recursos que facilitam a negociação, ela conecta proprietários,
                                compradores e vendedores de forma rápida e segura, transformando a experiência no mercado imobiliário.
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-4">
                            <div className="flex flex-col gap-4 sm:hidden">
                                <div className="flex items-center gap-3">
                                    <hr className="w-8 h-0.5 bg-black" />
                                    <div className="text-start">
                                        <p className="text-lg font-bold stat">0</p>
                                        <p className="text-sm text-gray-600">Propriedades disponíveis</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <hr className="w-8 h-0.5 bg-black" />
                                    <div className="text-start">
                                        <p className="text-lg font-bold stat">0</p>
                                        <p className="text-sm text-gray-600">Vendedores disponíveis</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <hr className="w-8 h-0.5 bg-black" />
                                    <div className="text-start">
                                        <p className="text-lg font-bold stat">0</p>
                                        <p className="text-sm text-gray-600">Compradores disponíveis</p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:flex gap-4 lg:gap-6 lg:-ml-6">
                                <div className="flex items-center">
                                    <hr className="rotate-90 w-12 bg-black" />
                                    <div className="text-start">
                                        <p className="text-xl font-bold stat">0</p>
                                        <p className="text-sm lg:text-base">Propriedades disponíveis</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <hr className="rotate-90 w-12 bg-black" />
                                    <div className="text-start">
                                        <p className="text-xl font-bold stat">0</p>
                                        <p className="text-sm lg:text-base">Vendedores disponíveis</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <hr className="rotate-90 w-12 bg-black" />
                                    <div className="text-start">
                                        <p className="text-xl font-bold stat">0</p>
                                        <p className="text-sm lg:text-base">Compradores disponíveis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:flex-shrink-0 lg:w-auto">
                        <div className="bg-gray-400 p-4 sm:p-6 rounded-2xl sm:rounded-3xl
                                      w-full h-64 sm:h-72 lg:w-[540px] lg:h-[280px]
                                      relative overflow-hidden">

                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4
                                          bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl
                                          w-32 h-24 sm:w-40 sm:h-32 shadow-lg">
                                <div className="flex items-start gap-2">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-base sm:text-xl text-black mb-1">
                                            Facilidade
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                                            Realize transações imobiliárias de forma simples, sem complicações.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-12 left-1/2 transform -translate-x-1/2
                                          sm:top-16 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl
                                          w-32 h-24 sm:w-40 sm:h-32 shadow-lg">
                                <div className="flex items-start gap-2">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-base sm:text-xl text-black mb-1">
                                            Eficiência
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                                            Negocie com rapidez e segurança, com processos simplificados.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4
                                          bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl
                                          w-32 h-24 sm:w-40 sm:h-32 shadow-lg">
                                <div className="flex items-start gap-2">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-base sm:text-xl text-black mb-1">
                                            Dinamismo
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                                            Acesso a uma vasta oferta de imóveis atualizados constantemente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}