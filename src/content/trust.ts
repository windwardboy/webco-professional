export type TrustPoint = {
  title: string;
  text: string;
};

/** Short labels for the homepage strip. No ratings or pass rates. */
export const trustStrip: readonly string[] = [
  "Category C",
  "Category C+E",
  "Driver CPC",
  "Example bases: Bristol, Taunton, Exeter",
];

export const trustPoints: readonly TrustPoint[] = [
  {
    title: "The course, stated plainly",
    text: "Who it is for, what it leads to, and how the training runs, before anyone is asked to commit.",
  },
  {
    title: "Courses matched to a base",
    text: "Each course lists the example bases that run it. A base does not advertise training it does not offer.",
  },
  {
    title: "Practical and classroom routes",
    text: "Licence training is time in the vehicle. Driver CPC, ADR and Operator CPC are set out as their own courses.",
  },
  {
    title: "A straight enquiry",
    text: "The form asks for a course, a preferred base and how you would like to be contacted. It does not book a test.",
  },
];
