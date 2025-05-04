import { useAppDispatch, useAppSelector } from '../store/hooks';

describe('Custom Redux hooks', () => {
  it('should export useAppDispatch and useAppSelector', () => {
    expect(typeof useAppDispatch).toBe('function');
    expect(typeof useAppSelector).toBe('function');
  });
});
