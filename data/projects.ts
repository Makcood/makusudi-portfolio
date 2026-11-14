import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "makusudi-portfolio",
    title: "Makusudi Portfolio",
    category: "Portfolio",
    date: "2026-10",
    description:
      "A personal portfolio engineered as a production system, with a documented architecture and automated quality gates.",
    body: [
      "The portfolio presents projects, services and experience in a fast, accessible website. It was planned like a client product, with a product requirements document, a technical requirements document and an implementation plan broken into milestones, epics and tasks.",
      "Content is stored as typed data, so a new project is published without changing any code. Every page is pre-rendered, follows WCAG 2.2 AA, and works in light and dark themes from mobile to desktop.",
      "Every change passes linting, formatting, type checks and a production build, both before each commit and in continuous integration. Releases follow semantic versioning, with a changelog for every milestone.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    coverImage: {
      src: "/images/projects/makusudi-portfolio/cover.png",
      srcDark: "/images/projects/makusudi-portfolio/cover-dark.png",
      alt: "The portfolio home page on desktop and mobile",
    },
    links: {
      repository: "https://github.com/Makcood/makusudi-dev",
    },
    featured: true,
  },
  {
    slug: "ashasmile",
    title: "AshaSmile",
    category: "Web application",
    date: "2026-10",
    description:
      "A dental clinic system for managing patients, appointments and billing in one place.",
    body: [
      "AshaSmile replaces paper records and scattered spreadsheets with a single system for the daily work of a dental clinic. Staff register patients, schedule appointments and record billing from one interface.",
      "The application is built with Laravel and React through Inertia, on a PostgreSQL database. Patient data is handled with care, with server-side validation and access limited to authorised staff.",
      "The project is developed in milestones, with continuous integration running the test suite against PostgreSQL on every pull request.",
    ],
    technologies: ["Laravel", "React", "Inertia", "TypeScript", "PostgreSQL"],
    coverImage: {
      src: "/images/projects/ashasmile/cover.png",
      alt: "The AshaSmile appointment calendar",
    },
    links: {},
    featured: true,
  },
  {
    slug: "cyprus-christian-tabernacle",
    title: "Cyprus Christian Tabernacle",
    category: "Website",
    date: "2026-11",
    description: "The official website of a church, sharing its sermons, songs, books and beliefs.",
    body: [
      "The website gives the Cyprus Christian Tabernacle a home online, where visitors can learn about the church, watch sermons, listen to songs and read its preachers' books.",
      "Sermons and songs are synchronised from the church's YouTube channel into a PostgreSQL database, so new videos appear on the site without manual work. Visitors can search and filter them, and each one has its own page.",
      "The site is built with Next.js and designed to grow, with English first and French and Spanish planned as later releases.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    coverImage: {
      src: "/images/projects/cyprus-christian-tabernacle/cover.png",
      alt: "The Cyprus Christian Tabernacle home page",
    },
    links: {
      repository: "https://github.com/Makcood/cyprus-christian-tabernacle",
    },
    featured: true,
  },
  {
    slug: "idea",
    title: "Idea",
    category: "Web application",
    date: "2026-11",
    description:
      "A personal idea tracker for capturing ideas, breaking them into steps and following them through.",
    body: [
      "Idea is a small application for capturing ideas before they are lost, and turning them into something achievable. Each idea has a status, a Markdown description, an image, steps and useful links.",
      "It was built to learn PHP and Laravel in depth, following Laracasts' Laravel From Scratch course, with Blade, Alpine.js and Tailwind CSS on a PostgreSQL database.",
      "Despite its size, it follows the same process as larger projects: planned milestones, feature and browser tests, and continuous integration.",
    ],
    technologies: ["Laravel", "Blade", "Alpine.js", "Tailwind CSS", "PostgreSQL"],
    coverImage: {
      src: "/images/projects/idea/cover.png",
      alt: "The Idea dashboard with a list of ideas",
    },
    links: {
      repository: "https://github.com/Makcood/idea-tracker",
    },
    featured: false,
  },
  {
    slug: "tano",
    title: "Tano",
    category: "Website",
    date: "2025-01",
    description: "A brand and marketing website for a technology startup.",
    body: [
      "Tano needed a website that presented its brand and products clearly to customers and partners.",
      "Working within the development team, the site was built with reusable components and a responsive layout, so new pages and sections could be added quickly as the company grew.",
      "The result gave the startup a consistent, professional presence online.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: {
      src: "/images/projects/tano/cover.png",
      alt: "The Tano home page",
    },
    links: {},
    featured: false,
  },
  {
    slug: "roottech",
    title: "RootTech",
    category: "Website",
    date: "2025-06",
    description: "A website for a technology startup, built to grow with the product.",
    body: [
      "RootTech needed a website that could start small and expand alongside its product.",
      "The site was structured around reusable sections and typed content, so new pages could be added without reworking the layout.",
      "It gave the company a clear, modern presence from launch, ready to grow with each new feature.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: {
      src: "/images/projects/roottech/cover.png",
      alt: "The RootTech home page",
    },
    links: {},
    featured: false,
  },
];
