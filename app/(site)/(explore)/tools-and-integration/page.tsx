import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Integrations",
  description: "The languages, frameworks, tools and services used to build and ship products.",
};

export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Tools and Integration Page</h1>
    </section>
  );
}
