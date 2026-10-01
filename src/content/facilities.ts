export type Facility = {
  id: string;
  title: string;
  text: string;
  locationIds: readonly string[];
  /** False while the wording is an example, not a real yard. */
  supplied: boolean;
};

export const facilities: readonly Facility[] = [
  {
    id: "yard",
    title: "Training yard",
    text: "Example facility for vehicle manoeuvres. No yard is named.",
    locationIds: ["bristol", "taunton", "exeter"],
    supplied: false,
  },
  {
    id: "classroom",
    title: "Classroom",
    text: "Example room for Driver CPC, ADR and Operator CPC. No centre number is shown.",
    locationIds: ["bristol", "taunton"],
    supplied: false,
  },
  {
    id: "parking",
    title: "Parking",
    text: "Example note. Parking arrangements are not described.",
    locationIds: ["bristol", "taunton", "exeter"],
    supplied: false,
  },
];
