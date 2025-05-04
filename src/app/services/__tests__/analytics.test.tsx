import { getClickStats, trackClick } from "../analytics.service";

describe('clickStats', () => {
  const STORAGE_KEY = 'nip-click-stats';

  beforeEach(() => {
    localStorage.clear();
  });

  test('getClickStats should return default values if nothing is stored', () => {
    expect(getClickStats()).toEqual({ yes: 0, no: 0 });
  });

  test('trackClick should increment yes count', () => {
    trackClick('yes');
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ yes: 1, no: 0 });
  });

  test('trackClick should increment no count', () => {
    trackClick('no');
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ yes: 0, no: 1 });
  });

  test('trackClick should accumulate clicks', () => {
    trackClick('yes');
    trackClick('yes');
    trackClick('no');
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ yes: 2, no: 1 });
  });
});
