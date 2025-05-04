import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

describe('Button Component', () => {
  // Teste para renderização básica
  it('deve renderizar o botão com texto e classes padrão', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      cn(buttonVariants({ variant: 'default', size: 'default' }))
    );
  });

  // Teste para todas as variantes
  describe('Variantes', () => {
    const variants = [
      'default',
      'destructive',
      'outline',
      'secondary',
      'ghost',
      'link'
    ] as const;

    variants.forEach((variant) => {
      it(`deve aplicar as classes corretas para a variante ${variant}`, () => {
        render(<Button variant={variant}>Button</Button>);
        
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          cn(buttonVariants({ variant, size: 'default' }))
        );
      });
    });
  });

  // Teste para todos os tamanhos
  describe('Tamanhos', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const;

    sizes.forEach((size) => {
      it(`deve aplicar as classes corretas para o tamanho ${size}`, () => {
        render(<Button size={size}>Button</Button>);
        
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          cn(buttonVariants({ variant: 'default', size }))
        );
      });
    });
  });

  // Teste para comportamento asChild
  it('deve renderizar como Slot quando asChild é true', () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );
    
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass(
      cn(buttonVariants({ variant: 'default', size: 'default' }))
    );
  });

  // Teste para interação
  it('deve chamar onClick quando clicado', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Clickable</Button>);
    
    const button = screen.getByRole('button', { name: /clickable/i });
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Teste para ícones
  it('deve estilizar corretamente quando contém ícone', () => {
    render(
      <Button>
        <svg data-testid="icon" /> Button with icon
      </Button>
    );
    
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('icon');
    
    expect(button).toHaveClass('gap-2');
  });

  // focus styles
  it('deve aplicar estilos de focus visível', () => {
    render(<Button>Focusable</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('outline-none');
    expect(button).toHaveClass('focus-visible:ring-[3px]');
  });

  //  aria-invalid
  it('deve aplicar estilos de erro quando aria-invalid é true', () => {
    render(<Button aria-invalid>Error</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('aria-invalid:border-destructive');
    expect(button).toHaveClass('aria-invalid:ring-destructive/20');
  });
});