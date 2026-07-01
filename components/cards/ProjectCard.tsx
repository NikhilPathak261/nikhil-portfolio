import type { Project } from "@/types/profile";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Paragraph } from "@/components/ui/Typography";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div className="flex aspect-[4/3] flex-col justify-between rounded-2xl border border-slate-700 bg-slate-950 p-5">
        <div>
          <Badge>{project.status}</Badge>
          <p className="mt-4 text-sm text-slate-400">{project.projectType}</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white">{project.title}</p>
          <p className="mt-2 text-sm text-cyan-200">{project.completion}</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <Paragraph className="mt-3">{project.overview[0]}</Paragraph>
        <Paragraph className="mt-3">{project.problem}</Paragraph>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-cyan-200">Case study coming soon</p>
      </div>
    </Card>
  );
}
