import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>About</Eyebrow>
          <SectionHeading>Backend-focused, full-stack capable.</SectionHeading>
        </div>
        <div className="grid gap-4">
          {profile.summary.map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <Card>
              <p className="text-sm text-slate-400">Current City</p>
              <p className="mt-2 font-semibold text-white">{profile.currentCity}</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-400">Hometown</p>
              <p className="mt-2 font-semibold text-white">{profile.hometown}</p>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
