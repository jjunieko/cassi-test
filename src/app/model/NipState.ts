export type FlowStatus = 'success' | 'error';
export type FlowStep = 'interlocutor' | 'nip' | 'done';

export interface NipState {
  step: FlowStep;
  fluxoStatus: FlowStatus;
  showModal: boolean;
  answered: boolean;
  userData: {
    nome: string;
    email: string;
    telefone: string;
  };
}
