export type AboutSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const aboutIntro = {
  eyebrow: "About",
  title: "HGV training from three example bases",
  lede: "Category C, Category C+E and Driver CPC, with ADR and Operator CPC. Bristol, Taunton and Exeter are example locations. No company history is invented here.",
};

export const aboutSections: readonly AboutSection[] = [
  {
    id: "story",
    heading: "What this training covers",
    paragraphs: [
      "Rigid lorries, articulated and drawbar work, and periodic Driver CPC, plus example courses for ADR and Operator CPC.",
      "Each course runs only at the example bases that list it. A town that is merely nearby does not get a page.",
    ],
  },
  {
    id: "philosophy",
    heading: "Training approach",
    paragraphs: [
      "The entitlement, the practical work and the next step are explained before anyone is asked to commit.",
      "Time in the vehicle, or a clearly described classroom course, matters more than a list of claims.",
    ],
  },
  {
    id: "experience",
    heading: "Experience",
    paragraphs: ["Example wording only. No years of trading, no learner numbers and no pass rate are shown."],
  },
  {
    id: "qualifications",
    heading: "Qualifications and accreditations",
    paragraphs: [
      "None are shown. No approval number, DVSA status or accreditation badge is claimed on this demonstration.",
    ],
  },
];
