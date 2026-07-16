"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import type { Coupon } from "@/lib/queries";

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function CouponCard({ coupon }: { coupon: Coupon }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const redeemed = Boolean(coupon.redeemed_at);

  async function handleRedeem() {
    setError(null);
    try {
      const res = await fetch("/api/coupons/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: coupon.id }),
      });
      if (!res.ok) throw new Error();
      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("No se ha podido canjear, inténtalo de nuevo.");
    }
  }

  async function handleUnredeem() {
    setError(null);
    try {
      const res = await fetch("/api/coupons/redeem", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: coupon.id }),
      });
      if (!res.ok) throw new Error();
      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("No se ha podido descanjear, inténtalo de nuevo.");
    }
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-6 shadow-card transition-all duration-300 sm:p-7 ${
        redeemed
          ? "border-salvia/25 bg-salvia/5"
          : "border-terracota/15 bg-cal hover:-translate-y-0.5 hover:shadow-lift"
      }`}
    >
      {redeemed && (
        <button
          type="button"
          onClick={handleUnredeem}
          disabled={isPending}
          title="Deshacer canje"
          className="absolute right-5 top-5 shrink-0 -rotate-6 rounded-full border-2 border-salvia bg-crema px-3 py-1 text-xs font-semibold uppercase tracking-wide text-salvia transition-transform hover:scale-105 disabled:opacity-60"
        >
          {isPending ? "…" : "Canjeado"}
        </button>
      )}

      <h3
        className={`font-serif-display text-2xl text-tinta ${
          redeemed ? "mr-24 line-through decoration-salvia/60" : ""
        }`}
      >
        {coupon.title}
      </h3>
      <p className={`mt-2 leading-relaxed text-tinta-suave ${redeemed ? "opacity-70" : ""}`}>
        {coupon.description}
      </p>

      {/* Línea de perforación estilo cupón, con muescas en los bordes */}
      <div className="relative my-5 border-t border-dashed border-terracota/25">
        <span className="absolute -left-6 top-1/2 -mt-2.5 h-5 w-5 rounded-full bg-crema sm:-left-7" />
        <span className="absolute -right-6 top-1/2 -mt-2.5 h-5 w-5 rounded-full bg-crema sm:-right-7" />
      </div>

      {redeemed ? (
        <p className="text-sm font-medium text-salvia">
          Canjeado el {formatDate(coupon.redeemed_at!)}
        </p>
      ) : (
        <button
          type="button"
          onClick={handleRedeem}
          disabled={isPending}
          className="rounded-full bg-terracota px-5 py-2.5 text-sm font-medium text-cal shadow-soft transition-all duration-200 hover:scale-[1.03] hover:bg-terracota-oscuro hover:shadow-card active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
        >
          {isPending ? "Canjeando…" : "Canjear"}
        </button>
      )}

      {error && (
        <p className="animate-fade-in mt-2 text-sm text-terracota-oscuro">{error}</p>
      )}
    </div>
  );
}
