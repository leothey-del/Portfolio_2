import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-400">Leo Ortega</span>.<br />
            Web Developer & Designer.
          </h2>
          <p className="mt-4 text-gray-300">
            Crafting beautiful and functional web experiences with passion and precision.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Hire Me
            </Link>
            <Link 
              to="/projects" 
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
            >
              View My Work
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/profile.png "
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-blue-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;