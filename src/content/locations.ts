import type { ContentImage } from "./types";

export type TrainingLocation = {
  id: string;
  slug: string;
  name: string;
  region: string;
  /** Sample bases stay labelled. A cloned client site sets this false for a real base. */
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
 * Sample bases for the demonstration.
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
    metaTitle: "HGV training in Bristol",
    metaDescription:
      "HGV training at our Bristol base: Category C, Category C+E, Driver CPC, ADR and Operator CPC. See what runs here and how to enquire.",
    summary: "Our widest course list: Category C, Category C+E, Driver CPC, ADR and Operator CPC.",
    intro:
      "Our Bristol base brings practical licence training and classroom courses together. You can take Category C and Category C+E in the vehicle, and attend Driver CPC, ADR and Operator CPC in the classroom.",
    addressLines: [],
    access:
      "We send directions to the Bristol site when your course is confirmed, including the best approach if you are arriving by car.",
    parking: "Learner car parking is available at the Bristol base. We confirm where to park when you book.",
    localContext:
      "Road driving from Bristol reflects the area around the base, with city traffic, main roads and the routes a working driver uses to move goods in and out of the city.",
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
    metaTitle: "HGV training in Taunton",
    metaDescription:
      "HGV training at our Taunton base: Category C rigid lorry training, plus Driver CPC and Operator CPC classroom courses. See what runs here and how to enquire.",
    summary: "Category C rigid lorry training, with Driver CPC and Operator CPC classroom courses.",
    intro:
      "Our Taunton base offers Category C rigid training alongside Driver CPC and Operator CPC in the classroom. If you need Category C+E or ADR, those run at our other bases.",
    addressLines: [],
    access:
      "We send directions to the Taunton site when your course is confirmed, including the best approach if you are arriving by car.",
    parking: "Learner car parking is available at the Taunton base. We confirm where to park when you book.",
    localContext:
      "Road driving from Taunton covers the town and the Somerset roads around it, so you practise on the mix of town, main-road and country driving a working lorry driver meets.",
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
    metaTitle: "HGV training in Exeter",
    metaDescription:
      "HGV licence training at our Exeter base: Category C and Category C+E, covering rigid and articulated vehicles. See what runs here and how to enquire.",
    summary: "Category C and Category C+E licence training, covering rigid and articulated vehicles.",
    intro:
      "Our Exeter base focuses on practical licence training, from a first rigid lorry licence to the trailer entitlement. Our classroom courses run at the Bristol and Taunton bases.",
    addressLines: [],
    access:
      "We send directions to the Exeter site when your course is confirmed, including the best approach if you are arriving by car.",
    parking: "Learner car parking is available at the Exeter base. We confirm where to park when you book.",
    localContext:
      "Road driving from Exeter covers city traffic and the roads out into Devon, so you practise on the kinds of route a working driver uses day to day.",
    facilityIds: ["yard", "parking"],
    vehicleIds: ["rigid", "artic"],
    instructorIds: ["driving"],
  },
];

export function publishedLocations(): TrainingLocation[] {
  return locations.filter((location) => location.published);
}
