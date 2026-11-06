import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a project, a role or a collaboration.",
};

export default function Page() {
  return (
    <Section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Contact Page</h1>
    </Section>
  );
}
