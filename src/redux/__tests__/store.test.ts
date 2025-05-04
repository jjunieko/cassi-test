import { setStep } from '../nipSlice';
import { store } from '../store/store';

describe('Redux store', () => {
  it('should initialize with nip reducer state', () => {
    const state = store.getState().nip;
    expect(state).toHaveProperty('step');
    expect(state).toHaveProperty('fluxoStatus');
    expect(state).toHaveProperty('answered');
    expect(state).toHaveProperty('userData');
  });

  it('should update nip reducer via dispatch', () => {
    store.dispatch(setStep('nip'));
    const updatedState = store.getState().nip;
    expect(updatedState.step).toBe('nip');
  });
});
