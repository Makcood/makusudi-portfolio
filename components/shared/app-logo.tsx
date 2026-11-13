"use client";

import Link from "next/link";

import AppLogoIcon from "./app-logo-icon";

export default function AppLogo() {
  return (
    <Link href="/public" aria-label="Makcood home" className="flex items-center">
      <span
        className="flex aspect-square size-8 items-center justify-center rounded-md bg-brand text-muted-foreground"
        aria-hidden="true"
      >
        <AppLogoIcon className="size-5 fill-current" />
      </span>
    </Link>
  );
}
