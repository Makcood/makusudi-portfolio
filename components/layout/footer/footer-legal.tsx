import Link from "next/link";

import { legalNavItems } from "@/config/navigation";

async function Copyright() {
  "use cache";
  return (
    <small className="text-body-sm text-muted-foreground">
      © {new Date().getFullYear()} Makcode. All rights reserved.
    </small>
  );
}

export default function FooterLegal() {
  return (
    <div className="flex flex-col gap-8 border-t border-border pt-5 md:gap-4 md:pt-6 lg:flex-row lg:items-center lg:justify-between lg:pt-8">
      <nav aria-label="Legal" className="">
        <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          {legalNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Copyright />
    </div>
  );
}
