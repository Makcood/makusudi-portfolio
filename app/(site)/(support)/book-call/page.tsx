import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a short call to discuss a project or an opportunity.",
};
export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Book a Call Page</h1>
    </Section>
  );
}
