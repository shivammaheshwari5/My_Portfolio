import React from "react";
import { github2 } from "../assets";
import { facebook } from "../assets";
import { linkedin } from "../assets";
import { styles } from "../styles";
const Footer = () => {
  return (
    <footer className="bg-[#011e6bb3] text-center text-white">
      <div className="container px-6 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-start pb-6">
            <h3 className="text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px]">
              Shivam Maheshwari
            </h3>
            <p className="sm;text-[15px] text-[13px]">
              Unlock the Future of the Web <br /> Let Me Develop Your Website,
              UI and Web App!
            </p>
          </div>
          <div className="sm:flex block items-center justify-center">
            <a
              href="https://www.linkedin.com/in/shivam503/"
              className="sm:p-3 p-0.5"
            >
              <img
                src={linkedin}
                alt="github"
                className="xs:w-10 xs:h-10 w-7 h-7"
              />
            </a>
            <a
              href="https://github.com/shivammaheshwari5"
              className="sm:p-3 p-0.5"
            >
              <img
                src={github2}
                alt="github"
                className="xs:w-10 xs:h-10 w-7 h-7"
              />
            </a>
            <a
              href="https://www.facebook.com/shivam.maheshwari.1675"
              className="sm:p-3 p-0.5"
            >
              <img
                src={facebook}
                alt="github"
                className="xs:w-10 xs:h-10 w-7 h-7"
              />
            </a>
          </div>
        </div>
        <div className="border-t text-center px-5 py-8">
          <p className="sm:text-[15px] text-[13px]">
            Copyright © 2022 | Shivam Maheshwari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
