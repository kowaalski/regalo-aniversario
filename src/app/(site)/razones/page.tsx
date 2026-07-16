import { SectionHeader } from "@/components/SectionHeader";
import { ReasonCard } from "@/components/ReasonCard";
import { Reveal } from "@/components/Reveal";
import { getReasons } from "@/lib/queries";

export default function ReasonsPage() {
  const reasons = getReasons();

  return (
    <div>
      <SectionHeader
        eyebrow="Siete tarjetas, siete razones"
        title="Por qué te quiero"
        description="Dale la vuelta a cada una."
        tone="terracota"
      />

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-4 pb-24 sm:grid-cols-3 sm:gap-6 sm:px-6 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <Reveal key={reason.id} delay={index * 60}>
            <ReasonCard reason={reason} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
