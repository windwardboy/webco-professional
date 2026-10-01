# Webco Professional

Demonstration site for the Webco Professional website package. Static Astro site for an HGV and transport training provider, with dedicated course pages, example training bases, guides and a structured enquiry path.

The live domain is `https://webco-professional.co.uk`, set as `site.url`. Canonical links and the sitemap are generated from that value.

The public pages read as a finished provider website. Bristol, Taunton and Exeter are labelled example bases. No street address or map pin is published. Course configuration stays in the content files: a course with `published: false` is omitted from the nav, the catalogue, the enquiry form and the sitemap.

## Edit

- Identity, phone, email, hours and optional form endpoint: `src/config/site.ts`
- Homepage headlines: `src/content/homepage.ts`
- Courses: `src/content/courses.ts`
- Locations: `src/content/locations.ts`
- Team: `src/content/team.ts`
- Vehicles and facilities: `src/content/vehicles.ts`, `src/content/facilities.ts`
- Guides: `src/content/guides.ts`
- FAQs: `src/content/faqs.ts`
- Example testimonials: `src/content/testimonials.ts`
- About copy: `src/content/about.ts`

To publish an additional course, set `published: true` on its object. The page is generated at `/training/[slug]/` from `src/pages/training/[slug].astro`. Leave `duration` and `priceNote` empty until the provider supplies them. Do not invent a fee, a pass rate, an accreditation or an address.

Category C, Category C+E and Driver CPC use their own routes. Those paths are fixed in `src/lib/catalogue.ts` and in the matching page files.

To add a location, add an object to `locations`, then reference its id from the courses offered there. Set `sample: false` only when the base is real, and add a street address only when you have one. A published location with no published course, or a course pointing at an unknown location, fails the build.

The phone, email and town names in this repository are placeholders. Do not add a real address, accreditation, pass rate or testimonial unless it belongs to the client.

Optional photos go in `public/images/`. Point `site.heroImage`, a location `image`, or a team `photo` at the file. Leave `src` empty to show no photo.

Leave `enquiryEndpoint` empty on the demonstration. When a client site has a form handler, set it to a same-site path or an `https://` URL. The fields posted are `name`, `phone`, `email`, `course`, `location`, `contact_method` and `message`.

If there is only one published location, Locations drops out of the header and the enquiry form hides the location field.

## Build

```bash
npm install
npm run check
npm run build
```

`npm run build` writes the static site to `dist/`. That folder is committed so 20i can deploy it. Point the package document root at `dist`. No Node process, database or CMS is required on the server.
