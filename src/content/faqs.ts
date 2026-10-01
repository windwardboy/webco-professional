import type { Faq, FaqTopic } from "./types";

export const faqTopics: readonly { id: FaqTopic; label: string }[] = [
  { id: "general", label: "HGV training" },
  { id: "licence", label: "Licences" },
  { id: "medical", label: "Medical, theory and testing" },
  { id: "pricing", label: "Pricing and process" },
  { id: "provider", label: "This demonstration" },
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
    question: "Do you publish prices?",
    answer: "No fee is listed. Ask for a quote for the course you want. Medicals, theory tests and the practical test are separate where they apply.",
    topics: ["pricing"],
    home: true,
    overview: true,
  },
  {
    id: "where",
    question: "Where does the training take place?",
    answer:
      "At the example bases in Bristol, Taunton and Exeter. Not every course runs at every base. No street address is published.",
    topics: ["general", "provider"],
    home: true,
  },
  {
    id: "reviews-real",
    question: "Are the reviews real?",
    answer: "No. The quotations are examples for the layout. No rating and no review count are shown.",
    topics: ["provider"],
    home: true,
  },
  {
    id: "real-business",
    question: "Is this a real training company?",
    answer:
      "No. This is a demonstration website by Webco Media. The courses, bases, reviews and contact details are examples.",
    topics: ["provider"],
    home: true,
  },
  {
    id: "c-vs-ce",
    question: "What is the difference between Category C and Category C+E?",
    answer:
      "Category C is the rigid lorry entitlement. Category C+E adds a trailer, for articulated lorries and drawbar outfits. C+E training normally follows Category C.",
    topics: ["licence"],
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
    question: "Can this site tell me if I am eligible?",
    answer: "No. It is general guidance. The licence you hold is checked when you enquire.",
    topics: ["licence"],
    overview: true,
  },
  {
    id: "medical",
    question: "Do I need a medical?",
    answer:
      "A medical report is normally required before a lorry practical test. Whether it applies to you depends on the entitlement and on current DVLA rules. This site does not confirm a medical result.",
    topics: ["medical"],
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
      "The practical test looks at vehicle control, including manoeuvres, and driving on the road. Vehicle safety questions are part of it. The current test is set officially. The guide on this site explains that in more detail, and no pass is claimed.",
    topics: ["medical"],
  },
  {
    id: "after-enquiry",
    question: "What happens after I enquire?",
    answer:
      "You choose a course, a preferred example base and a contact method. The form does not book a test, and on this demonstration it does not send a message.",
    topics: ["pricing"],
    home: true,
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
    answer: "No duration and no fee are listed. Both are confirmed when you enquire. Medicals, theory tests and the practical test are separate costs.",
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
    question: "Where is Category C+E listed?",
    answer: "At the Bristol and Exeter example bases. It is not listed at Taunton.",
    topics: ["general"],
    courseId: "category-ce",
  },
  {
    id: "cpc-difference",
    question: "What is the difference between initial and periodic Driver CPC?",
    answer:
      "Initial CPC is for a new professional driver. Periodic CPC is ongoing training for someone who already holds a Driver Qualification Card. The course listed here is periodic training. No module code or date is published.",
    topics: ["licence"],
    courseId: "driver-cpc",
  },
  {
    id: "adr-approval",
    question: "Is this an approved ADR centre?",
    answer: "No approval is claimed. This is an example course. Classes, dates and fees are not listed.",
    topics: ["provider"],
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
    question: "Which courses are listed at the Bristol example base?",
    answer: "Category C, Category C+E, Driver CPC, ADR and Operator CPC.",
    topics: ["general"],
    locationId: "bristol",
  },
  {
    id: "taunton-courses",
    question: "Which courses are listed at the Taunton example base?",
    answer: "Category C, Driver CPC and Operator CPC. Category C+E and ADR are not listed at Taunton.",
    topics: ["general"],
    locationId: "taunton",
  },
  {
    id: "exeter-courses",
    question: "Which courses are listed at the Exeter example base?",
    answer: "Category C and Category C+E. Driver CPC, ADR and Operator CPC are not listed at Exeter.",
    topics: ["general"],
    locationId: "exeter",
  },
  {
    id: "bristol-address",
    question: "Is the Bristol address real?",
    answer: "No. Bristol is an example location. No street address and no map pin are published.",
    topics: ["provider"],
    locationId: "bristol",
  },
  {
    id: "taunton-address",
    question: "Is the Taunton address real?",
    answer: "No. Taunton is an example location. No street address and no map pin are published.",
    topics: ["provider"],
    locationId: "taunton",
  },
  {
    id: "exeter-address",
    question: "Is the Exeter address real?",
    answer: "No. Exeter is an example location. No street address and no map pin are published.",
    topics: ["provider"],
    locationId: "exeter",
  },
];
