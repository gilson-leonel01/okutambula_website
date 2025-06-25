"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./navbar/navbar";
import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../../public/./logoBlack.svg";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative ml-14 pr-6 mb-6">
            <div className="flex flex-row justify-between items-center px-6 py-4">
                <Image alt="Logo" src={logo} className="w-16 h-16" />

                <div className="hidden md:flex">
                    <Navbar />
                </div>

                <Button
                    variant="ghost"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </Button>

                <div className="hidden md:flex items-center">
                    <Button variant="default" className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <span className="uppercase">Entrar</span>
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
                    <nav className="p-4">
                        <ul className="flex flex-col gap-4 text-lg mb-4">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 hover:text-zinc-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Início
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#aboutUs"
                                    className="block py-2 hover:text-zinc-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sobre Nós
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#services"
                                    className="block py-2 hover:text-zinc-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Serviços
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#contacts"
                                    className="block py-2 hover:text-zinc-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contactos
                                </Link>
                            </li>
                        </ul>

                        <Button
                            variant="default"
                            className="flex items-center gap-2 w-full justify-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <User className="w-5 h-5" />
                            <span className="uppercase">Entrar</span>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}