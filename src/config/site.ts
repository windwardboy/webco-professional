/**
 * Site-wide facts for a Professional client site.
 *
 * This repository is the Webco Professional demonstration. Leave unknown
 * values empty, and replace the example phone, email and locations when
 * cloning for a real provider. Do not invent a street address,
 * accreditation, testimonial or company name.
 *
 * `url` is baked into canonical links and the sitemap at build time.
 */
export const site = {
  name: "Webco Professional",
  url: "https://webco-professional.co.uk",
  description:
    "Demonstration of a Webco Professional website for an established HGV training provider, with dedicated course pages, several training locations and a structured enquiry path.",
  demoLine: "Demonstration website by Webco Media",
  footerSummary:
    "Sample content for an established provider with several courses and more than one training site.",
  webcoMediaUrl: "",
  phoneDisplay: "01632 960214",
  phoneHref: "tel:+441632960214",
  email: "enquiries@example.com",
  whatsappDisplay: "07700 900214",
  whatsappHref: "https://wa.me/447700900214",
  showWhatsApp: true,
  /** POST URL for a small PHP form handler. Empty on this demonstration. */
  enquiryEndpoint: "",
  /** Google Search Console verification token. Leave empty until issued. */
  googleSiteVerification: "",
  /** GA4 measurement id, such as G-XXXXXXXX. Leave empty until issued. */
  analyticsId: "",
  heroImage: {
    src: "",
    webp: "",
    avif: "",
    alt: "",
    width: 1600,
    height: 1067,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses/", label: "Courses" },
  { href: "/locations/", label: "Locations" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;
