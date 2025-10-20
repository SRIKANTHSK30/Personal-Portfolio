import { useState, useEffect, JSX, useRef } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Users,
  Brush,
  MessageCircle,
  Puzzle,
  Zap,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: "Leadership", level: 80, icon: <Crown size={28} /> },
  { name: "Teamwork", level: 90, icon: <Users size={28} /> },
  { name: "Creativity", level: 85, icon: <Brush size={28} /> },
  { name: "Communication", level: 85, icon: <MessageCircle size={28} /> },
  { name: "Problem Solving", level: 80, icon: <Puzzle size={28} /> },
  { name: "Adaptability", level: 95, icon: <Zap size={28} /> },
];

export default function ProfessionalSkills() {
  const [dimensions, setDimensions] = useState({ width: 850, height: 800 });
  const [radius, setRadius] = useState(280);
  const [centerX, setCenterX] = useState(425);
  const [centerY, setCenterY] = useState(400);
  const [circleRadius, setCircleRadius] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (window.innerWidth < 640) {
        setDimensions({ width: 320, height: 600 });
        setRadius(100);
        setCenterX(160);
        setCenterY(300);
        setCircleRadius(35);
      } else if (window.innerWidth < 768) {
        setDimensions({ width: 400, height: 650 });
        setRadius(130);
        setCenterX(200);
        setCenterY(325);
        setCircleRadius(45);
      } else if (window.innerWidth < 1024) {
        setDimensions({ width: 600, height: 700 });
        setRadius(180);
        setCenterX(300);
        setCenterY(350);
        setCircleRadius(60);
      } else if (window.innerWidth < 1280) {
        setDimensions({ width: 750, height: 750 });
        setRadius(220);
        setCenterX(375);
        setCenterY(375);
        setCircleRadius(80);
      } else {
        setDimensions({ width: 850, height: 800 });
        setRadius(280);
        setCenterX(425);
        setCenterY(400);
        setCircleRadius(100);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth rotation animation
  useEffect(() => {
    if (isMobile || !isVisible) return;
    
    let animationFrameId: number;
    const animate = () => {
      setRotation((prev) => (prev + 0.1) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile, isVisible]);

  // Calculate positions for outer circles
  const getSkillPosition = (index: number, currentRotation: number) => {
    const angle = (index * (360 / skills.length) - 90 + currentRotation) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  const easeStandard: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeStandard
      }
    }
  };

  return (
    <div 
      ref={containerRef}
     className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#1e003e] via-[#0a0022] to-[#000000] overflow-hidden py-4 sm:py-8 pb-32"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none ">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1]
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/3 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1]
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center pb-[19px]">
      {/* Title */}
      <motion.div 
        className="text-center mt-6 sm:mt-12 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeStandard }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white items-center gap-3">
          <motion.span 
            className="text-white-600"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: easeStandard }}
          >
            Professional
          </motion.span>{" "}
          <motion.span 
            className="text-purple-600"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: easeStandard }}
          >
            Skills
          </motion.span>
        </h2>
        <motion.p 
          className="text-gray-400 -mb-5 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl italic font-semibold tracking-wide px-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: easeStandard }}
        >
          Highlights Approach To Work And Processes.
        </motion.p>
      </motion.div>

      {/* Mobile cards */}
      {isMobile ? (
        <motion.div 
          className="flex flex-col gap-6 px-4 w-full max-w-md"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={skillItem}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3, ease: easeStandard }
              }}
              className="relative flex items-center p-5 rounded-3xl shadow-2xl border-2 border-transparent bg-gradient-to-br from-purple-800/30 to-pink-700/20 overflow-hidden group"
            >
              <motion.div 
                className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 shadow-lg z-10 group-hover:bg-white/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: easeStandard }}
              >
                {skill.icon}
              </motion.div>

              <div className="flex flex-col ml-4 z-10 w-full">
                <span className="text-white font-bold text-lg">{skill.name}</span>
                <span className="text-pink-300 font-semibold text-md">{skill.level}%</span>
                <div className="mt-2 w-28 h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 1.5, ease: easeStandard }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Desktop rotating circle
        <div className="flex justify-center items-center overflow-hidden mt-4 sm:mt-8 lg:mt-11">
          <motion.svg
            width={dimensions.width}
            height={dimensions.height}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: easeStandard }}
          >
            {/* Center circle */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={circleRadius * 1.1}
              className="fill-[#000] stroke-purple-500"
              strokeWidth={3}
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: easeStandard }}
            />
            
            {/* Center text */}
            <motion.text
              x={centerX}
              y={centerY - 14}
              textAnchor="middle"
              className="font-bold text-lg md:text-xl lg:text-2xl fill-white drop-shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: easeStandard }}
            >
              Excellence
            </motion.text>
            <motion.text
              x={centerX}
              y={centerY + 30}
              textAnchor="middle"
              className="text-lg md:text-lg lg:text-lg fill-gray-300 drop-shadow-lg font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6, ease: easeStandard }}
            >
              Professional Skills
            </motion.text>

            {/* Connecting lines */}
            {skills.map((_, i) => {
              const position = getSkillPosition(i, rotation);
              return (
                <motion.line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={position.x}
                  y2={position.y}
                  className="stroke-purple-600"
                  strokeWidth={2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isVisible ? { pathLength: 1, opacity: 0.3 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: easeStandard }}
                />
              );
            })}

            {/* Outer circles */}
            {skills.map((skill, i) => {
              const circumference = 2 * Math.PI * circleRadius;
              const offset = circumference - (skill.level / 100) * circumference;
              const position = getSkillPosition(i, rotation);

              return (
                <g key={i}>
                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={circleRadius}
                    className="fill-[#111] stroke-purple-500/40"
                    strokeWidth={4}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                    transition={{ 
                      delay: 1 + i * 0.15, 
                      duration: 0.6,
                      ease: easeStandard
                    }}
                  />
                  
                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={circleRadius}
                    className="stroke-[url(#grad)]"
                    strokeWidth={5}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`rotate(-90, ${position.x}, ${position.y})`}
                    initial={{ strokeDashoffset: circumference, opacity: 0 }}
                    animate={isVisible ? { strokeDashoffset: offset, opacity: 1 } : {}}
                    transition={{ 
                      delay: 1.2 + i * 0.1, 
                      duration: 1.5, 
                      ease: easeStandard
                    }}
                  />

                  <foreignObject
                    x={position.x - circleRadius}
                    y={position.y - circleRadius}
                    width={circleRadius * 2}
                    height={circleRadius * 2}
                  >
                    <motion.div 
                      className="w-full h-full flex flex-col items-center justify-center text-center space-y-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.5, ease: easeStandard }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-white mb-1"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: [0.42, 0, 0.58, 1],
                          delay: i * 0.5
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div className="text-white font-bold text-lg">
                        {skill.level}%
                      </div>
                      <div className="font-semibold text-gray-300 text-sm">
                        {skill.name}
                      </div>
                    </motion.div>
                  </foreignObject>

                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={circleRadius}
                    className="stroke-purple-400/20 fill-transparent"
                    strokeWidth={8}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: [0.42, 0, 0.58, 1]
                    }}
                  />
                </g>
              );
            })}

            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7f00ff" />
                <stop offset="100%" stopColor="#e100ff" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation={6} result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </motion.svg>
        </div>
      )}
    </div>
    </div>   
  );
}
