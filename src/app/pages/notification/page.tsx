import AlertMessage from '@/components/Alerts/AlertMessage';
import NipConfirmationButtons from '@/components/Buttons/ConfirmationButtons';
import ContactVerificationModal from '@/components/Modals/ContactVerificationModal';
import Image from 'next/image';
import { useState } from 'react';
import { Information } from './modules/information';
import { NipData } from '@/app/model/NipData';

interface NotificationBodyProps {
  data: NipData;
}

export default function NotificationBody({ data }: NotificationBodyProps) {
  const [step, setStep] = useState<'interlocutor' | 'nip' | 'done'>('interlocutor');
  const [answered, setAnswered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fluxoStatus, setFluxoStatus] = useState<'success' | 'error'>(data.statusFluxo === 'nao_reconhecido' ? 'error' : 'success');
  const [userData, setUserData] = useState({
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
  });

  const label = step === 'interlocutor'
    ? data.situationData[0]
    : {
        title: 'Reconhece o interlocutor?',
        yesReceptor: 'Sim',
        NoReceptor: 'Não',
        labelSucess: 'Interlocutor',
        labelSucessStatus: 'NÃO RECONHECIDO',
        labelMessage: 'e abertura da NIP',
        labelSucessUser: 'pelo usuário.',
      };

  const handleConfirm = () => {
    setShowModal(false);
    setFluxoStatus('error');
    setAnswered(true);
    setStep('done');
  };

  const handleYes = () => {
    if (data.statusFluxo === 'nao_reconhecido') {
      setShowModal(true);
    } else {
      if (step === 'interlocutor') {
        setAnswered(true);
        setStep('done');
        setFluxoStatus('success');
      } else {
        setShowModal(true);
      }
    }
  };

  const handleNo = () => {
    if (data.statusFluxo === 'nao_reconhecido') {
      setShowModal(true);
    } else {
      if (step === 'interlocutor') {
        setStep('nip');
      } else {
        setShowModal(true);
      }
    }
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-20 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold text-[#002D4B] mb-2">Olá, {data.nome}</h1>
        <p className="mb-6">
          Foi realizada a abertura de uma Notificação de Intermediação Preliminar (NIP) em seu nome.
        </p>

        <h2 className="text-[#002D4B] font-bold mb-2">Dados do notificação</h2>
        <hr className="mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold">Beneficiário</h3>
            <p>{data.nome}</p>
          </div>
          <div>
            <h3 className="font-bold">Interlocutor</h3>
            <p>{data.nome}</p>
          </div>
          <div>
            <h3 className="font-bold">Data de abertura</h3>
            <p>{data.dataAbertura}</p>
          </div>
        </div>

        {!answered && !showModal && (
          <NipConfirmationButtons
            title={label.title}
            yesLabel={label.yesReceptor}
            noLabel={label.NoReceptor}
            onYes={handleYes}
            onNo={handleNo}
          />
        )}

        {answered && (
          <>
            <AlertMessage
              type={fluxoStatus}
              message={
                fluxoStatus === 'error' ? (
                  <>
                    {label.labelSucess} <strong>{label.labelSucessStatus}</strong>{' '}
                    {label.labelMessage}{' '}<strong>{label.labelSucessStatus}</strong> {label.labelSucessUser}
                  </>
                ) : (
                  <>
                    {label.labelSucess} <strong>{label.labelSucessStatus}</strong>{' '}
                    {label.labelMessage && <>{label.labelMessage} </>}
                    {label.labelSucessUser}
                  </>
                )
              }
            />

            <div className="flex items-center gap-2 pt-4">
              <Image src="/icons/check-sucess.svg" alt="Confirmado" width={20} height={20} />
              <p className="font-bold text-[#1D5220]">Obrigado pela resposta!</p>
            </div>
          </>
        )}

        {showModal && (
          <ContactVerificationModal
            nome={userData.nome}
            email={userData.email}
            telefone={userData.telefone}
            onClose={() => setShowModal(false)}
            onChange={(updated) => setUserData(updated)}
            onConfirm={handleConfirm}
          />
        )}
      </div>

      <Information />
    </section>


  );
}
