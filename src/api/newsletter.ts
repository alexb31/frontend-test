import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import type { Newsletter } from "@/types";

export const fetchNewsletters = async (): Promise<Newsletter[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NEWSLETTER_ITEMS);
    }, 1000);
  });
};
