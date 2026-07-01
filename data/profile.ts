import type {
  Certification,
  CodingProfile,
  Education,
  Experience,
  Project,
  SkillCategory,
} from "@/types/profile";

export const profile = {
  fullName: "Nikhil Pathak",
  title: "Software Developer",
  tagline:
    "Building scalable backend systems and modern full-stack applications using Java, Spring Boot, and React.",
  currentStatus: "B.Tech Computer Science Engineering Student",
  currentCity: "Bhopal, Madhya Pradesh",
  hometown: "Rewa, Madhya Pradesh",
  email: "nikhilpathak261@gmail.com",
  phone: "6267184843",
  preferredContact: "Email or LinkedIn",
  resumePath: "/resume/Resume.pdf",
  resumeAvailable: false,
  summary: [
    "I am a Computer Science undergraduate with a strong interest in backend engineering and full-stack application development.",
    "My primary expertise lies in Java, Spring Boot, Spring Security, REST API development, and MySQL. I enjoy designing scalable backend systems, implementing secure authentication mechanisms, and building production-oriented software following clean architecture principles.",
    "I continuously improve my technical skills through large real-world projects, competitive programming, and hands-on learning of modern software development practices.",
  ],
  careerObjective:
    "Become a Software Engineer specializing in backend development, scalable distributed systems, and AI-powered applications while continuously expanding my expertise in full-stack software engineering.",
  brandWords: ["Analytical", "Consistent", "Curious"],
  strengths: [
    "Strong backend interest",
    "Production-oriented development",
    "Clean architecture mindset",
    "Continuous learner",
    "Problem-solving through practical implementation",
  ],
  futureLearning: [
    "Distributed Systems",
    "Microservices",
    "Docker",
    "Kubernetes",
    "AWS",
    "System Design",
    "Artificial Intelligence",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Spring Framework", "Spring Boot", "Spring Security", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MySQL"],
  },
  {
    category: "Authentication",
    skills: ["JWT", "Role Based Access Control (RBAC)"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Visual Studio Code"],
  },
  {
    category: "Computer Science Fundamentals",
    skills: [
      "Object Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science Engineering",
  college: "Lakshmi Narain College of Technology, Bhopal",
  university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
  duration: "2023 - 2027",
  semester: "6th Semester",
  cgpa: "8.44",
  location: "Bhopal, Madhya Pradesh",
};

export const experience: Experience = {
  title: "Google Cloud Generative AI Virtual Internship",
  organization: "SmartBridge",
  duration: "November 2025 - January 2026",
  description:
    "Completed a virtual internship focused on Google Cloud Generative AI, gaining practical exposure to cloud-based generative AI concepts and modern AI application development.",
};

export const projects: Project[] = [
  {
    title: "VakSetu",
    slug: "vaksetu",
    status: "In Active Development",
    projectType: "Full Stack Web Application",
    completion: "Approximately 55%",
    overview: [
      "VakSetu is a production-oriented communication improvement platform designed to help users develop speaking and interpersonal communication skills through real-time interactive sessions.",
      "The platform combines Debate, Group Discussion, and Roleplay modules with AI-assisted evaluation, matchmaking, reputation tracking, skill analytics, and performance dashboards.",
    ],
    problem:
      "Traditional communication practice platforms often lack structured evaluation, intelligent matchmaking, and measurable progress tracking.",
    modules: [
      "Authentication System",
      "User Management",
      "Debate Arena",
      "Group Discussion",
      "Roleplay",
      "Matchmaking Engine",
      "Dashboard",
      "Reputation System",
      "Skill Tracking",
      "Feedback Engine",
    ],
    techStack: [
      "Spring Boot Backend",
      "React Frontend",
      "Spring Security",
      "JWT Authentication",
      "Refresh Tokens",
      "Role Based Access Control",
      "RESTful APIs",
      "MySQL Database",
      "WebSocket Integration",
      "WebRTC Signaling",
      "Layered Architecture",
      "DTO Based API Design",
      "Repository Pattern",
      "Service Layer Architecture",
    ],
    features: [
      "Secure authentication using JWT",
      "Refresh token mechanism",
      "Role-based authorization",
      "Real-time debate sessions",
      "Group discussion rooms",
      "Roleplay practice",
      "Communication skill tracking",
      "Reputation scoring",
      "Intelligent matchmaking",
      "Dashboard analytics",
      "Feedback system",
      "Progress monitoring",
    ],
    currentFocus:
      "Building a scalable production-ready backend while following industry-standard software architecture and clean coding practices.",
  },
];

export const achievements = [
  "Solved 350+ problems on LeetCode",
  "Building a production-scale full stack application (VakSetu)",
];

export const certifications: Certification[] = [
  {
    issuer: "Oracle University",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
  },
  {
    issuer: "Infosys Springboard",
    title: "Associate in IT Foundation Skills (Java)",
  },
  {
    issuer: "SmartBridge",
    title: "Google Cloud Generative AI Virtual Internship",
  },
  {
    issuer: "Coursera",
    title: "Data Structures & Backend with Java",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Cybersecurity Essentials",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "English for IT 2",
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    href: "https://github.com/NikhilPathak261",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-pathak-986215379/",
  },
  {
    platform: "LeetCode",
    href: "https://leetcode.com/u/NIKHIL__PATHAK/",
    detail: "350+ Problems Solved",
  },
];
