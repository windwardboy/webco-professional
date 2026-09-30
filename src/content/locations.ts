import type { ContentImage, Faq } from "./types";

export type TrainingLocation = {
  slug: string;
  name: string;
  town: string;
  region: string;
  summary: string;
  context: string;
  addressLines: readonly string[];
  directions: string;
  facilities: readonly string[];
  faqs: readonly Faq[];
  image?: ContentImage;
};

/**
 * Sample training locations for the demonstration.
 *
 * To add a location, add an object here, then list its slug on the courses
 * that are actually offered there. The location page is generated from this
 * list. Publish a page only for a genuine training site.
 */
export const locations: readonly TrainingLocation[] = [
  {
    slug: "bristol",
    name: "Bristol",
    town: "Bristol",
    region: "Bristol",
    summary: "The widest sample course list, including articulated training and ADR.",
    context:
      "Set out as the main example site. Articulated vehicles, rigid vehicles and classroom modules are described here because those courses are linked to Bristol.",
    addressLines: ["Example Yard", "Sample Road", "Bristol"],
    directions:
      "Treated as a yard with room for articulated vehicles on the edge of the city. A live site would give real approach directions. None are published here.",
    facilities: [
      "Yard space marked for articulated combinations",
      "Space for rigid vehicles",
      "A classroom for periodic and specialist modules",
      "Car parking",
    ],
    faqs: [
      {
        question: "Which courses are listed here?",
        answer: "Category C+E, Category C, Driver CPC and ADR.",
      },
      {
        question: "How do I get directions?",
        answer: "The address is an example. Directions would be sent when a visit is confirmed.",
      },
    ],
  },
  {
    slug: "taunton",
    name: "Taunton",
    town: "Taunton",
    region: "Somerset",
    summary: "Rigid, C1 and periodic Driver CPC. Articulated training is not listed here.",
    context:
      "Set out as a Somerset site for rigid vehicles, C1 and classroom modules. The course list is shorter than Bristol on purpose.",
    addressLines: ["Example Depot", "Sample Lane", "Taunton"],
    directions:
      "Treated as a smaller yard for rigid and 7.5 tonne vehicles. Approach details would be sent after an enquiry. This is not a real address.",
    facilities: [
      "A smaller yard for rigid and 7.5 tonne vehicles",
      "Classroom space for Driver CPC",
      "Car parking",
    ],
    faqs: [
      {
        question: "Which courses are listed here?",
        answer: "Category C, Category C1 and Driver CPC. Articulated training and ADR are not listed at Taunton.",
      },
      {
        question: "How do I get directions?",
        answer: "The address is an example. Directions would be sent when a visit is confirmed.",
      },
    ],
  },
  {
    slug: "exeter",
    name: "Exeter",
    town: "Exeter",
    region: "Devon",
    summary: "Licence training for articulated, rigid and 7.5 tonne vehicles.",
    context:
      "Set out as a Devon site for practical licence training, including articulated vehicles. Classroom courses are not linked to Exeter.",
    addressLines: ["Example Yard", "Sample Way", "Exeter"],
    directions:
      "Treated as a yard that can take an articulated combination as well as lighter vehicles. No real approach route is published.",
    facilities: [
      "Yard space for an articulated combination",
      "A separate area for lighter vehicles",
      "Car parking",
      "No classroom listed — periodic modules are not offered here",
    ],
    faqs: [
      {
        question: "Which courses are listed here?",
        answer: "Category C+E, Category C and Category C1. Driver CPC and ADR are not listed at Exeter.",
      },
      {
        question: "How do I get directions?",
        answer: "The address is an example. Directions would be sent when a visit is confirmed.",
      },
    ],
  },
];
