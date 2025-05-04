import Header from '@/components/Header/Header';
import { render, screen } from '@testing-library/react';

jest.mock('@/app/utils/Logo', () => () => <div data-testid="logo" />);
jest.mock('@/components/Header/modules/MobileMenuIcon', () => ({
  MobileMenuIcon: () => <div data-testid="mobile-menu" />,
}));
jest.mock('@/components/Header/modules/SearchBar', () => ({
  SearchBar: () => <div data-testid="search-bar" />,
}));
jest.mock('@/components/Header/modules/SocialIcons', () => ({
  SocialIcons: () => <div data-testid="social-icons" />,
}));
jest.mock('@/components/Header/modules/UserAccess', () => ({
  UserAccess: () => <div data-testid="user-access" />,
}));
jest.mock('@/components/Header/HeaderSubmenu', () => () => <div data-testid="header-submenu" />);

describe('Header', () => {
  it('renderiza todos os subcomponentes corretamente', () => {
    render(<Header />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('social-icons')).toBeInTheDocument();
    expect(screen.getByTestId('user-access')).toBeInTheDocument();
    expect(screen.getByTestId('header-submenu')).toBeInTheDocument();
  });
});
