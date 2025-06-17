// import { gsap } from 'gsap';
'use client'
import React, { useEffect, useRef } from 'react';
import { Target, Telescope, HandCoins } from 'lucide-react';

export function MissionVisionValues() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    //     useEffect(() => {
    //         gsap.from('.card', { x: -100, opacity: 0, duration: 1, stagger: 0.3 });
    //     }, []);
    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (card) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, []);

    const setCardRef = (el: HTMLDivElement | null, index: number) => {
        cardsRef.current[index] = el;
    };

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div ref={(el) => setCardRef(el, 0)} className="mvv-card bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <Target className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-6">Missão</h3>
                            <p className="leading-relaxed">
                                Conectar pessoas aos seus lares ideais, oferecendo soluções inovadoras e acessíveis para a compra
                                e aluguel de imóveis, com transparência, confiança e compromisso com a satisfação de nossos clientes.
                                Nosso objetivo é tornar a jornada de encontrar um lar fluida e memorável,
                                proporcionando segurança e suporte em cada etapa do processo.
                            </p>
                        </div>
                    </div>

                    <div ref={(el) => setCardRef(el, 1)} className="mvv-card bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <Telescope className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-6">Visão</h3>
                            <p className="leading-relaxed">
                                Ser a plataforma líder no mercado imobiliário, reconhecida por simplificar o processo de encontrar
                                um lar, combinando tecnologia avançada, atendimento excepcional e oportunidades que transformam sonhos
                                em realidade. Buscamos redefinir o padrão do setor,
                                oferecendo uma experiência digital intuitiva e personalizada que conecta pessoas.
                            </p>
                        </div>
                    </div>

                    <div ref={(el) => setCardRef(el, 2)} className="mvv-card bg-gradient-to-br from-green-400 to-green-500 text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <HandCoins className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-6">Valores</h3>
                            <div className="text-left space-y-3">
                                <p>
                                    <strong>Confiança:</strong> Construímos relações baseadas em transparência, honestidade e respeito
                                    com nossos clientes e parceiros.
                                </p>
                                <p>
                                    <strong>Inovação:</strong> Utilizamos tecnologia de ponta para facilitar e agilizar a busca pelo
                                    imóvel perfeito.
                                </p>
                                <p>
                                    <strong>Excelência:</strong> Buscamos a perfeição em cada etapa, com dedicação e profissionalismo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}