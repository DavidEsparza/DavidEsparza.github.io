import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h2>{t("projects.title")}</h2>
      <div className="project-item">
        <h3>{t("projects.project1.title")}</h3>
        <p>{t("projects.project1.description")}</p>
      </div>
      <div className="project-item">
        <h3>{t("projects.project2.title")}</h3>
        <p>{t("projects.project2.description")}</p>
      </div>
      <div className="project-item">
        <h3>{t("projects.project3.title")}</h3>
        <p>{t("projects.project3.description")}</p>
      </div>
    </div>
  );
}

export default Projects;
