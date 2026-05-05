// Framework/Tech Stack Icons - Import from assets folder
import reactjs from "./framework/reactjs.png";
import ts from "./framework/ts.svg";
import js from "./framework/js.png";
import nodejs from "./framework/nodejs.svg.png";
import nextjs from "./framework/nextjs-icon.svg";
import express from "./framework/express.webp";
import mongodb from "./framework/mongodb.png";
import postgre from "./framework/postgre.webp";
import docker from "./framework/docker.webp";
import github from "./framework/github.png";
import css from "./framework/css.png";
import java from "./framework/java.svg";
import cpp from "./framework/ISO_C++_Logo.svg.png";
import uipath from "./framework/uipath.png";
import digitalOcen from "./framework/DigitalOcean_logo.svg.png"
import nestjs from "./framework/NestJS.svg";

// Tech stack data with actual image imports
export const frameworkIcons = [
  { name: "ReactJS", icon: reactjs, color: "#61DAFB" },
  { name: "Next.js", icon: nextjs, color: "#000000" },
  { name: "TypeScript", icon: ts, color: "#3178C6" },
  { name: "JavaScript", icon: js, color: "#F7DF1E" },
  { name: "Nest.js", icon: nestjs, color: "#000000" },
  { name: "Node.js", icon: nodejs, color: "#339933" },
  { name: "Express", icon: express, color: "#000000" },
  { name: "MongoDB", icon: mongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: postgre, color: "#4169E1" },
  { name: "Docker", icon: docker, color: "#2496ED" },
  { name: "DigitalOcean", icon: digitalOcen, color: "#3178C6" },
  { name: "GitHub", icon: github, color: "#181717" },
  { name: "CSS", icon: css, color: "#1572B6" },
  { name: "Java", icon: java, color: "#007396" },
  { name: "C++", icon: cpp, color: "#00599C" },
  { name: "UiPath", icon: uipath, color: "#FA4616" },
] as const;

// Type for framework icon
export type FrameworkIcon = {
  name: string;
  icon: string;
  color: string;
};

// Helper to get icon by name
export const getIconByName = (name: string): FrameworkIcon | undefined => {
  return frameworkIcons.find(
    (icon) => icon.name.toLowerCase() === name.toLowerCase(),
  );
};

export default frameworkIcons;
