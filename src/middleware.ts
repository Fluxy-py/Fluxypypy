import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js middleware for route protection, redirects, etc.
 */
export function middleware(request: NextRequest) {
  // Example: Protect dashboard routes
  // const token = request.cookies.get("token")?.value;
  // if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
