import Link from "next/link";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Eyebrow, Paragraph, SectionHeading } from "@/components/ui/Typography";
import { codingProfiles, profile } from "@/data/profile";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-slate-950/50">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <SectionHeading>Let’s connect professionally.</SectionHeading>
          <Paragraph className="mt-4">
            For opportunities, project discussions, or profile review, the preferred contact method is{" "}
            {profile.preferredContact}.
          </Paragraph>
        </div>

        <Card>
          <div className="grid gap-5">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <Link
                href={`mailto:${profile.email}`}
                className="mt-1 inline-flex rounded-lg font-semibold text-white transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {profile.email}
              </Link>
            </div>
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <Link
                href={`tel:${profile.phone}`}
                className="mt-1 inline-flex rounded-lg font-semibold text-white transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {profile.phone}
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {codingProfiles.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  {item.platform}
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
