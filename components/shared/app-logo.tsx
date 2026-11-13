import Link from "next/link";

import { cn } from "@/lib/utils/class-name";
import { site } from "@/config/site";

import LogoIcon from "./logo-icon";

export default function AppLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "flex size-8 items-center justify-center rounded-md bg-brand text-brand-foreground",
        className,
      )}
    >
      <LogoIcon className="size-5 fill-current" aria-hidden="true" />
    </Link>
  );
}
