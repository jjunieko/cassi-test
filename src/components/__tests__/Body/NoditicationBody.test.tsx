import { render, screen } from '@testing-library/react';
import NotificationBody from '@/components/NotificationBody/NotificationBody';
import { NipData } from '@/app/model/NipData';

jest.mock('@/components/NotificationBody/modules/information', () => ({
  Information: () => <div data-testid="information-mock">Mock Information</div>,
}));

jest.mock('@/components/NipInteraction/NipInteraction', () => ({
  __esModule: true,
  default: ({ data }: { data: NipData }) => (
    <div data-testid="nip-interaction-mock">NIP Interaction for {data.nome}</div>
  ),
}));

describe('NotificationBody', () => {
  const mockData: NipData = {
    nome: 'João Silva',
    nip: 123456,
    dataAbertura: '15-05-2023',
    email: 'joao.silva@example.com',
    telefone: '(11) 99999-9999',
    interlocutor: true,
    statusFluxo: 'nao_reconhecido',
    situationData: [
      {
        title: 'Reconhece esta NIP?',
        NoReceptor: 'Não',
        yesReceptor: 'Sim',
        labelSucess: 'Interlocutor',
        labelSucessStatus: 'NÃO RECONHECIDO',
        labelMessage: 'e abertura da NIP',
        labelSucessUser: 'pelo usuário.',
      },
    ],
  };

  it('deve renderizar corretamente com os dados da NIP', () => {
    render(<NotificationBody data={mockData} />);

    expect(screen.getByText(`Olá, ${mockData.nome}`)).toBeInTheDocument();
    
    expect(screen.getByText(/Foi realizada a abertura de uma Notificação de Intermediação Preliminar/)).toBeInTheDocument();
    
    expect(screen.getByText('Dados do notificação')).toBeInTheDocument();
    expect(screen.getByText('Beneficiário')).toBeInTheDocument();
    expect(screen.getByText('Interlocutor')).toBeInTheDocument();
    expect(screen.getByText('Data de abertura')).toBeInTheDocument();
    expect(screen.getByText(mockData.dataAbertura)).toBeInTheDocument();
  });

  it('deve renderizar o componente NipInteraction com os dados corretos', () => {
    render(<NotificationBody data={mockData} />);
    
    const nipInteraction = screen.getByTestId('nip-interaction-mock');
    expect(nipInteraction).toBeInTheDocument();
    expect(nipInteraction).toHaveTextContent(`NIP Interaction for ${mockData.nome}`);
  });

  it('deve renderizar o componente Information no layout', () => {
    render(<NotificationBody data={mockData} />);
    
    expect(screen.getByTestId('information-mock')).toBeInTheDocument();
  });

  it('deve ter a estrutura de grid correta', () => {
    const { container } = render(<NotificationBody data={mockData} />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('grid');
    expect(section).toHaveClass('grid-cols-1');
    expect(section).toHaveClass('lg:grid-cols-3');
  });
});