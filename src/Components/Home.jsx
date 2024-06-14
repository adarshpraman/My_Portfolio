import React from "react";
import profileImage from "../assets/profileImage.png";
import { MdKeyboardArrowRight, MdCloudDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="lg:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 pb-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start h-full w-full text-center md:text-left mt-4 mb-5">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl max-sm:text-[42px] 
            sm:text-5xl
            md:text-6xl font-bold text-white"
          >
            Hello, I'm
            <br />
            Adarsh Praman
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 py-4 max-w-md text-xl md:text-2xl"
          >
            <div>
              I'm a{" "}
              <span className="text-cyan-500 font-bold text-3xl md:text-4xl">
                <ReactTypingEffect
                  text={["Frontend Developer"]}
                  speed={70}
                  eraseDelay={1000}
                />
              </span>
            </div>
          </motion.div>

          <div className="flex items-center gap-5">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <a
              href="https://drive.google.com/file/d/1QWMO2wJeG10_ksPyk8YMxDPCK9Dk0uwq/view?usp=sharing"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Download CV
              <MdCloudDownload className="ml-1" size={20} />
            </a>
          </div>
        </div>

        <div>
          <img
            src={profileImage}
            alt="my profile"
            className="lg:w-[40rem] max-md:w-[20rem] max-sm:w-[18rem] rounded-2xl mx-auto mt-5 w-2/3 float-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
