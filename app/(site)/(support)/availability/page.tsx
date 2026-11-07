import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Availability",
  description: "Current availability for new projects and roles.",
};

export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Availability</h1>
    </section>
  );
}
