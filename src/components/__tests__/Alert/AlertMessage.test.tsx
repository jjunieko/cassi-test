import { render, screen } from '@testing-library/react';
import AlertMessage from '../../Alerts/AlertMessage';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: any) => <img src={src} alt={alt} />,
}));

describe('AlertMessage', () => {
  it('deve renderizar corretamente uma mensagem de sucesso', () => {
    render(<AlertMessage type="success" message="Operação realizada com sucesso!" />);
    expect(screen.getByText('Operação realizada com sucesso!')).toBeInTheDocument();
    expect(screen.getByAltText('success')).toBeInTheDocument();
  });

  it('deve renderizar corretamente uma mensagem de erro', () => {
    render(<AlertMessage type="error" message="Ocorreu um erro ao processar." />);
    expect(screen.getByText('Ocorreu um erro ao processar.')).toBeInTheDocument();
    expect(screen.getByAltText('error')).toBeInTheDocument();
  });
});
