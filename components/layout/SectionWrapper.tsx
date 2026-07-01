import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { cn } from "@/utils/cn";

interface SectionWrapperProps extends ComponentPropsWithoutRef<"section"> {
  containerSize?: "default" | "narrow" | "wide";
  animated?: boolean;
}

export function SectionWrapper({
  children,
  className,
  containerSize = "default",
  animated = true,
  ...props
}: SectionWrapperProps) {
  const content = <Container size={containerSize}>{children}</Container>;

  return (
    <section className={cn("scroll-mt-24 py-20 sm:py-24", className)} {...props}>
      {animated ? <RevealOnScroll>{content}</RevealOnScroll> : content}
    </section>
  );
}
