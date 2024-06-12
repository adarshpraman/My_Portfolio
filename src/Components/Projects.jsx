import React, { useState } from "react";
import expenseTracker from "../assets/projects/expenseTracker.jpg";
import qrScanner from "../assets/projects/qrScanner.png";
import calculator from "../assets/projects/calculator.jpg";
import addToCart from "../assets/projects/addToCart.jpg";
import weatherApp from "../assets/projects/weatherApp.jpg";
import chromeExtension from "../assets/projects/chromeExtension.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Expense Tracker",
      src: expenseTracker,
      demoLink: "https://adarshpraman.github.io/Expense_Tracker/",
      codeLink: "https://github.com/adarshpraman/Expense_Tracker",
    },
    {
      id: 2,
      name: "QR Scanner",
      src: qrScanner,
      demoLink: "https://adarshpraman.github.io/QR_Scanner/",
      codeLink: "https://github.com/adarshpraman/QR_Scanner",
    },
    {
      id: 3,
      name: "Calculator",
      src: calculator,
      demoLink: "https://adarshpraman.github.io/react-calculator/",
      codeLink: "https://github.com/adarshpraman/react-calculator",
    },
    {
      id: 4,
      name: "Add to Cart",
      src: addToCart,
      demoLink: "https://adarshpraman.github.io/add-to-cart/",
      codeLink: "https://github.com/adarshpraman/add-to-cart",
    },
    {
      id: 5,
      name: "Weather App",
      src: weatherApp,
      demoLink: "https://adarshpraman.github.io/Weather-App/",
      codeLink: "https://github.com/adarshpraman/Weather-App",
    },
    {
      id: 6,
      name: "Chrome Extension",
      src: chromeExtension,
      demoLink: "https://adarshpraman.github.io/Chrome_Extension/",
      codeLink: "https://github.com/adarshpraman/Chrome_Extension",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Featured Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, name, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden relative"
              onMouseEnter={() => setHoveredProject(id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 w-full">
                <img
                  src={src}
                  alt={name}
                  className="h-full w-full object-cover rounded-md duration-200 hover:scale-105"
                />
              </div>

              <div className="relative bottom-0 w-full bg-black text-white text-center py-5">
                {hoveredProject === id ? (
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => handleDemoClick(demoLink)}
                      className="w-1/2 px-6 duration-200 hover:scale-105"
                    >
                      Demo
                    </button>
                    <button
                      onClick={() => handleCodeClick(codeLink)}
                      className="w-1/2 px-6 duration-200 hover:scale-105"
                    >
                      Code
                    </button>
                  </div>
                ) : (
                  name
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
