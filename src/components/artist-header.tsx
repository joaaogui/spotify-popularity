import { SpotifyArtist } from "@/lib/spotify"
import Image from "next/image"

interface ArtistHeaderProps {
  artist: SpotifyArtist
  trackCount: number
}

export function ArtistHeader({ artist, trackCount }: ArtistHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
      {/* Artist Image */}
      {artist.images[0] && (
        <div className="relative">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden shadow-2xl shadow-spotify/20">
            <Image
              src={artist.images[0].url}
              alt={artist.name}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full ring-2 ring-spotify/30" />
        </div>
      )}

      {/* Artist Info */}
      <div className="text-center sm:text-left space-y-2">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Artist
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {artist.name}
        </h1>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted/50">
            {trackCount} tracks
          </span>
          {artist.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 rounded-full bg-spotify/10 text-spotify capitalize"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

