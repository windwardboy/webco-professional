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
    text: "The training vehicle for Category C, used for yard exercises and road driving.",
    locationIds: ["bristol", "taunton", "exeter"],
    supplied: false,
  },
  {
    id: "artic",
    title: "Articulated combination",
    text: "Tractor unit and trailer for Category C+E, used for coupling, uncoupling, reversing and road driving.",
    locationIds: ["bristol", "exeter"],
    supplied: false,
  },
];
