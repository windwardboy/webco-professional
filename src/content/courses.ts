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
    text: "The current entitlement is checked before training is arranged. This page does not confirm eligibility.",
  },
  {
    title: "Train in the vehicle",
    text: "Practical time covers the vehicle, the manoeuvres and the road driving.",
  },
  {
    title: "Prepare for the practical test",
    text: "How the test is booked is explained when you enquire. This site does not claim a result.",
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
      "Category C rigid lorry training at the example bases that list it. Who it is for, what you can drive, and how to ask for a quote. No fee or duration is published.",
    summary: "Practical training for rigid goods vehicles over 3.5 tonnes, for drivers moving up from a car licence.",
    explanation:
      "Category C is the rigid lorry entitlement. It covers goods vehicles over 3.5 tonnes maximum authorised mass that are not articulated. Training is the practical preparation for that test: the vehicle, the manoeuvres and the road driving.",
    audience:
      "People who want to drive a rigid goods vehicle over 3.5 tonnes. A category B car licence is the usual starting point. Medical and theory steps sit alongside the practical training.",
    permits: [
      "Rigid goods vehicles such as box wagons, tippers, flatbeds and similar lorries",
      "Not an articulated lorry or a drawbar outfit. That is Category C+E",
    ],
    permitsNote: "The training vehicle is not named. No make or model is shown on this demonstration.",
    eligibility: [
      "A category B car licence is the usual starting point",
      "A medical assessment is normally required before a lorry practical test",
      "Theory tests sit alongside the time in the vehicle",
      "Paid driving work can also require Driver CPC, which is a separate qualification",
      "Age and medical rules depend on the person and the work. This page does not confirm that someone qualifies",
    ],
    includes: [
      "Familiarisation with a rigid goods vehicle",
      "Reversing and off-road manoeuvres",
      "On-road driving",
      "Guidance on what the practical test involves",
    ],
    steps: licenceSteps("Category C"),
    format: "Yard work and road driving from the bases that list Category C. Dates are agreed when you enquire.",
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
    shortTitle: "C+E",
    navLabel: "Category C+E",
    kicker: "Articulated and drawbar",
    group: "core",
    kind: "licence",
    published: true,
    sample: false,
    metaTitle: "Category C+E training",
    metaDescription:
      "Category C+E trailer training for drivers who already hold Category C. Offered at the example bases that list it. No fee or duration is published.",
    summary: "Trailer training for drivers who already hold Category C and need the articulated or drawbar entitlement.",
    explanation:
      "Category C+E adds a trailer to the rigid entitlement. It is the licence used for articulated lorries and for drawbar combinations. It is not the first step up from a car licence.",
    audience: "Drivers who already hold Category C and need to add the trailer entitlement.",
    permits: ["Articulated goods vehicles", "Rigid lorries towing a drawbar trailer"],
    permitsNote: "The unit and the trailer are not named on this demonstration.",
    eligibility: [
      "Category C is the usual entitlement held before C+E training",
      "The licence you hold is checked before training is arranged",
      "Any medical or theory steps that still apply are explained at that point",
      "This page is general guidance. It does not confirm eligibility for an individual",
    ],
    includes: [
      "Coupling and uncoupling",
      "Reversing and manoeuvres with a trailer",
      "On-road driving with the combination",
      "Guidance on what the practical test involves",
    ],
    steps: licenceSteps("Category C+E"),
    format:
      "Yard work for coupling, uncoupling and reversing, then on-road driving. Offered at the example bases that list Category C+E.",
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
      "Periodic Driver CPC for professional drivers, at the example bases that list it. Not a vehicle category. No module code, date or fee is published.",
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
      "Periodic CPC is widely described as 35 hours across five years. Rules change, so a driver should check current official guidance for their own card. This site does not calculate anyone’s hours.",
    eligibility: [
      "A professional lorry or bus entitlement is the usual starting point for periodic training",
      "Initial Driver CPC is the route for a new professional driver, and it is not listed as a course here",
      "No module code, approval number or centre number is published",
    ],
    includes: [
      "A classroom periodic module",
      "Who the session is for",
      "How the hours are described against the five-year requirement",
      "A way to ask about dates",
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
        text: "A set block of training. No timetable is published on this page.",
      },
      {
        title: "Keep the record of the hours",
        text: "How the hours are recorded is explained when you enquire. This page does not check a card.",
      },
    ],
    format:
      "Classroom periodic training at the example bases that list it. A practical element is included only when the real module has one. None is named here.",
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
      "Example ADR course for drivers who carry dangerous goods by road. No classes, approval number, fee or date are published.",
    summary: "Example course for drivers who carry dangerous goods by road.",
    explanation:
      "ADR is the training associated with the carriage of dangerous goods by road. This page is an example course. It does not name classes, tanks or packages, and it does not claim an approval number.",
    audience:
      "Drivers who need ADR training for the work they do. Whether that is an initial course or a refresher, and which classes apply, is confirmed when you enquire.",
    permits: ["Training towards carrying dangerous goods by road, in the form the course actually covers"],
    permitsNote: "Classes, packages and tanks are not listed, because none are specified on this example course.",
    eligibility: [
      "A driving entitlement suited to the vehicle being used",
      "A note of which ADR classes are needed. None are stated here",
      "This example page does not confirm that a particular driver needs ADR",
    ],
    includes: [
      "Who the course is for",
      "Whether it is initial training or a refresher, confirmed when you enquire",
      "The classes covered, named only when they are real",
      "The example base that lists the course",
    ],
    steps: [
      {
        title: "Enquire about ADR",
        text: "Say what you carry, or that you are not sure which class applies.",
      },
      {
        title: "Confirm the course type",
        text: "Initial or refresher, packages or tanks, and the classes. None of those are fixed on this example page.",
      },
      {
        title: "Attend the course",
        text: "Classroom training, with a practical element only where the real course includes one.",
      },
      {
        title: "Ask about the certificate",
        text: "How a certificate is issued is explained when you enquire. No approval is claimed here.",
      },
    ],
    format: "Example classroom course at the base that lists ADR. No syllabus code is published.",
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
      "Example Operator CPC course for transport managers. Separate from Driver CPC. No exam date, fee or pass mark is published.",
    summary: "Example course for people preparing for the transport-manager qualification.",
    explanation:
      "Operator CPC is the qualification associated with being a transport manager on a goods-vehicle operator licence. It is not Driver CPC, and it is not a driving entitlement. This page is an example course. It does not state an exam date, a fee or a pass mark.",
    audience:
      "People who need the transport-manager qualification, or who want to understand what it covers before they book. It is not periodic driver training.",
    permits: [
      "Preparation for the transport-manager exams, in the form the course actually covers",
      "Not a Driver Qualification Card, and not a Category C or C+E licence",
    ],
    permitsNote:
      "The examining body and the current exam format should be checked against official guidance. This example page does not set either.",
    eligibility: [
      "No driving entitlement is assumed",
      "The difference between Operator CPC and Driver CPC is explained before anyone books",
      "This page does not confirm that a person needs the qualification for their licence",
    ],
    includes: [
      "How Operator CPC differs from Driver CPC",
      "What the study covers, in outline",
      "How to ask about dates",
      "The example bases that list the course",
    ],
    steps: [
      {
        title: "Enquire about Operator CPC",
        text: "Say that you mean the transport-manager qualification, not Driver CPC.",
      },
      {
        title: "Confirm the exams you are aiming for",
        text: "The current format is checked against official guidance. It is not stated as a pass mark here.",
      },
      {
        title: "Study for the qualification",
        text: "Classroom preparation. No timetable is published on this example page.",
      },
      {
        title: "Ask how the exam is booked",
        text: "Booking is explained when you enquire. This site does not claim a result.",
      },
    ],
    format: "Example classroom course at the bases that list Operator CPC.",
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
