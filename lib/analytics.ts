export type LamimsEvent =
  | "experience_entered"
  | "guided_tour_started"
  | "guided_tour_completed"
  | "hotspot_opened"
  | "service_viewed"
  | "team_member_viewed"
  | "instagram_clicked"
  | "directions_clicked"
  | "booking_clicked";

export function trackEvent(event: LamimsEvent, payload: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  const detail = { event, ...payload, timestamp: Date.now() };
  window.dispatchEvent(new CustomEvent("lamims:analytics", { detail }));
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) dataLayer.push(detail);
}
