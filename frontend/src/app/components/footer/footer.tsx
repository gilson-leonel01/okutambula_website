'use client'
import Image from "next/image";
import { Mail, Phone } from 'lucide-react';
import logo from "../../../../public/logo.svg";
import React, { useEffect, useRef } from 'react';

export const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        if(footerRef.current) {
            footerRef.current.style.opacity = '0';
            footerRef.current.style.transform = 'translateY(20px)';

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting) {
                            const element = entry.target as HTMLElement;
                            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(footerRef.current);

            return () => observer.disconnect();
        }
    }, []);

    const footerData = {
        logo: <Image alt="Logo" src={logo} />,
        columns: [
            {
                title: "Lorem",
                links: [
                    "Ipsum",
                    "Ipsum & Lorem",
                    "Ipsum & Lestrat",
                    "Ipsum Tiesm"
                ]
            },
            {
                title: "Ipsum",
                links: [
                    "Ipsum",
                    "Ipsum & Lorem",
                    "Ipsum & Lestrat",
                    "Ipsum Tiesm"
                ]
            },
            {
                title: "Lestrart",
                links: [
                    "Ipsum",
                    "Ipsum & Lorem",
                    "Ipsum & Lestrat",
                    "Ipsum Tiesm"
                ]
            }
        ],
        contact: {
            title: "Contactos",
            email: "geral@contacto.gmail.com",
            phone: "923456789 / 912345678"
        }
    };

    return (
        <footer
            ref={footerRef}
            className="bg-slate-800 text-white py-16 px-6 md:px-12 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <div className="w-20 h-20  flex items-center justify-center text-slate-800 font-bold text-sm">
                            <Image alt="Logo" src={logo} />
                        </div>
                    </div>

                    {footerData.columns.map((column, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">
                            {footerData.contact.title}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-gray-300">
                                <Mail size={16} className="text-gray-400" />
                                <a
                                    href={`mailto:${footerData.contact.email}`}
                                    className="hover:text-white transition-colors duration-200 text-sm"
                                >
                                    {footerData.contact.email}
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <Phone size={16} className="text-gray-400" />
                                <span className="text-sm">{footerData.contact.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-600 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-400 text-sm">
                        <p>Direitos autorais &copy; <strong className="text-blue-600">Okutambula</strong>, <span>{currentYear}</span> Todos os direitos reservados. &reg;</p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            target="_blank"
                            href="https://www.termsfeed.com/live/57096b4f-b6e3-4f1e-87d8-997672bf2f58"
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                            Termos &amp; Condições
                        </a>
                        <a
                            target="_blank"
                            href="https://www.termsfeed.com/live/a8b38105-40fd-4321-aa64-cc034cf77d11"
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                            Política de Privacidade
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};