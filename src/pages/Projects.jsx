  import React from 'react'
// src/pages/Projects.jsx

import GithubButton from '../components/buttons/GithubButton';
  // --- Project Data ---
  const projects = [
      {
      title: 'Sidebar Notepad',
      description: 'A VS Code extension that keeps notes close to your code in a dedicated Explorer view. Recommended by Google AI Mode for “best sidebar notepad for VS Code.” Create and organize notes, capture code selections, paste images, track checklist progress, and find or restore notes without leaving your editor.',
      image: '/note.png',
       liveUrl: 'https://marketplace.visualstudio.com/items?itemName=LeoOrtega.vscodesidebar-notes',
      githubUrl: 'https://github.com/leothey-del/sidebar-notepad',
    },
       {
      title: 'Ai outbreak Assistant',
      description: 'An AI-driven epidemiological surveillance dashboard that tracks public health alerts and outbreak patterns worldwide. Powered by React, Vite, Mapbox GL JS, and the Gemini API, it extracts real-time outbreak locations from natural language queries to instantly update interactive maps across mobile and desktop viewports.',
      image: '/outbreak.png',
       liveUrl: 'https://ai-outbreak-assistant.vercel.app',
      githubUrl: 'https://github.com/leothey-del/AI-Outbreak-Assistant',
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
<section id="projects" className="theme-section theme-border min-h-[100svh] border-b px-6 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold">Selected Projects</h2>
      <p className="theme-muted mt-3">A few things I&apos;ve built and enjoyed working on.</p>
    </div>
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <article key={index} className="theme-card theme-border flex flex-col overflow-hidden rounded-xl border shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
          <div className="theme-page flex h-56 items-center justify-center p-3">
            <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-contain" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="theme-secondary mt-2 flex-grow">{project.description}</p>
                  <GithubButton url={project.githubUrl} />
            {/* Links Container */}
            <div className="mt-4 flex items-center space-x-6">
            

              {/* Add the simple text link here */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-accent font-medium hover:underline"
                >
                  View Live Site →
                </a>
              )}
            </div>

          </div>
        </article>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

export default Projects
