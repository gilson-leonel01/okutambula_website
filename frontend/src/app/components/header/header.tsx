"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./navbar/navbar";
import { User, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import logo from "../../../../public/logoBlack.svg";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const router = useRouter();

    const handleLoginRedirect = () => {
        setIsMenuOpen(false);
        router.push("/login");
    };

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
                    <Button
                        variant="default"
                        className="flex items-center gap-2"
                        onClick={handleLoginRedirect}
                    >
                        <User className="w-5 h-5" />
                        <span className="uppercase">Entrar</span>
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
                    <nav className="p-4">
                        <ul className="flex flex-col gap-4 text-lg mb-4">
                            {[
                                { label: "Início", href: "/" },
                                { label: "Sobre Nós", href: "/#aboutUs" },
                                { label: "Serviços", href: "/#services" },
                                { label: "Contactos", href: "/#contacts" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block py-2 hover:text-zinc-600"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant="default"
                            className="flex items-center gap-2 w-full justify-center"
                            onClick={handleLoginRedirect}
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
