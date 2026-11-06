import type React from "react";

import { cn } from "@/lib/utils/class-name";

type ContainerProps = React.ComponentProps<"div">;

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
