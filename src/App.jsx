import { useState } from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Web Ninja</Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              {[
                { path: '/', name: 'home' },
                { path: '/about', name: 'about' },
                { path: '/projects', name: 'projects' },
                { path: '/skills', name: 'skills' },
                { path: '/contact', name: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="capitalize hover:text-blue-400 transition"
                  >
                    {item.name}
                  </Link>
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
                {[
                  { path: '/', name: 'home' },
                  { path: '/about', name: 'about' },
                  { path: '/projects', name: 'projects' },
                  { path: '/skills', name: 'skills' },
                  { path: '/contact', name: 'contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block capitalize hover:text-blue-400 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        

        {/* Main Content */}
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
  
  );
}