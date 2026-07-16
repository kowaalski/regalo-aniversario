"use client";

import { useEffect, useState } from "react";
import { getRemaining, formatEsNumber, type Elapsed } from "@/lib/time";

export function SealedEnvelope({ unlockDate }: { unlockDate: string }) {
  const [remaining, setRemaining] = useState<Elapsed | null>(null);

  useEffect(() => {
    // Igual que en Countdown: se calcula tras el montaje a propósito para
    // evitar un salto de hidratación entre servidor y cliente.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRemaining(getRemaining(unlockDate));
    const id = setInterval(() => {
      setRemaining(getRemaining(unlockDate));
    }, 1000);
    return () => clearInterval(id);
  }, [unlockDate]);

  return (
    <div className="animate-fade-up mx-auto flex max-w-md flex-col items-center gap-7 rounded-[2rem] border border-terracota/15 bg-cal p-8 text-center shadow-card sm:p-10">
      <svg
        width="150"
        height="108"
        viewBox="0 0 140 100"
        aria-hidden
        className="animate-float text-terracota"
      >
        <rect
          x="2"
          y="2"
          width="136"
          height="96"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 6 L70 56 L136 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="70" cy="50" r="15" fill="currentColor" />
        <path
          d="M70 41.5 A8.5 8.5 0 1 1 69.9 41.5"
          fill="none"
          stroke="#fffaf1"
          strokeWidth="1.5"
        />
      </svg>

      <p className="leading-relaxed text-tinta-suave">
        Esta carta está lacrada todavía. Se abrirá sola cuando llegue el
        momento.
      </p>

      {remaining && (
        <div className="grid grid-cols-4 gap-4 border-t border-terracota/10 pt-6">
          {[
            { value: remaining.days, label: "días" },
            { value: remaining.hours, label: "horas" },
            { value: remaining.minutes, label: "min" },
            { value: remaining.seconds, label: "seg" },
          ].map((u, i) => (
            <div
              key={u.label}
              className={`text-center ${i > 0 ? "border-l border-terracota/15" : ""}`}
            >
              <div className="font-serif-display text-2xl tabular-nums leading-none text-tinta">
                {formatEsNumber(u.value)}
              </div>
              <div className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-tinta-suave">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
