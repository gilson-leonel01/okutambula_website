import Link from "next/link";

export function Navbar() {
    return(
        <nav className="flex justify-center">
            <ul className="flex flex-row gap-14 text-2xl font-bold">
                <li><Link href="/" className="hover:text-zinc-600">Início</Link></li>
                <li><Link href="/#services" className="hover:text-zinc-600">Serviços</Link></li>
                <li><Link href="/#aboutUs" className="hover:text-zinc-600">Sobre Nós</Link></li>
                <li><Link href="/#contacts" className="hover:text-zinc-600">Contactos</Link></li>
            </ul>
        </nav>
    );
}