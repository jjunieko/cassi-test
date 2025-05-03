export type NipData = {
    nome: string;
    nip: number;
    dataAbertura: string;
    email: string;
    telefone: string;
    interlocutor: boolean;
    statusFluxo: 'reconhecimento_completo' | 'nao_reconhecido' | 'sem_interlocutor' | 'incompleto';
    situationData: {
      title: string;
      NoReceptor: string;
      yesReceptor: string;
      labelSucess: string;
      labelSucessStatus: string;
      labelMessage?: string;
      labelSucessUser: string;
    }[];
  };