import { trainingNav } from "../content/courses";
import { publishedLocations } from "../content/locations";

function listAnd(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

const baseNames = publishedLocations().map((location) => location.name);

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
    "HGV and transport training: Category C, Category C+E, Driver CPC, ADR and Operator CPC, from training bases in Bristol, Taunton and Exeter.",
  demoLine: "Demonstration website by Webco Media",
  footerSummary:
    "HGV and transport training at Bristol, Taunton and Exeter: Category C, Category C+E, Driver CPC, ADR and Operator CPC.",
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
    { label: "Monday to Friday", value: "08:00 to 17:00" },
    { label: "Saturday and Sunday", value: "Closed" },
  ],
  hoursNote: "Outside these hours, use the enquiry form and we will reply on the next working day.",
  areasServed: baseNames,
  areasNote: `Our training bases serve learners in and around ${listAnd(baseNames)}.`,
  /** HTTPS map embed URL. Empty on this demonstration: no pin is shown. */
  mapEmbedUrl: "",
  /** Empty until a real Google reviews URL is supplied. No rating is stored. */
  googleReviewsUrl: "",
  /** Google Search Console verification token. Leave empty until issued. */
  googleSiteVerification: "",
  /**
   * GA4 measurement id, such as G-XXXXXXXX. Leave empty.
   * A valid id injects the Google tag on every page, which sets cookies.
   * Do not fill this in until a consent step gates that script.
   * This demonstration does not load analytics.
   */
  analyticsId: "",
  heroImage: {
    src: "/images/hero-2072.jpg",
    webp: "/images/hero-900.webp 900w, /images/hero-1400.webp 1400w, /images/hero-2072.webp 2072w",
    avif: "/images/hero-900.avif 900w, /images/hero-1400.avif 1400w, /images/hero-2072.avif 2072w",
    alt: "A white HGV working through a cone-marked training course outside a modern training centre at sunrise, with an instructor in a high-visibility vest watching.",
    width: 2072,
    height: 759,
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

export const legalNav: readonly { href: string; label: string; rel?: string }[] = [
  { href: "/privacy/", label: "Privacy policy", rel: "privacy-policy" },
  { href: "/cookies/", label: "Cookie policy" },
  { href: "/terms/", label: "Website terms", rel: "terms-of-service" },
];

export const nav: readonly NavItem[] = [
  { href: "/hgv-training/", label: "Training", children: trainingNav },
  ...locationNav,
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/guides/", label: "Guides" },
  { href: "/contact/", label: "Contact" },
];
