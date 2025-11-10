import type { Newsletter } from "@/types";
import { groupBySite } from "@/lib/utils";

let counter = 0;

const buildNewsletter = (
  overrides: Partial<Newsletter> = {},
): Newsletter => ({
  id: `newsletter-${counter++}`,
  title: "Sample",
  description: "desc",
  image: "https://via.placeholder.com/150",
  site: "DEN",
  subscriptions: [],
  ...overrides,
});

describe("groupBySite", () => {
  it("groups newsletters by their site value", () => {
    const items = [
      buildNewsletter({ id: "1", site: "DEN" }),
      buildNewsletter({ id: "2", site: "DAN" }),
      buildNewsletter({ id: "3", site: "DEN" }),
    ];

    const grouped = groupBySite(items);

    expect(Object.keys(grouped)).toEqual(["DEN", "DAN"]);
    expect(grouped["DEN"]).toHaveLength(2);
    expect(grouped["DAN"]).toHaveLength(1);
  });

  it("returns an empty object when no newsletters are provided", () => {
    expect(groupBySite([])).toEqual({});
  });
});
