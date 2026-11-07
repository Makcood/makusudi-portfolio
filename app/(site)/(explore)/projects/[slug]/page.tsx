import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "Details of a selected project.",
};

export function generateStaticParams() {
  return [{ slug: "tano" }, { slug: "ashasmile" }, { slug: "roottech" }, { slug: "idea" }];
}

export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Project Page</h1>
    </section>
  );
}
