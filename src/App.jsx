import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  });
  const [githubBatKey, setGithubBatKey] = useState(0);
  const [githubBatLanded, setGithubBatLanded] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setGithubBatLanded(false);
    if (theme === "dark") {
      setGithubBatKey((key) => key + 1);
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-page min-h-screen">
      <Navbar
        theme={theme}
        onToggleTheme={handleThemeToggle}
        githubBatLanded={githubBatLanded}
      />
      <main>
        <Home
          theme={theme}
          githubBatKey={githubBatKey}
          onGithubBatArrive={() => setGithubBatLanded(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;