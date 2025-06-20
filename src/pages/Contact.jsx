import React from 'react'
import toast from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Contact page is currently in progress.');
  };

  return (
    <div>
        {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Contact
