import { useState } from 'react';


import GithubButton from './components/buttons/GithubButton';



export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // --- Project Data ---
  const projects = [
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

  const skills = ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'GraphQL', 'Figma'];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Web Ninja</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setActiveSection(item)}
                  className={`capitalize hover:text-blue-400 transition ${
                    activeSection === item ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg p-6 animate-fadeIn">
            <ul className="space-y-4 text-center">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      setActiveSection(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`block capitalize hover:text-blue-400 transition ${
                      activeSection === item ? 'text-blue-400' : ''
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

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
            <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
              View My Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://placehold.co/400x400/1f2937/e5e7eb?text=Profile "
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-blue-500"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800 rounded-t-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
         <p className="mt-4 text-gray-300">
  Passionate about front-end and back-end development, I build scalable, responsive web applications using React, Tailwind CSS, and Node.js. My portfolio showcases projects like a full-stack task management app, demonstrating my ability to create seamless web experiences. 
</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <p className="mt-2 text-sm text-gray-400">Readable, maintainable, and well-documented code.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Responsive Design</h3>
              <p className="mt-2 text-sm text-gray-400">Pixel-perfect layouts across all devices.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">User Experience</h3>
              <p className="mt-2 text-sm text-gray-400">Designs that prioritize usability and accessibility.</p>
            </div>
          </div>
        </div>
      </section>

  {/* Projects Section */}
<section id="projects" className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center">My Projects</h2>
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition flex flex-col">
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
        </div>
      ))}
    </div>
  </div>
</section>

 
      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="mt-4 text-gray-400">A look at the technologies, languages, and tools I work with.</p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Frontend Development</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">HTML5</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">CSS3</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">JavaScript (ES6+)</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">React</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Tailwind CSS</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Responsive Design</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Backend & Databases</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Node.js</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Express.js</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">PostgreSQL</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">MySQL</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">MongoDB</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">REST APIs</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Networking & Cybersecurity</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Network Security</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Cybersecurity Principles</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">TCP/IP</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Firewalls</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">IT & Hardware Support</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">PC Troubleshooting</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Mobile Troubleshooting</span>
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">System Diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
          <form className="mt-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="bg-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="bg-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-800 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 John Doe. All rights reserved.</p>
      </footer>

      {/* Custom Animation for Mobile Menu */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
