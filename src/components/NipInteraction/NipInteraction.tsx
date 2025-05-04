'use client';

import { NipData } from "@/app/model/NipData";
import {
  setAnswered,
  setFluxoStatus,
  setShowModal,
  setStep,
  setUserData,
} from "@/redux/nipSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import ContactVerificationModal from "../Modals/ContactVerificationModal";
import AlertMessage from "../Alerts/AlertMessage";
import NipConfirmationButtons from "../Buttons/ConfirmationButtons";
import Image from "next/image";

export default function NipInteraction({ data }: { data: NipData }) {
  const dispatch = useAppDispatch();
  const { step, answered, showModal, fluxoStatus, userData } = useAppSelector(
    (state) => state.nip
  );

  const label =
    step === "interlocutor"
      ? data.situationData[0]
      : {
        title: "Reconhece o interlocutor?",
        yesReceptor: "Sim",
        NoReceptor: "Não",
        labelSucess: "Interlocutor",
        labelSucessStatus: "NÃO RECONHECIDO",
        labelMessage: "e abertura da NIP",
        labelSucessUser: "pelo usuário.",
      };

  const handleConfirm = () => {
    dispatch(setShowModal(false));
    dispatch(setFluxoStatus("error"));
    dispatch(setAnswered(true));
    dispatch(setStep("done"));
  };

  const handleYes = () => {
    if (data.statusFluxo === "nao_reconhecido") {
      dispatch(setShowModal(true));
    } else {
      if (step === "interlocutor") {
        dispatch(setAnswered(true));
        dispatch(setStep("done"));
        dispatch(setFluxoStatus("success"));
      } else {
        dispatch(setShowModal(true));
      }
    }
  };

  const handleNo = () => {
    if (data.statusFluxo === "nao_reconhecido") {
      dispatch(setShowModal(true));
    } else {
      if (step === "interlocutor") {
        dispatch(setStep("nip"));
      } else {
        dispatch(setShowModal(true));
      }
    }
  };

  return (
    <>
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
              fluxoStatus === "error" ? (
                <>
                  {label.labelSucess} <strong>{label.labelSucessStatus}</strong>{" "}
                  {label.labelMessage}{" "}
                  <strong>{label.labelSucessStatus}</strong>{" "}
                  {label.labelSucessUser}
                </>
              ) : (
                <>
                  {label.labelSucess} <strong>{label.labelSucessStatus}</strong>{" "}
                  {label.labelMessage && <>{label.labelMessage} </>}
                  {label.labelSucessUser}
                </>
              )
            }
          />

          <div className="flex items-center gap-2 pt-4">
            <Image
              src="/icons/check-sucess.svg"
              alt="Confirmado"
              width={20}
              height={20}
            />
            <p className="font-bold text-[#1D5220]">Obrigado pela resposta!</p>
          </div>
        </>
      )}

      {showModal && (
        <ContactVerificationModal
          nome={userData.nome}
          email={userData.email}
          telefone={userData.telefone}
          onClose={() => dispatch(setShowModal(false))}
          onChange={(updated) => dispatch(setUserData(updated))}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
