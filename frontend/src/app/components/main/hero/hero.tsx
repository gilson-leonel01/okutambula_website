'use client'
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { CircleCheck } from "lucide-react";

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
        <section className="flex justify-between items-start gap-8 max-w-7xl mx-auto px-4">
            <div className="flex-1 pl-8">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold leading-tight">
                        Venda, compre ou alugue
                        <br />
                        a sua casa de forma fácil.
                    </h1>
                    <p className="mt-4 text-base">
                        Okutambula uma ótima plataforma que te possibilita vender, comprar
                        <br />
                        e alugar casa de forma mais fácil e eficaz tudo em uma única plataforma.
                    </p>
                    <p className="mt-4 text-base">
                        Com uma interface intuitiva e recursos que facilitam a negociação, ela conecta proprietários,
                        compradores e vendedores de forma rápida e segura, transformando a experiência no mercado imobiliário.
                    </p>
                </div>

                <div className="flex gap-4 -ml-6 mt-4">
                    <div className="flex items-center">
                        <hr className="rotate-90 w-12 bg-black" />
                        <div className="text-start">
                            <p className="text-xl font-bold stat">0</p>
                            <p>Propriedades disponíveis</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <hr className="rotate-90 w-12 bg-black" />
                        <div className="text-start">
                            <p className="text-xl font-bold stat">0</p>
                            <p>Vendedores disponíveis</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <hr className="rotate-90 w-12 bg-black" />
                        <div className="text-start">
                            <p className="text-xl font-bold stat">0</p>
                            <p>Compradores disponíveis</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0">
                <div className="bg-gray-400 p-6 rounded-3xl w-[540px] h-[280px] relative overflow-hidden">
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl w-40 h-32 shadow-lg">
                        <div className="flex items-start gap-2">
                            <div className="min-w-0 flex-1">
                                <h4 className="font-bold text-xl text-black mb-1">
                                    Facilidade
                                </h4>
                                <p className="text-sm text-gray-600 leading-tight">
                                    Realize transações imobiliárias de forma simples, sem complicações.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-2xl w-40 h-32 shadow-lg">
                        <div className="flex items-start gap-2">
                            <div className="min-w-0 flex-1">
                                <h4 className="font-bold text-xl text-black mb-1">
                                    Eficiência
                                </h4>
                                <p className="text-sm text-gray-600 leading-tight">
                                    Negocie com rapidez e segurança, com processos simplificados.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white p-3 rounded-2xl w-40 h-32 shadow-lg">
                        <div className="flex items-start gap-2">
                            <div className="min-w-0 flex-1">
                                <h4 className="font-bold text-xl text-black mb-1">
                                    Dinamismo
                                </h4>
                                <p className="text-sm text-gray-600 leading-tight">
                                    Acesso a uma vasta oferta de imóveis atualizados constantemente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}