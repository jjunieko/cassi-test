import Image from 'next/image';

export function SocialIcons() {
    return (
      <div className="hidden md:flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4">
        <p className="text-sm whitespace-nowrap">Siga a CASSI nas redes sociais:</p>
        <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
      </div>
    );
  }