import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and education, from first roles to current work.",
};

export default function Page() {
  return (
    <Section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Experience Page</h1>
    </Section>
  );
}
