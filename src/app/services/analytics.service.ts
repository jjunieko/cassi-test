const STORAGE_KEY = 'nip-click-stats';

type ClickStats = {
  yes: number;
  no: number;
};
//** crei um simulador de tagueamento. pode ver  no local storage **//
export function getClickStats(): ClickStats {
  if (typeof window === 'undefined') return { yes: 0, no: 0 };

  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { yes: 0, no: 0 };
}

export function trackClick(type: 'yes' | 'no') {
  if (typeof window === 'undefined') return;

  const stats = getClickStats();
  stats[type] += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}
