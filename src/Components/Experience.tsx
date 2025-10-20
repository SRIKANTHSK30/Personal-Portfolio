import React, { useEffect, useRef, useState, ReactNode, JSX } from "react";
import { useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  Code,
  ChevronRight,
  Sparkles,
  Keyboard,
  Server,
  GraduationCap,
} from "lucide-react";

interface Experience {
  year: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  gradient: string;
  icon: JSX.Element;
  theme: "green" | "cyan" | "education";
}

const experiences: Experience[] = [
  {
    year: "Jan 2025 – Present",
    title: "Junior Software Developer",
    company: "Zucus Technology Private Limited",
    location: "Coimbatore, India",
    type: "Full-time",
    description:
      "Design and improve the frontend features, Implementation in appointment calendar enhancement, and contribute to backend development by creating tables and APIs for seamless integration.",
    achievements: [
      "Contributed to the development of Alagist, a platform that connects customers with beauty professionals for various services.",
      "Focused on enhancing web interfaces to provide users with a seamless experience while booking appointments and classes.",
      "Assisted in building vendor-side tools that facilitate effective management of bookings and showcase beauty services.",
      "Developed features that allow users to explore vendor portfolios and submit reviews, improving overall engagement.",
      "Gained hands-on experience in full-stack development, user experience design, and API integration in a real-world, customer-facing application.",
    ],
    technologies: ["React JS", "Express JS", "Docker Desktop", "Dbeaver", "Git"],
    gradient: "from-green-900 via-black to-black",
    icon: <Keyboard size={20} />,
    theme: "green",
  },
  {
    year: "2022–2024",
    title: "Team Member & Full Stack Developer",
    company: "Sri Krishna College Of Engineering And Technology",
    location: "Coimbatore, India",
    type: "College Projects",
    description:
      "Developed two full-stack Web applications while assisting with backend integration, databases, and adding interactive features to enhance user experience.",
    achievements: [
      "Designed and implemented the frontend interfaces using modern web technologies, ensuring responsiveness and usability.",
      "Assisted in backend tasks such as SQL table creation, API development, and integration with frontend components.",
      "Added enhanced features including dynamic dashboards, form validations, and interactive UI elements to improve user experience.",
      "Gained practical experience in full-stack development workflow and teamwork, presenting the completed projects to faculty and peers.",
    ],
    technologies: ["React JS", "Spring Boot", "MySQL", "Swagger UI", "Postman"],
    gradient: "from-cyan-900 via-black to-black",
    icon: <Server size={20} />,
    theme: "cyan",
  },
];

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
}

function AnimatedCard({ children, index }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        transform: isInView ? "none" : `translateY(${index % 2 === 0 ? 100 : -100}px)`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.2 + 0.5}s`,
      }}
    >
      {children}
    </div>
  );
}

function MovingGlowLine() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= 0 ? 100 : prev - 0.5));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        absolute 
        top-[15rem] bottom-10 
        w-1 
        bg-gradient-to-b 
        from-green-400/30 via-blue-400/30 to-cyan-400/30 
        shadow-lg overflow-hidden
        left-6 md:left-1/2 
        transform md:-translate-x-1/2
        z-20
      "
    >
      <div
        className="absolute w-full h-20 bg-gradient-to-b from-green-400 via-blue-400 to-cyan-400 blur-[4px] opacity-70"
        style={{ top: `${position}%`, transition: "top 0.2s ease-out" }}
      ></div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#008000] via-[#0a0022] to-[#000000] pb-[19px]"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            <span className="text-white-500">Work</span>{" "}
            <span className="text-green-500">Experience</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide px-2 sm:px-4">
            A Timeline Of My Professional Journey And Key Accomplishments
          </p>
        </div>

        {/* Glow line */}
        <MovingGlowLine />

        <div className="space-y-10 sm:space-y-24">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} index={index}>
              <div
                className={`relative flex w-full flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline glowing dot */}
                <div
                  className={`
                    absolute 
                    top-14 md:top-10 
                    left-[2px] md:left-1/2 
                    transform md:-translate-x-1/2
                  `}
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 shadow-lg animate-pulse"
                    style={{
                      borderColor:
                        exp.theme === "green"
                          ? "#11f51cff"
                          : exp.theme === "education"
                          ? "#38bdf8"
                          : "cyan",
                      background:
                        exp.theme === "green"
                          ? "#11f51cff"
                          : exp.theme === "education"
                          ? "#38bdf8"
                          : "cyan",
                      boxShadow: `0 0 15px ${
                        exp.theme === "green"
                          ? "#11f51cff"
                          : exp.theme === "education"
                          ? "#38bdf8"
                          : "cyan"
                      }, 0 0 30px ${
                        exp.theme === "green"
                          ? "#11f51cff"
                          : exp.theme === "education"
                          ? "#38bdf8"
                          : "cyan"
                      }`,
                    }}
                  ></div>
                </div>

                {/* Card */}
                <div
                  className={`relative w-full md:w-1/2 pl-10 md:pl-12 pr-4 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="relative group rounded-2xl p-[2px] overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-70 group-hover:opacity-100 blur-md"
                      style={{
                        background: `conic-gradient(from 0deg, ${
                          exp.theme === "green"
                            ? "green, green, green"
                            : exp.theme === "education"
                            ? "#60a5fa, #3b82f6, #1e3a8a"
                            : "cyan, blue, cyan"
                        })`,
                        animation: "spin-slow 6s linear infinite",
                      }}
                    ></div>

                    {/* Main Card */}
                    <div
                      className={`relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${exp.gradient} backdrop-blur-md z-10`}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 relative z-10">
                        <div
                          className={`
                            flex items-center justify-center rounded-lg text-white shadow-lg transition-transform duration-500 group-hover:scale-110
                            w-[65px] h-10 sm:w-12 sm:h-20 md:w-10 md:h-10
                          `}
                          style={{
                            borderColor:
                              exp.theme === "green"
                                ? "green"
                                : exp.theme === "education"
                                ? "#60a5fa"
                                : "cyan",
                            background:
                              exp.theme === "green"
                                ? "linear-gradient(to right, #00ff9d, green)"
                                : exp.theme === "education"
                                ? "linear-gradient(to right, #60a5fa, #1e3a8a)"
                                : "linear-gradient(to right, cyan, blue)",
                          }}
                        >
                          {React.cloneElement(exp.icon, { size: 24 })}
                        </div>

                        <div>
                          <h3 className="text-lg ml-2 sm:text-xl text-left font-extrabold tracking-wide text-white">
                            {exp.title}
                          </h3>
                          <p
                            className={`font-semibold mt-2 ml-2 text-sm text-left ${
                              exp.theme === "green"
                                ? "text-green-300 "
                                : exp.theme === "education"
                                ? "text-sky-300"
                                : "text-cyan-300"
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 mt-3 ml-[60px] text-xs sm:text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {exp.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {exp.location}
                        </span>
                      </div>

                      <span
                        className={`block w-fit mt-3 ml-14 text-xs px-3 py-1 rounded-full backdrop-blur border ml-[60px] ${
                          exp.theme === "green"
                            ? "bg-green-900/40 text-green-300 border-green-500/40"
                            : exp.theme === "education"
                            ? "bg-blue-900/40 text-blue-300 border-blue-500/40"
                            : "bg-cyan-900/40 text-cyan-300 border-cyan-500/40"
                        }`}
                      >
                        {exp.type}
                      </span>

                      {/* Description */}
                      <p className="mt-4 text-left text-gray-200 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-4">
                        <h4
                          className={`font-semibold flex items-center gap-2 ${
                            exp.theme === "green"
                              ? "text-green-300"
                              : exp.theme === "education"
                              ? "text-sky-300"
                              : "text-cyan-300"
                          }`}
                        >
                          <Award size={16} /> Key Achievements
                        </h4>
                        <ul className="mt-2 text-gray-300 space-y-2 pl-2">
                          {exp.achievements.map((ach, i) => (
                            <li
                              key={i}
                              className="text-xs sm:text-sm text-left flex items-start"
                            >
                              <ChevronRight
                                size={16}
                                className={`${
                                  exp.theme === "green"
                                    ? "text-green-400"
                                    : exp.theme === "education"
                                    ? "text-blue-400"
                                    : "text-cyan-400"
                                } mt-0.5 mr-2 flex-shrink-0`}
                              />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-4">
                        <h4
                          className={`font-semibold flex items-center gap-2 ${
                            exp.theme === "green"
                              ? "text-green-300"
                              : exp.theme === "education"
                              ? "text-blue-300"
                              : "text-cyan-300"
                          }`}
                        >
                          <Code size={16} /> Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 text-xs rounded-full border shadow-sm hover:scale-105 transition-all duration-300 ${
                                exp.theme === "green"
                                  ? "bg-green-900/30 border-green-500/40 text-gray-200 hover:bg-green-800/50"
                                  : exp.theme === "education"
                                  ? "bg-blue-900/30 border-blue-500/40 text-gray-200 hover:bg-blue-800/50"
                                  : "bg-cyan-900/30 border-cyan-500/40 text-gray-100 hover:bg-cyan-800/50"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Sparkles */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Sparkles
                          size={16}
                          className={
                            exp.theme === "green"
                              ? "text-green-400 animate-pulse"
                              : exp.theme === "education"
                              ? "text-blue-400 animate-pulse"
                              : "text-cyan-400 animate-pulse"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
