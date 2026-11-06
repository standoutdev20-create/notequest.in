// Fire-and-forget analytics call to the API (POST /api/track).
export function track(type, data = {}) {
  try {
    const body = JSON.stringify({ type, path: window.location.pathname, ...data });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/track", { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true });
    }
  } catch {}
}
