import Link from "next/link";

import { cn } from "@/lib/utils/class-name";
import { footerNavGroups } from "@/config/navigation";

export default function FooterNavigation({ className }: { className?: string }) {
  return (
    <nav className={cn("flex flex-col gap-8 md:flex-row", className)} aria-label="Footer">
      {footerNavGroups.map((group) => (
        <div key={group.title} className="flex flex-col gap-3.5 md:flex-1">
          <h2 className="text-body-sm">{group.title}</h2>
          <ul className="flex flex-col gap-3">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-body-sm text-muted-foreground transition-colors hover:text-brand focus-visible:text-brand"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
