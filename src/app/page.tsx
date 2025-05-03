'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <h1 className="text-2xl font-bold text-[#002D4B]">Escolha um fluxo de simulação</h1>

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/pages/nip?tipo=inicial')}
          className="px-6 py-3 bg-[#002D4B] text-white rounded hover:opacity-90"
        >
          Fluxo Inicial (Reconhecimento Completo)
        </button>

        <button
          onClick={() => router.push('/pages/nip?tipo=erro')}
          className="px-6 py-3 bg-red-600 text-white rounded hover:opacity-90"
        >
          Fluxo com Erro (Não Reconhecido)
        </button>
      </div>
    </main>
  );
}
