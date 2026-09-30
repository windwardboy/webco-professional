import { site } from "../config/site";

export function canonicalUrl(pathname: string): string {
  const path = pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;
  return new URL(path, site.url).href;
}

export function isNavCurrent(pathname: string, href: string): boolean {
  const current = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

/** Accept only a same-site path or an https URL as the form action. */
export function enquiryAction(endpoint: string): string | null {
  if (endpoint.startsWith("/") || endpoint.startsWith("https://")) return endpoint;
  return null;
}

/** GA4 measurement ids only. Anything else is ignored so the layout stays script-free. */
export function analyticsMeasurementId(id: string): string | null {
  return /^G-[A-Z0-9]+$/.test(id) ? id : null;
}

export function enquireHref(options?: { course?: string; location?: string }): string {
  const params = new URLSearchParams();
  if (options?.course) params.set("course", options.course);
  if (options?.location) params.set("location", options.location);
  const query = params.toString();
  return query ? `/contact/?${query}#enquiry` : "/contact/#enquiry";
}

export function joinList(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export type Crumb = {
  name: string;
  path: string;
};

export function breadcrumbJsonLd(items: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
