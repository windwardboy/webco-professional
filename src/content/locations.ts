import type { ContentImage } from "./types";

export type TrainingLocation = {
  id: string;
  slug: string;
  name: string;
  region: string;
  /** Example bases stay labelled. A cloned client site sets this false for a real base. */
  sample: boolean;
  published: boolean;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string;
  /** Leave empty unless a real street address is supplied. Do not invent one. */
  addressLines: readonly string[];
  access: string;
  parking: string;
  localContext: string;
  facilityIds: readonly string[];
  vehicleIds: readonly string[];
  instructorIds: readonly string[];
  image?: ContentImage;
};

/**
 * Example bases for the demonstration.
 * Publish a page only for a genuine training location. Do not add a town
 * because it is nearby.
 */
export const locations: readonly TrainingLocation[] = [
  {
    id: "bristol",
    slug: "bristol",
    name: "Bristol",
    region: "Bristol",
    sample: true,
    published: true,
    metaTitle: "Bristol HGV training",
    metaDescription:
      "Example Bristol training base. Category C, Category C+E, Driver CPC, ADR and Operator CPC. No street address is published.",
    summary: "The widest course list: rigid, articulated, Driver CPC, ADR and Operator CPC.",
    intro: "Example base. Practical licence training and the classroom courses are both listed here.",
    addressLines: [],
    access: "Example location. No approach directions are published.",
    parking: "Example location. Parking is not described, because this is not a real yard.",
    localContext: "Example base for the Bristol area. No test centre and no local route is named.",
    facilityIds: ["yard", "classroom", "parking"],
    vehicleIds: ["rigid", "artic"],
    instructorIds: ["driving", "classroom"],
  },
  {
    id: "taunton",
    slug: "taunton",
    name: "Taunton",
    region: "Somerset",
    sample: true,
    published: true,
    metaTitle: "Taunton HGV training",
    metaDescription:
      "Example Taunton training base. Category C, Driver CPC and Operator CPC. Articulated training is not listed here. No street address is published.",
    summary: "Category C, Driver CPC and Operator CPC. Articulated training is not listed here.",
    intro: "Example base. The course list is shorter than Bristol on purpose: rigid training and classroom courses, not C+E.",
    addressLines: [],
    access: "Example location. No approach directions are published.",
    parking: "Example location. Parking is not described, because this is not a real yard.",
    localContext: "Example base for the Taunton area. No test centre and no local route is named.",
    facilityIds: ["yard", "classroom", "parking"],
    vehicleIds: ["rigid"],
    instructorIds: ["driving", "classroom"],
  },
  {
    id: "exeter",
    slug: "exeter",
    name: "Exeter",
    region: "Devon",
    sample: true,
    published: true,
    metaTitle: "Exeter HGV training",
    metaDescription:
      "Example Exeter training base. Category C and Category C+E. Classroom courses are not listed here. No street address is published.",
    summary: "Category C and Category C+E. Driver CPC, ADR and Operator CPC are not listed here.",
    intro: "Example base for practical licence training, including articulated vehicles. Classroom courses are listed at Bristol and Taunton.",
    addressLines: [],
    access: "Example location. No approach directions are published.",
    parking: "Example location. Parking is not described, because this is not a real yard.",
    localContext: "Example base for the Exeter area. No test centre and no local route is named.",
    facilityIds: ["yard", "parking"],
    vehicleIds: ["rigid", "artic"],
    instructorIds: ["driving"],
  },
];

export function publishedLocations(): TrainingLocation[] {
  return locations.filter((location) => location.published);
}
