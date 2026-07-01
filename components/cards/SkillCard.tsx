import type { SkillCategory } from "@/types/profile";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface SkillCardProps {
  skillCategory: SkillCategory;
}

export function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-white">{skillCategory.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skillCategory.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </Card>
  );
}
