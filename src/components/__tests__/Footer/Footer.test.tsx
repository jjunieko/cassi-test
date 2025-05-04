import Footer from '@/components/Footer/Footer';
import { render, screen } from '@testing-library/react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

describe('Footer', () => {
  it('deve renderizar todos os títulos principais', () => {
    render(<Footer />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Conheça a CASSI')).toBeInTheDocument();
    expect(screen.getByText('Nossos Planos')).toBeInTheDocument();
    expect(screen.getByText('Já tenho um plano CASSI')).toBeInTheDocument();
    expect(screen.getByText('CliniCASSI')).toBeInTheDocument();
  });

  it('deve conter ícones das redes sociais', () => {
    render(<Footer />);
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
    expect(screen.getByAltText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
  });

  it('deve conter os links esperados nas seções', () => {
    render(<Footer />);
    expect(screen.getByText('Institucional')).toBeInTheDocument();
    expect(screen.getByText('Plano CASSI Família')).toBeInTheDocument();
    expect(screen.getByText('Telemedicina')).toBeInTheDocument();
  });
});
