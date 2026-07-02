import igcseLearning from "@/assets/igcse.png";
import liveCodeExecution from "@/assets/liveCode.png";
import retailPlatform from "@/assets/360retail.png";

export interface WorkItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  image: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  links: {
    github_web?: string;
    github_mobile?: string;
    demo?: string;
  };
}

export interface SkillItem {
  name: string;
  iconKey?: string;
  initials?: string;
  accentColor?: string;
}

export interface SkillGroup {
  label: string;
  skills: SkillItem[];
}

export const workExperience: WorkItem[] = [
  {
    company: "Mebisoft Corporation",
    role: "Full-Stack Developer",
    location: "Ho Chi Minh City, Vietnam",
    period: "April 2026 - Now",
    description:
      "Build and maintain SaaS platforms and internal systems with React, Next.js, and Node.js — shipping features across frontend and backend in Agile teams.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    company: "FPT Software Philippines",
    role: "Software Engineering Intern",
    location: "Makati City, Philippines",
    period: "Jan 2025 - Nov 2025",
    description:
      "Developed HR automation with RPA, cutting onboarding processing time by 40%. Collaborated with an international engineering team.",
    technologies: ["React", "Node.js", "UiPath", "RPA"],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    image: retailPlatform,
    title: "360 Retail",
    description:
      "Multi-store SaaS POS with inventory, CRM, and a cross-platform mobile app for retail operations.",
    tags: ["React", "React Native", "TypeScript", "Expo", "Tailwind CSS"],
    featured: true,
    links: {
      github_web: "https://github.com/Baodng2402/360-Retail-Web",
      github_mobile: "https://github.com/Baodng2402/360-Retail-Mobile",
      demo: "https://360-retail-web-bao5511cs-projects.vercel.app/",
    },
  },
  {
    image: "/ev-station.png",
    title: "EV Station Rental",
    description:
      "EV rental platform with live station availability, bookings, and payment flows.",
    tags: ["React", "React Native", "Node.js", "MongoDB"],
    links: {
      github_web: "https://github.com/Baodng2402/Electric-Vehicle-Rental",
    },
  },
  {
    image: igcseLearning,
    title: "IGCSE Learning",
    description:
      "Interactive learning platform with real-time sync and progress tracking for students.",
    tags: ["React", "Firebase", "React Native", "PostgreSQL"],
    links: { github_web: "https://github.com/Baodng2402/SWD391-Frontend" },
  },
  {
    image: liveCodeExecution,
    title: "Live Code Execution",
    description:
      "Sandboxed remote code runner with Docker isolation and multi-language support.",
    tags: ["Node.js", "Docker", "WebSocket", "PostgreSQL"],
    links: { github_web: "https://github.com/Baodng2402/Live_Code_Execution" },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", iconKey: "Next.js" },
      { name: "ReactJS", iconKey: "ReactJS" },
      { name: "React Native", iconKey: "React Native" },
      { name: "TypeScript", iconKey: "TypeScript" },
      { name: "Tailwind CSS", iconKey: "Tailwind CSS" },
      { name: "Shadcn/UI", initials: "UI", accentColor: "#fafafa" },
      { name: "Redux Toolkit", initials: "RT", accentColor: "#764ABC" },
      { name: "Zustand", initials: "Z", accentColor: "#8B5CF6" },
      { name: "Form Validation", initials: "FV", accentColor: "#22C55E" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Java", iconKey: "Java" },
      { name: "Spring Boot", iconKey: "Spring Boot" },
      { name: "Node.js", iconKey: "Node.js" },
      { name: "NestJS", iconKey: "NestJS" },
      { name: "RESTful API", initials: "API", accentColor: "#38bdf8" },
      { name: "JWT Auth", initials: "JWT", accentColor: "#F59E0B" },
    ],
  },
  {
    label: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", iconKey: "PostgreSQL" },
      { name: "MySQL", initials: "SQL", accentColor: "#00758F" },
      { name: "MongoDB", iconKey: "MongoDB" },
      { name: "Docker", iconKey: "Docker" },
      { name: "Git", iconKey: "Git" },
      { name: "GitLab CI/CD", initials: "GL", accentColor: "#FC6D26" },
      { name: "Postman", initials: "PM", accentColor: "#FF6C37" },
    ],
  },
  {
    label: "Architecture & Others",
    skills: [
      { name: "System Architecture", initials: "SA", accentColor: "#A78BFA" },
      { name: "Database Design", initials: "DD", accentColor: "#34D399" },
    ],
  },
];

export const heroIntroPhrases = [
  "Frontend Developer · Full-stack oriented",
  "React · Next.js · TypeScript",
  "Building fast, polished web experiences",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
