import { NextResponse } from "next/server";

// Optimistic check only: send visitors without a login cookie to /login.
// The Express API does the real authorization on every request.
export function proxy(request) {
  if (!request.cookies.has("nq_token")) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/notes/:path*", "/welcome"],
};
