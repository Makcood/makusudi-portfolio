import Link from "next/link";

import { footerNavGroups } from "@/config/navigation";

export default function FooterNavigation() {
  return (
    <nav className="flex flex-col gap-8" aria-label="Footer">
      {footerNavGroups.map((group) => (
        <div key={group.title} className="flex flex-col gap-3.5">
          <h2 className="text-body-md">{group.title}</h2>
          <ul className="flex flex-col gap-3">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-body-sm text-muted-foreground transition-colors hover:text-brand"
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
