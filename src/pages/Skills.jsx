import React from 'react'

const Skills = () => {
  return (
    <div>
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

             <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Video Editing & Animation
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block py-2 px-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-md font-medium transition-all duration-200 hover:bg-gray-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg">Adobe Premiere Pro</span>
              
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Skills
