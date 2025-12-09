"use client"

import { useQuery } from "@tanstack/react-query"
import { SpotifyArtist, SpotifyTrack } from "@/lib/spotify"

interface ArtistTracksResponse {
  artist: SpotifyArtist
  tracks: SpotifyTrack[]
}

async function fetchArtistTracks(artistName: string): Promise<ArtistTracksResponse> {
  const response = await fetch(`/api/artist/${encodeURIComponent(artistName)}`)
  
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || "Failed to fetch artist tracks")
  }
  
  return response.json()
}

export function useArtistTracks(artistName: string | null) {
  return useQuery({
    queryKey: ["artist-tracks", artistName],
    queryFn: () => fetchArtistTracks(artistName!),
    enabled: !!artistName,
  })
}

