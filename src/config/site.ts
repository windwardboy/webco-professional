import { trainingNav } from "../content/courses";
import { publishedLocations } from "../content/locations";

/**
 * Site-wide facts for a Professional client site.
 *
 * This repository is the Webco Professional demonstration. Leave unknown
 * values empty. Do not invent a street address, accreditation, rating,
 * fee, duration or testimonial.
 *
 * `url` is baked into canonical links and the sitemap at build time.
 * Course pages are controlled by `published` on each course. The public
 * site lists only published courses.
 */
export const site = {
  name: "Webco Professional",
  url: "https://webco-professional.co.uk",
  description:
    "Demonstration of a Webco Professional website for an HGV and transport training provider: Category C, Category C+E, Driver CPC, ADR and Operator CPC, with example bases at Bristol, Taunton and Exeter.",
  demoLine: "Demonstration website by Webco Media",
  footerSummary:
    "Category C, Category C+E, Driver CPC, ADR and Operator CPC, with example bases at Bristol, Taunton and Exeter.",
  webcoMediaUrl: "",
  phoneDisplay: "01632 960214",
  phoneHref: "tel:+441632960214",
  email: "enquiries@example.com",
  whatsappDisplay: "07700 900214",
  whatsappHref: "https://wa.me/447700900214",
  showWhatsApp: true,
  /** POST URL for a small PHP form handler. Empty on this demonstration. */
  enquiryEndpoint: "",
  hours: [
    { label: "Monday to Friday", value: "Example hours" },
    { label: "Saturday and Sunday", value: "Example hours" },
  ],
  hoursNote: "Example hours. Not a real opening schedule.",
  areasServed: ["Bristol", "Taunton", "Exeter"],
  areasNote: "Example bases only. Nearby towns do not have their own pages.",
  /** HTTPS map embed URL. Empty on this demonstration: no pin is shown. */
  mapEmbedUrl: "",
  /** Empty until a real Google reviews URL is supplied. No rating is stored. */
  googleReviewsUrl: "",
  /** Google Search Console verification token. Leave empty until issued. */
  googleSiteVerification: "",
  /** GA4 measurement id, such as G-XXXXXXXX. Leave empty until issued. */
  analyticsId: "",
  heroImage: {
    src: "/images/hero.jpg",
    webp: "/images/hero.webp",
    avif: "/images/hero.avif",
    alt: "A white HGV working through a cone-marked training course outside a modern training centre at sunrise, with an instructor in a high-visibility vest watching.",
    width: 1024,
    height: 375,
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

const locationNav: readonly NavItem[] =
  publishedLocations().length > 1
    ? [
        {
          href: "/locations/",
          label: "Locations",
          children: [
            ...publishedLocations().map((location) => ({
              href: `/locations/${location.slug}/`,
              label: location.name,
            })),
            { href: "/locations/", label: "All locations" },
          ],
        },
      ]
    : [];

export const nav: readonly NavItem[] = [
  { href: "/hgv-training/", label: "Training", children: trainingNav },
  ...locationNav,
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/guides/", label: "Guides" },
  { href: "/contact/", label: "Contact" },
];
