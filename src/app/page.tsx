import Link from "next/link"
import { Logo } from "@/components/logo"
import { SearchArtist } from "@/components/search-artist"
import { ThemeToggle } from "@/components/theme-toggle"
import { SpotifyAttribution } from "@/components/spotify-attribution"

const SUGGESTIONS = ["Taylor Swift", "The Weeknd", "Daft Punk"]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Centered content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-xl space-y-8 text-center">
          {/* Logo */}
          <div className="flex justify-center">
            <Logo size="large" />
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Discover any artist&apos;s{" "}
              <span className="text-spotify">most popular</span>{" "}
              tracks
            </h1>
            <p className="text-muted-foreground">
              Search for an artist and see their tracks ranked by Spotify popularity
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center">
            <SearchArtist className="w-full" />
          </div>

          {/* Hints */}
          <div className="text-sm text-muted-foreground">
            <p>
              Try searching for{" "}
              {SUGGESTIONS.map((suggestion, index) => (
                <span key={suggestion}>
                  <Link
                    href={`/artist/${encodeURIComponent(suggestion)}`}
                    className="text-foreground font-medium hover:text-spotify transition-colors"
                  >
                    {suggestion}
                  </Link>
                  {index < SUGGESTIONS.length - 1 && (index === SUGGESTIONS.length - 2 ? ", or " : ", ")}
                </span>
              ))}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-spotify/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spotify/3 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center border-t border-border/50">
        <SpotifyAttribution />
      </footer>
    </main>
  )
}
