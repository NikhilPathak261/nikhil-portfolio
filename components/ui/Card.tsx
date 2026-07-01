import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition duration-200 hover:border-blue-400/60 hover:bg-slate-900",
        className,
      )}
      {...props}
    />
  );
}
