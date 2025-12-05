import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar
        onNavigate={() => setSelectedProject(null)}
        isProjectDetailsOpen={!!selectedProject}
      />
      {selectedProject ? (
        <ProjectDetails
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects onProjectClick={setSelectedProject} />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
