import { ProfileCard } from "@/components/cards/ProfileCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { codingProfiles } from "@/data/profile";

export function CodingProfilesSection() {
  return (
    <SectionWrapper id="profiles" className="bg-slate-950/50">
      <div className="max-w-3xl">
        <Eyebrow>Coding Profiles</Eyebrow>
        <SectionHeading>Profiles recruiters can verify.</SectionHeading>
        <Paragraph className="mt-4">
          Active technical profiles for code, professional background, and problem-solving progress.
        </Paragraph>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {codingProfiles.map((profile) => (
          <ProfileCard key={profile.href} profile={profile} />
        ))}
      </div>
    </SectionWrapper>
  );
}
