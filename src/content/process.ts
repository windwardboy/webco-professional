import type { Step } from "./types";

export const trainingJourney: readonly Step[] = [
  {
    title: "Say what you want to drive",
    text: "Category C, Category C+E, Driver CPC, or one of the further courses. If you are not sure, say so.",
  },
  {
    title: "Check the licence you hold",
    text: "The current entitlement decides the medical, theory and practical steps. Nothing on this site confirms that a particular person qualifies.",
  },
  {
    title: "Train at the base that offers it",
    text: "Each course lists the example bases where it runs. A base does not list a course it does not offer.",
  },
  {
    title: "Prepare for the next step",
    text: "That may be a practical test or periodic training hours. How booking works is explained when you enquire. No result is claimed here.",
  },
];

export const licenceStages: readonly Step[] = [
  {
    title: "Medical",
    text: "A medical report is normally required before a lorry practical test. The current rules depend on the driver. This site does not confirm that anyone will pass.",
  },
  {
    title: "Theory",
    text: "Theory tests sit alongside time in the vehicle for a first lorry licence. Which tests apply depends on the entitlement being taken.",
  },
  {
    title: "Practical training",
    text: "Yard manoeuvres and road driving, in the kind of vehicle the course is for. No timetable is published here.",
  },
  {
    title: "Practical test",
    text: "The test covers vehicle control and driving on the road. Test content is set officially. This site does not claim a pass.",
  },
];

export const afterEnquiry: readonly Step[] = [
  {
    title: "You get in touch",
    text: "Send the form, call, or email. Say which course you are asking about, and which example base you prefer, or say that you are not sure.",
  },
  {
    title: "We reply",
    text: "Using the contact method you chose. This demonstration does not promise a response time.",
  },
  {
    title: "You agree what to discuss",
    text: "The licence, the course and what you already hold. Nothing is booked from the form alone.",
  },
  {
    title: "Directions are not on this page",
    text: "These are example bases, so no street address is published. Ask when you enquire.",
  },
];
