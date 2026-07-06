import { existsSync } from "node:fs";

const requiredBeforeLaunch = [
  {
    label: "Resume PDF",
    path: "public/resume/Resume.pdf",
    message: "Add the final resume PDF and then set `resumeAvailable` to true in `data/profile.ts`.",
  },
];

const contentNeeded = [
  "VakSetu real challenges",
  "VakSetu roadmap",
  "VakSetu screenshots",
  "Production URL for NEXT_PUBLIC_SITE_URL",
  "GitHub repository remote",
  "Vercel deployment",
];

const missingFiles = requiredBeforeLaunch.filter((item) => !existsSync(item.path));

if (missingFiles.length === 0 && contentNeeded.length === 0) {
  console.log("No content gaps detected.");
  process.exit(0);
}

console.log("Content gaps remaining before final launch:");

for (const item of missingFiles) {
  console.log(`- ${item.label}: missing ${item.path}. ${item.message}`);
}

for (const item of contentNeeded) {
  console.log(`- ${item}`);
}

process.exit(0);
