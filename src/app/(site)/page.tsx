import { Countdown } from "@/components/Countdown";
import { TilePattern } from "@/components/TilePattern";
import { START_DATE, HER_NAME } from "@config";
import { getFullYears } from "@/lib/time";

export default function HomePage() {
  const years = getFullYears(START_DATE);

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
      <TilePattern tone="terracota" className="opacity-[0.05]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-40 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-terracota/10 blur-[110px]"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="animate-fade-in text-sm font-medium uppercase tracking-[0.25em] text-dorado">
          Hoy cumplimos
        </p>

        <div className="ornamental-divider mt-4 text-dorado">
          <span className="h-1.5 w-1.5 rotate-45 bg-current" />
        </div>

        <h1 className="animate-fade-up mt-5 font-serif-display text-5xl italic leading-[1.05] text-tinta sm:text-7xl">
          {years} años, {HER_NAME}
        </h1>

        {/*
          TODO: cambia este párrafo por tu propio texto de bienvenida.
          Es lo primero que va a leer, tómate el tiempo que necesites.
        */}
        <p
          className="animate-fade-up mt-7 max-w-xl text-balance text-lg leading-relaxed text-tinta-suave"
          style={{ animationDelay: "120ms" }}
        >
          Holis, nunca te he hecho nada de esto rollo friki ingeniero, y me da un poquito de cosilla, pero espero que te guste. Quiero que sepas que te amo mucho y que no podría ser más feliz a tu lado.
        </p>

        <div
          className="animate-fade-up relative mt-14 w-full max-w-lg rounded-[2rem] border border-terracota/15 bg-cal/70 p-7 shadow-card backdrop-blur-md sm:p-10"
          style={{ animationDelay: "220ms" }}
        >
          <Countdown startDate={START_DATE} />
        </div>

        <div
          className="animate-fade-up mt-14 max-w-lg"
          style={{ animationDelay: "320ms" }}
        >
          <p className="font-serif-display text-3xl italic leading-snug text-azulejo-oscuro sm:text-4xl">
            <span aria-hidden className="mr-1 text-dorado">
              &ldquo;
            </span>
            {"Lo nuestro es puro amor, sino que se lo digan a los abrazos y besos de los findes al despertar"}
            <span aria-hidden className="ml-1 text-dorado">
              &rdquo;
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
