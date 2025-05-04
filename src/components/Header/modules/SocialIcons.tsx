import Image from 'next/image';

export function SocialIcons() {
  return (
    <div className="hidden md:flex flex-wrap md:flex-nowrap items-center gap-1 sm:gap-2 md:gap-4">
      <p className="text-xs sm:text-sm whitespace-nowrap">
        Siga a CASSI nas redes sociais:
      </p>
      <Image src="/icons/facebook-blue.svg" alt="Facebook" width={20} height={20} />
      <Image src="/icons/linkedin-blue.svg" alt="LinkedIn" width={20} height={20} />
      <Image src="/icons/insta-blue.svg" alt="Instagram" width={20} height={20} />
    </div>
  );
}
