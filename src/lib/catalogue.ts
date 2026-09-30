import { courseGroups, courses, type Course, type CourseCategory } from "../content/courses";
import { locations, type TrainingLocation } from "../content/locations";

function assertCatalogue(): void {
  const locationSlugs = new Set(locations.map((location) => location.slug));
  const courseSlugs = new Set(courses.map((course) => course.slug));

  if (locationSlugs.size !== locations.length) {
    throw new Error("Duplicate location slug in src/content/locations.ts.");
  }
  if (courseSlugs.size !== courses.length) {
    throw new Error("Duplicate course slug in src/content/courses.ts.");
  }

  for (const course of courses) {
    if (course.locationSlugs.length === 0) {
      throw new Error(`Course "${course.slug}" has no locations.`);
    }
    for (const slug of course.locationSlugs) {
      if (!locationSlugs.has(slug)) {
        throw new Error(`Course "${course.slug}" lists unknown location "${slug}".`);
      }
    }
    for (const slug of course.relatedSlugs) {
      if (slug === course.slug || !courseSlugs.has(slug)) {
        throw new Error(`Course "${course.slug}" lists invalid related course "${slug}".`);
      }
    }
  }

  for (const location of locations) {
    const offered = courses.some((course) => course.locationSlugs.includes(location.slug));
    if (!offered) {
      throw new Error(`Location "${location.slug}" is not listed on any course.`);
    }
  }
}

assertCatalogue();

export function categoryLabel(category: CourseCategory): string {
  return courseGroups.find((group) => group.id === category)?.label ?? category;
}

export function coursesInCategory(category: CourseCategory): Course[] {
  return courses.filter((course) => course.category === category);
}

export function locationBySlug(slug: string): TrainingLocation | undefined {
  return locations.find((location) => location.slug === slug);
}

export function locationsForCourse(course: Course): TrainingLocation[] {
  return course.locationSlugs.flatMap((slug) => {
    const location = locationBySlug(slug);
    return location ? [location] : [];
  });
}

export function coursesForLocation(location: TrainingLocation): Course[] {
  return courses.filter((course) => course.locationSlugs.includes(location.slug));
}

export function relatedCourses(course: Course): Course[] {
  return course.relatedSlugs.flatMap((slug) => {
    const related = courses.find((item) => item.slug === slug);
    return related ? [related] : [];
  });
}
