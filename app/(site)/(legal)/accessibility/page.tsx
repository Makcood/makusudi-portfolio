import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "The accessibility standards makusudidev follows, and how to report an issue.",
};

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Accessibility Page</h1>
    </Section>
  );
}
