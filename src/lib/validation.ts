/**
 * Input validation utilities for API routes
 */

export interface ValidationResult {
  valid: boolean;
  error?: string;
  sanitized?: string;
}

// Characters allowed in artist names
const ALLOWED_CHARS_REGEX = /^[a-zA-Z0-9\s\-'.:,&!?()$+äöüéèêëàâîïôùûçñ]+$/i;

const MAX_NAME_LENGTH = 200;

/**
 * Validate and sanitize an artist name search query
 */
export function validateArtistName(name: string | null | undefined): ValidationResult {
  if (!name || typeof name !== "string") {
    return { valid: false, error: "Artist name is required" };
  }

  const trimmed = name.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: "Artist name cannot be empty" };
  }

  if (trimmed.length > MAX_NAME_LENGTH) {
    return { 
      valid: false, 
      error: `Name too long (max ${MAX_NAME_LENGTH} characters)` 
    };
  }

  if (!ALLOWED_CHARS_REGEX.test(trimmed)) {
    return { 
      valid: false, 
      error: "Name contains invalid characters" 
    };
  }

  return { valid: true, sanitized: trimmed };
}

/**
 * Create a safe error message for production
 */
export function getSafeErrorMessage(error: unknown, fallback: string): string {
  if (process.env.NODE_ENV === "development") {
    return error instanceof Error ? error.message : fallback;
  }

  if (error instanceof Error) {
    const safeMessages = [
      "Artist not found",
      "No tracks found",
      "Invalid artist ID",
      "Request limit reached",
    ];

    if (safeMessages.some((msg) => error.message.includes(msg))) {
      return error.message;
    }
  }

  return fallback;
}

