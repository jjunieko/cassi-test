import NipConfirmationButtons from '@/components/Buttons/ConfirmationButtons';
import { render, screen, fireEvent } from '@testing-library/react';

describe('NipConfirmationButtons', () => {
  it('deve renderizar com textos padrões', () => {
    render(<NipConfirmationButtons />);

    expect(screen.getByText('Reconhece esta NIP?')).toBeInTheDocument();
    expect(screen.getByText('Sim, foi aberto por mim')).toBeInTheDocument();
    expect(screen.getByText('Não reconheço')).toBeInTheDocument();
  });

  it('deve renderizar com textos customizados', () => {
    render(
      <NipConfirmationButtons
        title="Custom Title"
        yesLabel="Confirmar"
        noLabel="Recusar"
      />
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Confirmar')).toBeInTheDocument();
    expect(screen.getByText('Recusar')).toBeInTheDocument();
  });

  it('deve chamar onYes quando botão Sim for clicado', () => {
    const onYesMock = jest.fn();
    render(<NipConfirmationButtons onYes={onYesMock} />);

    const yesButton = screen.getByText('Sim, foi aberto por mim');
    fireEvent.click(yesButton);

    expect(onYesMock).toHaveBeenCalledTimes(1);
  });

  it('deve chamar onNo quando botão Não for clicado', () => {
    const onNoMock = jest.fn();
    render(<NipConfirmationButtons onNo={onNoMock} />);

    const noButton = screen.getByText('Não reconheço');
    fireEvent.click(noButton);

    expect(onNoMock).toHaveBeenCalledTimes(1);
  });
});
