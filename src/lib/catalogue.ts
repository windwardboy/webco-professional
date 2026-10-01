import { courses, type Course, type CourseGroup } from "../content/courses";
import { facilities, type Facility } from "../content/facilities";
import { faqs, faqTopics } from "../content/faqs";
import { guides, type Guide } from "../content/guides";
import { locations, publishedLocations, type TrainingLocation } from "../content/locations";
import { team, type TeamMember } from "../content/team";
import { testimonials, type Testimonial } from "../content/testimonials";
import type { Faq, FaqTopic } from "../content/types";
import { vehicles, type Vehicle } from "../content/vehicles";

const corePages: Readonly<Record<string, string>> = {
  "category-c": "/category-c-training/",
  "category-ce": "/category-ce-training/",
  "driver-cpc": "/driver-cpc/",
};

function assertCatalogue(): void {
  const locationIds = new Set(locations.map((location) => location.id));
  const courseIds = new Set(courses.map((course) => course.id));
  const guideIds = new Set(guides.map((guide) => guide.slug));
  const teamIds = new Set(team.map((person) => person.id));
  const facilityIds = new Set(facilities.map((facility) => facility.id));
  const vehicleIds = new Set(vehicles.map((vehicle) => vehicle.id));
  const testimonialIds = new Set(testimonials.map((item) => item.id));
  const paths = new Set<string>();

  if (locationIds.size !== locations.length) throw new Error("Duplicate location id.");
  if (new Set(locations.map((location) => location.slug)).size !== locations.length) {
    throw new Error("Duplicate location slug.");
  }
  if (courseIds.size !== courses.length) throw new Error("Duplicate course id.");
  if (new Set(courses.map((course) => course.slug)).size !== courses.length) {
    throw new Error("Duplicate course slug.");
  }
  if (guideIds.size !== guides.length) throw new Error("Duplicate guide slug.");
  if (teamIds.size !== team.length) throw new Error("Duplicate team id.");

  for (const course of courses) {
    if (paths.has(course.path)) throw new Error(`Duplicate course path "${course.path}".`);
    paths.add(course.path);
    if (!course.path.endsWith("/")) throw new Error(`Course "${course.id}" path must end with /.`);
    if (course.published && course.locationIds.length === 0) {
      throw new Error(`Published course "${course.id}" has no locations.`);
    }
    if (course.published && course.group === "additional" && course.path !== `/training/${course.slug}/`) {
      throw new Error(`Additional course "${course.id}" must use /training/${course.slug}/.`);
    }
    if (course.published && course.group === "core" && corePages[course.id] !== course.path) {
      throw new Error(`Core course "${course.id}" needs a matching page file and path.`);
    }
    for (const id of course.locationIds) {
      if (!locationIds.has(id)) throw new Error(`Course "${course.id}" lists unknown location "${id}".`);
    }
    for (const id of course.relatedCourseIds) {
      if (id === course.id || !courseIds.has(id)) {
        throw new Error(`Course "${course.id}" lists invalid related course "${id}".`);
      }
    }
    for (const id of course.relatedGuideIds) {
      if (!guideIds.has(id)) throw new Error(`Course "${course.id}" lists unknown guide "${id}".`);
    }
    for (const id of course.instructorIds) {
      if (!teamIds.has(id)) throw new Error(`Course "${course.id}" lists unknown instructor "${id}".`);
    }
    for (const id of course.vehicleIds) {
      if (!vehicleIds.has(id)) throw new Error(`Course "${course.id}" lists unknown vehicle "${id}".`);
    }
    for (const id of course.facilityIds) {
      if (!facilityIds.has(id)) throw new Error(`Course "${course.id}" lists unknown facility "${id}".`);
    }
    for (const id of course.testimonialIds) {
      if (!testimonialIds.has(id)) throw new Error(`Course "${course.id}" lists unknown testimonial "${id}".`);
    }
  }

  for (const location of locations) {
    if (!location.published) continue;
    const offered = courses.some((course) => course.published && course.locationIds.includes(location.id));
    if (!offered) throw new Error(`Published location "${location.id}" has no published course.`);
    for (const id of location.facilityIds) {
      if (!facilityIds.has(id)) throw new Error(`Location "${location.id}" lists unknown facility "${id}".`);
    }
    for (const id of location.vehicleIds) {
      if (!vehicleIds.has(id)) throw new Error(`Location "${location.id}" lists unknown vehicle "${id}".`);
    }
    for (const id of location.instructorIds) {
      if (!teamIds.has(id)) throw new Error(`Location "${location.id}" lists unknown instructor "${id}".`);
    }
  }

  for (const person of team) {
    for (const id of person.courseIds) {
      if (!courseIds.has(id)) throw new Error(`Team member "${person.id}" lists unknown course "${id}".`);
    }
    for (const id of person.locationIds) {
      if (!locationIds.has(id)) throw new Error(`Team member "${person.id}" lists unknown location "${id}".`);
    }
  }

  for (const guide of guides) {
    if (guide.path !== `/guides/${guide.slug}/`) {
      throw new Error(`Guide "${guide.slug}" path does not match its slug.`);
    }
    for (const id of guide.relatedCourseIds) {
      if (!courseIds.has(id)) throw new Error(`Guide "${guide.slug}" lists unknown course "${id}".`);
    }
    for (const id of guide.relatedGuideIds) {
      if (id === guide.slug || !guideIds.has(id)) {
        throw new Error(`Guide "${guide.slug}" lists invalid related guide "${id}".`);
      }
    }
  }

  for (const item of testimonials) {
    if (item.courseId && !courseIds.has(item.courseId)) {
      throw new Error(`Testimonial "${item.id}" lists unknown course.`);
    }
    if (item.locationId && !locationIds.has(item.locationId)) {
      throw new Error(`Testimonial "${item.id}" lists unknown location.`);
    }
  }

  for (const faq of faqs) {
    if (faq.courseId && !courseIds.has(faq.courseId)) throw new Error(`FAQ "${faq.id}" lists unknown course.`);
    if (faq.locationId && !locationIds.has(faq.locationId)) throw new Error(`FAQ "${faq.id}" lists unknown location.`);
  }
}

assertCatalogue();

export function publishedCourses(): Course[] {
  return courses.filter((course) => course.published);
}

export function coursesInGroup(group: CourseGroup): Course[] {
  return publishedCourses().filter((course) => course.group === group);
}

export function coreCourses(): Course[] {
  return coursesInGroup("core");
}

export function additionalCourses(): Course[] {
  return coursesInGroup("additional");
}

export function requireCourse(id: string): Course {
  const course = courses.find((item) => item.id === id);
  if (!course?.published) throw new Error(`Published course "${id}" is missing.`);
  return course;
}

export function locationById(id: string): TrainingLocation | undefined {
  return locations.find((location) => location.id === id);
}

export function locationsForCourse(course: Course): TrainingLocation[] {
  return course.locationIds.flatMap((id) => {
    const location = locationById(id);
    return location?.published ? [location] : [];
  });
}

export function coursesForLocation(location: TrainingLocation): Course[] {
  return publishedCourses().filter((course) => course.locationIds.includes(location.id));
}

export function relatedCourses(course: Course): Course[] {
  return course.relatedCourseIds.flatMap((id) => {
    const related = courses.find((item) => item.id === id);
    return related?.published ? [related] : [];
  });
}

export function relatedGuides(course: Course): Guide[] {
  return course.relatedGuideIds.flatMap((id) => {
    const guide = guides.find((item) => item.slug === id);
    return guide ? [guide] : [];
  });
}

export function guidesForCourse(courseId: string): Guide[] {
  return guides.filter((guide) => guide.relatedCourseIds.includes(courseId));
}

export function relatedGuidesForGuide(guide: Guide): Guide[] {
  return guide.relatedGuideIds.flatMap((id) => {
    const related = guides.find((item) => item.slug === id);
    return related ? [related] : [];
  });
}

export function coursesForGuide(guide: Guide): Course[] {
  return guide.relatedCourseIds.flatMap((id) => {
    const course = courses.find((item) => item.id === id);
    return course?.published ? [course] : [];
  });
}

function realTeam(people: readonly TeamMember[]): TeamMember[] {
  const named = people.filter((person) => person.published && person.name);
  return named.length > 0 ? named : [...people];
}

export function visibleTeam(): TeamMember[] {
  return realTeam(team);
}

export function teamForCourse(course: Course): TeamMember[] {
  return realTeam(team.filter((person) => course.instructorIds.includes(person.id)));
}

export function teamForLocation(location: TrainingLocation): TeamMember[] {
  return realTeam(team.filter((person) => location.instructorIds.includes(person.id)));
}

export function facilitiesFor(ids: readonly string[], locationId?: string): Facility[] {
  return facilities.filter((facility) => {
    if (!ids.includes(facility.id)) return false;
    return locationId ? facility.locationIds.includes(locationId) : true;
  });
}

export function vehiclesFor(ids: readonly string[], locationId?: string): Vehicle[] {
  return vehicles.filter((vehicle) => {
    if (!ids.includes(vehicle.id)) return false;
    return locationId ? vehicle.locationIds.includes(locationId) : true;
  });
}

export function testimonialsFor(ids: readonly string[]): Testimonial[] {
  return testimonials.filter((item) => ids.includes(item.id));
}

export function testimonialsForCourse(courseId: string): Testimonial[] {
  return testimonials.filter((item) => item.courseId === courseId);
}

export function testimonialsForLocation(locationId: string): Testimonial[] {
  return testimonials.filter((item) => item.locationId === locationId);
}

export function faqsForCourse(courseId: string): Faq[] {
  return faqs.filter((faq) => faq.courseId === courseId);
}

export function faqsForLocation(locationId: string): Faq[] {
  return faqs.filter((faq) => faq.locationId === locationId);
}

export function homeFaqs(): Faq[] {
  return faqs.filter((faq) => faq.home);
}

export function overviewFaqs(): Faq[] {
  return faqs.filter((faq) => faq.overview);
}

export function faqsByTopic(): { id: FaqTopic; label: string; items: Faq[] }[] {
  return faqTopics
    .map((topic) => ({
      ...topic,
      items: faqs.filter((faq) => faq.topics[0] === topic.id),
    }))
    .filter((topic) => topic.items.length > 0);
}

export function featuredGuides(): Guide[] {
  return guides.filter((guide) => guide.featured);
}

export function hasMultipleLocations(): boolean {
  return publishedLocations().length > 1;
}

export { guides, testimonials, publishedLocations };
