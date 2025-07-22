import { useState } from "react";

interface FormData {
    nome: string;
    email: string;
    mensagem: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (): void => {
        console.log('Form submitted:', formData);
    };

    return (
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-full hover:cursor-pointer uppercase transition-colors"
            >
                Enviar
            </button>
        </div>
    );
}