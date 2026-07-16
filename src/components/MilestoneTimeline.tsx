import { MilestonePhoto } from "@/components/MilestonePhoto";
import { Reveal } from "@/components/Reveal";
import type { Milestone } from "@/lib/queries";

export function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        aria-hidden
        className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-terracota/40 via-terracota/20 to-transparent sm:left-1/2 sm:-translate-x-1/2"
      />

      <ol className="flex flex-col gap-16 sm:gap-20">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;

          return (
            <li key={milestone.id} className="relative pl-12 sm:pl-0">
              <span
                aria-hidden
                className="absolute left-4 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-terracota bg-cal shadow-soft ring-4 ring-crema sm:left-1/2"
              />

              <Reveal
                delay={100}
                className={`sm:flex sm:items-center sm:gap-12 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="sm:w-1/2">
                  <MilestonePhoto
                    src={milestone.photo}
                    alt={milestone.title}
                    position={milestone.photoPosition}
                  />
                </div>

                <div
                  className={`mt-5 sm:mt-0 sm:w-1/2 ${
                    isEven ? "sm:text-left" : "sm:text-right"
                  }`}
                >
                  <p className="font-serif-display text-2xl italic text-dorado">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1.5 font-serif-display text-2xl leading-tight text-tinta sm:text-3xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-tinta-suave">
                    {milestone.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
