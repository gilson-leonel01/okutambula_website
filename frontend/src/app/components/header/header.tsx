import Image from "next/image";
import { User } from "lucide-react";
import { Navbar } from "./navbar/navbar";
import logo from "../../../../public/logo.svg";
import { Button } from "@/components/ui/button";

export function Header() {
    return(
        <header className="flex flex-row justify-between m-2 p-6">
            <Image alt="Logo" src={logo} className="w-20 h-20 pl-6 ml-6" />
            <Navbar />
            <div className="mr-6">
                <Button variant="default">
                    <User className="w-5 h-5" />
                    <span className="uppercase">Entrar</span>
                </Button>
            </div>
        </header>
    );
}