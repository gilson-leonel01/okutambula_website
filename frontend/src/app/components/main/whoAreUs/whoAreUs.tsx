import team from "./team.png";
import Image from "next/image";

export function WhoAreUs() {
    return (
        <section className="relative py-16 px-6 bg-gray-50">
            <div className="absolute inset-0 z-0">
                <Image
                    fill
                    priority
                    src={team}
                    alt="Team background image"
                    className="object-cover opacity-25"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                    <h2 className="font-bold text-3xl uppercase text-gray-800 mb-8 text-center">
                        Quem Somos?
                    </h2>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                            A <strong className="text-blue-600">Okutambula</strong> é uma plataforma inovadora dedicada a facilitar o processo de venda, compra e aluguel de imóveis.
                            Nosso objetivo é conectar pessoas que desejam encontrar a casa dos seus sonhos com proprietários e agentes imobiliários de forma simples, rápida e segura.
                        </p>

                        <p>
                            Com uma interface intuitiva e ferramentas eficientes, oferecemos uma experiência prática para que você possa anunciar,
                            buscar e negociar imóveis sem complicações. Valorizamos a transparência, a confiança e o atendimento personalizado,
                            tornando o mercado imobiliário mais acessível para todos.
                        </p>

                        <p>
                            Na <strong className="text-blue-600">Okutambula</strong>, você encontra o lar ideal para a sua família ou o melhor investimento para o seu futuro.
                            Estamos aqui para ajudar em cada etapa do caminho! Nossa plataforma oferece uma experiência personalizada,
                            com suporte dedicado e ferramentas inteligentes que facilitam a busca, negociação e fechamento de negócios imobiliários.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h3 className="font-semibold text-xl text-gray-800 mb-6 text-center">
                            Nossos Diferenciais
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-4 bg-red-100 rounded-xl">
                                <div className="w-4 h-4 bg-red-500 rounded-full mb-4"></div>
                                <p className="text-gray-700">
                                    Acreditamos que comprar, vender ou alugar um imóvel deve ser um processo simples, transparente e seguro.
                                    Por isso, reunimos as melhores opções do mercado, com informações detalhadas e atualizadas.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-4 bg-yellow-100 rounded-xl">
                                <div className="w-4 h-4 bg-yellow-500 rounded-full mb-4"></div>
                                <p className="text-gray-700">
                                    Valorizamos a comunidade e o desenvolvimento local, conectando pessoas e promovendo oportunidades
                                    que transformam vidas. Seja para morar, investir ou expandir seus negócios.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-4 bg-green-100 rounded-xl">
                                <div className="w-4 h-4 bg-green-500 rounded-full mb-4"></div>
                                <p className="text-gray-700">
                                    Junte-se a nós e descubra como é fácil realizar seus sonhos imobiliários com confiança e tranquilidade!
                                    Nossa equipe especializada está sempre disponível para orientar você em cada decisão.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}