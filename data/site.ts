import type { SiteConfig, SocialLink } from "@/types/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "Nikhil Pathak",
  title: "Nikhil Pathak | Software Developer",
  description:
    "Software developer portfolio for Nikhil Pathak, focused on Java, Spring Boot, backend engineering, full-stack development, and AI-powered applications.",
  email: "nikhilpathak261@gmail.com",
  resumePath: "/resume/Resume.pdf",
  baseUrl: siteUrl,
  ogImage: "/opengraph-image",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/NikhilPathak261",
    label: "Visit GitHub profile",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-pathak-986215379/",
    label: "Visit LinkedIn profile",
  },
  {
    platform: "LeetCode",
    href: "https://leetcode.com/u/NIKHIL__PATHAK/",
    label: "Visit LeetCode profile",
  },
];
