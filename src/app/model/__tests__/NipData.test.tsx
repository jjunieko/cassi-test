
import { NipData } from '@/app/model/NipData';

describe('NipData type structure', () => {
  it('should create a valid NipData object', () => {
    const data: NipData = {
      nome: 'João da Silva',
      nip: 123456,
      dataAbertura: '2024-12-01',
      email: 'joao@email.com',
      telefone: '(11) 91234-5678',
      interlocutor: true,
      statusFluxo: 'reconhecimento_completo',
      situationData: [
        {
          title: 'Reconhece esta NIP?',
          NoReceptor: 'Não reconheço',
          yesReceptor: 'Sim, foi aberto por mim',
          labelSucess: 'Interlocutor',
          labelSucessStatus: 'RECONHECIDO',
          labelMessage: 'e abertura da NIP',
          labelSucessUser: 'pelo usuário.',
        },
      ],
    };

    expect(data.nome).toBe('João da Silva');
    expect(data.statusFluxo).toBe('reconhecimento_completo');
    expect(data.situationData[0].title).toBe('Reconhece esta NIP?');
  });
});
