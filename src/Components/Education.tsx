import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";

export default function EducationCardEnhanced() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1e3a8a] via-[#0a0022] to-[#000000] pb-20 sm:pb-32"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-18 sm:mb-18">
        {/* Section Title - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-20">
            <span className="text-white-600">Learning</span>{" "}
            <span className="text-blue-500">Voyage</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide px-2 sm:px-4">
            Crystal-Clear Learning Journey
          </p>
        </motion.div>

        {/* Centered Glass Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative group w-full max-w-3xl"
          >
            {/* Animated gradient border */}
            <motion.div
              className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#1e3a8a] via-[#1e3a8a] to-[#1e3a8a] shadow-2xl"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-indigo-950/80 via-purple-900/60 to-black/80 backdrop-blur-xl overflow-hidden">
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />

                {/* Header - Centered content */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-12 h-12 flex items-center justify-center rounded-lg text-white shadow-lg mx-auto sm:mx-0"
                    style={{
                      background:"radial-gradient(circle at top left, purple, #1e3a8a, purple)",
                    }}
                  >
                    <GraduationCap size={20} />
                  </motion.div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl font-extrabold tracking-wide text-white drop-shadow-sm">
                      Bachelor of Technology in Information Technology
                    </h3>
                    <p className="text-indigo-300 mt-3 font-semibold">
                      Sri Krishna College of Engineering and Technology
                    </p>
                  </div>
                </div>

                {/* Meta Info - Centered on mobile, left on desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-3 mt-4 text-sm text-gray-400 ml-[65px]"
                >
                  <span className="flex items-center gap-1 justify-center sm:justify-start">
                    <BookOpen size={14} /> 2021 – 2025
                  </span>
                  <span className="flex items-center gap-1 justify-center sm:justify-start">
                    <MapPin size={14} /> Coimbatore, India
                  </span>
                  <span className="flex items-center gap-1 justify-center sm:justify-start">
                    🎓 CGPA:{" "}
                    <span className="font-semibold text-gray-200">7.9 / 10</span>
                  </span>
                </motion.div>

                {/* Description - Centered text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="mt-4 text-gray-200 leading-relaxed text-center sm:text-left"
                >
                  Focused On Software Development, Web Technologies, And Full-Stack
                  Application Design. Participated In Team projects and Research,
                  Gaining Hands-On Experience In Building Scalable Applications.
                </motion.p>

                {/* Achievements - Centered header */}
                <div className="mt-6">
                  <h4 className="font-semibold flex items-center gap-2 text-indigo-300 justify-center sm:justify-start">
                    <Award size={16} /> Key Highlights
                  </h4>
                  <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: 0.15 },
                      },
                    }}
                    className="mt-4 text-gray-300 space-y-2 text-left"
                  >
                    {[
                      "Secured good ranks in multiple semesters for academic excellence.",
                      "Team member for developing full-stack projects as part of coursework.",
                      "Presented innovative project ideas at inter-college hackathons.",
                      "Conducted department symposium and technical activities for junior students (Innov8-IT).",
                      "Actively participated in coding challenges and workshops.",
                      "Finished final-year project and published paper on Detection of Brain Stroke - Machine Learning.",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-sm flex items-start"
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <span className="mr-2 mt-2 text-blue-300">•</span> 
                        <span className="flex-1 mt-2">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}