"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils/class-name";
import Nav from "@/components/layout/navigation/nav";
import Container from "@/components/ui/container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-40 py-4 transition-colors",
        scrolled ? "bg-background/80 backdrop-blur-lg" : "",
      )}
    >
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
