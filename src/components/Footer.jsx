import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="theme-section theme-border border-t px-6 py-8">
    <div className="theme-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
      <p>&copy; {new Date().getFullYear()} Leo Ortega. Built with care.</p>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/leothey-del"
          target="_blank"
          rel="noopener noreferrer"
          className="theme-hover inline-flex items-center gap-2 transition"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        <a href="#home" className="theme-hover transition">
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
