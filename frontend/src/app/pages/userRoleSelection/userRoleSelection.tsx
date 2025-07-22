import React, { useState } from 'react';
import { User, Building, Users, LucideIcon } from 'lucide-react';

interface Role {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

export default function UserRoleSelection() {
    const [selectedRole, setSelectedRole] = useState<string>('');

    const roles: Role[] = [
        {
            id: 'comprador',
            title: 'COMPRADOR',
            description: 'Procura adquirir um imóvel, como apartamento ou vivenda, buscando conforto, localização estratégica e preço justo',
            icon: User,
            color: 'text-blue-500'
        },
        {
            id: 'vendedor',
            title: 'VENDEDOR',
            description: 'Oferece imóveis, como casas ou apartamentos, destacando características como localização, acabamento e potencial de valorização',
            icon: Building,
            color: 'text-blue-500'
        },
        {
            id: 'intermediario',
            title: 'INTERMEDIÁRIO',
            description: 'Como uma imobiliária ou corretor, que conecta compradores e vendedores no mercado de imóveis, facilitando transações',
            icon: Users,
            color: 'text-blue-500'
        }
    ];

    const handleRoleSelect = (roleId: string) => {
        setSelectedRole(roleId);
    };

    const handleNext = () => {
        if(selectedRole) {
            console.log(`Selected role: ${selectedRole}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-6xl w-full">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            DEFINA SEU PAPEL
                        </h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Escolha a função que melhor se adequa ao seu objetivo e dê o primeiro passo na sua jornada pelo mercado imobiliário.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {roles.map((role: Role) => {
                            const IconComponent = role.icon;
                            const isSelected = selectedRole === role.id;

                            return (
                                <div
                                    key={role.id}
                                    onClick={() => handleRoleSelect(role.id)}
                                    className={`
                    relative bg-white rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl
                    ${isSelected ? 'ring-2 ring-blue-500 transform scale-105' : ''}
                  `}
                                >
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <IconComponent className={`w-10 h-10 ${role.color}`} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                                        {role.title}
                                    </h3>

                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {role.description}
                                    </p>

                                    {isSelected && (
                                        <div className="absolute top-4 right-4">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleNext}
                            disabled={!selectedRole}
                            className={`
                px-12 py-3 rounded-lg font-semibold text-lg transition-all duration-300
                ${selectedRole
                                ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }
              `}
                        >
                            Próximo
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