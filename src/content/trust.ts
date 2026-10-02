export type TrustPoint = {
  title: string;
  text: string;
};

/** Short labels for the homepage strip. No ratings or pass rates. */
export const trustStrip: readonly string[] = [
  "Category C and Category C+E",
  "Driver CPC, ADR and Operator CPC",
  "Bristol, Taunton and Exeter",
  "Practical and classroom courses",
];

export const trustPoints: readonly TrustPoint[] = [
  {
    title: "Clear about each course",
    text: "We explain who a course is for, what it leads to and how it runs before you are asked to commit to anything.",
  },
  {
    title: "Courses matched to the right base",
    text: "Each course page shows which of our bases run it, so you only see training you can actually take.",
  },
  {
    title: "Practical and classroom routes",
    text: "Licence training is time in the vehicle. Driver CPC, ADR and Operator CPC are classroom courses, each with its own page.",
  },
  {
    title: "A straightforward enquiry",
    text: "Tell us the course, your preferred base and how to reach you. An enquiry does not book a test or commit you to anything.",
  },
];
