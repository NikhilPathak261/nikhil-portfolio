import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "@/components/icons/LucideIcon";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { projects } from "@/data/profile";
import { siteConfig } from "@/data/site";

const vakSetu = projects.find((project) => project.slug === "vaksetu");

export const metadata: Metadata = {
  title: "VakSetu Case Study",
  description:
    "VakSetu case study by Nikhil Pathak, covering a full-stack communication improvement platform built with Spring Boot, React, Spring Security, JWT, REST APIs, MySQL, WebSocket, and WebRTC signaling.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/projects/vaksetu`,
  },
};

export default function VakSetuPage() {
  if (!vakSetu) {
    return null;
  }

  return (
    <main>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center rounded-lg text-sm font-semibold text-cyan-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Back to projects
            </Link>
            <Eyebrow>Case Study</Eyebrow>
            <h1 className="text-5xl font-bold tracking-normal text-white sm:text-6xl">
              {vakSetu.title}
            </h1>
            <Paragraph className="mt-6 max-w-3xl text-lg">{vakSetu.overview[0]}</Paragraph>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>{vakSetu.status}</Badge>
              <Badge>{vakSetu.projectType}</Badge>
              <Badge>{vakSetu.completion}</Badge>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Overview</SectionHeading>
              <div className="mt-5 grid gap-4">
                {vakSetu.overview.map((paragraph) => (
                  <Paragraph key={paragraph}>{paragraph}</Paragraph>
                ))}
              </div>
            </Card>

            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Problem</SectionHeading>
              <Paragraph className="mt-5">{vakSetu.problem}</Paragraph>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <SectionHeading className="text-2xl sm:text-3xl">Architecture</SectionHeading>
              <Paragraph className="mt-5">
                VakSetu follows a layered architecture with DTO based API design, repository pattern,
                and service layer architecture.
              </Paragraph>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["React Frontend", "RESTful APIs", "Spring Boot Backend", "MySQL Database"].map(
                  (layer) => (
                    <div key={layer} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                      <p className="text-sm font-semibold text-white">{layer}</p>
                    </div>
                  ),
                )}
              </div>
            </Card>

            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Current Focus</SectionHeading>
              <Paragraph className="mt-5">{vakSetu.currentFocus}</Paragraph>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Major Modules</SectionHeading>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {vakSetu.modules.map((module) => (
                  <div key={module} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                    <p className="text-sm font-medium text-slate-100">{module}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Key Features</SectionHeading>
              <ul className="mt-5 grid gap-3">
                {vakSetu.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Authentication</SectionHeading>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Spring Security", "JWT Authentication", "Refresh Tokens", "Role Based Access Control"].map(
                  (item) => (
                    <Badge key={item}>{item}</Badge>
                  ),
                )}
              </div>
            </Card>

            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Database</SectionHeading>
              <Paragraph className="mt-5">
                VakSetu uses MySQL for the database layer, with backend access organized around the
                repository pattern and service layer architecture.
              </Paragraph>
            </Card>

            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">API Structure</SectionHeading>
              <div className="mt-5 flex flex-wrap gap-2">
                {["RESTful APIs", "DTO Based API Design", "Service Layer Architecture"].map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Challenges</SectionHeading>
              <Paragraph className="mt-5">Coming Soon</Paragraph>
            </Card>

            <Card>
              <SectionHeading className="text-2xl sm:text-3xl">Roadmap</SectionHeading>
              <Paragraph className="mt-5">Coming Soon</Paragraph>
            </Card>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects" variant="secondary">
              View all projects
            </ButtonLink>
            <ButtonLink href="/#contact">
              Contact Nikhil
              <ArrowRight aria-hidden size={18} />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
