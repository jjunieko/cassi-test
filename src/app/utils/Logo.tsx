import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/icons/cassi.svg" alt="CASSI" width={100} height={40} />
    </div>
  );
}
                