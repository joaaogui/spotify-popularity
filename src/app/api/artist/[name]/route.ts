import { NextResponse } from "next/server"
import { getArtistTopTracks } from "@/lib/spotify"

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  try {
    const artistName = decodeURIComponent(params.name)
    const data = await getArtistTopTracks(artistName)
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching artist:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch artist" },
      { status: 500 }
    )
  }
}

