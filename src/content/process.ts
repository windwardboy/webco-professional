import type { Step } from "./types";

export const trainingJourney: readonly Step[] = [
  {
    title: "Say what you want to drive",
    text: "Category C, Category C+E, Driver CPC, or one of the further courses. If you are not sure, tell us and we will help you choose.",
  },
  {
    title: "We check the licence you hold",
    text: "What you already hold decides the medical, theory and practical steps. We go through it with you before anything is arranged.",
  },
  {
    title: "Train at the right base",
    text: "Each course runs at the bases shown on its page, so you train where the course is offered.",
  },
  {
    title: "Prepare for the next step",
    text: "That may be a practical test or periodic training hours. We explain how booking works when you enquire.",
  },
];

export const licenceStages: readonly Step[] = [
  {
    title: "Medical",
    text: "A medical report is normally required before a lorry practical test. The requirements depend on the driver, so check current DVLA guidance for your own circumstances.",
  },
  {
    title: "Theory",
    text: "Theory tests sit alongside time in the vehicle for a first lorry licence. Which tests apply depends on the entitlement being taken.",
  },
  {
    title: "Practical training",
    text: "Yard manoeuvres and road driving, in the kind of vehicle the course is for. We agree dates with you when you enquire.",
  },
  {
    title: "Practical test",
    text: "The test covers vehicle control and driving on the road. Test content is set officially, and we explain what to expect.",
  },
];

export const afterEnquiry: readonly Step[] = [
  {
    title: "You get in touch",
    text: "Send the form, call or email. Tell us which course you are asking about and which base you prefer, or say that you are not sure.",
  },
  {
    title: "We reply",
    text: "We reply using the contact method you chose.",
  },
  {
    title: "We talk through your options",
    text: "The licence you hold, the course that fits and what comes next. Nothing is booked from the form alone.",
  },
  {
    title: "You receive your joining details",
    text: "Once a course is agreed, we send the site address, directions and parking details for your base.",
  },
];
