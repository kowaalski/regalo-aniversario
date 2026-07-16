import { SectionHeader } from "@/components/SectionHeader";
import { SealedEnvelope } from "@/components/SealedEnvelope";
import { LETTER_UNLOCK_DATE } from "@config";
import { LETTER_TEXT } from "@/content/letter";
import { isUnlocked } from "@/lib/time";

export default function LetterPage() {
  const unlocked = isUnlocked(LETTER_UNLOCK_DATE);

  return (
    <div>
      <SectionHeader
        eyebrow={unlocked ? "Para ti" : "Todavía no"}
        title="El sobre"
        description={
          unlocked
            ? "Ya se puede abrir."
            : "Una carta que se abre sola cuando toca."
        }
        tone="azulejo"
      />

      <div className="px-4 pb-24 sm:px-6">
        {unlocked ? (
          <div className="animate-fade-up mx-auto max-w-xl rounded-[2rem] border border-terracota/15 bg-cal p-8 shadow-card sm:p-12">
            {LETTER_TEXT.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-5 font-serif-display text-xl italic leading-relaxed text-tinta last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <SealedEnvelope unlockDate={LETTER_UNLOCK_DATE} />
        )}
      </div>
    </div>
  );
}
