import { ContactForm  } from "./contactForm";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

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
        
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="px-6 pt-8 pb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Entre em contacto
                    </h1>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Venda, compre ou alugue
                        a sua casa de forma fácil.
                        <br />
                        Okutambula uma ótima plataforma que te possibilita vender, comprar
                        e alugar casa de forma mais fácil e eficaz tudo em uma única plataforma.
                    </p>

                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Com uma interface intuitiva e recursos que facilitam a negociação, ela conecta proprietários, compradores e vendedores de forma rápida e segura, transformando a experiência no mercado imobiliário.
                        <br />
                        <br />
                        +5000 Propriedades disponíveis
                        <br />
                        +1000 Vendedores disponíveis
                        <br />
                        +10000 Compradores disponíveis
                    </p>

                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                            <Facebook className="w-4 h-4 text-white" />
                        </div>

                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center cursor-pointer hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all">
                            <Instagram className="w-4 h-4 text-white" />
                        </div>

                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                            <Linkedin className="w-4 h-4 text-white" />
                        </div>

                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                            <Mail className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>

               <ContactForm />
            </div>
        </div>
    );
}

export function ContactForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return(
        <div className="px-6 pb-8">
            <div className="mb-6">
                <label className="block text-base font-medium text-gray-900 mb-2">
                    Nome
                </label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Insira o seu nome"
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors"
                />
            </div>

            <div className="mb-6">
                <label className="block text-base font-medium text-gray-900 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Insira o seu email"
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors"
                />
            </div>

            <div className="mb-8">
                <label className="block text-base font-medium text-gray-900 mb-2">
                    Mensagem
                </label>
                <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Insira a sua mensagem"
                    className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 resize-none transition-colors"
                />
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-full hover:cursor-pointer uppercase"
            >
                Enviar
            </button>
        </div>
    );
}