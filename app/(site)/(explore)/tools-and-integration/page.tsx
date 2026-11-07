import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Tools & Integrations",
  description: "The languages, frameworks, tools and services used to build and ship products.",
};

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Tools and Integration Page</h1>
    </Section>
  );
}
