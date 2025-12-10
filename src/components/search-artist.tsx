"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchArtistProps {
  className?: string
  compact?: boolean
}

export function SearchArtist({ className, compact = false }: SearchArtistProps) {
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

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Enter artist or band name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`
              ${compact ? "h-9 pl-9 text-sm" : "h-12 pl-10 text-base"}
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
          className={`
            bg-spotify hover:bg-spotify/90 text-spotify-foreground font-semibold
            ${compact ? "h-9 px-4" : "h-12 px-6"}
            transition-all duration-200
            disabled:opacity-50
          `}
        >
          {isPending ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            "Search"
          )}
        </Button>
      </div>
    </form>
  )
}

