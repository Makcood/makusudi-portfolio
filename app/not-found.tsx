import type { Metadata } from "next";
import Link from "next/link";

import { Container, Separator } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col">
      <Container className="flex flex-1 flex-col items-center justify-center gap-8">
        <div className="flex h-12 flex-row items-center gap-6">
          <p className="text-h4 text-brand" aria-hidden="true">
            404
          </p>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1 overflow-hidden">
            <h1 className="text-body-sm motion-safe:animate-reveal-not-found">
              This page could not be found.
            </h1>
            <Link
              href="/"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground motion-safe:animate-reveal-not-found"
            >
              Return home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
