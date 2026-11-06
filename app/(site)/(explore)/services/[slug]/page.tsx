import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Service",
  description: "Details of a development service.",
};

export function generateStaticParams() {
  return [
    { slug: "software-development" },
    { slug: "mobile-development" },
    { slug: "ai-automation" },
  ];
}

export default function Page() {
  return (
    <Section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Service Page</h1>
    </Section>
  );
}
