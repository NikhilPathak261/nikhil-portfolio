import Link from "next/link";

import type { CodingProfile } from "@/types/profile";

import { ArrowRight } from "@/components/icons/LucideIcon";
import { Card } from "@/components/ui/Card";

interface ProfileCardProps {
  profile: CodingProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card>
      <p className="text-lg font-semibold text-white">{profile.platform}</p>
      {profile.detail ? <p className="mt-2 text-sm text-cyan-200">{profile.detail}</p> : null}
      <Link
        href={profile.href}
        className="mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        target="_blank"
        rel="noreferrer"
      >
        Visit profile
        <ArrowRight aria-hidden size={16} />
      </Link>
    </Card>
  );
}
