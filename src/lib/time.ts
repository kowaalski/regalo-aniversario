export type Elapsed = {
  totalMs: number;
  totalDays: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getElapsed(startIso: string, now: Date = new Date()): Elapsed {
  const start = new Date(startIso);
  const totalMs = Math.max(0, now.getTime() - start.getTime());

  const totalSeconds = Math.floor(totalMs / 1000);
  const totalDays = Math.floor(totalSeconds / 86400);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = totalDays;

  return { totalMs, totalDays, days, hours, minutes, seconds };
}

export function isUnlocked(targetIso: string): boolean {
  return Date.now() >= new Date(targetIso).getTime();
}

export function getRemaining(targetIso: string, now: Date = new Date()): Elapsed {
  const target = new Date(targetIso);
  const totalMs = Math.max(0, target.getTime() - now.getTime());

  const totalSeconds = Math.floor(totalMs / 1000);
  const totalDays = Math.floor(totalSeconds / 86400);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = totalDays;

  return { totalMs, totalDays, days, hours, minutes, seconds };
}

export type NextRound = {
  target: number;
  remainingDays: number;
};

// El siguiente número de días "redondo" (múltiplo de 100) que vais a cumplir.
export function getNextRoundDays(currentDays: number): NextRound {
  const step = 100;
  const target = (Math.floor(currentDays / step) + 1) * step;
  return { target, remainingDays: target - currentDays };
}

export function formatEsNumber(n: number): string {
  return new Intl.NumberFormat("es-ES").format(n);
}

// Años completos cumplidos desde la fecha de inicio, para el titular de la
// portada. Se recalcula en cada visita para que el regalo siga siendo
// exacto aunque se abra en futuros aniversarios.
export function getFullYears(startIso: string, now: Date = new Date()): number {
  const start = new Date(startIso);
  let years = now.getFullYear() - start.getFullYear();

  const hasHadAnniversaryThisYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!hasHadAnniversaryThisYear) years -= 1;

  return Math.max(0, years);
}
