'use client';


import { useSearchParams } from 'next/navigation';
import NotificationBody from '../notification/page';
import { getNipErrorMock, getNipInitialMock } from '../../services/nip.service';

export default function NipPage() {
  const params = useSearchParams();
  const tipo = params.get('tipo');

  const nipData = tipo === 'erro' ? getNipErrorMock() : getNipInitialMock();

  return (
    <main className="px-20 py-10">
      <NotificationBody data={nipData} />
    </main>
  );
}