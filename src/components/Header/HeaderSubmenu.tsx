'use client';

import { useState } from 'react';

export default function HeaderSubmenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 flex items-center">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 md:px-20 py-4">
        {/* Desktop menu */}
        <div className="hidden md:flex flex-wrap justify-center gap-8 text-sm text-[#2D2D2D] font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Conheça a CASSI ▾</a>
          <a href="#" className="hover:underline">Nossos planos ▾</a>
          <a href="#" className="hover:underline">Já tenho um plano CASSI ▾</a>
          <a href="#" className="hover:underline">CliniCASSI ▾</a>
          <a href="#" className="hover:underline">Fale com a CASSI</a>
        </div>

        {/* Mobile menu */}
        <div data-testid="mobile-menu" className="md:hidden flex flex-col items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm font-medium text-[#2D2D2D] flex items-center gap-1"
          >
            Menu ▾
          </button>

          {open && (
            <div className="mt-2 flex flex-col gap-2 text-sm text-[#2D2D2D] font-medium">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Conheça a CASSI ▾</a>
              <a href="#" className="hover:underline">Nossos planos ▾</a>
              <a href="#" className="hover:underline">Já tenho um plano CASSI ▾</a>
              <a href="#" className="hover:underline">CliniCASSI ▾</a>
              <a href="#" className="hover:underline">Fale com a CASSI</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
