import { useTranslation } from "react-i18next";
import { useState } from "react";
import notesOpenImg from "../../assets/notes_open.png";
import notesClosedImg from "../../assets/notes_closed.png";
import doodle1 from "../../assets/doodle1.png";
import doodle2 from "../../assets/doodle2.png";
import doodle3 from "../../assets/doodle3.png";
import doodle4 from "../../assets/doodle4.png";
import doodle5 from "../../assets/doodle5.png";
import doodle6 from "../../assets/doodle6.png";
import doodle7 from "../../assets/doodle7.png";
import doodle8 from "../../assets/doodle8.png";

const notes = { open: notesOpenImg, closed: notesClosedImg };
const doodles = [doodle1, doodle2, doodle3, doodle4, doodle5, doodle6, doodle7, doodle8];

function Skills() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentDoodle, setCurrentDoodle] = useState(null);

  const handleNoteClick = () => {
    if (currentDoodle === null) {
      setCurrentDoodle(0);
    } else {
      setCurrentDoodle((prev) => (prev + 1) % doodles.length);
    }
  };

  return (
    <div className="section skills-section">
      <div className="skills-card">
        <h2>{t("skills.title")}</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>{t("skills.dataScience.title")}</h3>
            <p>{t("skills.dataScience.items")}</p>
          </div>
          <div className="skill-category">
            <h3>{t("skills.backEnd.title")}</h3>
            <p>{t("skills.backEnd.items")}</p>
          </div>
          <div className="skill-category">
            <h3>{t("skills.visualization.title")}</h3>
            <p>{t("skills.visualization.items")}</p>
          </div>
          <div className="skill-category">
            <h3>{t("skills.cloud.title")}</h3>
            <p>{t("skills.cloud.items")}</p>
          </div>
          <div className="skill-category">
            <h3>{t("skills.languages.title")}</h3>
            <p>{t("skills.languages.items")}</p>
          </div>
        </div>
      </div>

      <div className="fast-link-list">
        <div className="notes-container">
          <img 
            src={isHovered ? notes.open : notes.closed} 
            alt="Notes" 
            className="notes-image"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleNoteClick}
          />
          {currentDoodle !== null && (
            <img 
              src={doodles[currentDoodle]} 
              alt={`Doodle ${currentDoodle + 1}`} 
              className="doodle-image"
            />
          )}
        </div>
        <p className="click-me-text">{t("skills.clickMe")}</p>
      </div>
    </div>
  );
}

export default Skills;
