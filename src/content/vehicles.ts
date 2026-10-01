export type Vehicle = {
  id: string;
  title: string;
  text: string;
  locationIds: readonly string[];
  supplied: boolean;
};

export const vehicles: readonly Vehicle[] = [
  {
    id: "rigid",
    title: "Rigid goods vehicle",
    text: "Example vehicle for Category C. No make, model or fleet size is stated.",
    locationIds: ["bristol", "taunton", "exeter"],
    supplied: false,
  },
  {
    id: "artic",
    title: "Articulated combination",
    text: "Example vehicle for Category C+E. No unit or trailer is named.",
    locationIds: ["bristol", "exeter"],
    supplied: false,
  },
];
