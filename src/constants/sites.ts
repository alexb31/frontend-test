export const SITE_ORDER = ["DEN", "DAN", "LAN", "SAN"] as const;

export type SiteCode = (typeof SITE_ORDER)[number];

export const SITE_LABELS: Record<SiteCode, string> = {
  DEN: "Les Echos",
  DAN: "Investir",
  LAN: "Les Echos Week-End",
  SAN: "Les Echos Start",
};
