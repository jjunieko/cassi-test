import { NipState } from '@/app/model/NipState';
import nipReducer, {
    setStep,
    setFluxoStatus,
    setShowModal,
    setAnswered,
    setUserData,
  } from '@/redux/nipSlice';
  
  describe('nipSlice reducer', () => {
    const initialState : NipState ={
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
  
    it('deve retornar o estado inicial por padrão', () => {
        expect(nipReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
    });
  
    it('deve alterar o step corretamente', () => {
      const nextState = nipReducer(initialState, setStep('nip'));
      expect(nextState.step).toBe('nip');
    });
  
    it('deve alterar o fluxoStatus corretamente', () => {
      const nextState = nipReducer(initialState, setFluxoStatus('error'));
      expect(nextState.fluxoStatus).toBe('error');
    });
  
    it('deve alterar showModal corretamente', () => {
      const nextState = nipReducer(initialState, setShowModal(true));
      expect(nextState.showModal).toBe(true);
    });
  
    it('deve alterar answered corretamente', () => {
      const nextState = nipReducer(initialState, setAnswered(true));
      expect(nextState.answered).toBe(true);
    });
  
    it('deve alterar userData corretamente', () => {
      const newUserData = {
        nome: 'Leandro',
        email: 'leandro@example.com',
        telefone: '(61) 9 9999-9999',
      };
      const nextState = nipReducer(initialState, setUserData(newUserData));
      expect(nextState.userData).toEqual(newUserData);
    });
  });
  