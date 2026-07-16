"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { Reason } from "@/lib/queries";

export function ReasonCard({ reason }: { reason: Reason }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`Razón número ${reason.number}: pulsa para ${
        flipped ? "ocultar" : "ver"
      }`}
      className="group aspect-[3/4] w-full [perspective:1400px]"
    >
      <div
        className={`relative h-full w-full rounded-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : "group-hover:-translate-y-1"
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border border-terracota/15 bg-cal p-5 shadow-card transition-shadow duration-300 [backface-visibility:hidden] group-hover:shadow-lift">
          <span className="font-serif-display text-4xl italic text-dorado">
            {reason.number}
          </span>
          <Icon name={reason.icon} className="h-9 w-9 text-terracota" />
          <span className="text-xs font-medium uppercase tracking-wide text-tinta-suave/70">
            Pulsa para ver
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl border border-terracota-oscuro/20 bg-terracota p-5 text-center shadow-lift [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div
            aria-hidden
            className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cal/10"
          />
          <p className="relative font-serif-display text-lg italic leading-snug text-cal sm:text-xl">
            {reason.reason}
          </p>
        </div>
      </div>
    </button>
  );
}
