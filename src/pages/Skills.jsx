import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  const skillBars = [
    { name: 'HTML5', level: 95, color: 'bg-orange-500' },
    { name: 'CSS3', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript (ES6+)', level: 90, color: 'bg-yellow-400' },
    { name: 'React', level: 92, color: 'bg-cyan-400' },
    { name: 'Tailwind CSS', level: 88, color: 'bg-blue-300' },
    { name: 'Responsive Design', level: 85, color: 'bg-green-400' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'Express.js', level: 78, color: 'bg-gray-400' },
    { name: 'PostgreSQL', level: 75, color: 'bg-indigo-400' },
    { name: 'MySQL', level: 70, color: 'bg-blue-700' },
    { name: 'MongoDB', level: 70, color: 'bg-green-700' },
    { name: 'REST APIs', level: 80, color: 'bg-pink-400' },
  ];

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
              <div className="flex flex-col gap-4 items-center">
                {skillBars.slice(0, 6).map(skill => (
                  <div key={skill.name} className="w-full max-w-md text-left">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="font-medium text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <motion.div
                        className={`h-4 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Backend & Databases</h3>
              <div className="flex flex-col gap-4 items-center">
                {skillBars.slice(6, 12).map(skill => (
                  <div key={skill.name} className="w-full max-w-md text-left">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="font-medium text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <motion.div
                        className={`h-4 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
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
