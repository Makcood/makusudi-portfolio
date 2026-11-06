import type { Metadata } from "next";

import { Section } from "@/components/ui/";
import { rootMetadata } from "@/config/metadata";

const title = "Projects";
const description = "Selected projects, with the context, role, stack and outcome of each.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...rootMetadata.openGraph, title, description },
  twitter: { ...rootMetadata.twitter, title, description },
};

export default function Page() {
  return (
    <Section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Projects Page</h1>
    </Section>
  );
}
