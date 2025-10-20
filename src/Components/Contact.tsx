import { Mail, MapPin, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function GalaxyContact() {
  return (
    <section id="contact">
      {/* Section Title */}
      <div className="text-center mt-[5rem] mb-8 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          <span className="text-white-600">Get</span>{" "}
          <span className="text-cyan-500">Connected</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide px-2 sm:px-4">
          Reach Out For Opportunities & Ideas
        </p>
      </div>

      <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 relative ">
        {/* Subtle Stars Background */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6,
              }}
            />
          ))}
        </div>

        {/* Main Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl z-10 mb-[2rem]">
          {/* Left Side Content */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="mb-2 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Let’s <span className="text-orange-400">Talk</span>
              </h3>
              <p className="text-gray-400 mt-1 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md">
                Ideas are galaxies — Infinite and waiting to be explored. Send me a signal, And let’s start a new constellation together.
              </p>
            </div>

            {/* Email Card */}
            <div className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-yellow-700/20 bg-yellow-900/5 hover:bg-yellow-800/10 transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-400/20 group-hover:bg-yellow-500/20 transition-all">
                <Mail className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-xs text-gray-400 font-medium  text-left ml-4">Email</span>
                <span className="text-sm font-semibold text-white break-all ml-4">srikanthsk2730@gmail.com</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-green-700/20 bg-green-900/5 hover:bg-green-800/10 transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10 border border-green-400/20 group-hover:bg-green-500/20 transition-all">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-xs text-gray-400 font-medium text-left ml-4">Location</span>
                <span className="text-sm font-semibold text-white ml-4">Coimbatore, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-4 justify-start sm:ml-4">
              <a
                href="https://www.linkedin.com/in/srikanth-s-736802232/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-xl border border-blue-400/20 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/40 shadow-md hover:shadow-blue-500/20 transition-all duration-500"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 hover:scale-110 transition-transform duration-300" />
              </a>

              <a
                href="https://github.com/SRIKANTHSK30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-xl border border-gray-400/20 bg-gray-500/10 hover:bg-gray-500/20 hover:border-gray-400/40 shadow-md hover:shadow-gray-500/20 transition-all duration-500"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:scale-110 transition-transform duration-300" />
              </a>

              <a
                href="https://www.instagram.com/sreexkanth_.30?igsh=MXNqNmp0MDB6bjdzdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-xl border border-pink-400/20 bg-pink-500/10 hover:bg-pink-500/20 hover:border-pink-400/40 shadow-md hover:shadow-pink-500/20 transition-all duration-500"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side Form Card */}
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.15)] p-6 sm:p-10 transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:bg-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              🚀 Send Message
            </h3>

            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block mb-2 text-cyan-300 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-cyan-400/20 bg-transparent outline-none text-white placeholder-gray-400
                               focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_8px_#22d3ee80]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-cyan-300 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-cyan-400/20 bg-transparent outline-none text-white placeholder-gray-400
                               focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_8px_#22d3ee80]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-cyan-300 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-cyan-400/20 bg-transparent outline-none text-white placeholder-gray-400
                             focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_8px_#22d3ee80]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-cyan-300 font-semibold">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-cyan-400/20 bg-transparent outline-none text-white placeholder-gray-400
                             focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_10px_#22d3ee80]"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(34,211,238,0.5)" }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-indigo-900 to-cyan-600 text-black flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_18px_#22d3ee70] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
