export type Facility = {
  id: string;
  title: string;
  text: string;
  locationIds: readonly string[];
  supplied: boolean;
};

export const facilities: readonly Facility[] = [
  {
    id: "yard",
    title: "Training yard",
    text: "Off-road space for vehicle familiarisation, reversing and manoeuvres, so the basics are secure before time on the road.",
    locationIds: ["bristol", "taunton", "exeter"],
    supplied: false,
  },
  {
    id: "classroom",
    title: "Classroom",
    text: "A classroom for Driver CPC and Operator CPC. ADR uses the classroom at the Bristol base.",
    locationIds: ["bristol", "taunton"],
    supplied: false,
  },
  {
    id: "parking",
    title: "Parking",
    text: "Learner car parking at the base. We confirm where to park when your course is agreed.",
    locationIds: ["bristol", "taunton", "exeter"],
    supplied: false,
  },
];
