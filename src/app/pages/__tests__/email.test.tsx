import { render, screen } from '@testing-library/react';
import EmailPreviewPage from '../email/page';

jest.mock('@/app/services/email.service', () => ({
  simulateEmailContent: jest.fn((tipo: string) => ({
    subject: 'Mocked Subject',
    html: `<p>Email tipo: ${tipo}</p>`,
  })),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (key: string) => {
      if (key === 'nip') return '999999';
      return null;
    },
  }),
}));

describe('EmailPreviewPage', () => {
  it('deve renderizar corretamente com tipo erro', () => {
    render(<EmailPreviewPage />);
    expect(screen.getByText('Pré-visualização do E-mail')).toBeInTheDocument();
    expect(screen.getByText('Email tipo: erro')).toBeInTheDocument();
  });
});
