import type { SiteConfig, SocialLink } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Nikhil Pathak",
  title: "Nikhil Pathak | Software Developer",
  description:
    "Software developer portfolio for Nikhil Pathak, focused on Java, Spring Boot, backend engineering, full-stack development, and AI-powered applications.",
  email: "[Professional Email]",
  resumePath: "/resume/Resume.pdf",
  baseUrl: "https://example.com",
  ogImage: "/images/seo/og-image.png",
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
