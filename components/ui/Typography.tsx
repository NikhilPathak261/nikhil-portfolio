import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

export function SectionHeading({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn("text-3xl font-bold tracking-normal text-white sm:text-4xl", className)}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn("mb-3 text-sm font-semibold uppercase tracking-normal text-cyan-300", className)}
      {...props}
    />
  );
}

export function Paragraph({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-base leading-7 text-slate-300", className)} {...props} />;
}
