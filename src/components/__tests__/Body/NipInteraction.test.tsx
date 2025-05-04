
import { configureStore } from '@reduxjs/toolkit';
import nipReducer from '@/redux/nipSlice';
import { NipData } from '@/app/model/NipData';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import NipInteraction from '@/components/NipInteraction/NipInteraction';

describe('NipInteraction - Ações e Comportamento', () => {

const mockStore = configureStore({
  reducer: {
    nip: () => ({
      step: 'interlocutor',
      fluxoStatus: 'error',
      showModal: false,
      answered: false,
      userData: {
        nome: '',
        email: '',
        telefone: '',
      },
    }),
  },
});

  const renderWithStore = (state: any, mockData: NipData) => {
    const store = configureStore({
      reducer: { nip: nipReducer },
      preloadedState: { nip: state },
    });

    render(
      <Provider store={store}>
        <NipInteraction data={mockData} />
      </Provider>
    );

    return store;
  };

  const mockData: NipData = {
    nome: 'Leandro Henrique',
    nip: 999999,
    dataAbertura: '29-01-2022',
    email: 'leandro.henrique@gmail.com',
    telefone: '(61) 9 9999-9999',
    interlocutor: true,
    statusFluxo: 'nao_reconhecido',
    situationData: [
      {
        title: 'Reconhece esta NIP?',
        NoReceptor: 'Não',
        yesReceptor: 'Sim',
        labelSucess: 'Interlocutor',
        labelSucessStatus: 'NÃO RECONHECIDO',
        labelMessage: 'e abertura da NIP',
        labelSucessUser: 'pelo usuário.',
      },
    ],
  };

  it('deve disparar onYes e abrir modal', () => {
    const store = renderWithStore({
      step: 'interlocutor',
      fluxoStatus: 'error',
      showModal: false,
      answered: false,
      userData: {
        nome: '',
        email: '',
        telefone: '',
      },
    }, mockData);

    fireEvent.click(screen.getByText('Sim'));
    const state = store.getState().nip;
    expect(state.showModal).toBe(true);
  });

  it('deve disparar onNo e abrir modal', () => {
    const store = renderWithStore({
      step: 'interlocutor',
      fluxoStatus: 'error',
      showModal: false,
      answered: false,
      userData: {
        nome: '',
        email: '',
        telefone: '',
      },
    }, mockData);

    fireEvent.click(screen.getByText('Não'));
    const state = store.getState().nip;
    expect(state.showModal).toBe(true);
  });


  it('deve exibir os botões de confirmação', () => {
    render(
      <Provider store={mockStore}>
        <NipInteraction data={mockData} />
      </Provider>
    );

    expect(screen.getByText('Reconhece esta NIP?')).toBeInTheDocument();
    expect(screen.getByText('Sim')).toBeInTheDocument();
    expect(screen.getByText('Não')).toBeInTheDocument();
  });
});

