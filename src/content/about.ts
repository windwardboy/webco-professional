export type AboutSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const aboutIntro = {
  eyebrow: "About",
  title: "About Webco Professional",
  lede: "We train drivers for the licences and qualifications that professional lorry work needs, from our bases in Bristol, Taunton and Exeter.",
};

export const aboutSections: readonly AboutSection[] = [
  {
    id: "story",
    heading: "What we train",
    paragraphs: [
      "We provide practical training for Category C rigid lorries and Category C+E articulated and drawbar work, periodic Driver CPC for working drivers, and ADR and Operator CPC courses for drivers and transport managers.",
      "Licence training is delivered in the vehicle, in the yard and on the road. Driver CPC, ADR and Operator CPC are classroom courses. Each course page shows which of our bases runs it.",
    ],
  },
  {
    id: "philosophy",
    heading: "How we train",
    paragraphs: [
      "We explain the entitlement, the practical work and the next step before anyone is asked to commit, so you know what each session covers and what comes after it.",
      "Licence training is built around time in the vehicle. Our classroom courses are described just as plainly: who they are for, what they cover and what they lead to.",
    ],
  },
  {
    id: "experience",
    heading: "Who we train",
    paragraphs: [
      "Learners come to us from different starting points: drivers moving up from a car licence to their first lorry, Category C drivers adding a trailer, working drivers who need periodic hours, and managers preparing for the transport-manager qualification.",
      "We begin by looking at the licence you already hold and the work you want to do, then recommend the course that fits.",
    ],
  },
  {
    id: "qualifications",
    heading: "Official requirements",
    paragraphs: [
      "Licence entitlements, the medical, the theory and practical tests, and Driver CPC are set by the DVLA and DVSA. We explain how those requirements apply to each course, and point you to the official guidance for your own circumstances.",
    ],
  },
];
