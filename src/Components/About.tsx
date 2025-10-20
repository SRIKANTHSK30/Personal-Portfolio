import React from "react";
import { motion, Variants } from "framer-motion";
import { Cpu, Zap, Search, Rocket } from "lucide-react";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-black scroll-mt-24 px-4 sm:px-6 lg:px-12 pb-[20px]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-purple-900/30 via-black/50 to-black"></div>
      </div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl py-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT SIDE - Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={fadeInUp}
        >
          <div className="relative group">
            <img
              src="/about_hero2.png"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px]"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - Text */}
        <motion.div
          className="space-y-6 sm:space-y-8 text-justify"
          variants={staggerContainer}
        >
          {/* Title + Overview */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white flex items-center gap-2 sm:gap-3">
              About <span className="text-purple-600">Me</span>
            </h2>
            <p className="text-gray-400 mt-3 sm:mt-4 text-lg sm:text-xl italic font-semibold tracking-wide">
              Overview
            </p>
            <div className="w-12 sm:w-16 h-1 bg-pink-600 rounded-full mt-2 sm:mt-3"></div>
          </motion.div>

          {/* Paragraphs */}
          <motion.p
            className="text-gray-300 leading-relaxed text-base sm:text-lg"
            variants={fadeInUp}
          >
            I’m a{" "}
            <span className="text-purple-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            and passionate problem-solver, currently working as a{" "}
            <span className="text-blue-400 font-semibold">Junior Developer</span>{" "}
            at <span className="text-blue-400 font-semibold">Zucus Technology</span>. 
            With a foundation in Information Technology, I’ve built strong skills in 
            developing scalable, reliable, and user-friendly web applications. My curiosity 
            for technology has grown into a career, where I continuously explore{" "}
            modern technologies,{" "}
            <span className="font-semibold text-pink-400">AI/ML</span> and{" "}
            <span className="font-semibold text-pink-400">Cloud Computing.</span>
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-base sm:text-lg"
            variants={fadeInUp}
          >
            I value{" "}
            <span className="font-semibold text-purple-300">elegant solutions</span>,{" "}
            <span className="font-semibold text-purple-300">effective teamwork</span>, 
            and the process of turning ideas into working solutions. I’ve also taken part in{" "}
            <span className="font-semibold text-pink-400">hackathons</span> and{" "}
            <span className="font-semibold text-pink-400">side projects</span>, 
            which have helped me sharpen my skills and adapt quickly to new challenges.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-base sm:text-lg"
            variants={fadeInUp}
          >
            Looking forward, my goal is to grow into a developer who continuously learns, 
            contributes to innovative projects, and builds applications that make a positive impact. 
            I’m eager to take on opportunities that help me expand{" "}
            <span className="font-semibold text-pink-400">my skills</span>, gain exposure 
            to new technologies, and shape my career as a versatile{" "}
            <span className="font-semibold text-purple-300">Software Developer.</span>
          </motion.p>

          {/* Cards */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8"
  variants={staggerContainer}
  initial="hidden"
  animate="show"
>
  {/* Card 1 */}
  <motion.div
    className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
    variants={fadeInUp}
  >
    <div className="flex items-center mb-2 gap-2">
      <Cpu className="text-purple-400 w-6 h-6" />
      <h3 className="text-white font-semibold text-lg sm:text-xl ml-2">Adaptive Thinker</h3>
    </div>
    <p className="text-gray-400 text-sm mt-1">
      Embrace new challenges and new technologies with agility — always learning, always evolving.
    </p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300"
    variants={fadeInUp}
  >
    <div className="flex items-center mb-2 gap-2">
      <Zap className="text-cyan-400 w-6 h-6" />
      <h3 className="text-white font-semibold text-lg sm:text-xl ml-2">Curiosity in Motion</h3>
    </div>
    <p className="text-gray-400 text-sm mt-1">
      Every project is an experiment — a chance to explore, refine, and innovate fearlessly.
    </p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300"
    variants={fadeInUp}
  >
    <div className="flex items-center mb-2 gap-2">
      <Search className="text-orange-400 w-6 h-6" />
      <h3 className="text-white font-semibold text-lg sm:text-xl ml-2">Driven by the ‘What If’</h3>
    </div>
    <p className="text-gray-400 text-sm mt-1">
      Innovation starts with imagination — I love exploring the unknown corners of code.
    </p>
  </motion.div>

  {/* Card 4 */}
  <motion.div
    className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-pink-900/30 hover:border-pink-500/50 transition-all duration-300"
    variants={fadeInUp}
  >
    <div className="flex items-center mb-2 gap-2">
      <Rocket className="text-pink-400 w-6 h-6" />
      <h3 className="text-white font-semibold text-lg sm:text-xl ml-2">Shaping Tomorrow</h3>
    </div>
    <p className="text-gray-400 text-sm mt-1">
      Each contribution, small or big, is a step toward a smarter, more connected future.
    </p>
  </motion.div>
</motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
