import { SectionHeader } from "@/components/SectionHeader";
import { MilestoneTimeline } from "@/components/MilestoneTimeline";
import { getMilestones } from "@/lib/queries";

export default function TimelinePage() {
  const milestones = getMilestones();

  return (
    <div>
      <SectionHeader
        eyebrow="Un hito por año"
        title="Nuestra historia"
        description="Siete años, contados uno a uno."
      />

      <div className="px-4 pb-24 sm:px-6">
        <MilestoneTimeline milestones={milestones} />
      </div>
    </div>
  );
}
