import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How personal data is collected, used and protected on makusudidev.",
};

export default function Page() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1 className="text-body-md font-bold">Privacy Page</h1>
    </section>
  );
}
