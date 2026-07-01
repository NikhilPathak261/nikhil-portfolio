import { ProjectCard } from "@/components/cards/ProjectCard";
import { ArrowRight } from "@/components/icons/LucideIcon";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { projects } from "@/data/profile";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-3xl">
        <Eyebrow>Featured Project</Eyebrow>
        <SectionHeading>Production-oriented engineering work.</SectionHeading>
        <Paragraph className="mt-4">
          VakSetu is the flagship project and the main case study for backend architecture,
          authentication, real-time systems, and full-stack product thinking.
        </Paragraph>
      </div>
      <div className="mt-10 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/projects" variant="secondary">
          View Projects Page
          <ArrowRight aria-hidden size={18} />
        </ButtonLink>
      </div>
    </SectionWrapper>
  );
}
