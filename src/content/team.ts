import type { ContentImage } from "./types";

export type TeamMember = {
  id: string;
  /** False until a real name is supplied. Example cards stay labelled. */
  published: boolean;
  name: string;
  role: string;
  qualifications: readonly string[];
  background: string;
  courseIds: readonly string[];
  locationIds: readonly string[];
  photo?: ContentImage;
};

/**
 * Example roles only. Do not invent a name, a photograph or a qualification.
 * When a provider supplies a real person, set published to true and fill name.
 */
export const team: readonly TeamMember[] = [
  {
    id: "driving",
    published: false,
    name: "",
    role: "Driving instructor",
    qualifications: [],
    background: "Example profile for Category C and Category C+E instruction. Not a real person.",
    courseIds: ["category-c", "category-ce"],
    locationIds: ["bristol", "taunton", "exeter"],
  },
  {
    id: "classroom",
    published: false,
    name: "",
    role: "Classroom instructor",
    qualifications: [],
    background: "Example profile for Driver CPC, ADR and Operator CPC. Not a real person, and no approval number is shown.",
    courseIds: ["driver-cpc", "adr", "operator-cpc"],
    locationIds: ["bristol", "taunton"],
  },
];
