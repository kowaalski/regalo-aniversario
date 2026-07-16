import { TilePattern } from "@/components/TilePattern";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-12">
      <TilePattern tone="azulejo" className="opacity-[0.06]" />

      {/* Resplandor cálido detrás de la tarjeta */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracota/15 blur-[100px]"
      />

      <div className="animate-fade-up relative z-10 w-full max-w-sm rounded-[2rem] border border-terracota/15 bg-crema/80 p-8 shadow-lift backdrop-blur-md sm:p-10">
        <div className="mb-7 flex flex-col items-center gap-4 text-center">
          <svg
            width="44"
            height="40"
            viewBox="0 0 40 36"
            fill="none"
            aria-hidden
            className="animate-float text-terracota"
          >
            <path
              d="M20 34C20 34 2 22.5 2 11.5C2 5.5 6.5 2 11.5 2C15 2 18 4 20 7.5C22 4 25 2 28.5 2C33.5 2 38 5.5 38 11.5C38 22.5 20 34 20 34Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h1 className="font-serif-display text-4xl italic text-tinta">
              Antes de entrar…
            </h1>
            <p className="mt-2 text-sm text-tinta-suave">
              Esto es solo para ti. Lo demás puede esperar.
            </p>
          </div>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
