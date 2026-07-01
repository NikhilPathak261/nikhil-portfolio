import { ArrowRight, Download } from "@/components/icons/LucideIcon";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow, Paragraph } from "@/components/ui/Typography";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <SectionWrapper id="home" animated={false} className="min-h-[calc(100vh-72px)]">
      <div className="grid min-h-[calc(100vh-232px)] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Eyebrow>{profile.title}</Eyebrow>
          <h1 className="max-w-4xl text-5xl font-bold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.fullName}
          </h1>
          <Paragraph className="mt-6 max-w-2xl text-lg">{profile.tagline}</Paragraph>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#projects">
              View Projects
              <ArrowRight aria-hidden size={18} />
            </ButtonLink>
            {profile.resumeAvailable ? (
              <ButtonLink href={profile.resumePath} variant="secondary">
                Download Resume
                <Download aria-hidden size={18} />
              </ButtonLink>
            ) : (
              <Button type="button" variant="secondary" disabled>
                Resume Coming Soon
                <Download aria-hidden size={18} />
              </Button>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
          <div className="grid gap-4">
            <Badge>{profile.currentStatus}</Badge>
            <div className="grid grid-cols-3 gap-3">
              {profile.brandWords.map((word) => (
                <div key={word} className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm font-semibold text-white">{word}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm leading-6 text-cyan-50">{profile.careerObjective}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
