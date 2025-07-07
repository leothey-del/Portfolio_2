import React from 'react'

const About = () => {
  return (
    <div>
         {/* About Section */}
      <section id="about" className="py-16 px-6 ">
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

    </div>
  )
}

export default About
