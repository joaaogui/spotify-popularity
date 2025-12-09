"use client"

import { ColumnDef } from "@tanstack/react-table"
import { SpotifyTrack } from "@/lib/spotify"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export const columns: ColumnDef<SpotifyTrack>[] = [
  {
    id: "position",
    header: () => <span className="text-muted-foreground">#</span>,
    cell: ({ row }) => (
      <div className="w-8 text-center font-mono text-lg text-muted-foreground">
        {row.index + 1}
      </div>
    ),
  },
  {
    id: "cover",
    header: "",
    cell: ({ row }) => {
      const imageUrl = row.original.album.images[0]?.url
      return imageUrl ? (
        <div className="relative h-12 w-12 overflow-hidden rounded-md shadow-md">
          <Image
            src={imageUrl}
            alt={row.original.album.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      ) : (
        <div className="h-12 w-12 rounded-md bg-muted" />
      )
    },
  },
  {
    accessorKey: "name",
    header: "Track",
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <a
          href={row.original.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-spotify transition-colors group inline-flex items-center gap-1.5"
        >
          {row.original.name}
          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <span className="text-sm text-muted-foreground">
          {row.original.album.name}
        </span>
      </div>
    ),
  },
  {
    id: "year",
    header: () => <span className="hidden sm:inline">Year</span>,
    cell: ({ row }) => (
      <span className="hidden sm:inline text-muted-foreground">
        {row.original.album.release_date.substring(0, 4)}
      </span>
    ),
  },
  {
    accessorKey: "popularity",
    header: () => <span className="text-right block">Popularity</span>,
    cell: ({ row }) => {
      const popularity = row.original.popularity
      return (
        <div className="flex items-center justify-end gap-3">
          <div className="hidden sm:block w-24 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-spotify/70 to-spotify rounded-full transition-all duration-500"
              style={{ width: `${popularity}%` }}
            />
          </div>
          <span className="font-mono font-semibold text-spotify w-8 text-right">
            {popularity}
          </span>
        </div>
      )
    },
  },
]

