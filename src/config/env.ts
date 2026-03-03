/**
 * Environment variable validation and access
 */

export const env = {
  // Public (client-side) variables
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  // Server-only variables (access only in server components / API routes)
  // DATABASE_URL: process.env.DATABASE_URL,
  // JWT_SECRET: process.env.JWT_SECRET,
} as const;
