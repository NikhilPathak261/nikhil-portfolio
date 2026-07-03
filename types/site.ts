export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  resumePath: string;
  baseUrl: string;
  ogImage?: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}
