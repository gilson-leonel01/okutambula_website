import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function DataFinalizationForm() {
    const [formData, setFormData] = useState({
        telefone: '',
        bi: '',
        morada: '',
        cidade: '',
        nascimento: '',
        profissao: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving data:', formData);
    };

    const handleFinalize = () => {
        console.log('Finalizing registration:', formData);
    };

    const isFormValid = () => {
        return formData.telefone && formData.bi && formData.morada &&
            formData.cidade && formData.nascimento;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-4xl w-full">
                    <div className="mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            FINALIZAÇÃO DOS DADOS
                        </h1>
                        <div className="w-24 h-1 bg-blue-500 mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                            Escolha a função que melhor se adequa ao seu objetivo e dê o primeiro passo na sua jornada pelo mercado imobiliário.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Numero de telefone"
                                    value={formData.telefone}
                                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Numero de B.I"
                                    value={formData.bi}
                                    onChange={(e) => handleInputChange('bi', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Sua morada"
                                    value={formData.morada}
                                    onChange={(e) => handleInputChange('morada', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Cidade"
                                    value={formData.cidade}
                                    onChange={(e) => handleInputChange('cidade', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                                />
                            </div>

                            <div>
                                <input
                                    type="date"
                                    placeholder="Sua data de nascimento"
                                    value={formData.nascimento}
                                    onChange={(e) => handleInputChange('nascimento', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Profissão (opcional)"
                                    value={formData.profissao}
                                    onChange={(e) => handleInputChange('profissao', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-8">
                            <button
                                onClick={handleSave}
                                className="flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                            >
                                <Save className="w-4 h-4" />
                                Salvar
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleFinalize}
                            disabled={!isFormValid()}
                            className={`
                px-12 py-3 rounded-lg font-semibold text-lg transition-all duration-300
                ${isFormValid()
                                ? 'bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300'
                            }
              `}
                        >
                            Finalizar
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative">
                <svg
                    className="w-full h-16 text-blue-500"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        fill="currentColor"
                    />
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        fill="currentColor"
                    />
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </div>
    );
}