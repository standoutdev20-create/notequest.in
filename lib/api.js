// Server-side client for the Express API (notequest-backend).
// Forwards the visitor's cookies so the API knows who is signed in.
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect, unstable_rethrow } from "next/navigation";

const API_URL = process.env.API_URL || "http://localhost:5050";

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export async function apiFetch(path, init = {}) {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(`${API_URL}/api${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
      ...init.headers,
    },
  });
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(res.status, data.error || `API error ${res.status}`);
  return data;
}

/** The signed-in user, or null. Memoised per request; never throws. */
export const getCurrentUser = cache(async () => {
  try {
    return (await apiFetch("/auth/me")).user;
  } catch (err) {
    unstable_rethrow(err); // let Next.js handle its own control-flow errors
    console.error("[api] /auth/me failed:", err.message);
    return null;
  }
});

export async function requireUser(returnTo = "/") {
  const user = await getCurrentUser();
  if (!user) redirect(`/login?next=${encodeURIComponent(returnTo)}`);
  return user;
}
