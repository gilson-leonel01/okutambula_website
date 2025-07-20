import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResearchBased() {
    return(
        <section id="services" className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">Baseado nas tuas pesquisas</h3>
                    <p className="text-base text-gray-600">Propriedades que você visualizou recentemente</p>
                </div>
                <Button
                    variant="default"
                    className="text-xl flex items-center gap-2 hover:cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                >
                    <Search className="w-5 h-5" />
                    Procurar mais casas
                </Button>
            </div>
        </section>
    );
}