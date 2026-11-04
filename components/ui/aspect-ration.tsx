import React from "react";

import { cn } from "@/lib/utils/class-name";

export default function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn(`relative aspect-${ratio}`, className)}
      {...props}
    />
  );
}
