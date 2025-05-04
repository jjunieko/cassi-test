import { NipState } from "../NipState";

describe('NipState type structure', () => {
  it('should initialize a valid NipState object', () => {
    const state: NipState = {
      step: 'interlocutor',
      fluxoStatus: 'success',
      showModal: false,
      answered: false,
      userData: {
        nome: '',
        email: '',
        telefone: '',
      },
    };

    expect(state.step).toBe('interlocutor');
    expect(state.fluxoStatus).toBe('success');
    expect(state.showModal).toBe(false);
    expect(state.userData).toHaveProperty('email');
  });
});
