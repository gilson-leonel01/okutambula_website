import { ContactForm  } from "./contactForm";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function GetInTouch() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="hidden lg:block px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-16 items-start">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <ContactForm />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                    Entre em contacto
                                </h1>
                                <div className="text-gray-600 space-y-4 mb-8">
                                    <p className="text-lg leading-relaxed">
                                        Venda, compre ou alugue a sua casa de forma fácil.
                                        <br />
                                        Okutambula uma ótima plataforma que te possibilita vender, comprar e alugar casa de forma mais fácil e eficaz tudo em uma única plataforma.
                                    </p>

                                    <p className="leading-relaxed">
                                        Com uma interface intuitiva e recursos que facilitam a negociação, ela conecta proprietários, compradores e vendedores de forma rápida e segura, transformando a experiência no mercado imobiliário.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                                        <Linkedin className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                        <Twitter className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                        <Facebook className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center cursor-pointer hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all">
                                        <Instagram className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden px-4 py-8 sm:px-6">
                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="px-6 pt-8 pb-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Entre em contacto
                        </h1>
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                                <Linkedin className="w-6 h-6 text-white" />
                            </div>

                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                <Twitter className="w-6 h-6 text-white" />
                            </div>

                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                <Facebook className="w-6 h-6 text-white" />
                            </div>

                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center cursor-pointer hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all">
                                <Instagram className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}