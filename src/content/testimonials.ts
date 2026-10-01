export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  sample: true;
  courseId?: string;
  locationId?: string;
  story?: string;
};

/** Example quotations for layout only. Not real reviews. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "sample-c",
    quote: "The instruction was calm and practical. I knew which manoeuvres we would work on before each session.",
    attribution: "Example learner, Category C, Taunton",
    sample: true,
    courseId: "category-c",
    locationId: "taunton",
  },
  {
    id: "sample-ce",
    quote: "Coupling the trailer made sense once it was explained in the yard, then practised on the road.",
    attribution: "Example learner, Category C+E, Bristol",
    sample: true,
    courseId: "category-ce",
    locationId: "bristol",
    story:
      "Example story. The learner already held Category C and wanted the trailer entitlement. The write-up is invented for the layout. It names no instructor, no yard and no test result.",
  },
  {
    id: "sample-cpc",
    quote: "The session explained how the hours fit the five-year Driver CPC requirement.",
    attribution: "Example learner, Driver CPC, Bristol",
    sample: true,
    courseId: "driver-cpc",
    locationId: "bristol",
  },
  {
    id: "sample-adr",
    quote: "The course was described clearly, including who it was for, before the day was agreed.",
    attribution: "Example learner, ADR, Bristol",
    sample: true,
    courseId: "adr",
    locationId: "bristol",
  },
];
