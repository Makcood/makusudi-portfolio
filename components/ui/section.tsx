import React from "react";

import { cn } from "@/lib/utils/class-name";

import Container from "./container";

type SectionProps = React.ComponentProps<"section">;

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section data-slot="section" className={cn("py-12 md:py-20 lg:py-30", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
