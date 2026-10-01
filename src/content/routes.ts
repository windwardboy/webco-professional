export type RouteChoice = {
  id: string;
  title: string;
  text: string;
  href: string;
};

/** Static choices. Richer behaviour can replace the links later without a new page. */
export const routeChoices: readonly RouteChoice[] = [
  {
    id: "rigid",
    title: "Drive a rigid lorry",
    text: "Category C, for goods vehicles over 3.5 tonnes.",
    href: "/category-c-training/",
  },
  {
    id: "trailer",
    title: "Add a trailer",
    text: "Category C+E, for articulated lorries and drawbar outfits.",
    href: "/category-ce-training/",
  },
  {
    id: "cpc",
    title: "Keep Driver CPC current",
    text: "Periodic training for professional lorry and bus drivers.",
    href: "/driver-cpc/",
  },
  {
    id: "unsure",
    title: "Not sure which licence",
    text: "Compare Category C, Category C+E and Driver CPC.",
    href: "/hgv-training/#which-licence",
  },
  {
    id: "other",
    title: "ADR or Operator CPC",
    text: "Further vocational courses alongside the HGV licence routes.",
    href: "/training/",
  },
];
