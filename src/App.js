import "./App.css";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TopNavbar from "./components/TopNavbar";
import MainContent from "./components/MainContent";
import Eye from "./components/Eye";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const { t, i18n } = useTranslation();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Update page title based on language
  useEffect(() => {
    document.title = t('navbar.title');
  }, [i18n.language, t]);

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      };

      updateSize();
      window.addEventListener("resize", updateSize);

      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const updateDisplay = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="App">
      <TopNavbar />

      <div
        ref={containerRef}
        className="app-container"
        onMouseMove={updateDisplay}
        onMouseEnter={updateDisplay}
        onMouseLeave={updateDisplay}
      >
        <div className="particles-background">
          <ParticlesBackground />
        </div>
        <MainContent />
        <Eye
          x={coordinates.x}
          y={coordinates.y}
          width={containerSize.width}
          height={containerSize.height}
        />
      </div>
    </div>
  );
}

export default App;
