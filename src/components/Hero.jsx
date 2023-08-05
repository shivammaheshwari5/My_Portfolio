import React from "react";
import { motion } from "framer-motion";
import { github2 } from "../assets";
import { facebook } from "../assets";
import { linkedin } from "../assets";
import { styles } from "../styles";
const Hero = () => {
  return (
    <section style={{ height: "125vh" }} className="relative w-full mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#c56efff0]">Shivam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#10eec2]`}>
            FULL STACK DEVLOPER
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Unlock the Future of the Web <br className="sm:block hidden" />
            Let Me Develop Your Website, UI and Web App!
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-40 bottom-60 w-full flex items-center justify-center">
        <div className="flex items-center justify-center bg-[#011e6bb3] w-[300px] rounded-full">
          <a href="https://www.linkedin.com/in/shivam503/" className="m-5">
            <img
              src={linkedin}
              alt="github"
              className="xs:w-10 xs:h-10 w-7 h-7"
            />
          </a>
          <a href="https://github.com/shivammaheshwari5" className="m-5">
            <img
              src={github2}
              alt="github"
              className="xs:w-10 xs:h-10 w-7 h-7"
            />
          </a>
          <a
            href="https://www.facebook.com/shivam.maheshwari.1675"
            className="m-5"
          >
            <img
              src={facebook}
              alt="github"
              className="xs:w-10 xs:h-10 w-7 h-7"
            />
          </a>
        </div>
      </div>
      <div className="absolute xs:bottom-30 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
