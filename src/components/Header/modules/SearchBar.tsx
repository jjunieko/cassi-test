import { Input } from "@/components/ui/input";
import Image from 'next/image';


export function SearchBar() {
    return (
      <div className="hidden md:flex w-[186px] h-[50px] items-center gap-2 border-[2px] border-dotted border-gray-800 rounded px-2 py-2">
        <Image
          src="/icons/search.svg"
          alt="Buscar"
          width={16}
          height={16}
        />
        <Input
          type="text"
          placeholder="Faça sua busca aqui"
          className="border-none p-0 h-full text-sm placeholder-gray-500 focus:ring-0"
        />
      </div>
    );
  }