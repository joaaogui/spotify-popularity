import { Music2 } from "lucide-react"

interface LogoProps {
  size?: "default" | "large"
}

export function Logo({ size = "default" }: LogoProps) {
  const isLarge = size === "large"
  
  return (
    <div className="flex items-center gap-3">
      <div className={`
        relative flex items-center justify-center rounded-xl
        bg-gradient-to-br from-spotify to-emerald-600
        ${isLarge ? "h-16 w-16" : "h-10 w-10"}
        shadow-lg shadow-spotify/25
      `}>
        <Music2 className={`text-black ${isLarge ? "h-8 w-8" : "h-5 w-5"}`} />
        <div className="absolute inset-0 rounded-xl bg-white/10" />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight ${isLarge ? "text-3xl" : "text-xl"}`}>
          Spotify
        </span>
        <span className={`text-spotify font-medium ${isLarge ? "text-lg -mt-1" : "text-sm -mt-0.5"}`}>
          Popularity
        </span>
      </div>
    </div>
  )
}

