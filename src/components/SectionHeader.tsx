import { TilePattern } from "@/components/TilePattern";

const TONE_TEXT: Record<"azulejo" | "terracota" | "salvia", string> = {
  azulejo: "text-azulejo-oscuro",
  terracota: "text-terracota-oscuro",
  salvia: "text-salvia",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "azulejo",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "azulejo" | "terracota" | "salvia";
}) {
  return (
    <div className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-24">
      <TilePattern tone={tone} className="opacity-[0.05]" />
      <div className="animate-fade-up relative z-10 mx-auto max-w-2xl">
        <p className={`text-sm font-medium uppercase tracking-[0.25em] ${TONE_TEXT[tone]}`}>
          {eyebrow}
        </p>
        <div className="ornamental-divider mt-4">
          <span className="h-1.5 w-1.5 rotate-45 bg-current" />
        </div>
        <h2 className="mt-4 font-serif-display text-4xl italic leading-[1.1] text-tinta sm:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-5 max-w-md text-balance text-lg text-tinta-suave">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
