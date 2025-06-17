"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import kilamba from "./kilamba.jpg";

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
        <div className="container mx-auto px-6 py-8">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { id: 1, price: "$245,000" },
                    { id: 2, price: "$245,000" },
                    { id: 3, price: "$245,000" },
                    { id: 4, price: "$245,000" },
                    { id: 5, price: "$245,000" },
                    { id: 6, price: "$245,000" },
                ].map((property) => (
                    <div
                        key={property.id}
                        className="property-card bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                    >
                        <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                            <Image
                                alt="Propriedade"
                                src={kilamba}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-bold mt-2 text-gray-900">Vivenda 2 andares - T5</h3>
                        <p className="text-black">Cazenga, Bairro 14, Rua T102</p>
                        <p className="text-black">4 Quartos | 3 Banheiros | 10x8m²</p>
                        <p className="text-green-600 font-bold mt-2">{property.price}</p>
                        <button className="text-gray-500 mt-2 flex items-center gap-1 hover:text-gray-700">
                            <span>♥</span> Gosto
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
}