import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  size?: "default" | "narrow" | "wide";
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-6xl",
  narrow: "max-w-4xl",
  wide: "max-w-7xl",
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    />
  );
}
