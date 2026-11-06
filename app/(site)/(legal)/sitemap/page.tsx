import type { Metadata } from "next";

import { Section } from "@/components/ui/";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on makusudidev, in one place.",
};

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Sitemap Page</h1>
    </Section>
  );
}
