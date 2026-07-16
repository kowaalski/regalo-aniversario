import { SectionHeader } from "@/components/SectionHeader";
import { SongCard } from "@/components/SongCard";
import { Reveal } from "@/components/Reveal";
import { getSongs } from "@/lib/queries";

export default function SongsPage() {
  const songs = getSongs();

  return (
    <div>
      <SectionHeader
        eyebrow="Dellafuente"
        title="Nuestra banda sonora"
        description="Ninguna suena sola: dale al play si quieres escucharla."
        tone="terracota"
      />

      <div className="mx-auto grid max-w-3xl gap-5 px-4 pb-24 sm:grid-cols-2 sm:px-6">
        {songs.map((song, index) => (
          <Reveal key={song.id} delay={index * 60}>
            <SongCard song={song} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
