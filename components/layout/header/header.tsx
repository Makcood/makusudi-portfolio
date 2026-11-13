"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils/class-name";
import HeaderNav from "@/components/layout/header/header-nav";
// import HeaderNavMobile from "@/components/layout/header/header-nav-mobile";
import { AppLogo } from "@/components/shared";
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
        "sticky top-0 z-50 transition-colors",
        scrolled ? "bg-background/80 backdrop-blur-lg" : "",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <AppLogo />
        <HeaderNav />
        {/*<HeaderNavMobile />*/}
      </Container>
    </header>
  );
}
