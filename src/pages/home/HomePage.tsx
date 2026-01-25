import LightPillar from "@/components/LightPillar";
import PillNav from "@/components/PillNav";
import TechIcon from "@/components/TechIcon";
import TextType from "@/components/TextType";
import Shuffle from "@/components/Shuffle";
import logo from "@/assets/BenLogo.png";
import igcseLearning from "@/assets/igcse.png";
import liveCodeExecution from "@/assets/liveCode.png";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Download,
} from "lucide-react";
import coder from "@/assets/coder.png";
import frameworkIcons from "@/assets/framworkIcon";

// Work Experience Data
interface WorkItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

const workExperience: WorkItem[] = [
  {
    company: "FPT Software Philippines",
    role: "Software Engineering Intern",
    location: "Makati City, Philippines",
    period: "Jan 2025 - Nov 2025",
    description:
      "Developed HR automation solutions using RPA technology, streamlining employee onboarding and reducing manual processing time by 40%. Collaborated with international team in Agile environment.",
    technologies: ["UiPath", "Node.js", "RPA", "Process Automation", "React"],
  },
];

// Featured Projects Data
const featuredProjects = [
  {
    image: "/ev-station.png",
    title: "EV Station-Based Rental System",
    description:
      "Full-stack platform for electric vehicle rentals with real-time charging station availability, booking management, and payment integration.",
    tags: [
      "React",
      "React Native",
      "Node.js",
      "MongoDB",
      "JWT",
      "Zustand",
      "Express.js",
      "Mongoose",
      "JWT",
    ],
    links: {
      github: "https://github.com/Baodng2402/Electric-Vehicle-Rental",
    },
  },
  {
    image: igcseLearning,
    title: "IGCSE Learning Platform",
    description:
      "Educational platform with real-time synchronization, interactive learning modules, and comprehensive progress tracking for IGCSE students.",
    tags: ["React", "Redux Toolkit", "Firebase", "Real-time Sync", "React Native", "Expo", "PostgreSQL"],
    links: { github: "https://github.com/Baodng2402/SWD391-Frontend" },
  },
  {
    image: liveCodeExecution, // Nhớ cập nhật file ảnh demo (ví dụ: ảnh terminal hoặc code editor)
    title: "Live Code Execution System",
    description:
      "A secure, real-time remote code execution engine. It utilizes Docker containers to sandbox user-submitted code, ensuring safety while supporting multiple programming languages.",
    tags: ["Node.js", "Express.js", "EJS", "WebSocket", "Docker", "PostgreSQL"],
    links: { github: "https://github.com/Baodng2402/Live_Code_Execution" },
  },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Background Effect - always visible */}
      <LightPillar
        topColor="#8b5cf6"
        bottomColor="#06b6d4"
        intensity={1}
        rotationSpeed={0.3}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="normal"
        quality="medium"
      />

      {/* Header - Navigation */}
      <div className="flex justify-center items-center">
        <PillNav
          logo={logo}
          logoAlt="Bao Logo"
          items={[
            { label: "About", href: "#about" },
            { label: "Work", href: "#work" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ]}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation={false}
          enableAutoHighlight={true}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
        >
          {/* Avatar with Quote */}
          <div className="relative mb-6 md:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                <img
                  src={coder}
                  alt="Avatar"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
            </div>
            {/* Quote Bubble - Hidden on mobile */}
            <div className="hidden md:block absolute -top-4 -right-32 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
              <p className="text-xs text-white/80">
                <span className="text-purple-400">A Developer who</span>
                <br />
                <span className="font-semibold">Judges a book</span>
                <br />
                <span className="font-semibold">
                  by its <span className="gradient-text">cover</span>
                  ...
                </span>
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              I'm a{" "}
              <span className="gradient-text">
                <TextType
                  as="span"
                  text={[
                    "Software Engineer!",
                    "Full-Stack Developer!",
                    "Problem Solver!",
                  ]}
                  typingSpeed={150}
                  pauseDuration={2000}
                  showCursor
                  cursorCharacter="▎"
                  deletingSpeed={50}
                  cursorBlinkDuration={0.5}
                  className="inline"
                />
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/60 mb-2">
              Currently, I'm a Software Engineer at{" "}
              <a
                href="https://daihoc.fpt.edu.vn/"
                className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                FPT University
              </a>
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed mb-6 md:mb-8 px-2">
              Final-year Software Engineering student with international
              internship experience. Building cross-platform solutions with
              modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#projects"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Projects
              </a>
              <a
                href="/DangNguyenGiaBao_FullStack_Developer.pdf"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* ==================== WORK EXPERIENCE SECTION ==================== */}
        <section id="work" className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <Shuffle
              text="Work Experience"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
          </h2>

          {/* Work Experience Cards */}
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {workExperience.map((work, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                      {work.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-purple-400 font-semibold mb-3">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        <span>{work.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{work.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>{work.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm font-mono bg-white/5 text-cyan-300 rounded-full border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== TECH STACK WITH LOGO CONNECTIONS ==================== */}
        <section className="px-4 sm:px-6 py-12 text-center relative">
          <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
            Building with{" "}
            <span className="gradient-text font-semibold">
              modern technologies
            </span>
          </p>
          <p className="text-xs sm:text-sm text-white/50 mb-6 sm:mb-8 px-4">
            Full-stack development with focus on scalability and user experience
          </p>

          {/* Tech Icons Grid */}
          <div id="tech-icons" className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
            {frameworkIcons.map((tech, index) => (
              <TechIcon
                key={index}
                icon={
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />
                }
                name={tech.name}
              />
            ))}
          </div>

          {/* SVG Connection Lines - Hidden on mobile for clarity */}
          <svg className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none" style={{ top: '60%', width: '600px', height: '300px' }} aria-hidden="true">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Radial lines from center logo to tech icons */}
            {/* Left lines */}
            <line x1="300" y1="200" x2="80" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="200" x2="140" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" />
            </line>
            {/* Center lines */}
            <line x1="300" y1="200" x2="220" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="200" x2="300" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="200" x2="380" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
            </line>
            {/* Right lines */}
            <line x1="300" y1="200" x2="460" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.8s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="200" x2="520" y2="15" stroke="url(#lineGradient)" strokeWidth="2" filter="url(#glow)">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4.2s" repeatCount="indefinite" />
            </line>
          </svg>

          {/* Logo in center */}
          <div className="relative inline-block mt-6 sm:mt-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[50%] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center backdrop-blur-xl border-2 border-white/10">
              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover opacity-80 rounded-[50%]"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[50%] bg-purple-500/30 blur-3xl -z-10" />
          </div>
        </section>

        {/* ==================== FEATURED PROJECTS SECTION ==================== */}
        <section id="projects" className="px-4 sm:px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <Shuffle
              text="Featured Projects"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
          </h2>

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 items-center`}
              >
                {/* Project Image */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-cyan-400 text-sm mb-2 font-mono">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 sm:mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-white/5 text-white/70 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a
                      href={project.links.github}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section
          id="contact"
          className="px-4 sm:px-6 py-8 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Contact</h2>
          <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 leading-relaxed px-2">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-block text-sm sm:text-base text-purple-400 hover:text-purple-300 underline underline-offset-4 mb-6 sm:mb-8"
          >
            baodngworkstation@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
            <a
              href="https://github.com/Baodng2402"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="www.linkedin.com/in/baodngworkstation"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.facebook.com/gb.2402"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <Facebook size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:baodngworkstation@gmail.com"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-white/40 border-t border-white/5">
        <p>© 2026 Bao. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
