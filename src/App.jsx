import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;