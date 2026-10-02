import type { ContentImage } from "./types";

export type TeamMember = {
  id: string;
  /** False until a real name is supplied. Unnamed entries describe a team, not a person. */
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
 * Team profiles. Do not invent a name, a photograph or a qualification.
 * When a provider supplies a real person, set published to true and fill name.
 */
export const team: readonly TeamMember[] = [
  {
    id: "driving",
    published: false,
    name: "",
    role: "Driving instructors",
    qualifications: [],
    background:
      "Our driving instructors take learners through practical licence training: getting to know the vehicle, yard manoeuvres, coupling and uncoupling, and road driving. They also explain what the practical test involves.",
    courseIds: ["category-c", "category-ce"],
    locationIds: ["bristol", "taunton", "exeter"],
  },
  {
    id: "classroom",
    published: false,
    name: "",
    role: "Classroom instructors",
    qualifications: [],
    background:
      "Our classroom instructors run the classroom courses. They explain what each course covers, who it is for, and how it differs from the licence routes.",
    courseIds: ["driver-cpc", "adr", "operator-cpc"],
    locationIds: ["bristol", "taunton"],
  },
];
