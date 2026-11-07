import Link from "next/link";

import { cn } from "@/lib/utils/class-name";
import { site } from "@/config/site";

export default function FooterForm({ className }: { className?: string }) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-6">
        <Link className="font-bold text-brand uppercase" href="/">
          {site.name}
        </Link>
      </div>
    </section>
  );
}
