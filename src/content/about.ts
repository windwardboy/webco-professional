export type AboutSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const aboutSections: readonly AboutSection[] = [
  {
    id: "history",
    heading: "Example history",
    paragraphs: [
      "The wording on this page is an example. It does not describe a real training business.",
      "On a live Professional site, this is where an established provider says what they do and where they do it. This demonstration does not invent a founding year.",
    ],
  },
  {
    id: "philosophy",
    heading: "Training philosophy",
    paragraphs: [
      "Explain the licence, the site and the next step before anyone is asked to commit.",
      "Time in the vehicle, or a clearly described classroom module, matters more than a long list of claims.",
    ],
  },
];

export const instructors = [
  {
    id: "rigid-artic",
    title: "Rigid and articulated",
    text: "Example instructor role for Category C and Category C+E. Not a real person, and no career history is invented here.",
  },
  {
    id: "lighter",
    title: "Lighter vehicles",
    text: "Example instructor role for Category C1. Not a real person.",
  },
  {
    id: "classroom",
    title: "Classroom modules",
    text: "Example instructor role for periodic Driver CPC. Not a real person, and no approval number is shown.",
  },
] as const;

export const fleet = [
  {
    id: "rigid",
    title: "Rigid goods vehicles",
    text: "Described for Category C. No fleet size is stated.",
  },
  {
    id: "artic",
    title: "Articulated combinations",
    text: "Described for Category C+E, at the sites that list that course.",
  },
  {
    id: "c1",
    title: "Lighter vehicles",
    text: "Described for Category C1, between 3.5 and 7.5 tonnes.",
  },
  {
    id: "classroom",
    title: "Classroom space",
    text: "Described only at sites that list Driver CPC or ADR.",
  },
] as const;
