export default function HeaderSubmenu() {
    return (
      <nav className="w-full bg-white h-[80px] shadow-sm border-b border-gray-100 flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-20 flex flex-wrap justify-center gap-8 text-sm text-[#2D2D2D] font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Conheça a CASSI ▾</a>
          <a href="#" className="hover:underline">Nossos planos ▾</a>
          <a href="#" className="hover:underline">Já tenho um plano CASSI ▾</a>
          <a href="#" className="hover:underline">CliniCASSI ▾</a>
          <a href="#" className="hover:underline">Fale com a CASSI</a>
        </div>
      </nav>
    );
  }
  