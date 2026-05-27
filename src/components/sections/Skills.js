import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

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
        <div className="fast-link">
          <p>a</p>
        </div>
        <div className="fast-link">
          <p>a</p>
        </div>
        <div className="fast-link">
          <p>a</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
