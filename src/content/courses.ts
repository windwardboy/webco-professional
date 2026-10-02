import type { Step } from "./types";

export type CourseGroup = "core" | "additional";
export type CourseKind = "licence" | "periodic" | "vocational";

export type Course = {
  id: string;
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  kicker: string;
  group: CourseGroup;
  kind: CourseKind;
  published: boolean;
  /** Labelled on the page. Core demo courses stay under the site-wide demonstration bar. */
  sample: boolean;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  explanation: string;
  audience: string;
  permits: readonly string[];
  permitsNote: string;
  eligibility: readonly string[];
  includes: readonly string[];
  steps: readonly Step[];
  format: string;
  /** Empty until a real duration is supplied. */
  duration: string;
  /** Empty until a real fee is supplied. */
  priceNote: string;
  locationIds: readonly string[];
  instructorIds: readonly string[];
  vehicleIds: readonly string[];
  facilityIds: readonly string[];
  relatedCourseIds: readonly string[];
  relatedGuideIds: readonly string[];
  testimonialIds: readonly string[];
};

export const courseGroups = [
  { id: "core", label: "HGV training" },
  { id: "additional", label: "Further training" },
] as const;

const licenceSteps = (name: string): readonly Step[] => [
  {
    title: `Enquire about ${name}`,
    text: "Say which course you want, which base you prefer, and how you would like to be contacted.",
  },
  {
    title: "Check the licence you hold",
    text: "We check the entitlement you hold before training is arranged, so the plan fits your starting point.",
  },
  {
    title: "Train in the vehicle",
    text: "Practical time covers the vehicle, the manoeuvres and the road driving.",
  },
  {
    title: "Prepare for the practical test",
    text: "We explain how the test is booked when you enquire, and what to expect on the day.",
  },
];

export const courses: readonly Course[] = [
  {
    id: "category-c",
    slug: "category-c",
    path: "/category-c-training/",
    title: "Category C",
    shortTitle: "Category C",
    navLabel: "Category C",
    kicker: "Rigid lorries",
    group: "core",
    kind: "licence",
    published: true,
    sample: false,
    metaTitle: "Category C training",
    metaDescription:
      "Category C rigid lorry training at our Bristol, Taunton and Exeter bases. Who it is for, what you can drive, and how to ask for a quote.",
    summary: "Practical training for rigid goods vehicles over 3.5 tonnes, for drivers moving up from a car licence.",
    explanation:
      "Category C is the rigid lorry entitlement. It covers goods vehicles over 3.5 tonnes maximum authorised mass that are not articulated. Training is the practical preparation for that test: the vehicle, the manoeuvres and the road driving.",
    audience:
      "People who want to drive a rigid goods vehicle over 3.5 tonnes. A category B car licence is the usual starting point. Medical and theory steps sit alongside the practical training.",
    permits: [
      "Rigid goods vehicles such as box wagons, tippers, flatbeds and similar lorries",
      "Not an articulated lorry or a drawbar outfit. That is Category C+E",
    ],
    permitsNote: "Training takes place in a rigid goods vehicle suited to the Category C practical test.",
    eligibility: [
      "A category B car licence is the usual starting point",
      "A medical assessment is normally required before a lorry practical test",
      "Theory tests sit alongside the time in the vehicle",
      "Paid driving work can also require Driver CPC, which is a separate qualification",
      "Age and medical requirements depend on the individual and the work, so we check these with you when you enquire",
    ],
    includes: [
      "Familiarisation with a rigid goods vehicle",
      "Reversing and off-road manoeuvres",
      "On-road driving",
      "Guidance on what the practical test involves",
    ],
    steps: licenceSteps("Category C"),
    format: "Yard work and road driving, run from each base that offers Category C. We agree dates with you when you enquire.",
    duration: "",
    priceNote: "",
    locationIds: ["bristol", "taunton", "exeter"],
    instructorIds: ["driving"],
    vehicleIds: ["rigid"],
    facilityIds: ["yard", "parking"],
    relatedCourseIds: ["category-ce", "driver-cpc"],
    relatedGuideIds: ["which-hgv-licence", "how-hgv-training-works", "hgv-medical", "hgv-driving-test"],
    testimonialIds: ["sample-c"],
  },
  {
    id: "category-ce",
    slug: "category-ce",
    path: "/category-ce-training/",
    title: "Category C+E",
    shortTitle: "Category C+E",
    navLabel: "Category C+E",
    kicker: "Articulated and drawbar",
    group: "core",
    kind: "licence",
    published: true,
    sample: false,
    metaTitle: "Category C+E training",
    metaDescription:
      "Category C+E trailer training for drivers who already hold Category C, covering articulated and drawbar combinations, at our Bristol and Exeter bases.",
    summary: "Trailer training for drivers who already hold Category C and need the articulated or drawbar entitlement.",
    explanation:
      "Category C+E adds a trailer to the rigid entitlement. It is the licence used for articulated lorries and for drawbar combinations. It is not the first step up from a car licence.",
    audience: "Drivers who already hold Category C and need to add the trailer entitlement.",
    permits: ["Articulated goods vehicles", "Rigid lorries towing a drawbar trailer"],
    permitsNote: "Coupling and uncoupling are practised in the yard before you drive the combination on the road.",
    eligibility: [
      "Category C is the usual entitlement held before C+E training",
      "The licence you hold is checked before training is arranged",
      "Any medical or theory steps that still apply are explained at that point",
      "This page is general guidance, and we confirm eligibility with you individually when you enquire",
    ],
    includes: [
      "Coupling and uncoupling",
      "Reversing and manoeuvres with a trailer",
      "On-road driving with the combination",
      "Guidance on what the practical test involves",
    ],
    steps: licenceSteps("Category C+E"),
    format:
      "Yard work for coupling, uncoupling and reversing, then on-road driving. Offered at the bases shown on this page.",
    duration: "",
    priceNote: "",
    locationIds: ["bristol", "exeter"],
    instructorIds: ["driving"],
    vehicleIds: ["artic"],
    facilityIds: ["yard", "parking"],
    relatedCourseIds: ["category-c", "driver-cpc"],
    relatedGuideIds: ["category-c-vs-category-ce", "hgv-driving-test", "which-hgv-licence"],
    testimonialIds: ["sample-ce"],
  },
  {
    id: "driver-cpc",
    slug: "driver-cpc",
    path: "/driver-cpc/",
    title: "Driver CPC",
    shortTitle: "Driver CPC",
    navLabel: "Driver CPC",
    kicker: "Professional drivers",
    group: "core",
    kind: "periodic",
    published: true,
    sample: false,
    metaTitle: "Driver CPC training",
    metaDescription:
      "Periodic Driver CPC classroom training for professional lorry and bus drivers, at our Bristol and Taunton bases. A professional qualification, not a vehicle category.",
    summary: "Periodic training for professional drivers who need hours towards a Driver Qualification Card.",
    explanation:
      "Driver CPC is the professional qualification for people who drive lorries or buses for a living. It is not a vehicle category. Category C and Category C+E are the licence entitlements. Driver CPC sits alongside that work for drivers who need a Driver Qualification Card.",
    audience:
      "Professional lorry and bus drivers. Some work is exempt, and that depends on the job. Check current official guidance, or ask when you enquire, before you book.",
    permits: [
      "Periodic hours towards a Driver Qualification Card",
      "Not a licence to drive a larger vehicle. That remains Category C or Category C+E",
    ],
    permitsNote:
      "Periodic Driver CPC is 35 hours of training across a five-year period. Requirements can change, so check current official guidance for your own card.",
    eligibility: [
      "A professional lorry or bus entitlement is the usual starting point for periodic training",
      "Initial Driver CPC is the route for a new professional driver. This course is periodic training only",
      "We confirm which module suits the hours you still need when you enquire",
    ],
    includes: [
      "A classroom periodic training module",
      "Clear guidance on who the session is for",
      "An explanation of how the hours count towards the five-year requirement",
      "Dates agreed with you when you enquire",
    ],
    steps: [
      {
        title: "Enquire about periodic Driver CPC",
        text: "Say that you need periodic hours, and which base you prefer.",
      },
      {
        title: "Confirm it is periodic training",
        text: "Initial CPC and periodic CPC are different. This course is periodic training only.",
      },
      {
        title: "Attend the module",
        text: "A set block of classroom training. We confirm the date and time when you enquire.",
      },
      {
        title: "Keep the record of the hours",
        text: "We explain how your hours are recorded, so you can keep track of them towards your five-year requirement.",
      },
    ],
    format:
      "Classroom periodic training at our Bristol and Taunton bases. We confirm the module and date when you enquire.",
    duration: "",
    priceNote: "",
    locationIds: ["bristol", "taunton"],
    instructorIds: ["classroom"],
    vehicleIds: [],
    facilityIds: ["classroom", "parking"],
    relatedCourseIds: ["category-c", "category-ce", "operator-cpc"],
    relatedGuideIds: ["driver-cpc-explained", "which-hgv-licence"],
    testimonialIds: ["sample-cpc"],
  },
  {
    id: "adr",
    slug: "adr",
    path: "/training/adr/",
    title: "ADR",
    shortTitle: "ADR",
    navLabel: "ADR",
    kicker: "Dangerous goods",
    group: "additional",
    kind: "vocational",
    published: true,
    sample: true,
    metaTitle: "ADR training",
    metaDescription:
      "ADR training for drivers who carry dangerous goods by road, at our Bristol base. Who the course is for and how to ask about dates.",
    summary: "Training for drivers who carry dangerous goods by road.",
    explanation:
      "ADR is the training associated with carrying dangerous goods by road. The course you need depends on what you carry and how it is carried, so we confirm the right one with you before you book.",
    audience:
      "Drivers who need ADR training for the work they do. Whether that is an initial course or a refresher, and which classes apply, is confirmed when you enquire.",
    permits: ["Training towards carrying dangerous goods by road, in the form the course actually covers"],
    permitsNote:
      "The right course depends on the classes of goods you carry and whether they travel in packages or in tanks. We confirm this when you enquire.",
    eligibility: [
      "A driving entitlement suited to the vehicle being used",
      "A clear idea of which classes of dangerous goods you carry",
      "We help you confirm whether ADR applies to the work you do",
    ],
    includes: [
      "A clear explanation of who the course is for",
      "Initial or refresher training, confirmed when you enquire",
      "The classes of dangerous goods the course covers",
      "Classroom training at our Bristol base",
    ],
    steps: [
      {
        title: "Enquire about ADR",
        text: "Say what you carry, or that you are not sure which class applies.",
      },
      {
        title: "Confirm the course type",
        text: "Initial or refresher, packages or tanks, and the classes you need. We agree these with you before you book.",
      },
      {
        title: "Attend the course",
        text: "Classroom training at the base that runs the course.",
      },
      {
        title: "Ask about the certificate",
        text: "We explain how your certificate is issued when you enquire.",
      },
    ],
    format: "Classroom course at our Bristol base. We confirm dates when you enquire.",
    duration: "",
    priceNote: "",
    locationIds: ["bristol"],
    instructorIds: ["classroom"],
    vehicleIds: [],
    facilityIds: ["classroom", "parking"],
    relatedCourseIds: ["driver-cpc", "operator-cpc", "category-c"],
    relatedGuideIds: ["driver-cpc-explained"],
    testimonialIds: ["sample-adr"],
  },
  {
    id: "operator-cpc",
    slug: "operator-cpc",
    path: "/training/operator-cpc/",
    title: "Operator CPC",
    shortTitle: "Operator CPC",
    navLabel: "Operator CPC",
    kicker: "Transport managers",
    group: "additional",
    kind: "vocational",
    published: true,
    sample: true,
    metaTitle: "Operator CPC training",
    metaDescription:
      "Operator CPC preparation for transport managers, at our Bristol and Taunton bases. Separate from Driver CPC.",
    summary: "Preparation for people working towards the transport-manager qualification.",
    explanation:
      "Operator CPC is the qualification associated with being a transport manager on a goods-vehicle operator licence. It is not Driver CPC, and it is not a driving entitlement.",
    audience:
      "People who need the transport-manager qualification, or who want to understand what it covers before they book. It is not periodic driver training.",
    permits: [
      "Preparation for the transport-manager exams, in the form the course actually covers",
      "Not a Driver Qualification Card, and not a Category C or C+E licence",
    ],
    permitsNote:
      "The examining body and the current exam format are set officially, so check the latest guidance. We explain what the preparation covers when you enquire.",
    eligibility: [
      "No driving entitlement is assumed",
      "The difference between Operator CPC and Driver CPC is explained before anyone books",
      "We can talk through whether the qualification applies to your role",
    ],
    includes: [
      "How Operator CPC differs from Driver CPC",
      "What the study covers, in outline",
      "Dates agreed with you when you enquire",
      "Classroom preparation at our Bristol and Taunton bases",
    ],
    steps: [
      {
        title: "Enquire about Operator CPC",
        text: "Say that you mean the transport-manager qualification, not Driver CPC.",
      },
      {
        title: "Confirm the exams you are aiming for",
        text: "We check the current exam format against official guidance, so you know what you are preparing for.",
      },
      {
        title: "Study for the qualification",
        text: "Classroom preparation for the exams. We confirm the timetable when you enquire.",
      },
      {
        title: "Ask how the exam is booked",
        text: "We explain how the exams are booked when you enquire.",
      },
    ],
    format: "Classroom course at our Bristol and Taunton bases. We confirm dates when you enquire.",
    duration: "",
    priceNote: "",
    locationIds: ["bristol", "taunton"],
    instructorIds: ["classroom"],
    vehicleIds: [],
    facilityIds: ["classroom", "parking"],
    relatedCourseIds: ["driver-cpc", "adr"],
    relatedGuideIds: ["driver-cpc-explained"],
    testimonialIds: [],
  },
  {
    id: "category-c1",
    slug: "category-c1",
    path: "/training/category-c1/",
    title: "Category C1",
    shortTitle: "C1",
    navLabel: "Category C1",
    kicker: "7.5 tonnes",
    group: "additional",
    kind: "licence",
    published: false,
    sample: true,
    metaTitle: "Category C1 training",
    metaDescription: "Example Category C1 course. Unpublished on this demonstration.",
    summary: "Example course for vehicles between 3.5 and 7.5 tonnes.",
    explanation: "Category C1 is a different entitlement from Category C. This example is not published as a page.",
    audience: "Drivers who need a vehicle between 3.5 and 7.5 tonnes. What training is required depends on the current licence.",
    permits: ["Vehicles between 3.5 and 7.5 tonnes"],
    permitsNote: "No vehicle is named.",
    eligibility: ["A check of the current licence", "Medical requirements where a test is needed"],
    includes: ["A licence check", "Vehicle familiarisation where training is required"],
    steps: licenceSteps("Category C1"),
    format: "Example practical course. Unpublished on this demonstration.",
    duration: "",
    priceNote: "",
    locationIds: ["taunton", "exeter"],
    instructorIds: ["driving"],
    vehicleIds: ["rigid"],
    facilityIds: ["yard", "parking"],
    relatedCourseIds: ["category-c"],
    relatedGuideIds: ["which-hgv-licence"],
    testimonialIds: [],
  },
  {
    id: "hiab",
    slug: "hiab",
    path: "/training/hiab/",
    title: "HIAB and lorry loader",
    shortTitle: "Lorry loader",
    navLabel: "Lorry loader",
    kicker: "Lorry loader",
    group: "additional",
    kind: "vocational",
    published: false,
    sample: true,
    metaTitle: "Lorry loader training",
    metaDescription: "Example lorry-loader course. Unpublished on this demonstration.",
    summary: "Example course for lorry-loader work.",
    explanation: "Lorry-loader training sits alongside the driving entitlement. This example is not published as a page.",
    audience: "Drivers who use a lorry-mounted loader. No loader make is named.",
    permits: ["Loader operation, in the form the real course covers"],
    permitsNote: "No attachment or tonnage is stated.",
    eligibility: ["A driving entitlement for the vehicle", "The loader work the person actually does"],
    includes: ["Who the course is for", "How to ask which base can run it"],
    steps: licenceSteps("lorry loader"),
    format: "Example course. Unpublished on this demonstration.",
    duration: "",
    priceNote: "",
    locationIds: ["bristol"],
    instructorIds: [],
    vehicleIds: [],
    facilityIds: ["yard", "parking"],
    relatedCourseIds: ["category-c"],
    relatedGuideIds: [],
    testimonialIds: [],
  },
  {
    id: "forklift",
    slug: "forklift",
    path: "/training/forklift/",
    title: "Forklift",
    shortTitle: "Forklift",
    navLabel: "Forklift",
    kicker: "Forklift",
    group: "additional",
    kind: "vocational",
    published: false,
    sample: true,
    metaTitle: "Forklift training",
    metaDescription: "Example forklift course. Unpublished on this demonstration.",
    summary: "Example forklift course.",
    explanation: "Forklift training is a separate vocational course. This example is not published as a page.",
    audience: "People who need forklift training. No truck type is named.",
    permits: ["Forklift operation, in the form the real course covers"],
    permitsNote: "No accreditation is claimed.",
    eligibility: ["The work the person will do"],
    includes: ["Who the course is for"],
    steps: licenceSteps("forklift"),
    format: "Example course. Unpublished on this demonstration.",
    duration: "",
    priceNote: "",
    locationIds: ["taunton"],
    instructorIds: [],
    vehicleIds: [],
    facilityIds: ["yard", "parking"],
    relatedCourseIds: ["category-c"],
    relatedGuideIds: [],
    testimonialIds: [],
  },
  {
    id: "pcv",
    slug: "pcv",
    path: "/training/pcv/",
    title: "PCV",
    shortTitle: "PCV",
    navLabel: "PCV",
    kicker: "Passenger vehicles",
    group: "additional",
    kind: "licence",
    published: false,
    sample: true,
    metaTitle: "PCV training",
    metaDescription: "Example PCV course. Unpublished on this demonstration.",
    summary: "Example passenger-carrying vehicle course.",
    explanation: "PCV training is a different entitlement from Category C. This example is not published as a page.",
    audience: "Drivers who need a passenger-carrying entitlement. No vehicle is named.",
    permits: ["Passenger-carrying vehicles, in the category the real course covers"],
    permitsNote: "No category D or D1 claim is made on this unpublished example.",
    eligibility: ["A check of the current licence", "Medical requirements where they apply"],
    includes: ["Who the course is for"],
    steps: licenceSteps("PCV"),
    format: "Example course. Unpublished on this demonstration.",
    duration: "",
    priceNote: "",
    locationIds: ["exeter"],
    instructorIds: ["driving"],
    vehicleIds: [],
    facilityIds: ["yard", "parking"],
    relatedCourseIds: ["category-c", "driver-cpc"],
    relatedGuideIds: [],
    testimonialIds: [],
  },
];

export function publishedCourses(): Course[] {
  return courses.filter((course) => course.published);
}

export const trainingNav: readonly { href: string; label: string }[] = [
  { href: "/hgv-training/", label: "HGV training" },
  ...publishedCourses()
    .filter((course) => course.group === "core")
    .map((course) => ({ href: course.path, label: course.navLabel })),
  { href: "/training/", label: "All training" },
];
