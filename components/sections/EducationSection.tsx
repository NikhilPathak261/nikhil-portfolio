import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { education, experience } from "@/data/profile";

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-slate-950/50">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <Eyebrow>Education</Eyebrow>
          <SectionHeading className="text-2xl sm:text-3xl">{education.degree}</SectionHeading>
          <Paragraph className="mt-4">{education.branch}</Paragraph>
          <dl className="mt-6 grid gap-4 text-sm">
            <div>
              <dt className="text-slate-400">College</dt>
              <dd className="mt-1 font-medium text-white">{education.college}</dd>
            </div>
            <div>
              <dt className="text-slate-400">University</dt>
              <dd className="mt-1 font-medium text-white">{education.university}</dd>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-slate-400">Duration</dt>
                <dd className="mt-1 font-medium text-white">{education.duration}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Semester</dt>
                <dd className="mt-1 font-medium text-white">{education.semester}</dd>
              </div>
              <div>
                <dt className="text-slate-400">CGPA</dt>
                <dd className="mt-1 font-medium text-white">{education.cgpa}</dd>
              </div>
            </div>
          </dl>
        </Card>

        <Card>
          <Eyebrow>Experience</Eyebrow>
          <SectionHeading className="text-2xl sm:text-3xl">{experience.title}</SectionHeading>
          <Paragraph className="mt-4">{experience.description}</Paragraph>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-slate-400">Organization</p>
              <p className="mt-1 font-medium text-white">{experience.organization}</p>
            </div>
            <div>
              <p className="text-slate-400">Duration</p>
              <p className="mt-1 font-medium text-white">{experience.duration}</p>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
