import type { Metadata } from "next";

import { rootMetadata } from "@/config/metadata";

const title = "Blog";
const description =
  "Articles on software development, tools and lessons learnt from real projects.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...rootMetadata.openGraph, title, description },
  twitter: { ...rootMetadata.twitter, title, description },
};

export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Blog Page</h1>
    </section>
  );
}
