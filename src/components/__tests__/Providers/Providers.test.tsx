import { render, screen } from '@testing-library/react';
import Providers from '@/components/Providers/Providers';

const MockChild = () => <div data-testid="mock-child">Mock Child Component</div>;

describe('Providers Component', () => {
  it('deve renderizar o Provider do Redux com a store correta', () => {
    render(
      <Providers>
        <MockChild />
      </Providers>
    );

    const childElement = screen.getByTestId('mock-child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Mock Child Component');
  });

  it('deve renderizar corretamente sem filhos', () => {
    render(<Providers>{null}</Providers>);
  });
});