// TODO: Re-enable Chatter component after implementing:
// - Proper API key handling and security
// - Human verification/CAPTCHA to prevent excessive API requests
// - Rate limiting on the backend
// import Chatter from "./Chatter";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

function MainContent() {
  return (
    <div className="main-content">
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />

      {/* TODO: Re-enable after security improvements */}
      {/* <Chatter /> */}

    </div>
  );
}

export default MainContent;
