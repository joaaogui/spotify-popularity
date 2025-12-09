"use client"

import { SpotifyTrack } from "@/lib/spotify"
import { DataTable } from "./data-table"
import { columns } from "./columns"

interface TracksTableProps {
  tracks: SpotifyTrack[]
}

export function TracksTable({ tracks }: TracksTableProps) {
  return <DataTable columns={columns} data={tracks} />
}

