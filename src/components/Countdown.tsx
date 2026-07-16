"use client";

import { useEffect, useState } from "react";
import { getElapsed, getNextRoundDays, formatEsNumber, type Elapsed } from "@/lib/time";

const UNITS: Array<{ key: keyof Elapsed; label: string }> = [
  { key: "days", label: "días" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "minutos" },
  { key: "seconds", label: "segundos" },
];

function UnitList({ values }: { values: Array<{ label: string; value: string }> }) {
  return (
    <div
      className="flex items-start justify-center gap-3 sm:gap-6"
      role="timer"
      aria-live="off"
    >
      {values.map((u, i) => (
        <div
          key={u.label}
          className={`text-center ${i > 0 ? "border-l border-terracota/15 pl-3 sm:pl-6" : ""}`}
        >
          <div className="whitespace-nowrap font-serif-display text-2xl tabular-nums leading-none text-tinta sm:text-5xl">
            {u.value}
          </div>
          <div className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-tinta-suave sm:text-xs">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Countdown({ startDate }: { startDate: string }) {
  const [elapsed, setElapsed] = useState<Elapsed | null>(null);

  useEffect(() => {
    // Se calcula tras el montaje (no en el render inicial) a propósito:
    // así el HTML del servidor y el del cliente coinciden y no hay salto
    // de hidratación en el reloj.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setElapsed(getElapsed(startDate));
    const id = setInterval(() => {
      setElapsed(getElapsed(startDate));
    }, 1000);
    return () => clearInterval(id);
  }, [startDate]);

  if (!elapsed) {
    return (
      <div aria-hidden>
        <UnitList values={UNITS.map((u) => ({ label: u.label, value: "--" }))} />
      </div>
    );
  }

  const nextRound = getNextRoundDays(elapsed.days);

  return (
    <div>
      <UnitList
        values={UNITS.map((u) => ({
          label: u.label,
          value: formatEsNumber(elapsed[u.key] as number),
        }))}
      />

      <p className="mt-7 text-center text-sm leading-relaxed text-tinta-suave">
        El próximo número redondo son{" "}
        <span className="font-semibold text-terracota-oscuro">
          {formatEsNumber(nextRound.target)} días
        </span>
        , dentro de {formatEsNumber(nextRound.remainingDays)}{" "}
        {nextRound.remainingDays === 1 ? "día" : "días"}.
      </p>
    </div>
  );
}
