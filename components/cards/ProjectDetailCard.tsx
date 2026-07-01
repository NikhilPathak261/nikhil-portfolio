import Link from "next/link";

import type { Project } from "@/types/profile";

import { ArrowRight } from "@/components/icons/LucideIcon";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Paragraph } from "@/components/ui/Typography";

interface ProjectDetailCardProps {
  project: Project;
}

export function ProjectDetailCard({ project }: ProjectDetailCardProps) {
  return (
    <Card className="grid gap-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="flex aspect-[4/3] flex-col justify-between rounded-2xl border border-slate-700 bg-slate-950 p-5">
          <div className="flex flex-wrap gap-2">
            <Badge>{project.status}</Badge>
            <Badge>{project.projectType}</Badge>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">{project.title}</p>
            <p className="mt-2 text-sm text-cyan-200">{project.completion}</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <div className="mt-4 grid gap-3">
            {project.overview.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="text-sm font-semibold text-cyan-100">Current Focus</p>
            <p className="mt-2 text-sm leading-6 text-cyan-50">{project.currentFocus}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-white">Problem Statement</h3>
          <Paragraph className="mt-3">{project.problem}</Paragraph>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Case Study</h3>
          <Paragraph className="mt-3">Architecture, modules, authentication, database, and API structure.</Paragraph>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-cyan-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Open case study
            <ArrowRight aria-hidden size={16} />
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-white">Technical Highlights</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Key Features</h3>
          <ul className="mt-4 grid gap-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
