import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground variant="dots" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects /> {/* This already includes its own ParticleBackground */}
      <Contact />
    </div>
  );
}

export default App;