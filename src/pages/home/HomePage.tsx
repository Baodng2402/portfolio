import { motion } from 'framer-motion';
import LightPillar from "@/components/LightPillar";
import PillNav from "@/components/PillNav";
import TechIcon from "@/components/TechIcon";
import TextType from "@/components/TextType";
import Shuffle from "@/components/Shuffle";
import AnimatedLine from "@/components/AnimatedLine";
import { containerVariants, itemVariants, slideInVariants, scaleInVariants } from "@/lib/animations";
import logo from "@/assets/BenLogo.png";
import igcseLearning from "@/assets/igcse.png";
import liveCodeExecution from "@/assets/liveCode.png";
import retailPlatform from "@/assets/360retail.png";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Download,
  ExternalLink,
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
    company: "Mebisoft Corporation",
    role: "Full-Stack Developer",
    location: "Ho Chi Minh City, Vietnam",
    period: "April 2026 - Now",
    description:
      "Developed and maintained internal company platforms, including an operations system (OS) and MebiFarm – a SaaS-based e-commerce solution with POS and sales management features. Contributed to both frontend and backend development using React and Node.js, building scalable features to support business operations. Collaborated with cross-functional teams in an Agile environment to continuously improve system performance and usability.",
    technologies: ["ReactJS", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "DigitalOcean", "Docker",],
  },
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
    image: retailPlatform,
    title: "360 Retail",
    description:
      "SaaS-based POS system for multi-store retail operations, featuring inventory management, CRM, sales tracking on the web, and a companion cross-platform mobile application.",
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Expo",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Axios"
    ],
    links: {
      github_web: "https://github.com/Baodng2402/360-Retail-Web",
      github_mobile: "https://github.com/Baodng2402/360-Retail-Mobile",
      demo: "https://360retail.shop/"
    }
  },
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
      github_web: "https://github.com/Baodng2402/Electric-Vehicle-Rental",
    },
  },
  {
    image: igcseLearning,
    title: "IGCSE Learning Platform",
    description:
      "Educational platform with real-time synchronization, interactive learning modules, and comprehensive progress tracking for IGCSE students.",
    tags: ["React", "Redux Toolkit", "Firebase", "Real-time Sync", "React Native", "Expo", "PostgreSQL"],
    links: { github_web: "https://github.com/Baodng2402/SWD391-Frontend" },
  },
  {
    image: liveCodeExecution, // Nhớ cập nhật file ảnh demo (ví dụ: ảnh terminal hoặc code editor)
    title: "Live Code Execution System",
    description:
      "A secure, real-time remote code execution engine. It utilizes Docker containers to sandbox user-submitted code, ensuring safety while supporting multiple programming languages.",
    tags: ["Node.js", "Express.js", "EJS", "WebSocket", "Docker", "PostgreSQL"],
    links: { github_web: "https://github.com/Baodng2402/Live_Code_Execution" },
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-6 md:mb-8"
          >
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:block absolute -top-4 -right-32 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20"
            >
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
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center max-w-3xl px-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            >
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
                  className="inline-block min-h-[1.5em]"
                />
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/60 mb-2"
            >
              Currently, I'm a Software Engineer at{" "}
              <a
                href="https://daihoc.fpt.edu.vn/"
                className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                FPT University
              </a>
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed mb-6 md:mb-8 px-2"
            >
              Final-year Software Engineering student with international
              internship experience. Building cross-platform solutions with
              modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/DangNguyenGiaBao_FullStack_Developer.pdf"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* ==================== WORK EXPERIENCE SECTION ==================== */}
        <section id="work" className="px-6 py-12 max-w-6xl mx-auto">
          <motion.h2
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            custom="left"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
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
          </motion.h2>

          {/* Work Experience Cards */}
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                variants={slideInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={index % 2 === 0 ? 'left' : 'right'}
                transition={{ duration: 0.7 }}
                className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                      {work.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-purple-400 font-semibold mb-3">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        <span>{work.company}</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 text-white/60 text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{work.location}</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 text-cyan-400 text-sm font-mono"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>{work.period}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 mb-6 leading-relaxed"
                  >
                    {work.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {work.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.4,
                              ease: [0.34, 1.56, 0.64, 1],
                            },
                          },
                        }}
                        whileHover={{ scale: 1.08, borderColor: '#06b6d4', boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}
                        className="px-4 py-2 text-sm font-mono bg-white/5 text-cyan-300 rounded-full border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==================== TECH STACK WITH LOGO CONNECTIONS ==================== */}
        <section className="px-4 sm:px-6 py-12 text-center relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8"
          >
            Building with{" "}
            <span className="gradient-text font-semibold">
              modern technologies
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-white/50 mb-6 sm:mb-8 px-4"
          >
            Full-stack development with focus on scalability and user experience
          </motion.p>

          {/* Tech Icons Grid */}
          <motion.div
            id="tech-icons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 sm:mb-16 px-2"
          >
            {frameworkIcons.map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: (index % 8) * 0.04,
                      ease: [0.34, 1.56, 0.64, 1],
                    },
                  },
                }}
                whileHover={{ scale: 1.15, y: -5 }}
              >
                <TechIcon
                  icon={
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                    />
                  }
                  name={tech.name}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* SVG Connection Lines - Animated with motion */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none" style={{ top: '60%', width: '600px', height: '300px', perspective: '1000px' }}>
            {/* Radial lines from center logo to tech icons */}
            <AnimatedLine x1={300} y1={200} x2={80} y2={15} delay={0} />
            <AnimatedLine x1={300} y1={200} x2={140} y2={15} delay={0.2} />
            <AnimatedLine x1={300} y1={200} x2={220} y2={15} delay={0.4} />
            <AnimatedLine x1={300} y1={200} x2={300} y2={15} delay={0.1} duration={3.2} />
            <AnimatedLine x1={300} y1={200} x2={380} y2={15} delay={0.4} />
            <AnimatedLine x1={300} y1={200} x2={460} y2={15} delay={0.3} />
            <AnimatedLine x1={300} y1={200} x2={520} y2={15} delay={0.5} />
          </div>

          {/* Logo in center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block mt-6 sm:mt-8"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[50%] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center backdrop-blur-xl border-2 border-white/10">
              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover opacity-80 rounded-[50%]"
              />
            </div>{/* Glow effect */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.6)',
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[50%] bg-purple-500/30 blur-3xl -z-10"
            />
          </motion.div>
        </section>

        {/* ==================== FEATURED PROJECTS SECTION ==================== */}
        <section id="projects" className="px-4 sm:px-6 py-12 max-w-6xl mx-auto">
          <motion.h2
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            custom="left"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center"
          >
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
          </motion.h2>

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={slideInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={index % 2 === 0 ? 'left' : 'right'}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 items-center`}
              >
                {/* Project Image */}
                <motion.div
                  variants={scaleInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex-1 relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  {/* Decorative glow */}
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>

                {/* Project Info */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex-1 text-center lg:text-left"
                >
                  <motion.p
                    variants={itemVariants}
                    className="text-cyan-400 text-sm mb-2 font-mono"
                  >
                    Featured Project
                  </motion.p>
                  <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-bold mb-4"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-white/60 mb-4 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 sm:mb-6"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.3,
                              ease: [0.34, 1.56, 0.64, 1],
                            },
                          },
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-white/5 text-white/70 rounded-full border border-white/10 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-3 justify-center lg:justify-start items-center flex-wrap"
                  >
                    {project.links.github_web && (
                      <motion.a
                        href={project.links.github_web}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Web Repository"
                        className="relative group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/50 transition-all"
                      >
                        <div className="relative">
                          <Github size={16} className="text-cyan-400" />
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full text-white text-[8px] flex items-center justify-center font-bold">W</span>
                        </div>
                        <span className="text-xs font-medium text-cyan-400">Web</span>
                      </motion.a>
                    )}
                    {project.links.github_mobile && (
                      <motion.a
                        href={project.links.github_mobile}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Mobile Repository"
                        className="relative group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/50 transition-all"
                      >
                        <div className="relative">
                          <Github size={16} className="text-pink-400" />
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-400 rounded-full text-white text-[8px] flex items-center justify-center font-bold">M</span>
                        </div>
                        <span className="text-xs font-medium text-pink-400">Mobile</span>
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-green-500/15 border border-white/10 hover:border-green-500/50 transition-all"
                      >
                        <ExternalLink size={16} className="text-green-400" />
                        <span className="text-xs font-medium text-green-400">Demo</span>
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section
          id="contact"
          className="px-4 sm:px-6 py-8 max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            >
              Contact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 leading-relaxed px-2"
            >
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </motion.p>

            <motion.a
              variants={itemVariants}
              whileHover={{ color: '#a78bfa', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:baodngworkstation@gmail.com"
              className="inline-block text-sm sm:text-base text-purple-400 hover:text-purple-300 underline underline-offset-4 mb-6 sm:mb-8 transition-colors"
            >
              baodngworkstation@gmail.com
            </motion.a>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap"
            >
              <motion.a
                href="https://github.com/Baodng2402"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/baodngworkstation"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/gb.2402"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="mailto:baodngworkstation@gmail.com"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-white/40 border-t border-white/5">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2026 Bao. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default HomePage;
