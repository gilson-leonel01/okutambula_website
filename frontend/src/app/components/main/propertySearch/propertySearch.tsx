import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function PropertySearch() {
    return (
        <div className="flex gap-4 p-4">
            <Input placeholder="Pesquisar por localização" />
            <button className="p-2 bg-blue-500 text-white rounded">
                <Search className="w-5 h-5" />
            </button>
        </div>
    );
}