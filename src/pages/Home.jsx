import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I'm <span className="text-blue-400">Leo Ortega</span>.<br />
            <span className="text-lg md:text-2xl font-medium text-blue-200 block mt-2">Web Developer & Designer.</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-300 text-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Crafting beautiful and functional web experiences with passion and precision.
          </motion.p>
          <motion.div
            className="mt-6 flex space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-500 transition font-semibold text-white text-lg"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border-2 border-blue-400 rounded-lg hover:bg-blue-800/40 transition font-semibold text-blue-300 text-lg backdrop-blur-md"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/30 via-cyan-400/20 to-blue-900/10 rounded-full blur-2xl z-0"></div>
            <img
              src="/profile.png"
              alt="Profile"
              className="relative rounded-full shadow-2xl w-64 h-64 object-cover border-4 border-blue-500 z-10"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;