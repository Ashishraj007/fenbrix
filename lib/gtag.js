// Thin wrapper around GA4's gtag() for firing custom lead/conversion events
// from client components. Safe no-op during server rendering/static export
// and if gtag hasn't loaded yet (e.g. an ad blocker) — never throws.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
