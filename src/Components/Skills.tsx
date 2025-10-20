import React, { useState } from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  image: string;
  proficiency: number;
};

const skills: Skill[] = [
  { name: "HTML 5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 95 },
  { name: "CSS 3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 95 },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 80 },
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 80 },
  { name: "React JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 90 },
  { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", proficiency: 90 },
  { name: "Node JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 85 },
  { name: "Express JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", proficiency: 75 },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", proficiency: 80 },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", proficiency: 80 },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: 70 },
  { name: "Three JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", proficiency: 65 },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", proficiency: 85 },
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 70 },
  { name: "AWS", image: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg", proficiency: 60 },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[140px] sm:max-w-[160px] h-[220px] sm:h-[240px] perspective mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ rotateY: isHovered ? 180 : 0, scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center rounded-2xl shadow-xl p-3 sm:p-4 
                        bg-white/10 backdrop-blur-md border border-white/20 text-white ring-1 ring-white/10 overflow-hidden">
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />
          <div className="absolute inset-0 rounded-2xl bg-[#101823]/90" />

          {/* Icon with hover pulse */}
          <motion.img
            src={skill.image}
            alt={skill.name}
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain relative z-10 drop-shadow"
            animate={isHovered ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.6 }}
          />
          <h3 className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold tracking-wide relative z-10 text-center">{skill.name}</h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center items-center 
                        rounded-2xl shadow-2xl p-3 sm:p-4 
                        bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 
                        text-white ring-1 ring-white/20">
          <h4 className="text-xs sm:text-sm font-semibold mb-2 text-center">{skill.name}</h4>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-white/25 overflow-hidden">
            <motion.div
              animate={{ width: isHovered ? `${skill.proficiency}%` : "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-600"
            />
          </div>

          {/* % only when hovered */}
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.5 }}
              className="mt-1 text-xs font-medium"
            >
              {skill.proficiency}%
            </motion.span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-b from-[#6B0772] via-[#0a0022] to-[#000000] text-white relative overflow-hidden pb-[19px]">
      {/* Floating background orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-purple-600/30 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-[5rem] relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center gap-3"
        >
          <span className="text-white-600">Technical</span>{" "}
          <span className="text-pink-600">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide text-center px-2"
        >
          A Balanced Set Of Core Strengths Highlighting.
        </motion.p>

        {/* Responsive Grid - 3 columns on mobile */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center mt-8 sm:mt-[5rem]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;