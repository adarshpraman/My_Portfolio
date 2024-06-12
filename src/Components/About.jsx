import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center p-6">
            <img
              src={heroImage}
              alt="Profile"
              className="rounded-2xl w-2/3 md:w-[32rem] max-md:w-[20rem] max-sm:w-[16rem]"
            />
          </div>

          <div className="w-3/4 md:w-2/3 mt-8 md:mt-0 md:pl-8 text-justify">
            <p className="text-xl mt-20 sm:mt-10 max-sm:mt-10">
              I am a B.Tech graduate in Information Technology from Asansol
              Engineering College with expertise in Java, DBMS, SQL, HTML, CSS,
              JavaScript, and React.js. My passion lies in Frontend Web
              Development, and I am committed to becoming a proficient Full
              Stack Developer and team leader. I thrive in dynamic environments
              and aim to contribute to organizational growth while continuously
              advancing my skills. Let’s connect and explore how I can
              contribute to your success!
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="contact"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
