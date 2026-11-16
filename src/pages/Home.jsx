import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaCode, FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import WindMap from '../components/WindMap';

const Home = ({ theme, githubBatKey, onGithubBatArrive }) => {
  const githubLinkRef = useRef(null);
  const [githubBat, setGithubBat] = useState(null);
  const [githubIconGone, setGithubIconGone] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      setGithubBat(null);
      setGithubIconGone(false);
      return;
    }

    if (!githubBatKey || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const githubIcon = githubLinkRef.current?.querySelector('svg');
    if (!githubIcon) return;

    const { left, top, width, height } = githubIcon.getBoundingClientRect();
    setGithubBat({
      x: left + (width - 24) / 2,
      y: top + (height - 24) / 2,
      phase: 'transforming',
    });
    setGithubIconGone(true);
  }, [githubBatKey, theme]);

  return (
    <section id="home" className="flex min-h-[100svh] items-center px-6 pb-20 pt-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-14 md:flex-row">
        <div className="max-w-2xl flex-1">
          <p className="theme-accent text-sm font-semibold tracking-[0.2em] uppercase">
            Web developer · React · Node.js
          </p>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m{' '}
            <span className="theme-accent inline-flex items-center gap-2">
              Leo Ortega
            </span>
            <span className="theme-primary mt-2 block">I build useful things for the web.</span>
          </h1>
          <p className="theme-secondary mt-6 max-w-2xl text-lg leading-relaxed">
            I create responsive web applications and developer tools, from thoughtful interfaces to full-stack features.
            Take a look at what I&apos;ve been working on.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 cursor-pointer"
            >
              Explore my projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="theme-button-secondary rounded-lg border px-6 py-3 font-medium transition cursor-pointer"
            >
              Get in touch
            </ScrollLink>
            <a
              ref={githubLinkRef}
              href="https://github.com/leothey-del"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leo Ortega on GitHub"
              className="home-github-link theme-secondary theme-hover inline-flex items-center gap-2 rounded-lg px-3 py-3 transition"
            >
              <FaGithub
                aria-hidden="true"
                className={`home-github-icon${githubIconGone ? ' is-hidden' : ''}`}
                size={20}
              />
              GitHub
            </a>
            {githubBat && (
              <span
                aria-hidden="true"
                style={{
                  '--github-bat-x': `${githubBat.x}px`,
                  '--github-bat-y': `${githubBat.y}px`,
                  '--github-bat-target-x': `${githubBat.targetX}px`,
                  '--github-bat-target-y': `${githubBat.targetY}px`,
                }}
                className={`github-bat-replacement is-${githubBat.phase}`}
                onAnimationEnd={(event) => {
                  if (
                    githubBat.phase === 'transforming'
                    && event.animationName === 'github-bat-frames'
                  ) {
                    const tree = document.querySelector('.navbar-tree-container');
                    if (!tree) {
                      console.error('Navbar tree target could not be found for the bat flight.');
                      setGithubBat(null);
                      return;
                    }

                    const treeBounds = tree.getBoundingClientRect();
                    setGithubBat((bat) => (
                      bat
                        ? {
                          ...bat,
                          phase: 'flying',
                          targetX: treeBounds.left + 40,
                          targetY: treeBounds.top + 42,
                        }
                        : bat
                    ));
                  } else if (
                    githubBat.phase === 'flying'
                    && event.animationName === 'github-bat-fly-across'
                  ) {
                    setGithubBat(null);
                    onGithubBatArrive();
                  }
                }}
              />
            )}
          </div>
        </div>
        <div className="relative w-full max-w-sm shrink-0 md:w-[38%]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/10 blur-2xl"
          />
          <div className="theme-card theme-border relative rounded-3xl border p-4 shadow-2xl">
            <div className="overflow-hidden rounded-2xl bg-slate-950 text-sm text-slate-100">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-400">global-winds.map</span>
              </div>
              <div className="h-56 sm:h-64">
                <WindMap />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <p className="theme-muted text-xs">Working with</p>
                <p className="theme-primary mt-1 text-sm font-medium">React · Node.js · PostgreSQL</p>
              </div>
              <span className="theme-accent rounded-full bg-blue-500/10 p-3" aria-hidden="true">
                <FaCode size={18} />
              </span>
            </div>
          </div>
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="theme-card theme-border theme-hover relative ml-auto mt-4 flex w-[min(19rem,100%)] cursor-pointer items-center gap-3 rounded-2xl border p-3 shadow-xl transition hover:-translate-y-1"
          >
            <img
              src="/note.png"
              alt=""
              aria-hidden="true"
              className="h-14 w-16 rounded-lg object-cover"
            />
            <span className="min-w-0 flex-1">
              <span className="theme-muted block text-xs">Featured project</span>
              <span className="theme-primary mt-1 block truncate text-sm font-semibold">
                Sidebar Notepad
              </span>
            </span>
            <FaArrowRight className="theme-accent shrink-0" aria-hidden="true" size={14} />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Home;