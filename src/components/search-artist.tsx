"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchArtistProps {
  size?: "default" | "large"
  className?: string
}

export function SearchArtist({ size = "default", className }: SearchArtistProps) {
  const [query, setQuery] = useState("")
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    startTransition(() => {
      router.push(`/artist/${encodeURIComponent(query.trim())}`)
    })
  }

  const isLarge = size === "large"

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground ${isLarge ? "h-5 w-5" : "h-4 w-4"}`} />
          <Input
            type="text"
            placeholder="Enter artist or band name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`
              ${isLarge ? "h-14 pl-11 pr-4 text-lg" : "h-10 pl-9 pr-4"}
              bg-card/50 border-border/50 
              focus:border-spotify focus:ring-spotify/20
              placeholder:text-muted-foreground/60
              transition-all duration-200
            `}
            disabled={isPending}
          />
        </div>
        <Button
          type="submit"
          disabled={isPending || !query.trim()}
          size={isLarge ? "lg" : "default"}
          className={`
            bg-spotify hover:bg-spotify/90 text-spotify-foreground font-semibold
            ${isLarge ? "h-14 px-8" : ""}
            transition-all duration-200
            disabled:opacity-50
          `}
        >
          {isPending ? (
            <Loader2 className={`animate-spin ${isLarge ? "h-5 w-5" : "h-4 w-4"}`} />
          ) : (
            "Search"
          )}
        </Button>
      </div>
    </form>
  )
}

