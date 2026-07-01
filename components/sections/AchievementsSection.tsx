import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";
import { achievements, certifications } from "@/data/profile";

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <div className="max-w-3xl">
        <Eyebrow>Achievements</Eyebrow>
        <SectionHeading>Verified progress and certifications.</SectionHeading>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <h3 className="text-xl font-semibold text-white">Highlights</h3>
          <ul className="mt-5 grid gap-3">
            {achievements.map((achievement) => (
              <li key={achievement} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                <p className="text-sm text-slate-200">{achievement}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {certifications.map((certification) => (
              <div
                key={`${certification.issuer}-${certification.title}`}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4"
              >
                <Badge>{certification.issuer}</Badge>
                <p className="mt-3 text-sm font-medium leading-6 text-white">{certification.title}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
