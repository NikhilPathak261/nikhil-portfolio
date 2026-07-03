import type { Metadata } from "next";

import { ProjectDetailCard } from "@/components/cards/ProjectDetailCard";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { ArrowRight } from "@/components/icons/LucideIcon";
import { projects } from "@/data/profile";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Nikhil Pathak, including VakSetu, a full-stack communication improvement platform built with Spring Boot, React, Spring Security, JWT, and MySQL.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/projects`,
  },
  openGraph: {
    title: "Projects | Nikhil Pathak",
    description:
      "Projects by Nikhil Pathak, including VakSetu, a full-stack communication improvement platform built with Spring Boot, React, Spring Security, JWT, and MySQL.",
    url: "/projects",
    siteName: "Nikhil Pathak Portfolio",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Nikhil Pathak Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Nikhil Pathak",
    description:
      "Projects by Nikhil Pathak, including VakSetu, a full-stack communication improvement platform built with Spring Boot, React, Spring Security, JWT, and MySQL.",
    images: [siteConfig.ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Projects</Eyebrow>
            <SectionHeading>Engineering work with real product thinking.</SectionHeading>
            <Paragraph className="mt-4">
              The project portfolio currently highlights VakSetu, a production-oriented full-stack
              application focused on communication practice, secure authentication, real-time
              sessions, and skill analytics.
            </Paragraph>
          </div>

          <div className="mt-10 grid gap-8">
            {projects.map((project) => (
              <ProjectDetailCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink href="/#contact" variant="secondary">
              Contact for project discussion
              <ArrowRight aria-hidden size={18} />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
