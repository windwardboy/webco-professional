export type GuideLink = {
  href: string;
  label: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
  links?: readonly GuideLink[];
};

export type Guide = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  featured: boolean;
  sections: readonly GuideSection[];
  relatedCourseIds: readonly string[];
  relatedGuideIds: readonly string[];
};

export const guides: readonly Guide[] = [
  {
    slug: "which-hgv-licence",
    path: "/guides/which-hgv-licence/",
    title: "Which HGV licence do I need?",
    metaTitle: "Which HGV licence do I need?",
    metaDescription:
      "How Category C, Category C+E and Driver CPC differ, and where Category C1 sits. General guidance, not an eligibility check.",
    intro:
      "The licence depends on the vehicle you want to drive, and on what you already hold. This guide separates the main goods-vehicle entitlements from Driver CPC. We confirm what applies to you when you enquire.",
    featured: true,
    relatedCourseIds: ["category-c", "category-ce", "driver-cpc"],
    relatedGuideIds: ["category-c-vs-category-ce", "driver-cpc-explained", "how-hgv-training-works"],
    sections: [
      {
        id: "start",
        heading: "Start with the vehicle",
        paragraphs: [
          "A car licence is category B. It does not by itself allow you to drive a large goods vehicle. The next entitlement depends on the weight and on whether the vehicle bends in the middle or tows a drawbar trailer.",
          "We provide training for Category C and Category C+E. Category C1, for vehicles from 3.5 to 7.5 tonnes, is a different entitlement.",
        ],
      },
      {
        id: "category-c",
        heading: "Category C",
        paragraphs: [
          "Category C is the usual route onto a rigid lorry over 3.5 tonnes. Box wagons, tippers and flatbeds of that size sit here, as long as they are not articulated and not drawing a trailer that needs C+E.",
          "Medical and theory steps normally sit alongside the practical training. Paid work can also require Driver CPC, which is separate.",
        ],
        links: [{ href: "/category-c-training/", label: "Category C training" }],
      },
      {
        id: "category-ce",
        heading: "Category C+E",
        paragraphs: [
          "Category C+E adds the trailer. It covers articulated lorries and rigid vehicles towing a drawbar trailer. Drivers usually hold Category C before they take it.",
        ],
        links: [{ href: "/category-ce-training/", label: "Category C+E training" }],
      },
      {
        id: "cpc",
        heading: "Driver CPC is not a category",
        paragraphs: [
          "Driver CPC is the professional qualification for many paid lorry and bus driving jobs. It does not replace Category C or C+E. Operator CPC is different again, and is for transport managers rather than for drivers.",
        ],
        links: [
          { href: "/driver-cpc/", label: "Driver CPC" },
          { href: "/hgv-training/#which-licence", label: "Compare the routes" },
        ],
      },
    ],
  },
  {
    slug: "category-c-vs-category-ce",
    path: "/guides/category-c-vs-category-ce/",
    title: "Category C vs Category C+E",
    metaTitle: "Category C vs Category C+E",
    metaDescription:
      "The difference between a rigid lorry entitlement and the trailer entitlement, and which training page to read.",
    intro:
      "Category C and Category C+E are both goods-vehicle entitlements. One is the rigid lorry. The other adds a trailer. They are trained and tested separately.",
    featured: true,
    relatedCourseIds: ["category-c", "category-ce"],
    relatedGuideIds: ["which-hgv-licence", "hgv-driving-test", "how-hgv-training-works"],
    sections: [
      {
        id: "rigid",
        heading: "What Category C covers",
        paragraphs: [
          "A rigid goods vehicle over 3.5 tonnes that is not articulated. The cab and the body are on one chassis. If you are moving up from a car licence, this is the usual first lorry entitlement.",
        ],
        links: [{ href: "/category-c-training/", label: "Category C training" }],
      },
      {
        id: "trailer",
        heading: "What Category C+E adds",
        paragraphs: [
          "A trailer. That includes an articulated lorry, where the trailer attaches through a fifth wheel, and a drawbar outfit, where a rigid lorry tows a trailer. Coupling, uncoupling and reversing with the trailer are the practical difference.",
        ],
        links: [{ href: "/category-ce-training/", label: "Category C+E training" }],
      },
      {
        id: "order",
        heading: "Which one comes first",
        paragraphs: [
          "Category C is the usual entitlement held before C+E training. If you do not hold Category C yet, start there. If you already hold it and the job needs a trailer, look at C+E.",
          "We run Category C at all three of our bases: Bristol, Taunton and Exeter. Category C+E is available at Bristol and Exeter.",
        ],
      },
    ],
  },
  {
    slug: "hgv-medical",
    path: "/guides/hgv-medical/",
    title: "HGV medical explained",
    metaTitle: "HGV medical explained",
    metaDescription:
      "Why a medical sits alongside lorry training, what drivers usually need to check, and where to confirm the current rules.",
    intro:
      "A medical is a normal part of getting a lorry licence. This guide explains where it sits in the process and what to check.",
    featured: false,
    relatedCourseIds: ["category-c", "category-ce"],
    relatedGuideIds: ["how-hgv-training-works", "hgv-driving-test", "which-hgv-licence"],
    sections: [
      {
        id: "why",
        heading: "Why it is required",
        paragraphs: [
          "Vocational driving has medical standards that a car licence does not cover in the same way. A medical report is normally required before a lorry practical test. The detail depends on your age, your health and the entitlement you are applying for.",
          "Current rules are set by DVLA. Check the official guidance for your own circumstances, or ask us when you enquire and we will explain how they apply.",
        ],
      },
      {
        id: "form",
        heading: "The medical report",
        paragraphs: [
          "Drivers are usually asked for a medical examination form, widely known as the D4. A doctor completes it. Eyesight and a range of medical conditions are part of what the form covers. Who may complete it, and how recent it must be, should be taken from current DVLA guidance.",
        ],
      },
      {
        id: "training",
        heading: "Where it sits alongside training",
        paragraphs: [
          "Practical training, theory tests and the medical are separate pieces of the same application. We can explain the order we use, but we cannot predict a medical outcome.",
          "The cost of the medical is separate from the course fee, so allow for it when you plan your training.",
        ],
        links: [
          { href: "/category-c-training/", label: "Category C training" },
          { href: "/guides/how-hgv-training-works/", label: "How HGV training works" },
        ],
      },
    ],
  },
  {
    slug: "how-hgv-training-works",
    path: "/guides/how-hgv-training-works/",
    title: "How HGV training works",
    metaTitle: "How HGV training works",
    metaDescription:
      "The usual order of an HGV training enquiry: the licence you hold, medical and theory, practical training, and the test.",
    intro:
      "HGV training is a sequence, not a single lesson. You say what you want to drive, the licence you already hold is checked, and the medical, theory and practical steps are planned around that. We confirm the length of your course when you enquire.",
    featured: true,
    relatedCourseIds: ["category-c", "category-ce", "driver-cpc"],
    relatedGuideIds: ["which-hgv-licence", "hgv-medical", "hgv-driving-test"],
    sections: [
      {
        id: "enquire",
        heading: "The enquiry",
        paragraphs: [
          "Say which vehicle you want to drive, or that you are not sure. Say which of our bases you prefer. The form asks for a contact method. It does not book a test.",
        ],
        links: [{ href: "/contact/#enquiry", label: "Enquiry form" }],
      },
      {
        id: "check",
        heading: "The licence check",
        paragraphs: [
          "What you already hold changes the route. A car licence towards Category C is a different plan from Category C towards Category C+E. Driver CPC may sit alongside either, and it may not, depending on the work.",
        ],
        links: [{ href: "/hgv-training/#which-licence", label: "Which licence is right for me?" }],
      },
      {
        id: "prepare",
        heading: "Medical, theory and the vehicle",
        paragraphs: [
          "A first lorry licence normally includes a medical, theory tests and practical training. The practical work is yard manoeuvres and driving on the road, in a vehicle of the right kind.",
          "Periodic Driver CPC is different. It is a training module for a driver who already holds a professional entitlement, not a first driving test.",
        ],
        links: [
          { href: "/guides/hgv-medical/", label: "HGV medical explained" },
          { href: "/driver-cpc/", label: "Driver CPC" },
        ],
      },
      {
        id: "test",
        heading: "The test",
        paragraphs: [
          "Licence courses lead towards a practical test. We explain how the test is booked when you enquire.",
        ],
        links: [{ href: "/guides/hgv-driving-test/", label: "What happens on an HGV driving test?" }],
      },
    ],
  },
  {
    slug: "driver-cpc-explained",
    path: "/guides/driver-cpc-explained/",
    title: "Driver CPC explained",
    metaTitle: "Driver CPC explained",
    metaDescription:
      "What Driver CPC is, how initial and periodic training differ, and how it relates to Category C and Operator CPC.",
    intro:
      "Driver CPC is the professional qualification for lorry and bus drivers who need a Driver Qualification Card. It is not the same thing as an HGV licence, and it is not Operator CPC.",
    featured: false,
    relatedCourseIds: ["driver-cpc", "operator-cpc", "category-c"],
    relatedGuideIds: ["which-hgv-licence", "how-hgv-training-works"],
    sections: [
      {
        id: "what",
        heading: "What it is",
        paragraphs: [
          "Category C and Category C+E allow you to drive the vehicle. Driver CPC is about driving it professionally. Some jobs are exempt. That depends on the work, so check current official guidance before you assume you need a card.",
        ],
      },
      {
        id: "initial",
        heading: "Initial and periodic",
        paragraphs: [
          "Initial CPC is the qualification a new professional driver takes alongside the licence. Periodic CPC is ongoing training so an existing Driver Qualification Card can stay valid.",
          "Periodic training is 35 hours across a five-year period. The rules for an individual card can change, so check the official position for yours.",
          "Our Driver CPC course is periodic training for drivers who already hold a professional entitlement.",
        ],
        links: [{ href: "/driver-cpc/", label: "Driver CPC training" }],
      },
      {
        id: "operator",
        heading: "Not Operator CPC",
        paragraphs: [
          "Operator CPC is the qualification for a transport manager on an operator licence. It is a different exam and a different job. If that is what you need, use the Operator CPC page rather than a driver module.",
        ],
        links: [{ href: "/training/operator-cpc/", label: "Operator CPC" }],
      },
    ],
  },
  {
    slug: "hgv-driving-test",
    path: "/guides/hgv-driving-test/",
    title: "What happens on an HGV driving test?",
    metaTitle: "What happens on an HGV driving test?",
    metaDescription:
      "What a goods-vehicle practical test covers: vehicle safety questions, manoeuvres and the road drive.",
    intro:
      "The practical test checks that you can control the vehicle and drive it on the road. The detail is set by DVSA and can be updated, so treat this as an outline and check the official description before test day.",
    featured: false,
    relatedCourseIds: ["category-c", "category-ce"],
    relatedGuideIds: ["how-hgv-training-works", "category-c-vs-category-ce", "hgv-medical"],
    sections: [
      {
        id: "safety",
        heading: "Vehicle safety questions",
        paragraphs: [
          "You can be asked to show how you would carry out safety checks on the vehicle, and to explain others. The questions relate to the vehicle you are using for the test.",
        ],
      },
      {
        id: "manoeuvres",
        heading: "Manoeuvres",
        paragraphs: [
          "The off-road part looks at control at low speed. For Category C that is the rigid vehicle. For Category C+E it includes the trailer, which is why coupling and reversing with a trailer are practised in training.",
        ],
        links: [
          { href: "/category-c-training/", label: "Category C training" },
          { href: "/category-ce-training/", label: "Category C+E training" },
        ],
      },
      {
        id: "road",
        heading: "The road drive",
        paragraphs: [
          "The on-road drive looks at how you handle the vehicle in traffic, at junctions and on the kinds of road the test uses. Our road training reflects the area around each base, so you practise on the kinds of road a test is likely to use.",
        ],
      },
      {
        id: "result",
        heading: "Preparing for test day",
        paragraphs: [
          "A training course prepares you for the test, but the result is decided on the day. We explain how the test is booked when you enquire.",
        ],
        links: [{ href: "/guides/how-hgv-training-works/", label: "How HGV training works" }],
      },
    ],
  },
];
