import type { Newsletter } from "@/types";
export type NewslettersBySite = { [site: string]: Newsletter[] };

export const groupBySite = (items: Newsletter[]): NewslettersBySite => {
  const grouped: NewslettersBySite = {};

  for (const item of items) {
    (grouped[item.site] ??= []).push(item);
  }

  return grouped;
};
