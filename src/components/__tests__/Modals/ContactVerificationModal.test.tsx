import { render, screen, fireEvent } from '@testing-library/react';
import ContactVerificationModal from '@/components/Modals/ContactVerificationModal';

describe('ContactVerificationModal', () => {
    const mockOnClose = jest.fn();
    const mockOnChange = jest.fn();
    const mockOnConfirm = jest.fn();

    const defaultProps = {
        nome: 'Leandro Henrique',
        email: 'leandro@example.com',
        telefone: '(11) 91234-5678',
        onClose: mockOnClose,
        onChange: mockOnChange,
        onConfirm: mockOnConfirm,
    };

    beforeEach(() => {
        render(<ContactVerificationModal {...defaultProps} />);
    });

    it('renderiza corretamente os dados iniciais', () => {
        expect(screen.getByDisplayValue('Leandro Henrique')).toBeInTheDocument();
        expect(screen.getByDisplayValue('leandro@example.com')).toBeInTheDocument();
        expect(screen.getByDisplayValue('(11) 91234-5678')).toBeInTheDocument();
    });

    it('chama onChange ao editar o email', () => {
        const emailInput = screen.getByDisplayValue('leandro@example.com');
        fireEvent.change(emailInput, { target: { value: 'novoemail@example.com' } });
        expect(mockOnChange).toHaveBeenCalledWith({
            nome: 'Leandro Henrique',
            telefone: '(11) 91234-5678',
            email: 'novoemail@example.com',
        });
    });

    it('chama onChange ao editar o telefone', () => {
        const phoneInput = screen.getByLabelText(/Celular/i);
        fireEvent.change(phoneInput, { target: { value: '(99) 99999-0000' } });
        expect(mockOnChange).toHaveBeenCalledWith({
            nome: 'Leandro Henrique',
            email: 'leandro@example.com',
            telefone: '(99) 99999-0000',
        });
    });

    it('chama onClose ao clicar em "Voltar"', () => {
        const voltarButton = screen.getByText('Voltar');
        fireEvent.click(voltarButton);
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('chama onConfirm ao clicar em "Confirmar dados"', () => {
        const confirmButton = screen.getByText('Confirmar dados');
        fireEvent.click(confirmButton);
        expect(mockOnConfirm).toHaveBeenCalled();
    });
});
