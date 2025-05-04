import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#002D4B] text-white text-sm w-full">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 md:px-20 pt-10 pb-10 mx-auto">
        <div className="w-full h-full">
          {/* Topo com logo e ícones - escondidos no mobile */}
          <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#FCFC1B] pb-6 mb-6">
            <Image src="/icons/logo-cassi.svg" alt="CASSI" width={120} height={30} />
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-80">
                <img src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Menu normal no desktop | somente títulos no mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-bold underline mb-2 text-[20px]">Home</h3>
              <div className="hidden md:block" />
            </div>
            <div>
              <h3 className="font-bold underline mb-2 text-[20px] leading-[20px]">Conheça a CASSI</h3>
              <div className="hidden md:block">
                <a href="#" className="block leading-[20px]">Institucional</a>
                <a href="#" className="block leading-[20px]">Informações financeiras</a>
                <a href="#" className="block leading-[20px]">Governança corporativa</a>
                <a href="#" className="block leading-[20px]">Como trabalhamos</a>
                <a href="#" className="block leading-[20px]">Faça parte da nossa equipe</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold underline mb-2 text-[20px] leading-[20px]">Nossos Planos</h3>
              <div className="hidden md:block">
                <a href="#" className="block leading-[20px]">Plano CASSI Essencial</a>
                <a href="#" className="block leading-[20px]">Plano CASSI Família</a>
                <a href="#" className="block leading-[20px]">Plano CASSI Vida</a>
                <a href="#" className="block leading-[20px]">Quero contratar</a>
                <a href="#" className="block leading-[20px]">Plano de Associados</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold underline mb-2 text-[18px] leading-[20px]">Já tenho um plano CASSI</h3>
              <div className="hidden md:block">
                <a href="#" className="block leading-[20px]">Cobertura do meu plano</a>
                <a href="#" className="block leading-[20px]">Cronogramas</a>
                <a href="#" className="block leading-[20px]">Telemedicina</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold underline mb-2 text-[20px] leading-[20px]">CliniCASSI</h3>
              <div className="hidden md:block">
                <a href="#" className="block leading-[20px]">Atenção Primária Saúde</a>
                <a href="#" className="block leading-[20px]">Localize sua CliniCASSI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
