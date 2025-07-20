import Image from "next/image";
import React, { useState } from 'react';
import {
    Search,
    Home,
    Calendar,
    Users,
    Heart,
    ShoppingCart,
    Settings,
    HelpCircle,
    LogOut,
    Bell,
    Building,
    MapPin,
    Filter,
    ArrowUpDown,
    Map,
    Bed,
    Bath,
    Square,
    Eye,
    Share2
} from 'lucide-react';

interface Property {
    id: number;
    title: string;
    address: string;
    price: string;
    image: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
    agent: {
        name: string;
        avatar: string;
    };
    date: string;
    status: string;
}

export default function OverviewDashboard() {
    const [activeCategory, setActiveCategory] = useState('Todas categorias');
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState<number[]>([]);

    const properties: Property[] = [
        {
            id: 1,
            title: 'House modern',
            address: '194 Mercer Street, 627 Broadway',
            price: '1.000kz',
            image: '/api/placeholder/400/300',
            bedrooms: 2,
            bathrooms: 2,
            area: 2,
            type: 'modern',
            agent: {
                name: 'Yuran Simão',
                avatar: '/api/placeholder/40/40'
            },
            date: '30 de agosto de 2024',
            status: 'FOR SALE'
        },
        {
            id: 2,
            title: 'House classica',
            address: '194 Mercer Street, 627 Broadway',
            price: '2.000kz',
            image: '/api/placeholder/400/300',
            bedrooms: 2,
            bathrooms: 2,
            area: 2,
            type: 'classica',
            agent: {
                name: 'Yuran Simão',
                avatar: '/api/placeholder/40/40'
            },
            date: '30 de agosto de 2024',
            status: 'FOR SALE'
        },
        {
            id: 3,
            title: 'House minimalist',
            address: '194 Mercer Street, 627 Broadway',
            price: '3.000kz',
            image: '/api/placeholder/400/300',
            bedrooms: 2,
            bathrooms: 2,
            area: 2,
            type: 'minimalist',
            agent: {
                name: 'Yuran Simão',
                avatar: '/api/placeholder/40/40'
            },
            date: '30 de agosto de 2024',
            status: 'FOR SALE'
        }
    ];

    const toggleFavorite = (id: number) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(fav => fav !== id)
                : [...prev, id]
        );
    };

    const categories = ['Todas categorias', 'Classica', 'Moderno'];

    function getInitialLetters(fullName: string): string {
        const slicesOfName = fullName.trim().split(/\s+/);

        if (slicesOfName.length === 0) return '';

        const firstLetter = slicesOfName[0][0].toUpperCase();

        const lastLetter = slicesOfName.length > 1
            ? slicesOfName[slicesOfName.length - 1][0].toUpperCase()
            : '';

        return firstLetter + lastLetter;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="w-64 bg-white shadow-sm border-r border-gray-200">
                <div className="p-6">
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Building className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-800">RealEstate</span>
                    </div>

                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <nav className="space-y-2">
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Home className="w-5 h-5" />
                            <span>Propriedades</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 bg-blue-50 text-blue-600 rounded-lg cursor-pointer">
                            <Calendar className="w-5 h-5" />
                            <span>Agendamentos</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Users className="w-5 h-5" />
                            <span>Intermediários</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Users className="w-5 h-5" />
                            <span>Meus intermediários</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Heart className="w-5 h-5" />
                            <span>Favoritos</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <ShoppingCart className="w-5 h-5" />
                            <span>Minhas compras</span>
                        </div>
                    </nav>

                    <div className="mt-auto pt-8 space-y-2">
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Settings className="w-5 h-5" />
                            <span>Configurações</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <HelpCircle className="w-5 h-5" />
                            <span>Ajuda</span>
                        </div>
                        <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <LogOut className="w-5 h-5" />
                            <span>Sair</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                        {properties.map((property) => (
                            <div key={property.id} className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {getInitialLetters(property.agent.name)}
                            </div>
                        ))}
                        <div>
                            <p className="text-sm font-medium text-gray-800">Gilson Leonel</p>
                            <p className="text-xs text-gray-500">gilsonleonel@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <Bell className="w-6 h-6 text-gray-600" />
                        <Building className="w-6 h-6 text-gray-600" />
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <Image src="#" alt="Profile" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview</h1>
                    <p className="text-gray-600">Visão geral e encontre um imóvel confortável para sua vida</p>
                </div>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">Luanda</span>
                        </div>

                        <div className="flex bg-white border border-gray-200 rounded-lg p-1">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-md transition-colors ${
                                        activeCategory === category
                                            ? 'bg-blue-500 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <Filter className="w-5 h-5" />
                            <span>Filtro</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <ArrowUpDown className="w-5 h-5" />
                            <span>Ordenar por</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Map className="w-5 h-5" />
                            <span>Map view</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <div key={property.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                                    {property.status}
                                </div>
                                <div className="absolute top-3 right-3 flex space-x-2">
                                    <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => toggleFavorite(property.id)}
                                        className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100"
                                    >
                                        <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                    </button>
                                    <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{property.address}</p>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Bed className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{property.bedrooms}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Bath className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{property.bathrooms}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Square className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{property.area}</span>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-gray-900">{property.price}</span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src={property.agent.avatar}
                                            alt={property.agent.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
                                            <p className="text-xs text-gray-500">Data: {property.date}</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                        + Vivenda
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};