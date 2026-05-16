import Chatter from "./Chatter";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function MainContent() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Education />

      <Chatter />

      <Contact />
    </div>
  );
}

export default MainContent;
