import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Project",
  description: "Details of a selected project.",
};

export function generateStaticParams() {
  return [{ slug: "tano" }, { slug: "ashasmile" }, { slug: "roottech" }, { slug: "idea" }];
}

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Project Page</h1>
    </Section>
  );
}
