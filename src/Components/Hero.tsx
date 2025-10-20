import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, FolderGit2 } from "lucide-react";

const Hero: React.FC = () => {
  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-10 -z-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-gray-800/20 bg-gray-900/10" />
        ))}
      </div>

      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-1000 via-gray-900/100 to-transparent pointer-events-none -z-10" />

      {/* Floating White Dots */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0vh", "-120vh"], opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Spotlights */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_150px_20px_#e99b63] -rotate-[30deg]" />
      <div className="h-0 w-[40rem] absolute top-[20%] left-[-5%] shadow-[0_0_150px_20px_#e99b63] rotate-[30deg]" />
      <div className="h-0 w-[20rem] absolute bottom-[70%] right-[-5%] shadow-[0_0_100px_20px_#0a36af] -rotate-[30deg]" />
      <div className="h-0 w-[20rem] absolute bottom-[70%] left-[-5%] shadow-[0_0_100px_20px_#0a36af] rotate-[30deg]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-12 text-center transform translate-y-20">
        {/* Animated Name */}
        <motion.h1
          className="-mt-[3rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex flex-wrap justify-center gap-1"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {"Srikanth".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant} transition={{ duration: 0.4 }}>
              {char}
            </motion.span>
          ))}
          <motion.span variants={letterVariant} transition={{ duration: 0.4 }} className="text-purple-500 ml-2">
            S
          </motion.span>
        </motion.h1>

        {/* Animated Role */}
        <motion.h2
          className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-wrap justify-center gap-1"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 1 }}
        >
          {"Full Stack".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant} transition={{ duration: 0.3 }} className="text-white">
              {char}
            </motion.span>
          ))}
          <span className="ml-2 flex gap-1 flex-wrap justify-center">
            {"Developer".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant} transition={{ duration: 0.3 }} className="text-green-500">
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-4 sm:mt-6 text-gray-400 max-w-full sm:max-w-3xl md:max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
        >
          Driven To Build Transformative Web Development Solutions, Continuously Leveling Up My Technical Mastery.
          Passionate About Creating Seamless User Experiences And Scalable Applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full"
        >
          {/* Download Resume */}
          <a
            href="/SRIKANTH_RESUME.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg 
                       bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold 
                       shadow-lg hover:scale-105 hover:shadow-xl transition-transform w-full sm:w-auto"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>

          {/* Watch Projects */}
          <a
            href="#project"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg 
                       border border-gray-600 text-white font-semibold 
                       hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-transform w-full sm:w-auto"
          >
            <FolderGit2 className="w-5 h-5" />
            <span>Watch Projects</span>
          </a>
        </motion.div>

        {/* Scroll Down Button */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-12 sm:mt-16 flex flex-col items-center text-gray-400 hover:text-white cursor-pointer"
        >
          <span className="-mt-[1.5rem] text-xs sm:text-sm">Scroll Down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </motion.div>
        </motion.a>
      </div>
    </main>
  );
};

export default Hero;
