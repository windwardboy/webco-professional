export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  sample: true;
  courseId?: string;
  locationId?: string;
  story?: string;
};

/** Sample quotations. Not real reviews; each one is tagged as a sample where it is shown. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "sample-c",
    quote: "The instruction was calm and practical. I knew which manoeuvres we would work on before each session.",
    attribution: "Category C learner, Taunton",
    sample: true,
    courseId: "category-c",
    locationId: "taunton",
  },
  {
    id: "sample-ce",
    quote: "Coupling the trailer made sense once it was explained in the yard, then practised on the road.",
    attribution: "Category C+E learner, Bristol",
    sample: true,
    courseId: "category-ce",
    locationId: "bristol",
    story:
      "This learner already held Category C and wanted the trailer entitlement. Coupling and uncoupling were practised in the yard first, followed by reversing and road driving with the combination.",
  },
  {
    id: "sample-cpc",
    quote: "The session explained how the hours fit the five-year Driver CPC requirement.",
    attribution: "Driver CPC learner, Bristol",
    sample: true,
    courseId: "driver-cpc",
    locationId: "bristol",
  },
  {
    id: "sample-adr",
    quote: "The course was described clearly, including who it was for, before the day was agreed.",
    attribution: "ADR learner, Bristol",
    sample: true,
    courseId: "adr",
    locationId: "bristol",
  },
];
