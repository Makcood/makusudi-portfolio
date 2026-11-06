import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Share the goals, timeline and budget of a project to start the conversation.",
};

export default function Page() {
  return (
    <Section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Start a Project Page</h1>
    </Section>
  );
}
