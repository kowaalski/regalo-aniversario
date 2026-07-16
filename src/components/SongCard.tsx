import type { Song } from "@/lib/queries";

export function SongCard({ song }: { song: Song }) {
  return (
    <div className="rounded-3xl border border-terracota/15 bg-cal p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-6">
      <h3 className="font-serif-display text-xl text-tinta">{song.title}</h3>

      <div className="mt-4">
        {song.spotify_track_id ? (
          <iframe
            title={song.title}
            src={`https://open.spotify.com/embed/track/${song.spotify_track_id}`}
            width="100%"
            height="152"
            loading="lazy"
            style={{ borderRadius: 16, border: 0 }}
            allow="encrypted-media"
          />
        ) : (
          <div className="flex h-[152px] items-center justify-center rounded-2xl border border-dashed border-terracota/25 bg-crema/60 px-4 text-center text-sm text-tinta-suave">
            TODO: añade aquí el spotify_track_id de esta canción en
            src/lib/data.ts
          </div>
        )}
      </div>

      <p className="mt-4 leading-relaxed text-tinta-suave">{song.note}</p>
    </div>
  );
}
