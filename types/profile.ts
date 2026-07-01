export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  slug: string;
  status: string;
  projectType: string;
  completion: string;
  overview: string[];
  problem: string;
  modules: string[];
  techStack: string[];
  features: string[];
  currentFocus: string;
}

export interface Education {
  degree: string;
  branch: string;
  college: string;
  university: string;
  duration: string;
  semester: string;
  cgpa: string;
  location: string;
}

export interface Experience {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Certification {
  issuer: string;
  title: string;
}

export interface CodingProfile {
  platform: string;
  href: string;
  detail?: string;
}
