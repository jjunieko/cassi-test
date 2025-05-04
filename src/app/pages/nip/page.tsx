
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/store/hooks';
import { setUserData, setAnswered, setStep, setShowModal, setFluxoStatus } from '@/redux/nipSlice';
import NotificationBody from '@/components/NotificationBody/NotificationBody';
import { getNipByNumber } from '@/app/services/nipBackendService';

export default function NipPage() {
  const params = useSearchParams();
  const nipNumber = Number(params.get('nip'));

  const nipData = getNipByNumber(nipNumber); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!nipData) return;

    dispatch(setUserData({
      nome: nipData.nome,
      email: nipData.email,
      telefone: nipData.telefone,
    }));

    dispatch(setStep('interlocutor'));
    dispatch(setShowModal(false));
    dispatch(setAnswered(false));
    dispatch(setFluxoStatus(nipData.statusFluxo === 'nao_reconhecido' ? 'error' : 'success'));
  }, [nipData]);

  if (!nipData) {
    return <p className="text-center mt-10">NIP não encontrado.</p>;
  }

  return (
    <main className="px-20 py-10">
      <NotificationBody data={nipData} />
    </main>
  );
}
