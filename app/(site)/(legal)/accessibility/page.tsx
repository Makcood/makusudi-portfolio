import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "The accessibility standards makusudidev follows, and how to report an issue.",
};

export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Accessibility Page</h1>
    </section>
  );
}
