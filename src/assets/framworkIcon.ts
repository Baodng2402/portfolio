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

const iconByName: Record<string, FrameworkIcon> = {
  ReactJS: { name: "ReactJS", icon: reactjs, color: "#61DAFB" },
  "React Native": { name: "React Native", icon: reactjs, color: "#61DAFB" },
  "Next.js": { name: "Next.js", icon: nextjs, color: "#FFFFFF", invert: true },
  TypeScript: { name: "TypeScript", icon: ts, color: "#3178C6" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: css, color: "#06B6D4" },
  "Nest.js": { name: "Nest.js", icon: nestjs, color: "#E0234E" },
  NestJS: { name: "NestJS", icon: nestjs, color: "#E0234E" },
  "Node.js": { name: "Node.js", icon: nodejs, color: "#339933" },
  MongoDB: { name: "MongoDB", icon: mongodb, color: "#47A248" },
  PostgreSQL: { name: "PostgreSQL", icon: postgre, color: "#4169E1" },
  Docker: { name: "Docker", icon: docker, color: "#2496ED" },
  GitHub: { name: "GitHub", icon: github, color: "#FFFFFF", invert: true },
  Git: { name: "Git", icon: github, color: "#F05032", invert: true },
  CSS: { name: "CSS", icon: css, color: "#1572B6" },
  Java: { name: "Java", icon: java, color: "#FFFFFF", invert: true },
  "Spring Boot": { name: "Spring Boot", icon: springBoot, color: "#6DB33F" },
};

export const frameworkIcons: FrameworkIcon[] = Object.values(iconByName);

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

export const getSkillIcon = (key: string): FrameworkIcon | undefined =>
  iconByName[key] ?? getIconByName(key);

export default frameworkIcons;
