'use client';

import { useSearchParams } from 'next/navigation';
import { simulateEmailContent } from "@/app/services/email.service";

export default function EmailPreviewPage() {
  const params = useSearchParams();
  const nip = Number(params.get('nip'));

  const tipo = nip === 999999 ? 'erro' : 'inicial';

  const email = simulateEmailContent(tipo);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white max-w-[800px] mx-auto rounded shadow p-6">
        <h1 className="text-xl font-bold mb-4">Pré-visualização do E-mail</h1>
        <div dangerouslySetInnerHTML={{ __html: email.html }} />
      </div>
    </main>
  );
}

