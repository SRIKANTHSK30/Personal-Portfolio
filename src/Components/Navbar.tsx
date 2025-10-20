import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Experience", "Project", "Contact"];

  const hoverColors: Record<string, string> = {
    Home: "hover:text-blue-400",
    About: "hover:text-green-400",
    Skills: "hover:text-yellow-400",
    Experience: "hover:text-red-400",
    Project: "hover:text-purple-400",
    Contact: "hover:text-pink-400",
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 z-50 w-full px-4"
    >
      {/* Navbar container - Moved to left on mobile */}
      <div className="flex items-center justify-start md:justify-center">
        <motion.div 
          className="flex items-center justify-between md:justify-center px-4 md:px-6 py-3 rounded-2xl
                    backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg 
                    md:w-auto md:max-w-3xl mx-4 md:mx-auto transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
            {links.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`transition-colors duration-300 ${hoverColors[link]}`}
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-200 p-1 rounded-lg transition-all duration-300 
                       w-8 h-8 flex items-center justify-center relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content - Aligned with hamburger */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 px-6 py-6 rounded-2xl backdrop-blur-lg 
                         bg-white/10 border border-white/10 shadow-xl w-56 absolute left-4 z-50"
            >
              <ul className="flex flex-col gap-3 text-gray-200 font-medium">
                {links.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`block transition-colors duration-300 ${hoverColors[link]}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;