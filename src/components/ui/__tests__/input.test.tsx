import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../input';

describe('Input component', () => {
  it('renderiza corretamente com placeholder', () => {
    render(<Input placeholder="Digite seu nome" />);
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  });

  it('aplica o tipo corretamente', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('chama onChange corretamente', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'teste' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renderiza com valor inicial', () => {
    render(<Input value="Valor inicial" readOnly />);
    expect(screen.getByDisplayValue('Valor inicial')).toBeInTheDocument();
  });

  it('aplica a classe customizada', () => {
    render(<Input className="meu-input-custom" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('meu-input-custom');
  });
});
