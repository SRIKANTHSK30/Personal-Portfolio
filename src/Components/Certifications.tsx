import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import {
  Calendar,
  SquareAsterisk,
  CloudCog,
  CircleArrowOutUpRight,
  Terminal,
  Code,
  Server,
} from "lucide-react";
import { JSX } from "react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  status: "Completed" | "Active";
  icon: JSX.Element;
  credentialUrl?: string;
};

const certificates: Certificate[] = [
  {
    title: "AI/ML Foundations for Absolute Beginners (AgenticAI + MLOps)",
    issuer: "Udemy",
    date: "September - 2025",
    description:
      "Learn the fundamentals of Machine Learning, Large Language Models, and Agentic AI. Understand core concepts, algorithms, and AI ethics — beginner-friendly.",
    skills: [
      "Machine Learning Concepts",
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "ML Algorithms",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Agentic AI Fundamentals",
    ],
    status: "Completed",
    icon: <SquareAsterisk className="w-8 h-8 text-yellow-400" />,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-381a8be4-483c-420d-8369-cf97d75307cb/",
  },
  {
    title: "Python Programming Mastery: From Beginner to Pro",
    issuer: "Udemy",
    date: "2025",
    description:
      "Hands-on machine learning course teaching Python, regression techniques, clustering, and decision trees with real-world applications — beginner-friendly.",
    skills: ["Python Fundamentals", "Python Programming for Machine Learning"],
    status: "Active",
    icon: <span className="text-green-400 text-2xl">🐍</span>,
    credentialUrl: "https://www.coursera.org/account/accomplishments/xxxxxxxx",
  },
  {
    title: "AWS Essentials: A Complete Beginner's Guide",
    issuer: "Udemy",
    date: "2025",
    description:
      "Beginner-friendly AWS course covering core cloud concepts, essential services, and best practices for creating, managing, and optimizing cloud resources.",
    skills: [
      "AWS Management Console & Navigation",
      "EC2, S3, VPC, and IAM Services",
      "Creating & Managing AWS Resources",
      "Cloud Computing Fundamentals & Service Models",
    ],
    status: "Active",
    icon: <CloudCog className="w-8 h-8 text-blue-400" />,
    credentialUrl: "https://www.udemy.com/certificate/xxxxxxxx",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Credly",
    date: "May - 2023",
    description:
      "Introduction to AWS Cloud, covering key services, architecture concepts, and foundational cloud skills.",
    skills: [
      "AWS Architecture",
      "AWS Cloud",
      "AWS Core Services",
      "AWS Pricing",
      "AWS Support",
    ],
    status: "Completed",
    icon: <Server className="w-8 h-8 text-indigo-400" />,
    credentialUrl:
      "https://www.credly.com/badges/eb23eb79-6da0-4c93-a149-10f3e797f333/public_url",
  },
  {
    title: "Java (Basic) Certification",
    issuer: "Hacker - Rank",
    date: "June - 2023",
    description:
      "Validates fundamental Java programming skills, including syntax, data types, control structures, and basic problem-solving. Ideal for beginners to demonstrate core Java proficiency.",
    skills: [
      "Java Syntax & Data Types",
      "Loops & Conditional Statements",
      "Functions & Methods",
      "Basic Problem Solving & Logic",
    ],
    status: "Completed",
    icon: <Code className="w-8 h-8 text-red-400" />,
    credentialUrl: "https://www.hackerrank.com/certificates/34509bcdfc71",
  },
  {
    title: "Java Advance Programming",
    issuer: "Udemy",
    date: "2025",
    description:
      "Advanced Java certification focused on Java SE 8 programming and design improvements.",
    skills: [
      "Core Java",
      "OOP Concepts",
      "Exception Handling",
      "Date & Time API",
      "Collections Framework",
      "Generics",
    ],
    status: "Active",
    icon: <Terminal className="w-8 h-8 text-orange-500" />,
    credentialUrl: "https://www.udemy.com/certificate/xxxxxxxx",
  },
];

// Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: {  staggerChildren: window.innerWidth < 640 ? 0 : 0.25  } },
};

const getCardVariants = (index: number) => {
  const directions = [
    { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  ];
  const chosen = directions[index % directions.length];
  return { hidden: chosen.hidden, visible: { ...chosen.visible, transition: { duration: 0.6, ease: easeOut } } };
};

// Certificate Card
function CertificateCard({
  title,
  issuer,
  date,
  description,
  skills,
  status,
  credentialUrl,
  icon,
  index,
}: Certificate & { index: number }) {
  return (
    <motion.div
      variants={getCardVariants(index)}
      className="relative flex flex-col justify-between h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black
                 text-white rounded-2xl shadow-xl border border-gray-700 
                 p-6 transition-all duration-500 hover:scale-[1.02] 
                 hover:border-yellow-400 hover:shadow-[0_0_25px_6px_rgba(250,204,21,0.6)]"
    >
      {/* Status Badge */}
      <span
        className={`absolute top-4 right-4 px-2 py-0.5 text-xs rounded-full font-semibold ${
          status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-400 text-black"
        }`}
      >
        {status}
      </span>

      {/* Top Content */}
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center text-left gap-3 mt-2">
          <div className="mb-10">{icon}</div>
          <div className="mt-1 flex flex-col">
            <h2 className="text-lg font-semibold ">{title}</h2>
            <p className="text-sm text-gray-400 flex items-center gap-2 mt-2">
              <span>{issuer}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {date}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-3 text-left">{description}</p>

        {/* Skills */}
        <p className="text-sm font-medium text-gray-200 mt-4 text-left">Skills Validated:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-lg bg-gray-700 text-gray-200 text-center min-w-[8rem]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Verify Button */}
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 
                     rounded-lg border border-gray-500 text-white font-medium 
                     hover:bg-white/10 transition duration-300"
        >
          <CircleArrowOutUpRight className="w-4 h-4" />
          Verify Certificate
        </a>
      )}
    </motion.div>
  );
}

// Grid Component
export default function CertificateGrid() {
  return (
    <section className="py-16 px-6 min-h-screen bg-gradient-to-b from-[#1f1f1f] via-[#0a0022] to-[#000000] text-white pb-[19px]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-white">
          <span className="text-white-400">Tech</span>{" "}
          <span className="text-neutral-500">Credentials</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide px-2 sm:px-4">
          Proof Of Skills And Dedication
        </p>
      </motion.div>

      {/* Responsive Grid */}
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto auto-rows-fr"
        variants={containerVariants}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certificates.map((cert, index) => (
          <motion.div key={index} className="h-full" variants={getCardVariants(index)}>
            <CertificateCard {...cert} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
