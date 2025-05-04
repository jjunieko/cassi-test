import HeaderSubmenu from '@/components/Header/HeaderSubmenu';
import { render, screen, fireEvent, within } from '@testing-library/react';

describe('HeaderSubmenu', () => {
    it('deve renderizar os links no desktop', () => {
        render(<HeaderSubmenu />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Conheça a CASSI ▾')).toBeInTheDocument();
        expect(screen.getByText('Fale com a CASSI')).toBeInTheDocument();
    });

    it('deve abrir e mostrar o menu mobile ao clicar no botão', () => {
        render(<HeaderSubmenu />);
    
        const button = screen.getByRole('button', { name: /menu/i });
        fireEvent.click(button);
    
        const mobileMenu = screen.getByTestId('mobile-menu');
        
        expect(within(mobileMenu).getByText('Nossos planos ▾')).toBeInTheDocument();
        expect(within(mobileMenu).getByText('Já tenho um plano CASSI ▾')).toBeInTheDocument();
    });

    it('deve alternar visibilidade do menu mobile ao clicar novamente', () => {
        render(<HeaderSubmenu />);

        const button = screen.getByRole('button', { name: /menu/i });
        fireEvent.click(button);
        const menu = screen.getByTestId('mobile-menu');
        expect(within(menu).getByText('CliniCASSI ▾')).toBeInTheDocument();
    });
});
