import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] py-20 px-6 flex items-center justify-center min-h-[80vh]"
    >
      <div className="max-w-4xl w-full mx-auto text-center rounded-xl shadow-2xl bg-white/5 backdrop-blur-md p-10 border border-white/10">
        <h2 className="text-4xl font-bold text-blue-300 mb-4 tracking-tight">About Me</h2>
        <p className="mt-2 text-lg text-gray-200">
          I’m passionate about building scalable, responsive web applications with modern technologies like <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Tailwind CSS</span>, and <span className="text-blue-400 font-semibold">Node.js</span>.
          <br />
          My portfolio highlights projects such as a full-stack task management app, showcasing my ability to deliver seamless user experiences from concept to deployment.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="bg-[#16213e] p-6 rounded-lg shadow hover:shadow-blue-400/30 transition">
            <h3 className="text-xl font-semibold text-blue-200">Clean Code</h3>
            <p className="mt-2 text-sm text-gray-400">Readable, maintainable, and well-documented code for long-term success.</p>
          </div>
          <div className="bg-[#16213e] p-6 rounded-lg shadow hover:shadow-blue-400/30 transition">
            <h3 className="text-xl font-semibold text-blue-200">Responsive Design</h3>
            <p className="mt-2 text-sm text-gray-400">Pixel-perfect layouts that look great on any device.</p>
          </div>
          <div className="bg-[#16213e] p-6 rounded-lg shadow hover:shadow-blue-400/30 transition">
            <h3 className="text-xl font-semibold text-blue-200">User Experience</h3>
            <p className="mt-2 text-sm text-gray-400">Designs that prioritize usability, accessibility, and delight.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About