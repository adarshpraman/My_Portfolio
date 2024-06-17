import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href =
      "mailto:adarshpraman@gmail.com?subject=" +
      formData.subject +
      "&body=" +
      formData.message;
  };

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white p-20 lg:pt-40 pt-24"
    >
      <div className="flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="md:w-1/2 flex flex-col items-center text-center md:text-left mb-8 md:mb-0 md:pr-8">
            <h2 className="text-5xl font-bold inline border-gray-500 mb-16">
              Let's Connect!
            </h2>
            <div className="text-lg mb-4 lg:mr-10">
              <p className="font-semibold">Email:</p>
              <p className="mb-6">
                <a
                  href="mailto:adarshpraman@gmail.com"
                  className="text-white no-underline hover:no-underline hover:text-gray-400"
                >
                  adarshpraman@gmail.com
                </a>
              </p>
              <p className="font-semibold">Address:</p>
              <p className="mb-6">Giridih, Jharkhand</p>
              <p className="font-semibold">Contact Number:</p>
              <p className="mb-6">
                <a href="tel:+918210012360" className="hover:text-gray-400">
                  +91 8210XXXXXX
                </a>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col w-full ">
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto md:mx-0 flex items-center justify-center rounded-md hover:scale-105 duration-300"
              >
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
