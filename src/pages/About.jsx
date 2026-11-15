import { FaArrowRight, FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <section
      id="about"
      className="theme-section theme-border min-h-[100svh] border-y px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">
              A bit about me
            </p>
            <h2 className="theme-primary mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Curious by nature.
              <span className="theme-accent-soft mt-1 block">Builder by habit.</span>
            </h2>
            <p className="theme-secondary mt-6 text-lg leading-relaxed">
              I enjoy turning ideas into responsive web applications that are
              useful, clear, and a pleasure to use. I work with tools like{' '}
              <span className="theme-accent font-semibold">React</span>,{' '}
              <span className="theme-accent font-semibold">Tailwind CSS</span>,
              and <span className="theme-accent font-semibold">Node.js</span>,
              building from the first interaction through to the details that
              make an experience feel complete.
            </p>
            <a
              href="#projects"
              className="theme-accent theme-hover mt-6 inline-flex items-center gap-2 font-semibold transition"
            >
              See what I&apos;ve been building
              <FaArrowRight aria-hidden="true" size={14} />
            </a>
          </div>

          <div className="theme-card theme-border relative overflow-hidden rounded-2xl border p-7 shadow-xl sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl"
            />
            <div className="relative">
              <span className="theme-accent inline-flex rounded-xl bg-blue-500/10 p-3">
                <FaCode aria-hidden="true" size={20} />
              </span>
              <h3 className="theme-primary mt-5 text-2xl font-semibold">
                From idea to experience
              </h3>
              <p className="theme-muted mt-2">
                Thoughtful work at every step of the build.
              </p>
              <div className="theme-border mt-6 space-y-0 border-t">
                {[
                  ['01', 'Start with the problem'],
                  ['02', 'Build for real people'],
                  ['03', 'Polish the details'],
                ].map(([number, step]) => (
                  <div
                    key={number}
                    className="theme-border flex items-center gap-4 border-b py-4"
                  >
                    <span className="theme-accent font-mono text-sm">{number}</span>
                    <span className="theme-primary font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ['Clean Code', 'Readable, maintainable, and easy to build on.'],
            ['Responsive Design', 'Interfaces that feel right on any screen.'],
            ['User Experience', 'Thoughtful details that make things easier to use.'],
          ].map(([title, description]) => (
            <div
              key={title}
              className="theme-card-alt theme-border rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="theme-accent-soft text-lg font-semibold">{title}</h3>
              <p className="theme-muted mt-2 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About