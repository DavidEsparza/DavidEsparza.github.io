import Chatter from "./Chatter";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function MainContent() {
  return (
    <div className="main-content">
      <Home />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Education />
      <div className="section">
        <Chatter />
      </div>
      <Contact />
    </div>
  );
}

export default MainContent;
