/**
 * Floating "Like this website?" purchase card shown on the Webco Professional
 * demonstration. It is rendered once, from `src/layouts/BaseLayout.astro`, so it
 * appears on every page.
 *
 * When this demonstration is customised into a real customer's website, set
 * `enabled` to `false`. Nothing is rendered, so the script has no effect.
 */
export const purchaseCta = {
  enabled: true,
  /** Webco Cloud landing page where visitors compare the Essential and Professional packages. */
  url: "https://webcocloud.net/web-design/hgv-driver-training/",
  packageName: "Webco Professional",
  price: "£995",
  heading: "Like this website?",
  body: "We can customise this design with your branding, courses, training locations and business details.",
  buttonLabel: "Make this website yours",
  note: "See this and the other available design on Webco Cloud.",
  pillLabel: "Make this yours",
  /** sessionStorage key for the visitor's expanded or collapsed preference. */
  storageKey: "webco-purchase-cta",
} as const;
