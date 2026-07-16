"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/lib/auth";

const initialState: LoginState = {};

const inputClasses =
  "rounded-2xl border border-terracota/20 bg-cal/90 px-4 py-3 text-base text-tinta shadow-soft placeholder:text-tinta-suave/45 outline-none transition-all duration-200 focus:border-terracota focus:shadow-card";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username" className="text-sm font-medium text-tinta-suave">
          ¿Quién eres?
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          placeholder="tu nombre"
          required
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium text-tinta-suave">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="como te llamo yo zi..."
          required
          className={inputClasses}
        />
      </div>

      {state?.error && (
        <p
          aria-live="polite"
          className="animate-fade-in rounded-xl bg-terracota/10 px-4 py-3 text-sm text-terracota-oscuro"
        >
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-full bg-terracota px-6 py-3.5 text-base font-medium text-cal shadow-card transition-all duration-200 hover:scale-[1.02] hover:bg-terracota-oscuro hover:shadow-lift active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
      >
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
