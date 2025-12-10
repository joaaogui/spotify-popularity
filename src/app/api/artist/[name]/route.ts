import { NextResponse } from "next/server"
import { getArtistTopTracks } from "@/lib/spotify"
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit"
import { validateArtistName, getSafeErrorMessage } from "@/lib/validation"

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request)
    const rateLimitResult = checkRateLimit(
      `artist:${clientIp}`,
      RATE_LIMITS.artist
    )

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Retry-After": String(rateLimitResult.retryAfter || 60),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateLimitResult.resetTime),
          },
        }
      )
    }

    const { name } = await params
    const decodedName = decodeURIComponent(name)

    // Input validation
    const validation = validateArtistName(decodedName)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400, headers: corsHeaders }
      )
    }

    const data = await getArtistTopTracks(validation.sanitized!)

    return NextResponse.json(data, {
      headers: {
        ...corsHeaders,
        "X-RateLimit-Remaining": String(rateLimitResult.remaining),
        "X-RateLimit-Reset": String(rateLimitResult.resetTime),
        // Cache for 1 hour (Spotify data can change)
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    })
  } catch (error) {
    console.error("Error fetching artist:", error)
    return NextResponse.json(
      { error: getSafeErrorMessage(error, "Failed to fetch artist") },
      { status: 500, headers: corsHeaders }
    )
  }
}
