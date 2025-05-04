import { render, screen } from '@testing-library/react';
import NipPage from '@/app/pages/nip/page';

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => '999999', // nip
  }),
}));

jest.mock('@/redux/store/hooks', () => ({
  useAppDispatch: () => jest.fn(),
}));

jest.mock('@/app/services/nipBackend.service', () => ({
  getNipByNumber: jest.fn(() => ({
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
    }],
  })),
}));

jest.mock('@/components/NotificationBody/NotificationBody', () => ({
  __esModule: true,
  default: ({ data }: any) => <div data-testid="notification-body">{data.nome}</div>,
}));

describe('NipPage', () => {
  it('deve renderizar NotificationBody quando nip válido for fornecido', () => {
    render(<NipPage />);
    expect(screen.getByTestId('notification-body')).toHaveTextContent('Leandro Henrique');
  });
});
