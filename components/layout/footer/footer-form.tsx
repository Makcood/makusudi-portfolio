import Link from "next/link";

import { cn } from "@/lib/utils/class-name";
import { Button, Field, FieldLabel, Input } from "@/components/ui";
import { site } from "@/config/site";

export default function FooterForm({ className }: { className?: string }) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-6">
        <Link className="font-bold text-brand uppercase" href="/">
          {site.name}
        </Link>
        <h2 id="newsletter-heading" className="text-body-md">
          Get the latest updates about Makcode’s new features and digital insights.
        </h2>
      </div>
      <form>
        <Field className="flex-col md:flex-row md:items-center md:*:w-auto">
          <FieldLabel htmlFor="newsletter-email" className="sr-only">
            Email address
          </FieldLabel>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="md:flex-1"
          />
          <Button size="lg" type="submit">
            Subscribe
          </Button>
        </Field>
      </form>
    </section>
  );
}
