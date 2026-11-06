import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a short call to discuss a project or an opportunity.",
};
export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Book a Call Page</h1>
    </section>
  );
}
