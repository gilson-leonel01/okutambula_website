import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function GetInTouch() {
    return (
        <section className="p-6">
            <form className="grid gap-4">
                <Input placeholder="Nome" />
                <Input placeholder="Email" />
                <Input placeholder="Mensagem" />
                <Button type="submit">Enviar</Button>
            </form>
            <div className="flex gap-4 mt-4">
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
            </div>
        </section>
    );
}