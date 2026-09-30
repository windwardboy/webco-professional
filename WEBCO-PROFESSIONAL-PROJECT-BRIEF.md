# Webco Professional — Project Brief

## Purpose

`webco-professional` is the demonstration site and reusable master prototype for the **Webco Professional Website** package.

This package is intended for established HGV / transport training providers with multiple courses, multiple genuine training locations, or stronger structured local-search needs.

**Package price: £995**

The site must be clearly presented as a **Webco Professional demonstration website**, not as a fictional real training business. It should show prospects why the Professional package exists and later become the basis for real client sites through cloning and configuration.

## Core goals

The site must:

- look like a polished established transport-training website
- clearly demonstrate why Professional costs more than Essential
- handle multiple courses cleanly
- handle multiple genuine training locations cleanly
- show stronger information architecture
- show stronger local-search structure
- provide richer enquiry journeys
- remain easy to clone and customise
- stay technically lightweight
- deploy cleanly to 20i shared Linux hosting

A prospect should immediately understand: **“This is the package for a larger or more complex training provider.”**

## Intended customer

Typical Professional customers are:

- established HGV training providers
- providers with several course categories
- providers operating from multiple genuine training sites
- providers targeting several towns or regions
- businesses needing dedicated course pages
- businesses wanting a stronger local SEO foundation
- providers needing more structured enquiry paths

Complex ecommerce, advanced booking, customer portals and bespoke applications remain separate quoted work.

## Technology

Use:

- Astro
- static output
- minimal JavaScript
- GitHub source control
- 20i Linux hosting
- the same deployment pattern proven for Webco Cloud: local development → GitHub → committed production `dist/` → 20i Git deployment → document root points at `dist`

Do not add a database, CMS, authentication, ecommerce, advanced booking or unnecessary SaaS dependencies.

## Reusability requirement

This project must be strongly content/data driven because it will become the master for multi-course and multi-location client sites.

Prefer a structure broadly like:

```text
src/
  components/
  layouts/
  pages/
    courses/
    locations/

content/
  courses/
  locations/
  testimonials/
  faqs/

config/
  site.ts
```

Use Astro content collections or another clean Astro-native structure if preferable.

The key rule is: **adding a course or location should mean adding structured content, not rebuilding page layouts.**

## Demo identity

The site name is **Webco Professional**.

Do not invent a fake training-company name. Add a discreet statement such as:

> Demonstration website by Webco Media

Use realistic sample course/location content, but do not use real provider branding or imply this is a genuine operating provider. Sample names, addresses, testimonials and accreditation references must be clearly fictional or labelled as examples.

## Visual direction

The site should feel more substantial than Essential without becoming busy.

Aim for:

- confident
- professional
- modern
- structured
- trustworthy
- established-business feel
- clear visual hierarchy
- excellent mobile usability
- easy navigation between courses and locations
- prominent enquiry paths

Avoid generic corporate stock design, excessive animation, cluttered mega menus, huge feature matrices, fake awards/reviews, misleading accreditation claims and SaaS-style visuals.

The difference from Essential should come mainly from **information architecture and depth**, not gratuitous decoration.

## Suggested site structure

Recommended routes:

```text
/
/courses
/courses/category-c-e
/courses/category-c
/courses/c1
/courses/driver-cpc
/courses/adr
/locations
/locations/bristol
/locations/taunton
/locations/exeter
/about
/contact
```

The specific sample courses/locations can change, but the demo must prove dedicated course-page and location-page architecture.

Do not create fake doorway pages or duplicated city SEO pages.

## Homepage

Show:

- a broader course offering
- multiple locations
- stronger trust positioning
- clear enquiry paths

Suggested sections:

- hero communicating course/location breadth
- course grid linking to dedicated course pages
- training-location section linking to dedicated location pages
- trust/provider credentials section
- strong enquiry CTA

Do not invent numerical claims.

## Course architecture

Each course page should be generated from structured content where practical.

Support fields such as:

- course title
- category
- summary
- who it is for
- prerequisites
- training format
- licence/test information
- locations offering the course
- enquiry CTA
- FAQs
- related courses

Avoid hardcoding every course layout separately.

## Location architecture

Each location page should contain useful, location-specific content such as:

- location name
- town/region
- address placeholder
- courses available there
- directions/context
- facilities
- map integration/placeholder
- contact/enquiry CTA
- useful location-specific information or FAQ

In real client projects, only genuine training locations or legitimate service areas should get dedicated pages.

## Courses page

Provide a useful overview of all courses with easy scanning. Filtering may be used only if it remains lightweight and genuinely useful.

The page should demonstrate a scalable catalogue structure.

## Locations page

Provide a clear overview of all training locations.

Each card should show:

- location name
- area
- short description
- key courses
- link to location page

## About page

Demonstrate how an established provider can present:

- company history
- training philosophy
- instructor team
- fleet/facilities
- trust/accreditation information
- operational coverage

All sample content must remain clearly fictional/demo content.

## Contact / enquiry journey

Professional should demonstrate a richer enquiry flow than Essential.

The enquiry form may allow selection of:

- course
- preferred location
- preferred contact method
- message

Keep it quick to complete. Do not build a booking engine.

## Forms

The eventual production pattern may use a small PHP endpoint on 20i.

For the demo:

- build a polished enquiry form
- keep implementation simple
- expose no secrets
- use no database
- avoid third-party form SaaS unless explicitly requested

If no live destination exists, submissions may be disabled or return a clear demo response.

## SEO foundations

Include:

- semantic HTML
- title/meta description support
- canonical URLs
- sitemap
- robots.txt
- Open Graph basics
- clean heading hierarchy
- internal linking between courses and locations
- structured data where appropriate
- strong Core Web Vitals
- location/course metadata structure

The demo should illustrate sound SEO architecture, not promise rankings.

## Local SEO principles

Model good practice:

- dedicated pages only for genuine locations
- unique location information
- courses mapped to real sites
- consistent contact/location data
- useful internal linking
- no keyword-stuffed doorway pages
- no fake city pages
- no misleading service-area claims

## Accessibility

Include baseline accessibility by default:

- keyboard-friendly navigation
- labelled forms
- visible focus states
- alt-text support
- sensible contrast
- reduced-motion consideration
- semantic landmarks
- logical heading order

## Images

Support optimised responsive images, WebP/AVIF where practical, course/location/team/fleet imagery, easy client replacement and descriptive alt text. Avoid locking the design to a specific stock-photo set.

## Package scope represented

### Webco Professional — £995

Expected scope:

- professional responsive website
- dedicated course pages
- dedicated location pages
- multi-location architecture
- stronger local SEO structure
- richer enquiry journeys
- trust/accreditation/testimonial sections
- technical SEO foundations
- sitemap and metadata
- analytics/Search Console readiness
- first-year hosting
- SSL
- domain setup/registration where applicable
- professional domain email setup

Not included by default:

- ecommerce
- advanced online booking
- learner/customer portal
- large-scale migration
- custom integrations
- bespoke application development

## Relationship to Webco Essential

Professional must visibly justify its additional cost through structure and usefulness.

**Essential:** one main location, compact course overview, simple enquiry path, smaller information architecture.

**Professional:** multiple dedicated course pages, multiple dedicated location pages, structured course/location relationships, stronger internal linking, richer enquiry journey and scalable information architecture.

Do not simply make Professional “the same site with more sections”.

## First milestone

Build a polished static demo containing:

1. site shell
2. header/navigation
3. footer
4. homepage
5. courses index
6. at least 4–5 sample course pages
7. locations index
8. at least 3 sample location pages
9. about page
10. contact/enquiry page
11. responsive layout
12. technical SEO basics
13. sitemap
14. robots.txt
15. favicon
16. 404 page
17. clear demonstration-site treatment

The first milestone should be polished enough to show prospects and structurally complete enough to prove the multi-course/multi-location model.

## Cursor instruction

Start by reading this brief fully, inspecting the repository, scaffolding a clean Astro project if required, and proposing a concise implementation plan.

Keep the architecture reusable and data-driven. Course and location content should be structured wherever practical.

The finished project should be suitable for cloning into future Professional client websites with minimal structural changes.
