import type { Metadata } from "next";

import { Section } from "@/components/ui/";
import { rootMetadata } from "@/config/metadata";

const title = "Services";
const description = "Web, mobile and AI-driven development services.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...rootMetadata.openGraph, title, description },
  twitter: { ...rootMetadata.twitter, title, description },
};

export default function Page() {
  return (
    <Section className="flex min-h-svh flex-col justify-center text-center">
      <h1 className="text-body-md font-bold">Services Page</h1>
    </Section>
  );
}
