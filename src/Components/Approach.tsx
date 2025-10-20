import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../Components/Effects/CanvasRevealEffect";

const Approach = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1F3A3D] via-[#0a0022] to-[#000000] py-20 pb-32 px-4"
    >
      {/* HEADING  */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          <span className="text-white">Creative</span>{" "}
          <span className="text-teal-700">Strategy</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-xl italic font-semibold tracking-wide max-w-2xl mx-auto">
            Building Success Step By Step
        </p>
      </div>

      {/* 3 CARDS */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We start by understanding your goals and planning the website structure to make it clear and easy to use."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            className="bg-[#064e3b] rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="I build the website step by step, turning designs into functional pages.
           You’ll receive regular updates so everything aligns with your vision and expectations."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            className="bg-[#831843] rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="Once the site is ready, I ensure everything works smoothly and looks polished. 
          Finally, your website goes live, ready to impress and serve its purpose."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            className="bg-[#0ea5e9] rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;


const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card 
      flex items-center justify-center relative max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
    

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 text-center">
        {/* Icon Centered */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 flex items-center justify-center"
        >
          {icon}
        </div>

        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 font-bold text-black group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>

        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
       bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center 
      justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
      >
        {order}
      </span>
    </button>
  );
};


