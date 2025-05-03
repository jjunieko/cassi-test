import { NipData } from "@/app/model/NipData";

export function getNipInitialMock(): NipData {
    return {
      nome: 'Leandro Henrique',
      nip: 123456,
      dataAbertura: '29-01-2022',
      email: 'leandro.henrique@gmail.com',
      telefone: '(61) 9 9999-9999',
      interlocutor: true,
      statusFluxo: 'reconhecimento_completo',
      situationData: [{
        title: 'Reconhece esta NIP?',
        NoReceptor: 'Não reconheço',
        yesReceptor: 'Sim, foi aberto por mim',
        labelSucess: 'Abertura da NIP',
        labelSucessStatus: 'RECONHECIDA',
        labelSucessUser: 'pelo usuário.',
      },],
    };
  }

  export function getNipErrorMock(): NipData {
    return {
      nome: 'Leandro Henrique',
      nip: 123456,
      dataAbertura: '29-01-2022',
      email: 'leandro.henrique@gmail.com',
      telefone: '(61) 9 9999-9999',
      interlocutor: true,
      statusFluxo: 'nao_reconhecido',
      situationData: [{
        title: 'Reconhece esta NIP?',
        NoReceptor: 'Não',
        yesReceptor: 'Sim',
        labelSucess: 'Interlocutor',
        labelSucessStatus: 'NÃO RECONHECIDO',
        labelMessage: 'e abertura da NIP',
        labelSucessUser: 'pelo usuário.',
      },],
    };
  }