"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import kilamba from "./kilamba.jpg";
import sequele from "./sequele.jpg";
import cidadeAlta from "./cidadeAlta.jpg";
import LikeButton from "@/components/ui/likeButton";

export function FeaturedProperties() {
    useEffect(() => {
        gsap.from(".property-card", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
        });
    }, []);

    return (
        <section id="services" className="container mx-auto -mt-12 px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        id: 1,
                        price: "AOA 245,000kz",
                        image: kilamba,
                        title: "Vivenda 2 andares - T3",
                        location: "Kilamba, Bloco T, Prédio T14, Apt. 26",
                        details: "3 Quartos | 2 Banheiros | 1 Cozinha | 110 m²",
                    },
                    {
                        id: 2,
                        price: "AOA 145,000kz",
                        image: sequele,
                        title: "Apartamento Moderno - T2",
                        location: "Sequele, Bloco K, Rua 5, Prédio K25, Apt. 15",
                        details: "2 Quartos | 2 Banheiros | 1 Cozinha | 80 m²",
                    },
                    {
                        id: 3,
                        price: "AOA 545,000kz",
                        image: cidadeAlta,
                        title: "Casa Térrea - T4",
                        location: "Cidade Alta, Rua Principal",
                        details: "4 Quartos | 2 Banheiros | 2 Cozinhas | 130m²",
                    },
                    {
                        id: 4,
                        price: "AOA 524.500,000kz",
                        image: kilamba,
                        title: "Vivenda Luxuosa - T5",
                        location: "Talatona, Condomínio Ymoloanda",
                        details: "5 Quartos | 2 Banheiros | 2 Cozinhas | 160m²",
                    },
                    {
                        id: 5,
                        price: "AOA 224.550,000kz",
                        image: sequele,
                        title: "Duplex - T5",
                        location: "Benfica, Rua F22",
                        details: "5 Quartos | 2 Banheiros | 2 Salas | 160m²",
                    },
                    {
                        id: 6,
                        price: "AOA 145.440,000kz",
                        image: cidadeAlta,
                        title: "Casa Compacta - T3",
                        location: "Maianga, Rua Central",
                        details: "3 Quartos | 1 Banheiro | 110m²",
                    },
                ].map((property) => (
                    <div
                        key={property.id}
                        className="property-card bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                    >
                        <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                            <Image
                                alt="Propriedade"
                                src={property.image}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-bold mt-2 text-gray-900">{property.title}</h3>
                        <p className="text-black">{property.location}</p>
                        <p className="text-black">{property.details}</p>
                        <p className="text-green-600 font-bold mt-2">{property.price}</p>
                        <LikeButton />
                    </div>
                ))}
            </div>
        </section>
    );
}