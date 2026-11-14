export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  body: string[];
  technologies: string[];
  coverImage: {
    src: string;
    alt: string;
    srcDark?: string;
  };
  video?: {
    src: string;
    poster: string;
    description: string;
  };
  links?: {
    live?: string;
    repository?: string;
    caseStudy?: string;
  };
  featured: boolean;
}
