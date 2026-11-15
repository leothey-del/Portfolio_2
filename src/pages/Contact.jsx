import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isPlaneFlying, setIsPlaneFlying] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please try another way to get in touch.',
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const plane = submitButton?.querySelector('.send-plane');

    if (submitButton && plane) {
      const buttonBounds = submitButton.getBoundingClientRect();
      const navbarToggle = document.querySelector('.theme-toggle');
      const targetBounds = navbarToggle?.getBoundingClientRect();
      const startX = buttonBounds.left + buttonBounds.width / 2 - 11;
      const startY = buttonBounds.top + buttonBounds.height / 2 - 11;
      const targetX = targetBounds
        ? targetBounds.left + targetBounds.width / 2 - 11
        : window.innerWidth - 32;
      const targetY = targetBounds
        ? targetBounds.top + targetBounds.height / 2 - 11
        : 16;

      plane.style.setProperty('--plane-start-x', `${startX}px`);
      plane.style.setProperty('--plane-start-y', `${startY}px`);
      plane.style.setProperty('--plane-end-x', `${targetX}px`);
      plane.style.setProperty('--plane-end-y', `${targetY}px`);
    }

    setIsSending(true);
    setIsPlaneFlying(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          message: formData.get('message'),
        },
        { publicKey },
      );

      form.reset();
      setStatus({
        type: 'success',
        message: 'Your message was sent successfully. Thanks for getting in touch!',
      });
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      const errorDetails = typeof error?.text === 'string' ? error.text : '';
      setStatus({
        type: 'error',
        message: errorDetails
          ? `Your message could not be sent: ${errorDetails}`
          : 'Your message could not be sent. Please try again later.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="theme-page min-h-[100svh] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <p className="theme-muted mt-3 text-center">
          Have a project in mind or want to say hello? Send me a message.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <label className="sr-only" htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              required
              maxLength={100}
              className="theme-input rounded px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
            <label className="sr-only" htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              maxLength={254}
              className="theme-input rounded px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <label className="sr-only" htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            maxLength={5000}
            className="theme-input w-full rounded px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
          />
          <div aria-live="polite" className="text-center">
            {status.message && (
              <p
                className={`font-semibold ${status.type === 'success' ? 'theme-success' : 'theme-error'}`}
              >
                {status.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSending}
              className={`send-button relative rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 ${isPlaneFlying ? 'is-plane-flying' : ''}`}
            >
              <span>{isSending ? 'Sending...' : 'Send Message'}</span>
              <svg
                className="send-plane"
                viewBox="0 0 24 24"
                aria-hidden="true"
                onAnimationEnd={() => setIsPlaneFlying(false)}
              >
                <path d="M22 2 15 22l-4-9-9-4 20-7ZM22 2 11 13" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
