import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Award, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Online Flight Ticket Booking System",
    description: "An online flight ticket booking system is a web-based application or platform that allows travellers to search, select, and purchase airline tickets via the internet. It streamlines the process of booking flights and provides travellers with the convenience of comparing prices, schedules, and available seats from various airlines.",
    image: "image_1.jpg",
    link: "#",
    tech: ["React JS", "Springboot", "Postman", "Sql"],
    features: [
      "Search and filter flights by destination, date, and airline.",
      "Secure online payment integration.",
      "User-friendly for checking booking history.",
      "Easy to check seat availability updates.",
    ],
  },
  {
    title: "Event Management System",
    description: "The Event Management System is a user-friendly online platform designed to simplify the planning and organization of events. It enables users to effortlessly coordinate and manage all aspects of their celebrations, from scheduling to guest management. In system that enhances efficiency, reduces manual effort, and ensures a seamless event experience.",
    image: "image_2.jpg",
    link: "#",
    tech: ["Vite JS", "Springboot", "Swagger", "PostgreSQL"],
    features: [
      "Track, invite, and manage attendees seamlessly.",
      "Support for different event types, themes and food requirements.",
      "Admin and Customer dashboard panel with real-time updates.",
      "Dynamic Event Creation – Add, edit, or remove events efficiently.",
    ],
  },
  {
    title: "Vehicle Management System",
    description: "The Vehicle Management System is a mini-project. This system provides an efficient way to store, organize, and manage details of different vehicles such as cars, bikes, and trucks. This application can handle operations like adding new vehicles, updating existing details, searching records, and categorizing vehicles based on type or usage.",
    image: "image_3.jpg",
    link: "#",
    tech: ["Java", "OOPs Concepts"],
    features: [
      "Add, update, search, and delete vehicle records.",
      "Utilizes OOPs Concept for clean and reusable code.",
      "Organize vehicles by type (car, bike, truck, etc.) or purpose.",
      "Easy to extend for future like tracking or fuel management.",
    ],
  },
];

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction > 0 ? 15 : -15,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction < 0 ? 15 : -15,
    scale: 0.95,
    transition: {
      duration: 0.5,
    },
  }),
};

const ProjectCarousel: React.FC = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const nextProject = () => setIndex([(index + 1) % projects.length, 1]);
  const prevProject = () => setIndex([(index - 1 + projects.length) % projects.length, -1]);

  return (
    <section id="project" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#0a0022] to-[#000000] pb-32">
      <div className="relative flex flex-col items-center justify-center w-full px-4 md:px-12 py-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            <span className="text-white-500">Projects</span>{" "}
            <span className="text-slate-400">Vault</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide px-2 sm:px-4">
            Innovation Meets Execution.
          </p>
        </motion.div>

        {/* Card Container */}
        <div className="relative w-full max-w-6xl perspective-[2000px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative group"
            >
              {/* Animated gradient border */}
              <motion.div
                className="relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-2xl"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {/* Glass card content */}
                <div className="relative rounded-2xl p-6 bg-gradient-to-br from-indigo-950/80 via-purple-900/60 to-black/80 backdrop-blur-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />

                  {/* Left (Image) */}
                  <div className="flex items-center justify-center h-full rounded-2xl overflow-hidden">
                    <motion.img
                      src={projects[index].image}
                      alt={projects[index].title}
                      className="rounded-2xl shadow-2xl w-full h-full object-cover border border-white/20 max-h-[500px]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Right (Content) */}
                  <div className="flex flex-col justify-between py-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-5 text-white drop-shadow-lg">
                        {projects[index].title}
                      </h2>
                      <p className="text-gray-200 text-base leading-relaxed mb-6 text-left">
                        {projects[index].description}
                      </p>

                      {/* Features - Updated with green ticks */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-300 flex items-center gap-2 ">
                          <Award size={18} /> Key Features
                        </h3>
                        <ul className="grid gap-3 text-gray-200">
                          {projects[index].features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.15 }}
                              className="flex items-start gap-3 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 " />
                              <span className="flex-1 text-left">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-300 mr-[25rem]">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2 ml-[1rem]">
                          {projects[index].tech.map((t, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.1, backgroundColor: "#A855F7" }}
                              className="px-3 py-1 border border-purple-500/40 text-xs rounded-full bg-purple-900/30 text-purple-200 cursor-pointer transition"
                            >
                              {t}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* View Project Button */}
                      <motion.a
                          href={projects[index].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                                    text-white font-semibold shadow-lg hover:shadow-xl transition mr-[10rem]"
                          > 
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.a>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Closer to the card */}
        <div className="absolute left-2 md:left-[5rem] top-1/2 transform -translate-y-1/2">
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 
                       border border-white/20 shadow-lg text-white transition backdrop-blur-sm
                       hover:from-purple-600/70 hover:to-pink-600/70"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="absolute right-2 md:right-[5rem] top-1/2 transform -translate-y-1/2">
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 
                       border border-white/20 shadow-lg text-white transition backdrop-blur-sm
                       hover:from-purple-600/70 hover:to-pink-600/70"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index 
                  ? "bg-purple-500 scale-125" 
                  : "bg-purple-300/50 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;