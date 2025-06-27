import React from 'react'
// src/pages/Projects.jsx
import { motion } from 'framer-motion';

import GithubButton from '../components/buttons/GithubButton';
  // --- Project Data ---
  const projects = [
    {
      title: ' Microservices API Gateway for a Social App',
      description: 'A full-stack social media application built with a scalable backend using a microservices architecture. The system features a dedicated API Gateway in Node.js that routes requests to independent services for user authentication and post management, demonstrating a modern, decoupled approach to web application design.',
      image: '/social.png',
      githubUrl: 'https://github.com/leothey-del/EcommerceWeb',
    },
    {
      title: 'E-commerce Dashboard',
      description: 'A full-stack e-commerce admin panel built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS. Powered by Vite for a fast and modern development experience.',
      image: '/ecommerce.png',
      githubUrl: 'https://github.com/leothey-del/EcommerceWeb',
    },
    {
      title: 'Expense Tracker Website',
      description: 'A responsive expense tracking application built with React, utilizing a Supabase backend with a PostgreSQL database. Deployed seamlessly on Vercel.',
      image: '/capture.png',
      liveUrl: 'https://tracker-ex.vercel.app/',
      githubUrl: 'https://github.com/leothey-del/ExpenseTracker',
    },
    {
      title: 'Livestock Management System',
      description: 'A comprehensive system for managing livestock records, including tracking, health monitoring, and data visualization with maps.',
      image: '/map.png',
      githubUrl: 'https://github.com/leothey-del/LivestockMapping',
    },
  ];
  
const Projects = () => {


  return (
    <div>
       {/* Projects Section */}
<section id="projects" className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center">My Projects</h2>
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition flex flex-col backdrop-blur-lg bg-opacity-60 border border-gray-700"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          style={{ background: 'rgba(36, 41, 46, 0.7)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-300 flex-grow">{project.description}</p>
                  <GithubButton url={project.githubUrl} />
            {/* Links Container */}
            <div className="mt-4 flex items-center space-x-6">
              {/* Add the simple text link here */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:underline"
                >
                  View Live Site →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

export default Projects
