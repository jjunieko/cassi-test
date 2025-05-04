import { NipData } from "@/app/model/NipData";

export function getNipInitialMock(): NipData {
    return {
      nome: 'Leandro Henrique',
      nip: 111111,
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
      nip: 999999,
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


  // add novos fluxos 
  export function getNipWithoutInterlocutorMock(): NipData {
    return {
      nome: 'Joana Lima',
      nip: 222222,
      dataAbertura: '10-02-2022',
      email: 'joana@example.com',
      telefone: '(11) 9 8888-8888',
      interlocutor: false,
      statusFluxo: 'sem_interlocutor',
      situationData: [{
        title: 'Há um interlocutor?',
        NoReceptor: 'Não há',
        yesReceptor: 'Sim',
        labelSucess: 'Interlocutor',
        labelSucessStatus: 'NÃO INFORMADO',
        labelSucessUser: 'na abertura da NIP.',
      }],
    };
  }
  