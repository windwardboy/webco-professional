import type { Faq, FaqTopic } from "./types";

export const faqTopics: readonly { id: FaqTopic; label: string }[] = [
  { id: "general", label: "HGV training" },
  { id: "licence", label: "Licences" },
  { id: "medical", label: "Medical, theory and testing" },
  { id: "pricing", label: "Pricing and process" },
  { id: "provider", label: "About this website" },
];

export const faqs: readonly Faq[] = [
  {
    id: "which-licence",
    question: "Which licence do I need?",
    answer:
      "Category C is the usual route onto a rigid lorry. Category C+E adds a trailer. Driver CPC is the professional qualification, not a vehicle category. The HGV training page compares them.",
    topics: ["general", "licence"],
    home: true,
    overview: true,
  },
  {
    id: "prices",
    question: "How much does training cost?",
    answer:
      "We quote for each course once we know the licence you hold and the training you need. Medicals, theory tests and the practical test are separate costs where they apply.",
    topics: ["pricing"],
    home: true,
    overview: true,
  },
  {
    id: "where",
    question: "Where does the training take place?",
    answer:
      "At our bases in Bristol, Taunton and Exeter. Not every course runs at every base, so each course page shows where it is offered. We send the site address and joining details when your course is agreed.",
    topics: ["general"],
    home: true,
  },
  {
    id: "c-vs-ce",
    question: "What is the difference between Category C and Category C+E?",
    answer:
      "Category C is the rigid lorry entitlement. Category C+E adds a trailer, for articulated lorries and drawbar outfits. C+E training normally follows Category C.",
    topics: ["licence"],
    home: true,
    overview: true,
  },
  {
    id: "cpc-not-licence",
    question: "Is Driver CPC the same as an HGV licence?",
    answer:
      "No. Category C and Category C+E are vehicle entitlements. Driver CPC is a professional qualification for drivers who need a Driver Qualification Card. Operator CPC is different again: it is for transport managers.",
    topics: ["licence"],
    overview: true,
  },
  {
    id: "eligibility",
    question: "Can you tell me if I am eligible?",
    answer:
      "We can once we know the licence you hold and the work you want to do. The information on this website is general guidance, so we check your own position when you enquire.",
    topics: ["licence"],
    overview: true,
  },
  {
    id: "medical",
    question: "Do I need a medical?",
    answer:
      "A medical report is normally required before a lorry practical test. Whether it applies to you depends on the entitlement and on current DVLA rules.",
    topics: ["medical"],
    home: true,
    overview: true,
  },
  {
    id: "theory",
    question: "Are there theory tests?",
    answer:
      "Yes for a first lorry licence. They sit alongside the practical training. Which tests apply depends on the entitlement. Driver CPC theory is a different set of requirements from the driving-licence theory.",
    topics: ["medical"],
  },
  {
    id: "test",
    question: "What happens on the practical test?",
    answer:
      "The practical test looks at vehicle control, including manoeuvres, and driving on the road. Vehicle safety questions are part of it. The current test is set officially, and our guide to the HGV driving test explains it in more detail.",
    topics: ["medical"],
  },
  {
    id: "after-enquiry",
    question: "What happens after I enquire?",
    answer:
      "You tell us the course you want, your preferred base and how to contact you. We reply using that method to talk through the licence you hold and the next step. The form does not book a test.",
    topics: ["pricing"],
    home: true,
  },
  {
    id: "reviews-real",
    question: "Are the reviews real?",
    answer: "No. The reviews and learner comments on this website are samples written for the demonstration.",
    topics: ["provider"],
  },
  {
    id: "real-business",
    question: "Is Webco Professional a real training company?",
    answer:
      "No. Webco Professional is a demonstration website by Webco Media, showing how a multi-location HGV training provider could present its courses. The courses, bases, reviews and contact details are samples.",
    topics: ["provider"],
  },
  {
    id: "c-drive",
    question: "What does Category C allow me to drive?",
    answer: "Rigid goods vehicles over 3.5 tonnes. It does not cover an articulated lorry or a drawbar trailer. That is Category C+E.",
    topics: ["licence"],
    courseId: "category-c",
  },
  {
    id: "c-duration",
    question: "How long does Category C take, and what does it cost?",
    answer:
      "How long Category C takes depends on your starting point, and the fee depends on the training you need. We confirm both when you enquire. Medicals, theory tests and the practical test are separate costs.",
    topics: ["pricing"],
    courseId: "category-c",
  },
  {
    id: "ce-need-c",
    question: "Do I need Category C before C+E?",
    answer: "Category C is the usual entitlement held before trailer training. If you do not hold it yet, start with Category C.",
    topics: ["licence"],
    courseId: "category-ce",
  },
  {
    id: "ce-where",
    question: "Where is Category C+E available?",
    answer: "At our Bristol and Exeter bases.",
    topics: ["general"],
    courseId: "category-ce",
  },
  {
    id: "cpc-difference",
    question: "What is the difference between initial and periodic Driver CPC?",
    answer:
      "Initial CPC is for a new professional driver. Periodic CPC is ongoing training for someone who already holds a Driver Qualification Card. Our course is periodic training.",
    topics: ["licence"],
    courseId: "driver-cpc",
  },
  {
    id: "adr-who",
    question: "Who needs ADR training?",
    answer:
      "Drivers who carry dangerous goods by road. The course you need depends on the classes of goods and whether they travel in packages or in tanks, and we confirm this when you enquire.",
    topics: ["licence"],
    courseId: "adr",
  },
  {
    id: "operator-vs-driver",
    question: "Is Operator CPC the same as Driver CPC?",
    answer:
      "No. Operator CPC is the transport-manager qualification. Driver CPC is for professional drivers. They are separate courses.",
    topics: ["licence"],
    courseId: "operator-cpc",
  },
  {
    id: "bristol-courses",
    question: "Which courses can I take at Bristol?",
    answer: "Category C, Category C+E, Driver CPC, ADR and Operator CPC.",
    topics: ["general"],
    locationId: "bristol",
  },
  {
    id: "taunton-courses",
    question: "Which courses can I take at Taunton?",
    answer: "Category C, Driver CPC and Operator CPC. Category C+E runs at Bristol and Exeter, and ADR at Bristol.",
    topics: ["general"],
    locationId: "taunton",
  },
  {
    id: "exeter-courses",
    question: "Which courses can I take at Exeter?",
    answer: "Category C and Category C+E. Our classroom courses run at Bristol and Taunton.",
    topics: ["general"],
    locationId: "exeter",
  },
  {
    id: "bristol-address",
    question: "Where is the Bristol base?",
    answer: "Bristol is one of our three training bases. We send the site address and directions when your course is agreed.",
    topics: ["general"],
    locationId: "bristol",
  },
  {
    id: "taunton-address",
    question: "Where is the Taunton base?",
    answer: "Taunton is one of our three training bases. We send the site address and directions when your course is agreed.",
    topics: ["general"],
    locationId: "taunton",
  },
  {
    id: "exeter-address",
    question: "Where is the Exeter base?",
    answer: "Exeter is one of our three training bases. We send the site address and directions when your course is agreed.",
    topics: ["general"],
    locationId: "exeter",
  },
];
