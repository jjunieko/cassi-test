import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function UserAccess() {
  return (
    <div className="hidden md:flex items-center justify-end gap-4">
      <div className="flex items-center gap-2">
        <Image src="/img/medicon.png" alt="Anexo" width={20} height={20} />
        <span className="text-xs sm:text-sm">Lorem Ipsum</span>
      </div>
      <Button className="bg-[#002D4B] text-white hover:bg-[#002D4B] rounded px-4 py-2 text-xs sm:text-sm">
        Fazer login
      </Button>
    </div>
  );
}
