import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
 import JAVASCRIPT from "../assets/javascript.png";
 import REACT from "../assets/react.png";
 import NODE from "../assets/nodejs.png";
import WORDPRESS from "../assets/wordpress.png";
 import MONGO from "../assets/mongodb.png";
 import PG from "../assets/postgre.png";
 import SUPABASE from "../assets/supabase.png";

const skill_logos = [
  { name: "HTML", img: HTML },
 { name: "CSS", img: CSS },
 { name: "JAVASCRIPT", img: JAVASCRIPT },
 { name: "REACT", img: REACT },
 { name: "WORDPRESS", img: WORDPRESS },
 { name: "MONGO DB", img: MONGO },
 { name: "POSTGRES", img: PG },
{ name: "SUPABASE", img: SUPABASE },
{ name: "NODE JS", img: NODE },

];

const Skills = () => {
  return (
    <section
      id="skills"
      className="theme-page theme-border relative min-h-[100svh] w-full overflow-hidden border-b px-6 py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">
              Tools of the trade
            </p>
            <h2 className="theme-primary mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Skills &amp; technologies
            </h2>
            <p className="theme-muted mt-3 max-w-xl leading-relaxed">
              A toolkit for shaping ideas into responsive, full-stack experiences.
            </p>
          </div>
          <span className="theme-border theme-secondary inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Always learning
          </span>
        </div>

        <div className="theme-border mt-10 rounded-3xl border p-5 sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="theme-muted text-xs font-semibold uppercase tracking-[0.18em]">
              My toolkit
            </p>
            <span className="theme-muted font-mono text-xs">09 technologies</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skill_logos.map(({ name, img }, index) => {
            return (
              <div
                key={name}
                className="theme-card theme-border group relative overflow-hidden rounded-2xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="theme-muted absolute right-3 top-3 font-mono text-[10px] opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="theme-page flex h-16 w-16 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105">
                  <img className="h-10 w-10 object-contain" src={img} alt={`${name} logo`} />
                </span>
                <p className="theme-primary mt-4 text-sm font-semibold">{name}</p>
                <span className="mt-3 block h-1 w-8 rounded-full bg-blue-500/50 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500" />
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;