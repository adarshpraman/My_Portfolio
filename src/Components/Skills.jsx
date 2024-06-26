import React from "react";
import java from "../assets/skills/java.png";
import sql from "../assets/skills/sql.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import materialui from "../assets/skills/materialui.png";
import github from "../assets/skills/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: sql,
      title: "SQL",
      style: "shadow-purple-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: materialui,
      title: "Material UI",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-gray-800 to-black pt-20 pb-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Learned Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
