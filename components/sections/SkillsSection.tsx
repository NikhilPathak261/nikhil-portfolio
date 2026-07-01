import { SkillCard } from "@/components/cards/SkillCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { skillCategories } from "@/data/profile";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-slate-950/50">
      <div className="max-w-3xl">
        <Eyebrow>Skills</Eyebrow>
        <SectionHeading>Technologies and fundamentals.</SectionHeading>
        <Paragraph className="mt-4">
          Practical skills from backend development, full-stack implementation, tools, and core
          computer science fundamentals.
        </Paragraph>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((skillCategory) => (
          <SkillCard key={skillCategory.category} skillCategory={skillCategory} />
        ))}
      </div>
    </SectionWrapper>
  );
}
