import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Process",
  description: "How projects are planned, designed, built, launched and supported.",
};

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Process Page</h1>
    </Section>
  );
}
