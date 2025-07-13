import { motion } from "motion/react";

const HeroBlock = () => {
  return (
    <div className="bg-[#efe9e9] flex flex-col justify-center items-center space-y-2 h-full">
      <p className="text-gray-600 text-base uppercase">Hi there! I'm</p>

      <motion.h1
        className="text-4xl text-yellow-600"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="text-wrapper" aria-hidden="true">
          <span className="letters">Lorenzo Franceschini</span>
        </span>
      </motion.h1>
    </div>
  );
};

export default HeroBlock;
