import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

import { NavGroup, NavItem } from "@/types";

export const headerNavGroups: NavGroup[] = [
  {
    title: "Projects",
    items: [
      {
        label: "Tano",
        href: "/projects/tano",
        description: "Brand and marketing site for a technology startup.",
      },
      {
        label: "Ashasmile",
        href: "/projects/ashasmile",
        description: "Dental clinic system for patients, appointments and billing.",
      },
      {
        label: "RootTech",
        href: "/projects/roottech",
        description: "Website for a technology startup, built to grow with the product.",
      },
      {
        label: "Idea",
        href: "/projects/idea",
        description: "Personal tracker for capturing ideas and following them through.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        label: "Software Development",
        href: "services/software-development",
        description: "Web applications built to ship, scale and stay maintainable.",
      },
      {
        label: "Mobile Development",
        href: "services/mobile-development",
        description: "iOS and Android apps, from one codebase or native where it matters.",
      },
      {
        label: "AI & Automation",
        href: "services/ai-automation",
        description: "Tools and workflows that take the repetitive work off your team.",
      },
    ],
  },
];

export const footerNavGroups: NavGroup[] = [
  {
    title: "Explore",
    items: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "Process", href: "/process" },
      { label: "Experience", href: "/experience" },
      { label: "Tools & Integration", href: "/tools-and-integration" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Start a Project", href: "/start-project" },
      { label: "Availability", href: "/availability" },
      { label: "Book a Call", href: "/book-call" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "GitHub", href: "https://github.com/makusudijoshua", icon: FaGithub },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/makusudijoshua", icon: FaLinkedin },
      { label: "Instagram", href: "https://instagram.com/makusudijoshua", icon: FaInstagram },
      { label: "X", href: "https://twitter.com/makusudijoshua", icon: FaTwitter },
    ],
  },
];

export const socialNavItems: NavItem[] = [
  { label: "GitHub", href: "https://github.com/makusudijoshua", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/makusudijoshua", icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com/makusudijoshua", icon: FaInstagram },
  { label: "X", href: "https://twitter.com/makusudijoshua", icon: FaTwitter },
];

export const legalNavItems: NavItem[] = [
  { label: "Terms of Service", href: "/terms-services" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];
