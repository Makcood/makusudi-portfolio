import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when using makusudidev and its services.",
};

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Terms of Service</h1>
    </Section>
  );
}
