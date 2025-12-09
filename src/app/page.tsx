import { Logo } from "@/components/logo"
import { SearchArtist } from "@/components/search-artist"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl space-y-8 animate-slide-up">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo size="large" />
        </div>

        {/* Tagline */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-light text-foreground/90">
            Discover any artist&apos;s{" "}
            <span className="font-semibold text-spotify">most popular</span>{" "}
            tracks
          </h1>
          <p className="text-muted-foreground">
            Search for an artist and see their tracks ranked by Spotify popularity
          </p>
        </div>

        {/* Search */}
        <SearchArtist size="large" className="w-full" />

        {/* Popular searches hint */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground/60">
            Try searching for{" "}
            <span className="text-muted-foreground">Taylor Swift</span>,{" "}
            <span className="text-muted-foreground">The Weeknd</span>, or{" "}
            <span className="text-muted-foreground">Daft Punk</span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-spotify/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spotify/3 rounded-full blur-3xl pointer-events-none" />
      </div>
    </main>
  )
}

