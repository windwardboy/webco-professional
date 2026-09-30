import type { Faq } from "./types";

export const courseGroups = [
  {
    id: "licence",
    label: "Licence training",
    intro: "Practical training towards a goods-vehicle entitlement. Sample outlines only — durations and fees are confirmed when you enquire.",
  },
  {
    id: "periodic",
    label: "Periodic training",
    intro: "Modules for professional drivers who need to keep Driver CPC hours current. No approved module title is invented here.",
  },
  {
    id: "specialist",
    label: "Specialist training",
    intro: "Further training that sits alongside the licence. On this demonstration it is offered at one site only.",
  },
] as const;

export type CourseCategory = (typeof courseGroups)[number]["id"];

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  summary: string;
  audience: string;
  prerequisites: readonly string[];
  format: string;
  licenceInfo: string;
  includes: readonly string[];
  /** Must match a slug in locations.ts. This is the only place the relationship is stored. */
  locationSlugs: readonly string[];
  relatedSlugs: readonly string[];
  faqs: readonly Faq[];
};

/**
 * Sample courses for the demonstration.
 *
 * To add a course, add an object to this list. The course page, catalogue,
 * enquiry form and footer links are generated from it. Do not create a new layout.
 * List only the locations where that course is genuinely offered.
 */
export const courses: readonly Course[] = [
  {
    slug: "category-c-e",
    title: "Category C+E",
    shortTitle: "C+E",
    category: "licence",
    summary: "Articulated and drawbar training for drivers who already hold Category C.",
    audience:
      "Drivers who already hold Category C and need the trailer entitlement for articulated lorries or drawbar outfits.",
    prerequisites: [
      "Category C",
      "A current driving licence",
      "Medical fitness for the entitlement being taken",
    ],
    format:
      "Yard work for coupling, uncoupling and reversing, then on-road driving. Preparation for the practical test is part of the training. Dates are agreed when you enquire.",
    licenceInfo:
      "Category C+E adds a trailer to an existing Category C licence. The practical test covers the trailer work and the road drive. Fees, durations and test dates are not published on this demonstration.",
    includes: [
      "Coupling and uncoupling practice",
      "Reversing and manoeuvres with a trailer",
      "On-road driving",
      "Preparation for the practical test",
    ],
    locationSlugs: ["bristol", "exeter"],
    relatedSlugs: ["category-c", "adr"],
    faqs: [
      {
        question: "Do I need Category C first?",
        answer: "Yes. This sample course is for drivers who already hold Category C.",
      },
      {
        question: "Where is it offered?",
        answer: "On this demonstration, Bristol and Exeter. It is not listed at Taunton.",
      },
      {
        question: "Are test fees shown here?",
        answer: "No. Fees, durations and dates are confirmed when you enquire.",
      },
    ],
  },
  {
    slug: "category-c",
    title: "Category C",
    shortTitle: "Category C",
    category: "licence",
    summary: "Rigid lorry training for drivers moving up from a car licence.",
    audience:
      "People who want to drive rigid goods vehicles over 3.5 tonnes. A category B car licence is the usual starting point. Medical and theory steps sit alongside the practical training.",
    prerequisites: [
      "Category B is the usual starting point",
      "A current driving licence",
      "Medical and theory requirements, which depend on the driver's circumstances",
    ],
    format:
      "Familiarisation with a rigid goods vehicle, reversing and off-road manoeuvres, then on-road driving. Dates are agreed when you enquire.",
    licenceInfo:
      "Category C is the rigid goods-vehicle entitlement above 3.5 tonnes. Theory, medical and practical steps are explained at enquiry. This page does not quote fees.",
    includes: [
      "Familiarisation with a rigid goods vehicle",
      "Reversing and off-road manoeuvres",
      "On-road driving",
      "Guidance on the practical test",
    ],
    locationSlugs: ["bristol", "taunton", "exeter"],
    relatedSlugs: ["c1", "category-c-e"],
    faqs: [
      {
        question: "Is this the same as C1?",
        answer: "No. Category C is the rigid entitlement over 3.5 tonnes. C1 covers vehicles between 3.5 and 7.5 tonnes.",
      },
      {
        question: "Where is it offered?",
        answer: "Bristol, Taunton and Exeter on this demonstration.",
      },
    ],
  },
  {
    slug: "c1",
    title: "Category C1",
    shortTitle: "C1",
    category: "licence",
    summary: "Training for vehicles between 3.5 and 7.5 tonnes.",
    audience:
      "Drivers who need a medium-sized vehicle, such as some horseboxes, motorhomes and lighter trucks. What training is required depends on the current licence, including when the car test was passed.",
    prerequisites: [
      "A check of what the current licence already allows",
      "A current driving licence",
      "Medical requirements where a test is needed",
    ],
    format:
      "A licence check first, then vehicle familiarisation, manoeuvres and on-road driving where training is required. Some drivers need less training than others. That is confirmed individually.",
    licenceInfo:
      "Category C1 covers vehicles between 3.5 and 7.5 tonnes. Whether a practical test is required depends on the current licence. This page does not guess which route applies.",
    includes: [
      "A check of what the current licence already allows",
      "Vehicle familiarisation and manoeuvres",
      "On-road driving",
      "Preparation for the practical test, where one is required",
    ],
    locationSlugs: ["taunton", "exeter"],
    relatedSlugs: ["category-c", "driver-cpc"],
    faqs: [
      {
        question: "Do I definitely need a test?",
        answer:
          "Not always. It depends on the current licence, including when the car test was passed. The check happens before training is agreed.",
      },
      {
        question: "Where is it offered?",
        answer: "Taunton and Exeter. It is not listed at Bristol on this demonstration.",
      },
    ],
  },
  {
    slug: "driver-cpc",
    title: "Driver CPC",
    shortTitle: "Driver CPC",
    category: "periodic",
    summary: "Periodic training modules for professional lorry and bus drivers.",
    audience:
      "Professional drivers who need to keep their Driver Qualification Card current. Periodic training is usually 35 hours every five years.",
    prerequisites: [
      "A professional lorry or bus entitlement",
      "A reason to add periodic hours, which is confirmed when you enquire",
    ],
    format:
      "Classroom periodic training. A live site would name the module, the hours and the date. None of those are invented here.",
    licenceInfo:
      "Periodic Driver CPC is usually 35 hours over five years. This demonstration does not list an approved module title, a course code or a centre number.",
    includes: [
      "A clear description of the module topic, on a live site",
      "Who the session is for",
      "How the hours fit the five-year requirement",
      "A simple way to ask about dates",
    ],
    locationSlugs: ["bristol", "taunton"],
    relatedSlugs: ["adr", "category-c"],
    faqs: [
      {
        question: "Which module is this?",
        answer: "No module is named. A client site would publish the real topic, hours and date.",
      },
      {
        question: "Where is it offered?",
        answer: "Bristol and Taunton. It is not listed at Exeter.",
      },
    ],
  },
  {
    slug: "adr",
    title: "ADR",
    shortTitle: "ADR",
    category: "specialist",
    summary: "Training for drivers who carry dangerous goods by road.",
    audience:
      "Drivers who need ADR training for the carriage of dangerous goods. A live site would say whether that means packages or tanks, and whether it is an initial course or a refresher.",
    prerequisites: [
      "A relevant driving entitlement for the vehicle being used",
      "A note of which ADR classes are needed — not stated on this demonstration",
    ],
    format:
      "Specialist classroom training, with practical elements only where the real course includes them. This demonstration does not publish a syllabus code.",
    licenceInfo:
      "ADR relates to the carriage of dangerous goods by road. This page does not claim an approved centre, and it does not state which classes are taught.",
    includes: [
      "Confirmation of initial or refresher training, on a live site",
      "Confirmation of packages or tanks, on a live site",
      "The classes covered, named only when they are real",
      "A way to ask which site can run the course",
    ],
    locationSlugs: ["bristol"],
    relatedSlugs: ["driver-cpc", "category-c-e"],
    faqs: [
      {
        question: "Is this an approved ADR centre?",
        answer: "No approval is claimed. This is sample copy on a demonstration website.",
      },
      {
        question: "Where is it offered?",
        answer: "Bristol only, on this demonstration.",
      },
    ],
  },
];
