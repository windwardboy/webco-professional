export type TrustPoint = {
  title: string;
  text: string;
};

/** Example wording for an established provider. No statistics. */
export const trustPoints: readonly TrustPoint[] = [
  {
    title: "The course, stated plainly",
    text: "Who it is for, what it assumes, and how the training is run — set out before anyone is asked to commit.",
  },
  {
    title: "Courses matched to a site",
    text: "Each course lists the locations that run it. A site does not advertise training it does not offer.",
  },
  {
    title: "Plain licence information",
    text: "The entitlement and the practical training, without invented pass rates or approval claims.",
  },
  {
    title: "A structured enquiry",
    text: "The form asks for a course, a preferred location and how you would like to be contacted.",
  },
];
