import { env } from "@/config/env";

export const site = {
  name: "makcode",
  author: "Joshua Makusudi",
  url: env.siteUrl,
  description:
    "makcode is the personal portfolio of Joshua Makusudi, a software engineer building full-stack web, mobile and AI-driven products.",
  locale: "en_GB",
} as const;
