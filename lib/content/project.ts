// import type { Project } from "@/types/content";
// import { projects } from "@/data/projects";
//
// /** All images, most recent first. */
// export function getProjects(): Project[] {
//   return [...projects].sort((a, b) => b.date.localeCompare(a.date));
// }
//
// /** Projects marked for the home page, the most recent first. */
// export function getFeaturedProjects(): Project[] {
//   return getProjects().filter((project) => project.featured);
// }
//
// /** A single project, or undefined when the slug does not exist. */
// export function getProjectBySlug(slug: string): Project | undefined {
//   return projects.find((project) => project.slug === slug);
// }
//
// /** Every slug, for static route generation. */
// export function getProjectSlugs(): string[] {
//   return projects.map((project) => project.slug);
// }
