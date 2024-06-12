import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiHackerrank } from "react-icons/si";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "http://www.linkedin.com/in/adarsh-praman-40a9941bb",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "http://www.github.com/adarshpraman",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:adarshpraman@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <SiHackerrank size={30} />
        </>
      ),
      href: "https://www.hackerrank.com/profile/adarshpraman",
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-4 pt-20 max-sm:pt-2">
      <hr className="border-t border-gray-600 mt-4 mb-4" />
      <div className="flex justify-center space-x-6 mt-8 mb-4">
        {links.map(({ id, child, href }) => (
          <a
            key={id}
            href={href}
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {child}
          </a>
        ))}
      </div>
      <p className="text-center mt-8">© Developed by Adarsh Praman</p>
      <p className="text-center mt-4 mb-4">2024</p>
    </div>
  );
};

export default Footer;
