import { Download } from "@/components/icons/LucideIcon";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { profile } from "@/data/profile";

export function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Eyebrow>Resume</Eyebrow>
          <SectionHeading className="text-2xl sm:text-3xl">Resume access in one click.</SectionHeading>
          <Paragraph className="mt-4 max-w-2xl">
            {profile.resumeAvailable
              ? "Download the latest resume PDF from the portfolio."
              : "Resume PDF will be available after the file is added to the portfolio."}{" "}
            Preferred contact is {profile.preferredContact}.
          </Paragraph>
        </div>
        {profile.resumeAvailable ? (
          <ButtonLink href={profile.resumePath} className="shrink-0">
            Download Resume
            <Download aria-hidden size={18} />
          </ButtonLink>
        ) : (
          <Button type="button" className="shrink-0" disabled>
            Resume Coming Soon
            <Download aria-hidden size={18} />
          </Button>
        )}
      </Card>
    </SectionWrapper>
  );
}
