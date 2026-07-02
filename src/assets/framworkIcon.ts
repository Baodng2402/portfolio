// Framework/Tech Stack Icons — prefer transparent SVG where available
import reactjs from "./framework/reactjs.png";
import ts from "./framework/ts.svg";
import nextjs from "./framework/nextjs-icon.svg";
import nestjs from "./framework/NestJS.svg";
import nodejs from "./framework/nodejs.png";
import mongodb from "./framework/mongodb.png";
import postgre from "./framework/postgre.webp";
import docker from "./framework/docker.webp";
import github from "./framework/github.png";
import css from "./framework/css.png";
import java from "./framework/java.svg";
import springBoot from "./framework/Spring_Boot.svg.webp";

export type FrameworkIcon = {
  name: string;
  icon: string;
  color: string;
  /** Black/dark SVG — invert on dark theme */
  invert?: boolean;
};

export const frameworkIcons: FrameworkIcon[] = [
  { name: "ReactJS", icon: reactjs, color: "#61DAFB" },
  { name: "React Native", icon: reactjs, color: "#61DAFB" },
  { name: "Next.js", icon: nextjs, color: "#FFFFFF", invert: true },
  { name: "TypeScript", icon: ts, color: "#3178C6" },
  { name: "Tailwind CSS", icon: css, color: "#06B6D4" },
  { name: "Nest.js", icon: nestjs, color: "#E0234E" },
  { name: "NestJS", icon: nestjs, color: "#E0234E" },
  { name: "Node.js", icon: nodejs, color: "#339933" },
  { name: "MongoDB", icon: mongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: postgre, color: "#4169E1" },
  { name: "Docker", icon: docker, color: "#2496ED" },
  { name: "GitHub", icon: github, color: "#FFFFFF", invert: true },
  { name: "Git", icon: github, color: "#F05032", invert: true },
  { name: "CSS", icon: css, color: "#1572B6" },
  { name: "Java", icon: java, color: "#FFFFFF", invert: true },
  { name: "Spring Boot", icon: springBoot, color: "#6DB33F"},
];

export const getIconByName = (name: string): FrameworkIcon | undefined => {
  const normalized = name.toLowerCase().replace(/\s+/g, "");
  return frameworkIcons.find((icon) => {
    const iconNorm = icon.name.toLowerCase().replace(/\s+/g, "").replace(".js", "js");
    return (
      iconNorm === normalized ||
      iconNorm.includes(normalized) ||
      normalized.includes(iconNorm)
    );
  });
};

const skillIconMap: Record<string, FrameworkIcon> = {
  ReactJS: frameworkIcons[0],
  "React Native": frameworkIcons[1],
  "Next.js": frameworkIcons[2],
  TypeScript: frameworkIcons[3],
  "Tailwind CSS": frameworkIcons[4],
  "Nest.js": frameworkIcons[5],
  NestJS: frameworkIcons[6],
  "Node.js": frameworkIcons[7],
  MongoDB: frameworkIcons[8],
  PostgreSQL: frameworkIcons[9],
  Docker: frameworkIcons[10],
  GitHub: frameworkIcons[11],
  Git: frameworkIcons[12],
  CSS: frameworkIcons[13],
  Java: frameworkIcons[14],
  "Spring Boot": frameworkIcons[15],
};

export const getSkillIcon = (key: string): FrameworkIcon | undefined =>
  skillIconMap[key] ?? getIconByName(key);

export default frameworkIcons;
