# Webco Professional

Demonstration site for the Webco Professional website package. Static Astro site for an established HGV training provider with several courses and several training locations. Pages are generated from the content files. Layouts are not copied per course or per site.

The live domain is `https://webco-professional.co.uk`, set as `site.url`. Canonical links and the sitemap are generated from that value.

## Edit

- Identity, phone, email and optional form endpoint: `src/config/site.ts`
- Homepage headlines: `src/content/homepage.ts`
- Courses: `src/content/courses.ts`
- Locations: `src/content/locations.ts`
- Sample testimonials: `src/content/testimonials.ts`
- About copy, example instructor roles and fleet notes: `src/content/about.ts`

To add a course, add an object to `courses`. Set `locationSlugs` to the sites that genuinely offer it. The course page, catalogue, enquiry menu and footer update from that list.

To add a location, add an object to `locations`, then reference its slug from the courses offered there. A location with no course, or a course pointing at an unknown location, fails the build.

The phone, email, towns and street lines in this repository are placeholders. Do not add a real address, accreditation, pass rate or testimonial unless it belongs to the client.

Optional client photos go in `public/images/`. Point `site.heroImage`, or a location `image`, at the file. Leave `src` empty to show no photo. WebP and AVIF paths are optional.

Leave `enquiryEndpoint` empty on the demonstration. When a client site has a form handler, set it to a same-site path or an `https://` URL. The fields posted are `name`, `phone`, `email`, `course`, `location`, `contact_method` and `message`.

## Build

```bash
npm install
npm run check
npm run build
```

`npm run build` writes the static site to `dist/`. That folder is committed so 20i can deploy it. Point the package document root at `dist`. No Node process, database or CMS is required on the server.
