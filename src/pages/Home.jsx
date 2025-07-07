import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-400">Leo Ortega</span>.<br />
            Web Developer & Designer.
          </h2>
          <p className="mt-4 text-gray-300">
            Crafting beautiful and functional web experiences with passion and precision.
          </p>
          <div className="mt-6 flex space-x-4 justify-center md:justify-start w-full">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              View My Work
            </ScrollLink>
          </div>
        </div>
        {/* Removed profile image for a consistent look */}
      </section>
    </div>
  );
};

export default Home;